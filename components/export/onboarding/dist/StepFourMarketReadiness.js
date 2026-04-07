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
exports.StepFourMarketReadiness = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var next_intl_1 = require("next-intl");
var onboarding_1 = require("@/lib/api/onboarding");
exports.StepFourMarketReadiness = function (_a) {
    var onNext = _a.onNext, onBack = _a.onBack;
    var t = next_intl_1.useTranslations("stepFour");
    var _b = react_1.useState(null), logo = _b[0], setLogo = _b[1];
    var _c = react_1.useState(null), productImage = _c[0], setProductImage = _c[1];
    var _d = react_1.useState(""), bankName = _d[0], setBankName = _d[1];
    var _e = react_1.useState(""), accountName = _e[0], setAccountName = _e[1];
    var _f = react_1.useState(""), accountNumber = _f[0], setAccountNumber = _f[1];
    var _g = react_1.useState(false), supportsUSD = _g[0], setSupportsUSD = _g[1];
    var handleFile = function (e, type) {
        var _a;
        if (!((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]))
            return;
        var file = e.target.files[0];
        type === "logo" ? setLogo(file) : setProductImage(file);
    };
    var preview = function (file) {
        return file ? URL.createObjectURL(file) : null;
    };
    var uploadLogo = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!logo)
                        return [2 /*return*/];
                    formData = new FormData();
                    formData.append("file", logo);
                    return [4 /*yield*/, fetch("/api/images/logo", {
                            method: "POST",
                            body: formData
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var isValid = (logo || productImage) &&
        bankName &&
        accountName &&
        accountNumber;
    var uploadProduct = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!productImage)
                        return [2 /*return*/];
                    formData = new FormData();
                    formData.append("file", productImage);
                    return [4 /*yield*/, fetch("/api/images/product", {
                            method: "POST",
                            body: formData
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleNext = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, Promise.all([
                            uploadLogo(),
                            uploadProduct(),
                        ])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, onboarding_1.saveOnboardingStep(4, {
                            bankName: bankName,
                            accountName: accountName,
                            accountNumber: accountNumber,
                            supportsUSD: supportsUSD
                        })];
                case 2:
                    _a.sent();
                    onNext();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    alert("Failed to save market info");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "space-y-12" },
        React.createElement("div", { className: "space-y-3" },
            React.createElement("h2", { className: "text-2xl font-semibold text-secondary tracking-tight" }, t("title")),
            React.createElement("p", { className: "text-sm text-muted max-w-2xl" }, t("description"))),
        React.createElement("div", { className: "bg-white border rounded-3xl p-8 shadow-sm space-y-8" },
            React.createElement("div", { className: "flex items-center justify-between" },
                React.createElement("h3", { className: "text-lg font-semibold text-secondary" }, t("sections.media"))),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8" },
                React.createElement("div", { className: "space-y-3" },
                    React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("fields.logo")),
                    React.createElement("div", { className: "relative border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-accent transition bg-surface" }, logo ? (React.createElement("div", { className: "space-y-3" },
                        React.createElement("img", { src: preview(logo), className: "mx-auto max-h-24 object-contain" }),
                        React.createElement("button", { onClick: function () { return setLogo(null); }, className: "text-xs text-red-500 flex items-center gap-1 justify-center hover:text-red-600" },
                            React.createElement(lucide_react_1.Trash2, { size: 14 }),
                            "Remove"))) : (React.createElement("label", { className: "cursor-pointer block" },
                        React.createElement(lucide_react_1.UploadCloud, { className: "mx-auto mb-3 text-muted", size: 28 }),
                        React.createElement("p", { className: "text-sm text-muted" }, t("upload.logo")),
                        React.createElement("input", { type: "file", accept: "image/*", onChange: function (e) { return handleFile(e, "logo"); }, className: "hidden" }))))),
                React.createElement("div", { className: "space-y-3" },
                    React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("fields.productImage")),
                    React.createElement("div", { className: "relative border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-accent transition bg-surface" }, productImage ? (React.createElement("div", { className: "space-y-3" },
                        React.createElement("img", { src: preview(productImage), className: "mx-auto max-h-24 object-contain" }),
                        React.createElement("button", { onClick: function () { return setProductImage(null); }, className: "text-xs text-red-500 flex items-center gap-1 justify-center hover:text-red-600" },
                            React.createElement(lucide_react_1.Trash2, { size: 14 }),
                            "Remove"))) : (React.createElement("label", { className: "cursor-pointer block" },
                        React.createElement(lucide_react_1.Image, { className: "mx-auto mb-3 text-muted", size: 28 }),
                        React.createElement("p", { className: "text-sm text-muted" }, t("upload.product")),
                        React.createElement("input", { type: "file", accept: "image/*", onChange: function (e) { return handleFile(e, "product"); }, className: "hidden" }))))))),
        React.createElement("div", { className: "bg-white border rounded-3xl p-8 shadow-sm space-y-6" },
            React.createElement("h3", { className: "text-lg font-semibold text-secondary" }, t("sections.banking")),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
                React.createElement("div", { className: "space-y-2" },
                    React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("fields.bankName")),
                    React.createElement("input", { value: bankName, onChange: function (e) { return setBankName(e.target.value); }, placeholder: t("placeholders.bank"), className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm\r\n              focus:ring-2 focus:ring-accent outline-none" })),
                React.createElement("div", { className: "space-y-2" },
                    React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("fields.accountName")),
                    React.createElement("input", { value: accountName, onChange: function (e) { return setAccountName(e.target.value); }, placeholder: t("placeholders.accountName"), className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm\r\n              focus:ring-2 focus:ring-accent outline-none" })),
                React.createElement("div", { className: "space-y-2 md:col-span-2" },
                    React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("fields.accountNumber")),
                    React.createElement("input", { value: accountNumber, onChange: function (e) { return setAccountNumber(e.target.value); }, placeholder: t("placeholders.accountNumber"), autoComplete: "off", className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm\r\n              focus:ring-2 focus:ring-accent outline-none" }),
                    React.createElement("p", { className: "text-xs text-muted" }, t("helper.bankSecurity")))),
            React.createElement("div", { className: "flex items-start gap-3 bg-surface border rounded-2xl p-4" },
                React.createElement("input", { type: "checkbox", checked: supportsUSD, onChange: function () { return setSupportsUSD(!supportsUSD); }, className: "mt-1 w-4 h-4" }),
                React.createElement("div", null,
                    React.createElement("p", { className: "text-sm font-medium text-secondary" }, t("fields.usdPayments")),
                    React.createElement("p", { className: "text-xs text-muted" }, t("helper.usd"))))),
        React.createElement("div", { className: "flex justify-between items-center pt-6 border-t border-gray-200" },
            React.createElement("button", { onClick: onBack, className: "text-sm text-muted hover:text-secondary transition" }, t("actions.back")),
            React.createElement("button", { onClick: handleNext, disabled: !isValid, className: "btn-primary px-8 py-3 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md transition-all" }, t("actions.continue")))));
};
