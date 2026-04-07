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
exports.StepSixFinalReview = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var next_intl_1 = require("next-intl");
var onboarding_1 = require("@/lib/api/onboarding");
exports.StepSixFinalReview = function (_a) {
    var onBack = _a.onBack, onSubmit = _a.onSubmit;
    var t = next_intl_1.useTranslations("stepSix");
    var profileScore = 85;
    var tier = react_1.useMemo(function () {
        if (profileScore >= 80)
            return "Gold";
        if (profileScore >= 60)
            return "Silver";
        return "Bronze";
    }, [profileScore]);
    var tierStyles = {
        Bronze: "bg-amber-100 text-amber-700",
        Silver: "bg-gray-200 text-gray-700",
        Gold: "bg-yellow-100 text-yellow-700"
    };
    var progressWidth = profileScore + "%";
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, onboarding_1.saveOnboardingStep(6, {})];
                case 1:
                    _a.sent();
                    // redirect or success screen
                    window.location.href = "/dashboard";
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    alert("Submission failed");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "space-y-12" },
        React.createElement("div", null,
            React.createElement("h2", { className: "text-2xl font-semibold text-secondary mb-2" }, t("title")),
            React.createElement("p", { className: "text-black text-sm max-w-2xl" }, t("description"))),
        React.createElement("div", { className: "rounded-2xl border bg-gradient-to-r from-[#0F233F] to-[#132B4A] text-gray-300 p-8 shadow-lg" },
            React.createElement("div", { className: "flex items-center gap-2 mb-4" },
                React.createElement(lucide_react_1.Sparkles, { size: 18 }),
                React.createElement("p", { className: "text-sm uppercase text-accent opacity-80" }, t("tierLabel"))),
            React.createElement("div", { className: "flex items-center gap-4 mb-6" },
                React.createElement("span", { className: "px-4 py-2 rounded-full text-black text-sm font-medium " + tierStyles[tier] }, t("tiers." + tier)),
                React.createElement("span", { className: "text-sm opacity-80" }, t("completion", { percent: profileScore }))),
            React.createElement("div", { className: "w-full bg-white/20 rounded-full h-2 mb-4 overflow-hidden" },
                React.createElement("div", { className: "h-full bg-white transition-all duration-700", style: { width: progressWidth } })),
            React.createElement("p", { className: "text-sm opacity-90" }, t("tierDescription"))),
        React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-lg font-semibold text-[#0F233F]" }, t("summary.title")),
            React.createElement("div", { className: "grid gap-3" },
                React.createElement("div", { className: "flex items-center gap-3 text-sm text-gray-700 bg-white border rounded-xl p-4" },
                    React.createElement(lucide_react_1.CheckCircle2, { size: 18, className: "text-green-600" }),
                    React.createElement("span", null, t("summary.company"))),
                React.createElement("div", { className: "flex items-center gap-3 text-sm text-gray-700 bg-white border rounded-xl p-4" },
                    React.createElement(lucide_react_1.CheckCircle2, { size: 18, className: "text-green-600" }),
                    React.createElement("span", null, t("summary.compliance"))),
                React.createElement("div", { className: "flex items-center gap-3 text-sm text-gray-700 bg-white border rounded-xl p-4" },
                    React.createElement(lucide_react_1.CheckCircle2, { size: 18, className: "text-green-600" }),
                    React.createElement("span", null, t("summary.operations"))),
                React.createElement("div", { className: "flex items-center gap-3 text-sm text-gray-700 bg-amber-50 border border-amber-200 rounded-xl p-4" },
                    React.createElement(lucide_react_1.AlertTriangle, { size: 18, className: "text-amber-500" }),
                    React.createElement("span", null, t("status.pending"))))),
        React.createElement("div", { className: "border rounded-2xl p-6 bg-gray-50 shadow-sm" },
            React.createElement("h4", { className: "text-sm font-semibold text-[#0F233F] mb-2" }, t("submit.title")),
            React.createElement("p", { className: "text-xs text-gray-600 mb-6" }, t("submit.description")),
            React.createElement("div", { className: "flex justify-between items-center" },
                React.createElement("button", { onClick: onBack, className: "text-gray-500 hover:text-gray-700 text-sm transition" }, t("actions.back")),
                React.createElement("button", { onClick: handleSubmit, className: "bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all" }, t("actions.submit"))))));
};
