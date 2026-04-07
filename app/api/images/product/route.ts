import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import { SupplierProfile } from "@/models/supplierProfile.model";
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
    const uniqueFileName = `mainprd_${decoded.userId}_${Date.now()}`;
    const uploadResult: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "emara/main",
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

    const updatedProfile = await SupplierProfile.findOneAndUpdate(
      { user: decoded.userId },
      {
        "market.productImage": uploadResult.secure_url,
      },
      { new: true }
    ).select("market.productImage company.registeredName");

    return NextResponse.json({
      message: "Brand image updated",
      productImage: uploadResult.secure_url,
      profile: updatedProfile,
    });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}