import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { verifyToken } from "@/utils/auth";


export async function POST(req: Request) {
  try {
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

    if (!decoded.impersonating) {
      return NextResponse.json(
        { error: "Not impersonating" },
        { status: 400 }
      );
    }

    const newToken = jwt.sign(
      {
        userId: decoded.userId, 
        role: "admin",
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    const res = NextResponse.json({ success: true });

    res.cookies.set("token", newToken, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res;
  } catch {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}