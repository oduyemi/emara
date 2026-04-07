"use strict";
exports.__esModule = true;
exports.BuyerProfile = void 0;
var mongoose_1 = require("mongoose");
var buyerProfileSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    companyName: String,
    industry: {
        type: String,
        "default": "Food & Agriculture"
    },
    productInterests: [{ type: String }],
    sourcingRegions: [{ type: String }],
    annualVolume: String,
    certificationsRequired: [{ type: String }]
}, { timestamps: true });
exports.BuyerProfile = mongoose_1["default"].models.BuyerProfile ||
    mongoose_1["default"].model("BuyerProfile", buyerProfileSchema);
