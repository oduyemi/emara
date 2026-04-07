import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/user.model";
import { getAuthUser } from "@/utils/auth";

export async function GET(req: Request) {
  await dbConnect();

  const cookie = req.headers.get("cookie") || "";
  const token = cookie.match(/token=([^;]+)/)?.[1];

  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = getAuthUser(token);

  if (user.role !== "buyer") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const buyer = await User.findById(user.userId).lean();

  return NextResponse.json({ buyer });
}