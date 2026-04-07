import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  fname: string;
  lname: string;
  email: string;
  password: string;
  role: "buyer" | "supplier" | "admin";
  image?: string;
  isVerified: boolean;
  status: "active" | "suspended";
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    fname: { type: String, required: true, trim: true },
    lname: { type: String, required: true, trim: true },

    email: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },

    role: {
      type: String,
      enum: ["buyer", "supplier", "admin"],
      required: true,
      default: "buyer",
    },

    image: {
      type: String,
      default: null,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["active", "suspended"],
      default: "active",
    },

    lastLogin: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);