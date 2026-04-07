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
exports.StepOneCompanyInfo = void 0;
var react_1 = require("react");
var countries_1 = require("@/data/countries");
var SelectField_1 = require("./SelectField");
var InputField_1 = require("./InputField");
var next_intl_1 = require("next-intl");
var framer_motion_1 = require("framer-motion");
var onboarding_1 = require("@/lib/api/onboarding");
var regions = Object.keys(countries_1.africaRegions);
exports.StepOneCompanyInfo = function (_a) {
    var onNext = _a.onNext;
    var t = next_intl_1.useTranslations("stepOne");
    var _b = react_1.useState(""), selectedRegion = _b[0], setSelectedRegion = _b[1];
    var _c = react_1.useState(""), selectedCountry = _c[0], setSelectedCountry = _c[1];
    var countries = selectedRegion
        ? countries_1.africaRegions[selectedRegion]
        : [];
    var _d = react_1.useState({
        companyName: "",
        tradingName: "",
        registrationNumber: "",
        yearEstablished: "",
        website: "",
        country: "",
        city: "",
        address: ""
    }), form = _d[0], setForm = _d[1];
    var isValid = form.companyName.trim() &&
        form.registrationNumber.trim() &&
        form.yearEstablished &&
        selectedRegion &&
        selectedCountry &&
        form.city.trim() &&
        form.address.trim();
    var updateField = function (field, value) {
        setForm(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[field] = value, _a)));
        });
    };
    var handleNext = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (!isValid) {
                        alert("Please fill all required fields");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, onboarding_1.saveOnboardingStep(1, {
                            companyName: form.companyName,
                            tradingName: form.tradingName,
                            registrationNumber: form.registrationNumber,
                            yearEstablished: form.yearEstablished,
                            website: form.website,
                            region: selectedRegion,
                            country: selectedCountry,
                            city: form.city,
                            address: form.address
                        })];
                case 1:
                    _a.sent();
                    onNext();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    alert("Failed to save. Try again.");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 }, className: "space-y-12" },
        React.createElement("div", { className: "space-y-3" },
            React.createElement("h2", { className: "text-2xl font-semibold text-secondary tracking-tight" }, t("title")),
            React.createElement("p", { className: "text-muted text-sm max-w-2xl leading-relaxed" }, t("description"))),
        React.createElement("div", { className: "surface rounded-3xl p-8 space-y-12" },
            React.createElement(Section, { title: t("sections.identity") },
                React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
                    React.createElement(InputField_1.InputField, { label: t("fields.registeredName"), required: true, value: form.companyName, onChange: function (v) { return updateField("companyName", v); } }),
                    React.createElement(InputField_1.InputField, { label: t("fields.tradingName"), value: form.tradingName, onChange: function (v) { return updateField("tradingName", v); } }),
                    React.createElement(InputField_1.InputField, { label: t("fields.registrationNumber"), required: true, value: form.registrationNumber, onChange: function (v) { return updateField("registrationNumber", v); } }),
                    React.createElement(InputField_1.InputField, { label: t("fields.yearEstablished"), required: true, type: "number", value: form.yearEstablished, onChange: function (v) { return updateField("yearEstablished", v); } }))),
            React.createElement(Section, { title: t("sections.business") },
                React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
                    React.createElement(InputField_1.InputField, { label: t("fields.website"), placeholder: "https://", value: form.website, onChange: function (v) { return updateField("website", v); } }))),
            React.createElement(Section, { title: t("sections.location") },
                React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
                    React.createElement(SelectField_1.SelectField, { label: t("fields.region"), required: true, value: selectedRegion, onChange: function (v) {
                            setSelectedRegion(v);
                            setSelectedCountry("");
                            updateField("country", "");
                        }, options: regions }),
                    React.createElement(SelectField_1.SelectField, { label: t("fields.country"), required: true, value: selectedCountry, onChange: function (v) {
                            setSelectedCountry(v);
                            updateField("country", v);
                        }, options: countries, disabled: !selectedRegion })),
                React.createElement("div", { className: "grid md:grid-cols-2 gap-6 mt-6" },
                    React.createElement(InputField_1.InputField, { label: t("fields.city"), required: true, value: form.city, onChange: function (v) { return updateField("city", v); } }),
                    React.createElement(InputField_1.InputField, { label: t("fields.address"), required: true, value: form.address, onChange: function (v) { return updateField("address", v); } })))),
        React.createElement("div", { className: "flex justify-between items-center pt-6 border-t border-gray-200" },
            React.createElement("button", { className: "text-sm text-muted hover:text-secondary transition-colors" }, t("actions.back")),
            React.createElement("button", { onClick: handleNext, disabled: !isValid, className: "btn-primary px-8 py-3 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md transition-all" }, t("actions.continue")))));
};
var Section = function (_a) {
    var title = _a.title, children = _a.children;
    return (React.createElement("div", { className: "space-y-6" },
        React.createElement("h3", { className: "text-base font-semibold text-secondary tracking-tight" }, title),
        children));
};
