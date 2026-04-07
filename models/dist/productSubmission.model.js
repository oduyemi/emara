"use strict";
exports.__esModule = true;
exports.ProductSubmission = void 0;
var mongoose_1 = require("mongoose");
var productSubmissionSchema = new mongoose_1.Schema({
    supplier: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    },
    product: {
        name: { type: String, required: true },
        category: String,
        description: String,
        grade: String
    },
    quantity: {
        amount: { type: Number, required: true },
        unit: {
            type: String,
            "enum": ["kg", "tons", "litres"],
            required: true
        }
    },
    images: {
        type: [String],
        validate: {
            validator: function (arr) { return arr.length >= 2; },
            message: "At least 2 images required"
        }
    },
    certifications: [
        {
            name: { type: String, required: true },
            issuer: String,
            document: String
        },
    ],
    pricing: {
        pricePerUnit: Number,
        currency: String,
        minOrderQuantity: Number
    },
    logistics: {
        leadTime: String,
        availablePorts: [String]
    },
    status: {
        type: String,
        "enum": ["draft", "submitted", "under_review", "approved", "rejected"],
        "default": "draft",
        index: true
    },
    adminReview: {
        reviewedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
        comments: String,
        approvedAt: Date,
        rejectedAt: Date
    },
    isListed: {
        type: Boolean,
        "default": false,
        index: true
    }
}, { timestamps: true });
exports.ProductSubmission = mongoose_1["default"].models.ProductSubmission ||
    mongoose_1["default"].model("ProductSubmission", productSubmissionSchema);
