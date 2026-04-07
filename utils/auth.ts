import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";

type Role = "admin" | "buyer" | "supplier";

interface JwtPayload {
  userId: string;
  role: "buyer" | "supplier" | "admin";
  impersonating?: {
    userId: string;
    role: "buyer" | "supplier";
  };
}

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
  } catch {
    return null;
  }
};

export const getAuthUser = (token: string) => {
  const decoded = verifyToken(token);

  if (!decoded) return null;

  if (decoded.impersonating) {
    return {
      userId: decoded.impersonating.userId,
      role: decoded.impersonating.role,
      isImpersonating: true,
      adminId: decoded.userId,
    };
  }

  return {
    userId: decoded.userId,
    role: decoded.role,
    isImpersonating: false,
  };
};

export const requireRole = (user: any, roles: string[]) => {
  if (!roles.includes(user.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return null;
};



export async function handleLogin(req: Request, allowedRole: Role) {
  const { email, password } = await req.json();

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  if (user.status !== "active") {
    return NextResponse.json({ error: "Account suspended" }, { status: 403 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Role enforcement
  if (user.role !== allowedRole) {
    return NextResponse.json(
      { error: `Access denied: ${allowedRole}s only` },
      { status: 403 }
    );
  }

  user.lastLogin = new Date();
  await user.save();
  const token = jwt.sign(
    { userId: user._id.toString(), role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  const res = NextResponse.json({
    user: {
      _id: user._id,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      role: user.role,
    },
  });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}