import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/user.model";
import jwt from "jsonwebtoken";
import { verifyToken } from "@/utils/auth";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const cookie = req.headers.get("cookie") || "";
    const token = cookie.match(/token=([^;]+)/)?.[1];
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (decoded.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { userId } = await req.json();
    const target = await User.findById(userId);

    if (!target) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (target.role === "admin") {
      return NextResponse.json(
        { error: "Cannot impersonate admin" },
        { status: 400 }
      );
    }

    const newToken = jwt.sign(
      {
        userId: decoded.userId,
        role: "admin",
        impersonating: {
          userId: target._id.toString(),
          role: target.role,
        },
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    const res = NextResponse.json({ success: true });

    res.cookies.set("token", newToken, {
      httpOnly: true,
      path: "/",
    });

    return res;
  } catch (err) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}