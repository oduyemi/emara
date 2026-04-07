"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = require("react");
var next_intl_1 = require("next-intl");
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var axios_1 = require("axios");
function RegisterForm() {
    var _this = this;
    var t = next_intl_1.useTranslations("auth.register");
    var router = navigation_1.useRouter();
    var _a = react_1.useState({
        fname: "",
        lname: "",
        company: "",
        email: "",
        password: ""
    }), form = _a[0], setForm = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(""), error = _c[0], setError = _c[1];
    var handleChange = function (key, value) {
        setForm(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[key] = value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var _a, fname, rest, lname, ROLE, err_1;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true);
                    setError("");
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, 4, 5]);
                    _a = form.fname.split(" "), fname = _a[0], rest = _a.slice(1);
                    lname = rest.join(" ") || " ";
                    ROLE = "supplier";
                    return [4 /*yield*/, axios_1["default"].post("/api/auth/register", {
                            fname: fname,
                            lname: lname,
                            email: form.email,
                            password: form.password,
                            role: ROLE
                        }, { withCredentials: true })];
                case 2:
                    _d.sent();
                    // Redirect to onboarding
                    router.push("/suppliers/login");
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _d.sent();
                    setError(((_c = (_b = err_1 === null || err_1 === void 0 ? void 0 : err_1.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error) || "Registration failed");
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "max-w-md mx-auto w-full mt-4" },
        React.createElement("div", { className: "bg-white border border-[var(--color-surface-border)] rounded-3xl shadow-xl p-10" },
            React.createElement("div", { className: "flex justify-center mb-2" },
                React.createElement(link_1["default"], { href: "/suppliers" },
                    React.createElement(image_1["default"], { src: "/images/logo/logofix.png", alt: "Emara", height: 120, width: 120 }))),
            React.createElement("div", { className: "text-center mb-10" },
                React.createElement("h1", { className: "text-2xl font-semibold text-secondary" }, t("title")),
                React.createElement("p", { className: "text-sm text-muted" }, t("subtitle"))),
            React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
                React.createElement("div", null,
                    React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("name")),
                    React.createElement("div", { className: "relative mt-2" },
                        React.createElement(lucide_react_1.User, { size: 18, className: "absolute left-3 top-3.5 text-muted" }),
                        React.createElement("input", { type: "text", value: form.fname, onChange: function (e) { return handleChange("fname", e.target.value); }, className: "w-full pl-10 py-3 rounded-xl border" }))),
                React.createElement("div", null,
                    React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("company")),
                    React.createElement("div", { className: "relative mt-2" },
                        React.createElement(lucide_react_1.Building2, { size: 18, className: "absolute left-3 top-3.5 text-muted" }),
                        React.createElement("input", { type: "text", value: form.company, onChange: function (e) { return handleChange("company", e.target.value); }, className: "w-full pl-10 py-3 rounded-xl border" }))),
                React.createElement("div", null,
                    React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("email")),
                    React.createElement("div", { className: "relative mt-2" },
                        React.createElement(lucide_react_1.Mail, { size: 18, className: "absolute left-3 top-3.5 text-muted" }),
                        React.createElement("input", { type: "email", value: form.email, onChange: function (e) { return handleChange("email", e.target.value); }, className: "w-full pl-10 py-3 rounded-xl border" }))),
                React.createElement("div", null,
                    React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("password")),
                    React.createElement("div", { className: "relative mt-2" },
                        React.createElement(lucide_react_1.Lock, { size: 18, className: "absolute left-3 top-3.5 text-muted" }),
                        React.createElement("input", { type: "password", value: form.password, onChange: function (e) { return handleChange("password", e.target.value); }, className: "w-full pl-10 py-3 rounded-xl border" }))),
                error && React.createElement("p", { className: "text-red-500 text-sm" }, error),
                React.createElement("button", { disabled: loading, className: "w-full btn-primary py-3" }, loading ? "Loading..." : t("registerButton"))),
            React.createElement("p", { className: "text-center text-sm mt-8" },
                React.createElement(link_1["default"], { href: "/suppliers/login" }, t("login"))))));
}
exports["default"] = RegisterForm;
