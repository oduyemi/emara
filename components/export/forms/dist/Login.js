"use client";
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
exports.LoginForm = void 0;
var react_1 = require("react");
var next_intl_1 = require("next-intl");
var link_1 = require("next/link");
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var axios_1 = require("axios");
var auth_context_1 = require("../../../app/context/auth.context");
exports.LoginForm = function () {
    var t = next_intl_1.useTranslations("auth.login");
    var router = navigation_1.useRouter();
    var setUser = auth_context_1.useAuth().setUser;
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState(""), error = _c[0], setError = _c[1];
    var _d = react_1.useState(false), loading = _d[0], setLoading = _d[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true);
                    setError("");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, axios_1["default"].post("/api/auth/login/supplier", { email: email, password: password }, { withCredentials: true })];
                case 2:
                    response = _b.sent();
                    setUser(response.data.user);
                    router.push("/suppliers/dashboard");
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _b.sent();
                    if (((_a = err_1.response) === null || _a === void 0 ? void 0 : _a.status) === 403) {
                        setError("Access denied: Suppliers only");
                    }
                    else {
                        setError("Invalid credentials");
                    }
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "max-w-md mx-auto w-full mt-16" },
        React.createElement("div", { className: "bg-white rounded-3xl shadow-xl p-10" },
            React.createElement("div", { className: "flex justify-center mb-8" },
                React.createElement(image_1["default"], { src: "/images/logo/logofix.png", alt: "Emara", height: 120, width: 120 })),
            React.createElement("div", { className: "text-center mb-10" },
                React.createElement("h1", { className: "text-2xl font-semibold" }, t("title")),
                React.createElement("p", { className: "text-sm text-muted" }, t("subtitle"))),
            React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
                React.createElement("input", { type: "email", placeholder: t("email"), value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "w-full p-3 border rounded-xl" }),
                React.createElement("input", { type: "password", placeholder: t("password"), value: password, onChange: function (e) { return setPassword(e.target.value); }, className: "w-full p-3 border rounded-xl" }),
                error && React.createElement("p", { className: "text-red-500 text-sm" }, error),
                React.createElement("button", { disabled: loading, className: "w-full btn-primary py-3" }, loading ? "Loading..." : t("loginButton"))),
            React.createElement("p", { className: "text-center mt-8" },
                React.createElement(link_1["default"], { href: "/suppliers/register" }, t("register"))))));
};
