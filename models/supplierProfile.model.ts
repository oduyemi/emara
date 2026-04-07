import mongoose, { Schema, Document, Types } from "mongoose";

export interface ISupplierProfile extends Document {
  user: Types.ObjectId;

  slug: string;

  company: {
    registeredName: string;
    tradingName?: string;
    registrationNumber?: string;
    yearEstablished?: number;
    website?: string;
    region?: string;
    country?: string;
    city?: string;
    address?: string;
  };

  products: {
    name: string;
    category?: string;
    grade?: string;
  }[];

  compliance: {
    certifications: {
      name: string;
      issuer?: string;
      year?: number;
    }[];
    documents: string[];
  };

  operations: {
    capacity?: string;
    leadTime?: string;
    workforce?: string;
    facility?: "ownedFactory" | "leasedFactory" | "cooperative" | "homeProduction";
    exportExperience?: "noExport" | "regionalExport" | "internationalExport";
    logistics?: boolean;
  };

  market: {
    logo?: string;
    productImage?: string;

    banking: {
      bankName?: string;
      accountName?: string;
      accountNumber?: string;
      supportsUSD?: boolean;
    };
  };

  subscription: {
    plan: "bronze" | "silver" | "gold";
    startedAt?: Date;
  };

  onboarding: {
    step: number;
    completed: boolean;
    completionPercent: number;
  };

  verification: {
    status: "pending" | "approved" | "rejected";
    tier: "bronze" | "silver" | "gold";
    reviewedAt?: Date;
  };

  createdAt: Date;
  updatedAt: Date;
}

const supplierProfileSchema = new Schema<ISupplierProfile>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    company: {
      registeredName: { type: String, required: true },
      tradingName: String,
      registrationNumber: String,
      yearEstablished: Number,
      website: String,
      region: String,
      country: String,
      city: String,
      address: String,
    },

    products: [
      {
        name: { type: String, required: true },
        category: String,
        grade: String,
      },
    ],

    compliance: {
      certifications: [
        {
          name: { type: String, required: true },
          issuer: String,
          year: Number,
        },
      ],
      documents: [{ type: String }],
    },

    operations: {
      capacity: String,
      leadTime: String,
      workforce: String,

      facility: {
        type: String,
        enum: ["ownedFactory", "leasedFactory", "cooperative", "homeProduction"],
      },

      exportExperience: {
        type: String,
        enum: ["noExport", "regionalExport", "internationalExport"],
      },

      logistics: Boolean,
    },

    market: {
      logo: String,
      productImage: String,

      banking: {
        bankName: String,
        accountName: String,
        accountNumber: {
          type: String,
          select: false, 
        },
        supportsUSD: Boolean,
      },
    },

    subscription: {
      plan: {
        type: String,
        enum: ["bronze", "silver", "gold"],
        default: "bronze",
      },
      startedAt: Date,
    },

    onboarding: {
      step: { type: Number, default: 1 },
      completed: { type: Boolean, default: false },
      completionPercent: { type: Number, default: 0 },
    },

    verification: {
      status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
      },
      tier: {
        type: String,
        enum: ["bronze", "silver", "gold"],
        default: "bronze",
      },
      reviewedAt: Date,
    },
  },
  { timestamps: true }
);

export const SupplierProfile =
  mongoose.models.SupplierProfile ||
  mongoose.model<ISupplierProfile>("SupplierProfile", supplierProfileSchema);