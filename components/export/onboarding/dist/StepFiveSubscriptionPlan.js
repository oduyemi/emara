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
exports.StepFiveSubscriptionPlan = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var next_intl_1 = require("next-intl");
var onboarding_1 = require("@/lib/api/onboarding");
exports.StepFiveSubscriptionPlan = function (_a) {
    var onNext = _a.onNext, onBack = _a.onBack;
    var t = next_intl_1.useTranslations("stepFive");
    var _b = react_1.useState("Silver"), selectedPlan = _b[0], setSelectedPlan = _b[1];
    var isValid = !!selectedPlan;
    var plans = [
        {
            name: "Bronze",
            price: t("bronzePrice"),
            description: t("bronzeDescription"),
            features: [
                t("bronzeFeature1"),
                t("bronzeFeature2"),
                t("bronzeFeature3"),
            ],
            tierColor: "border-amber-300 bg-amber-50"
        },
        {
            name: "Silver",
            price: t("silverPrice"),
            recommended: true,
            description: t("silverDescription"),
            features: [
                t("silverFeature1"),
                t("silverFeature2"),
                t("silverFeature3"),
                t("silverFeature4"),
            ],
            tierColor: "border-gray-300 bg-gray-50"
        },
        {
            name: "Gold Elite",
            price: t("goldPrice"),
            description: t("goldDescription"),
            features: [
                t("goldFeature1"),
                t("goldFeature2"),
                t("goldFeature3"),
                t("goldFeature4"),
                t("goldFeature5"),
            ],
            tierColor: "border-yellow-300 bg-yellow-50"
        }
    ];
    var handleNext = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, onboarding_1.saveOnboardingStep(5, {
                            plan: selectedPlan
                        })];
                case 1:
                    _a.sent();
                    onNext();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    alert("Failed to save plan");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "space-y-12" },
        React.createElement("div", null,
            React.createElement("h2", { className: "text-2xl font-semibold text-[#0F233F] mb-2" }, t("title")),
            React.createElement("p", { className: "text-gray-600 text-sm max-w-xl" }, t("subtitle"))),
        React.createElement("div", { className: "grid md:grid-cols-3 gap-6" }, plans.map(function (plan) {
            var isSelected = selectedPlan === plan.name;
            return (React.createElement("button", { key: plan.name, onClick: function () { return setSelectedPlan(plan.name); }, className: "\n                relative text-left rounded-2xl border p-6 transition-all duration-200\n                " + (isSelected
                    ? "border-[#0F233F] shadow-xl scale-[1.02]"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md") + "\n              " },
                plan.recommended && (React.createElement("div", { className: "absolute -top-3 left-4 flex items-center gap-1 text-xs bg-[#0F233F] text-white px-3 py-1 rounded-full shadow" },
                    React.createElement(lucide_react_1.Crown, { size: 12 }),
                    t("recommended"))),
                React.createElement("h3", { className: "text-lg font-semibold text-[#0F233F] mb-1" }, plan.name),
                React.createElement("p", { className: "text-2xl font-bold text-[#0F233F] mb-2" }, plan.price),
                React.createElement("p", { className: "text-sm text-gray-600 mb-5" }, plan.description),
                React.createElement("ul", { className: "space-y-2 text-sm text-gray-700" }, plan.features.map(function (feature) { return (React.createElement("li", { key: feature, className: "flex items-center gap-2" },
                    React.createElement(lucide_react_1.Check, { size: 14, className: "text-green-600" }),
                    feature)); })),
                isSelected && (React.createElement("div", { className: "absolute top-4 right-4 w-5 h-5 rounded-full bg-[#0F233F] flex items-center justify-center" },
                    React.createElement(lucide_react_1.Check, { size: 12, className: "text-white" })))));
        })),
        React.createElement("div", { className: "flex justify-between pt-6 border-t" },
            React.createElement("button", { onClick: onBack, className: "text-gray-500 hover:text-gray-700 text-sm transition" }, t("back")),
            React.createElement("button", { onClick: handleNext, disabled: !isValid, className: "btn-primary px-8 py-3 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md transition-all" }, t("continue")))));
};
