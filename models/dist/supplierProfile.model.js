"use strict";
exports.__esModule = true;
exports.SupplierProfile = void 0;
var mongoose_1 = require("mongoose");
var supplierProfileSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
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
        address: String
    },
    products: [
        {
            name: { type: String, required: true },
            category: String,
            grade: String
        },
    ],
    compliance: {
        certifications: [{ type: String }],
        documents: [{ type: String }]
    },
    operations: {
        capacity: String,
        leadTime: String,
        workforce: String,
        facility: {
            type: String,
            "enum": ["owned", "leased", "cooperative", "home"]
        },
        exportExperience: {
            type: String,
            "enum": ["none", "regional", "international"]
        },
        logistics: Boolean
    },
    market: {
        logo: String,
        productImage: String,
        banking: {
            bankName: String,
            accountName: String,
            accountNumber: {
                type: String,
                select: false
            },
            supportsUSD: Boolean
        }
    },
    subscription: {
        plan: {
            type: String,
            "enum": ["bronze", "silver", "gold"],
            "default": "bronze"
        },
        startedAt: Date
    },
    onboarding: {
        step: { type: Number, "default": 1 },
        completed: { type: Boolean, "default": false },
        completionPercent: { type: Number, "default": 0 }
    },
    verification: {
        status: {
            type: String,
            "enum": ["pending", "approved", "rejected"],
            "default": "pending"
        },
        tier: {
            type: String,
            "enum": ["bronze", "silver", "gold"],
            "default": "bronze"
        },
        reviewedAt: Date
    }
}, { timestamps: true });
exports.SupplierProfile = mongoose_1["default"].models.SupplierProfile ||
    mongoose_1["default"].model("SupplierProfile", supplierProfileSchema);
