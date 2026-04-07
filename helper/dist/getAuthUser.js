"use strict";
exports.__esModule = true;
exports.getAuthUser = void 0;
var auth_1 = require("@/utils/auth");
exports.getAuthUser = function (token) {
    var decoded = auth_1.verifyToken(token);
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
