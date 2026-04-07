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
exports.handleLogin = exports.requireRole = exports.getAuthUser = exports.verifyToken = void 0;
var server_1 = require("next/server");
var jsonwebtoken_1 = require("jsonwebtoken");
var user_model_1 = require("@/models/user.model");
var bcryptjs_1 = require("bcryptjs");
exports.verifyToken = function (token) {
    try {
        return jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET);
    }
    catch (_a) {
        return null;
    }
};
exports.getAuthUser = function (token) {
    var decoded = exports.verifyToken(token);
    if (!decoded)
        return null;
    if (decoded.impersonating) {
        return {
            userId: decoded.impersonating.userId,
            role: decoded.impersonating.role,
            isImpersonating: true,
            adminId: decoded.userId
        };
    }
    return {
        userId: decoded.userId,
        role: decoded.role,
        isImpersonating: false
    };
};
exports.requireRole = function (user, roles) {
    if (!roles.includes(user.role)) {
        return server_1.NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    return null;
};
function handleLogin(req, allowedRole) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, user, isMatch, token, res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, req.json()];
                case 1:
                    _a = _b.sent(), email = _a.email, password = _a.password;
                    return [4 /*yield*/, user_model_1["default"].findOne({ email: email }).select("+password")];
                case 2:
                    user = _b.sent();
                    if (!user) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: "Invalid credentials" }, { status: 401 })];
                    }
                    if (user.status !== "active") {
                        return [2 /*return*/, server_1.NextResponse.json({ error: "Account suspended" }, { status: 403 })];
                    }
                    return [4 /*yield*/, bcryptjs_1["default"].compare(password, user.password)];
                case 3:
                    isMatch = _b.sent();
                    if (!isMatch) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: "Invalid credentials" }, { status: 401 })];
                    }
                    // Role enforcement
                    if (user.role !== allowedRole) {
                        return [2 /*return*/, server_1.NextResponse.json({ error: "Access denied: " + allowedRole + "s only" }, { status: 403 })];
                    }
                    user.lastLogin = new Date();
                    return [4 /*yield*/, user.save()];
                case 4:
                    _b.sent();
                    token = jsonwebtoken_1["default"].sign({ userId: user._id.toString(), role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
                    res = server_1.NextResponse.json({
                        user: {
                            _id: user._id,
                            fname: user.fname,
                            lname: user.lname,
                            email: user.email,
                            role: user.role
                        }
                    });
                    res.cookies.set("token", token, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        sameSite: "lax",
                        path: "/",
                        maxAge: 60 * 60 * 24 * 7
                    });
                    return [2 /*return*/, res];
            }
        });
    });
}
exports.handleLogin = handleLogin;
