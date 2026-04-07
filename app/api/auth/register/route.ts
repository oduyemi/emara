import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/user.model";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { fname, lname, email, password, role } = await req.json();

    if (!fname || !lname || !email || !password) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email exists" }, { status: 400 });
    }

    const adminExists = await User.findOne({ role: "admin" });

    let isAdmin = false;
    const token = req.cookies.get("token")?.value;

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
        if (decoded.role === "admin") isAdmin = true;
      } catch {}
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // First admin
    if (!adminExists) {
      await User.create({
        fname,
        lname,
        email,
        password: hashedPassword,
        role: "admin",
      });

      return NextResponse.json({ message: "First admin created" }, { status: 201 });
    }

    // Admin creating users
    if (isAdmin) {
      await User.create({
        fname,
        lname,
        email,
        password: hashedPassword,
        role: role || "buyer",
      });

      return NextResponse.json({ success: true }, { status: 201 });
    }

    // Public registration (ONLY buyer or supplier)
    if (!["buyer", "supplier"].includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    await User.create({
      fname,
      lname,
      email,
      password: hashedPassword,
      role,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}