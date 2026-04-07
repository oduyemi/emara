import mongoose, { Schema, Document, Types } from "mongoose";

export interface IBuyerProfile extends Document {
  user: Types.ObjectId;
  companyName?: string;
  industry?: string;
  productInterests?: string[]; // e.g. "Cashew", "Cocoa", "Sesame"
  sourcingRegions?: string[];  // e.g. "West Africa"
  annualVolume?: string;
  certificationsRequired?: string[]; // e.g. "Organic", "ISO"
  createdAt: Date;
  updatedAt: Date;
}

const buyerProfileSchema = new Schema<IBuyerProfile>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    companyName: String,

    industry: {
      type: String,
      default: "Food & Agriculture",
    },

    productInterests: [{ type: String }],

    sourcingRegions: [{ type: String }],

    annualVolume: String,

    certificationsRequired: [{ type: String }],
  },
  { timestamps: true }
);

export const BuyerProfile =
  mongoose.models.BuyerProfile ||
  mongoose.model<IBuyerProfile>("BuyerProfile", buyerProfileSchema);