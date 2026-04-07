"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.POST = void 0;
var server_1 = require("next/server");
var db_1 = require("@/utils/db");
var supplierProfile_model_1 = require("@/models/supplierProfile.model");
var cloudinary_1 = require("@/utils/cloudinary");
var headers_1 = require("next/headers");
var auth_1 = require("@/utils/auth");
function POST(req) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cookieStore, token, decoded, formData, files, uploadedUrls, _loop_1, _i, files_1, file, updatedProfile, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 9, , 10]);
                    return [4 /*yield*/, db_1.dbConnect()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, headers_1.cookies()];
                case 2:
                    cookieStore = _b.sent();
                    token = (_a = cookieStore.get("token")) === null || _a === void 0 ? void 0 : _a.value;
                    if (!token) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: "Unauthorized" }, { status: 401 })];
                    }
                    decoded = auth_1.getAuthUser(token);
                    if (!(decoded === null || decoded === void 0 ? void 0 : decoded.userId)) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: "Invalid token" }, { status: 401 })];
                    }
                    return [4 /*yield*/, req.formData()];
                case 3:
                    formData = _b.sent();
                    files = formData.getAll("files");
                    if (!files || files.length === 0) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: "No files uploaded" }, { status: 400 })];
                    }
                    uploadedUrls = [];
                    _loop_1 = function (file) {
                        var bytes, buffer, uniqueFileName, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, file.arrayBuffer()];
                                case 1:
                                    bytes = _a.sent();
                                    buffer = Buffer.from(bytes);
                                    uniqueFileName = "doc_" + decoded.userId + "_" + Date.now() + "_" + Math.random();
                                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                                            cloudinary_1["default"].uploader
                                                .upload_stream({
                                                folder: "emara/docs",
                                                public_id: uniqueFileName,
                                                resource_type: "auto"
                                            }, function (error, result) {
                                                if (error)
                                                    reject(error);
                                                else
                                                    resolve(result);
                                            })
                                                .end(buffer);
                                        })];
                                case 2:
                                    result = _a.sent();
                                    uploadedUrls.push(result.secure_url);
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, files_1 = files;
                    _b.label = 4;
                case 4:
                    if (!(_i < files_1.length)) return [3 /*break*/, 7];
                    file = files_1[_i];
                    return [5 /*yield**/, _loop_1(file)];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 4];
                case 7: return [4 /*yield*/, supplierProfile_model_1.SupplierProfile.findOneAndUpdate({ user: decoded.userId }, {
                        $push: {
                            "compliance.documents": { $each: uploadedUrls }
                        }
                    }, { "new": true }).select("compliance.documents")];
                case 8:
                    updatedProfile = _b.sent();
                    return [2 /*return*/, server_1.NextResponse.json({
                            message: "Documents uploaded successfully",
                            documents: uploadedUrls,
                            profile: updatedProfile
                        })];
                case 9:
                    error_1 = _b.sent();
                    console.error("Docs upload error:", error_1);
                    return [2 /*return*/, server_1.NextResponse.json({ error: "Upload failed" }, { status: 500 })];
                case 10: return [2 /*return*/];
            }
        });
    });
}
exports.POST = POST;
