import mongoose, { Schema, Document, Types } from "mongoose";

export interface IProductSubmission extends Document {
  _id: Types.ObjectId;
  supplier: Types.ObjectId;
  product: {
    name: string;
    category?: string;
    description?: string;
    grade?: string;
  };
  quantity: {
    amount: number;
    unit: "kg" | "tons" | "litres";
  };
  images: string[];
  certifications?: {
    name: string;
    issuer?: string;
    document?: string;
  }[];

  pricing?: {
    pricePerUnit?: number;
    currency?: string;
    minOrderQuantity?: number;
  };

  logistics?: {
    leadTime?: string;
    availablePorts?: string[];
  };

  status: "draft" | "submitted" | "under_review" | "approved" | "rejected";

  adminReview?: {
    reviewedBy?: Types.ObjectId;
    comments?: string;
    approvedAt?: Date;
    rejectedAt?: Date;
  };
  isListed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSubmissionSchema = new Schema<IProductSubmission>(
    {
      supplier: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
      },
  
      product: {
        name: { type: String, required: true },
        category: String,
        description: String,
        grade: String,
      },
  
      quantity: {
        amount: { type: Number, required: true },
        unit: {
          type: String,
          enum: ["kg", "tons", "litres"],
          required: true,
        },
      },
  
      images: {
        type: [String],
        validate: {
          validator: (arr: string[]) => arr.length >= 2,
          message: "At least 2 images required",
        },
      },
  
      certifications: [
        {
          name: { type: String, required: true },
          issuer: String,
          document: String,
        },
      ],
  
      pricing: {
        pricePerUnit: Number,
        currency: String,
        minOrderQuantity: Number,
      },
  
      logistics: {
        leadTime: String,
        availablePorts: [String],
      },
  
      status: {
        type: String,
        enum: ["draft", "submitted", "under_review", "approved", "rejected"],
        default: "draft",
        index: true,
      },
  
      adminReview: {
        reviewedBy: { type: Schema.Types.ObjectId, ref: "User" },
        comments: String,
        approvedAt: Date,
        rejectedAt: Date,
      },
  
      isListed: {
        type: Boolean,
        default: false,
        index: true,
      },
    },
    { timestamps: true }
  );
  
  export const ProductSubmission =
    mongoose.models.ProductSubmission ||
    mongoose.model<IProductSubmission>("ProductSubmission", productSubmissionSchema);