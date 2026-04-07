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
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }

    const uploadedUrls: string[] = [];
    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uniqueFileName = `doc_${decoded.userId}_${Date.now()}_${Math.random()}`
      const result: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "emara/docs",
              public_id: uniqueFileName,
              resource_type: "auto", 
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(buffer);
      });

      uploadedUrls.push(result.secure_url);
    }

    const updatedProfile = await SupplierProfile.findOneAndUpdate(
      { user: decoded.userId },
      {
        $push: {
          "compliance.documents": { $each: uploadedUrls },
        },
      },
      { new: true }
    ).select("compliance.documents");

    return NextResponse.json({
      message: "Documents uploaded successfully",
      documents: uploadedUrls,
      profile: updatedProfile,
    });

  } catch (error) {
    console.error("Docs upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}