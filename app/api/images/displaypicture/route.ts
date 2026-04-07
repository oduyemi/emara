import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/user.model";
import cloudinary from "@/utils/cloudinary";
import { cookies } from "next/headers";
import { getAuthUser } from "@/utils/auth";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = getAuthUser(token);
    if (!decoded?.userId) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uniqueFileName = `dp_${decoded.userId}_${Date.now()}`;
    const uploadResult: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "emara/dp",
            public_id: uniqueFileName,
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    const updatedUser = await User.findByIdAndUpdate(
      decoded.userId,
      { image: uploadResult.secure_url },
      { new: true }
    ).select("_id fname lname email image");

    return NextResponse.json({
      message: "Display picture updated",
      image: uploadResult.secure_url,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}