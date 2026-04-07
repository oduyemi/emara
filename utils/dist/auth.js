"use strict";
exports.__esModule = true;
exports.requireRole = exports.getAuthUser = exports.verifyToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
exports.verifyToken = function (token) {
    return jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET);
};
exports.getAuthUser = function (token) {
    var decoded = exports.verifyToken(token);
    if (decoded.impersonating) {
        return {
            userId: decoded.impersonating.id,
            role: decoded.impersonating.role,
            isImpersonating: true,
            adminId: decoded.id
        };
    }
    return {
        userId: decoded.id,
        role: decoded.role,
        isImpersonating: false
    };
};
exports.requireRole = function (user, roles) {
    if (!roles.includes(user.role)) {
        throw new Error("Forbidden");
    }
};
