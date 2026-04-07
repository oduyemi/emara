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
exports.StepThreeOperations = void 0;
var react_1 = require("react");
var next_intl_1 = require("next-intl");
var onboarding_1 = require("@/lib/api/onboarding");
exports.StepThreeOperations = function (_a) {
    var onNext = _a.onNext, onBack = _a.onBack;
    var t = next_intl_1.useTranslations("stepThree");
    var _b = react_1.useState(""), capacity = _b[0], setCapacity = _b[1];
    var _c = react_1.useState(""), leadTime = _c[0], setLeadTime = _c[1];
    var _d = react_1.useState(""), workforce = _d[0], setWorkforce = _d[1];
    var _e = react_1.useState(""), facilityType = _e[0], setFacilityType = _e[1];
    var _f = react_1.useState(""), exportExperience = _f[0], setExportExperience = _f[1];
    var _g = react_1.useState(false), logisticsSupport = _g[0], setLogisticsSupport = _g[1];
    var isValid = capacity &&
        leadTime &&
        workforce &&
        facilityType &&
        exportExperience;
    var handleNext = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, onboarding_1.saveOnboardingStep(3, {
                            capacity: capacity,
                            leadTime: leadTime,
                            workforce: workforce,
                            facility: facilityType,
                            exportExperience: exportExperience,
                            logistics: logisticsSupport
                        })];
                case 1:
                    _a.sent();
                    onNext();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    alert("Failed to save operations");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "space-y-12" },
        React.createElement("div", { className: "space-y-3" },
            React.createElement("h2", { className: "text-2xl font-semibold text-secondary tracking-tight" }, t("title")),
            React.createElement("p", { className: "text-muted text-sm max-w-2xl leading-relaxed" }, t("description"))),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8" },
            React.createElement("div", { className: "space-y-2" },
                React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("fields.capacity.label")),
                React.createElement("input", { type: "text", placeholder: t("fields.capacity.placeholder"), value: capacity, onChange: function (e) { return setCapacity(e.target.value); }, className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm\r\n            focus:ring-2 focus:ring-accent outline-none transition" })),
            React.createElement("div", { className: "space-y-2" },
                React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("fields.leadTime.label")),
                React.createElement("input", { type: "text", placeholder: t("fields.leadTime.placeholder"), value: leadTime, onChange: function (e) { return setLeadTime(e.target.value); }, className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm\r\n            focus:ring-2 focus:ring-accent outline-none transition" })),
            React.createElement("div", { className: "space-y-2" },
                React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("fields.workforce.label")),
                React.createElement("select", { value: workforce, onChange: function (e) { return setWorkforce(e.target.value); }, className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white\r\n            focus:ring-2 focus:ring-accent outline-none transition" },
                    React.createElement("option", { value: "" }, t("fields.workforce.placeholder")),
                    React.createElement("option", { value: "1-10" }, "1 \u2013 10"),
                    React.createElement("option", { value: "11-50" }, "11 \u2013 50"),
                    React.createElement("option", { value: "51-200" }, "51 \u2013 200"),
                    React.createElement("option", { value: "200+" }, "200+"))),
            React.createElement("div", { className: "space-y-2" },
                React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("fields.facility.label")),
                React.createElement("select", { value: facilityType, onChange: function (e) { return setFacilityType(e.target.value); }, className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white\r\n            focus:ring-2 focus:ring-accent outline-none transition" },
                    React.createElement("option", { value: "" }, t("fields.facility.placeholder")),
                    React.createElement("option", { value: "owned" }, t("options.ownedFactory")),
                    React.createElement("option", { value: "leased" }, t("options.leasedFactory")),
                    React.createElement("option", { value: "cooperative" }, t("options.cooperative")),
                    React.createElement("option", { value: "home" }, t("options.homeProduction")))),
            React.createElement("div", { className: "space-y-2 md:col-span-2" },
                React.createElement("label", { className: "text-sm font-medium text-secondary" }, t("fields.exportExperience.label")),
                React.createElement("select", { value: exportExperience, onChange: function (e) { return setExportExperience(e.target.value); }, className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white\r\n            focus:ring-2 focus:ring-accent outline-none transition" },
                    React.createElement("option", { value: "" }, t("fields.exportExperience.placeholder")),
                    React.createElement("option", { value: "none" }, t("options.noExport")),
                    React.createElement("option", { value: "regional" }, t("options.regionalExport")),
                    React.createElement("option", { value: "international" }, t("options.internationalExport"))))),
        React.createElement("div", { className: "flex items-start gap-3 p-4 bg-surface rounded-2xl border" },
            React.createElement("input", { type: "checkbox", checked: logisticsSupport, onChange: function () { return setLogisticsSupport(!logisticsSupport); }, className: "mt-1 w-4 h-4" }),
            React.createElement("div", null,
                React.createElement("p", { className: "text-sm font-medium text-secondary" }, t("fields.logistics.label")),
                React.createElement("p", { className: "text-xs text-muted" }, t("fields.logistics.helper")))),
        React.createElement("div", { className: "flex justify-between items-center pt-6 border-t border-gray-200" },
            React.createElement("button", { onClick: onBack, className: "text-sm text-muted hover:text-secondary transition-colors" }, t("actions.back")),
            React.createElement("button", { onClick: handleNext, disabled: !isValid, className: "btn-primary px-8 py-3 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md transition-all" }, t("actions.continue")))));
};
