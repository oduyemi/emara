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
exports.__esModule = true;
exports.StepOneFields = void 0;
var countries_1 = require("@/data/countries");
var react_1 = require("react");
var next_intl_1 = require("next-intl");
exports.StepOneFields = function (_a) {
    var data = _a.data, setData = _a.setData;
    var t = next_intl_1.useTranslations("ReadinessForm.step1");
    var countries = react_1.useMemo(function () {
        return Object.entries(countries_1.africaRegions);
    }, []);
    var handleChange = function (field, value) {
        setData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[field] = value, _a)));
        });
    };
    react_1.useEffect(function () {
        var country = data["Country"];
        if (!country)
            return;
        var code = countries_1.countryCallingCodes[country];
        if (code && data["Phone Code"] !== code) {
            setData(function (prev) { return (__assign(__assign({}, prev), { "Phone Code": code })); });
        }
    }, [data["Country"]]);
    return (React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5" },
        React.createElement(Input, { label: t("fullName"), value: data["Full Name"] || "", onChange: function (v) { return handleChange("Full Name", v); } }),
        React.createElement(Input, { label: t("email"), value: data["Email"] || "", onChange: function (v) { return handleChange("Email", v); } }),
        React.createElement(Input, { label: t("companyName"), value: data["Company Name"] || "", onChange: function (v) { return handleChange("Company Name", v); } }),
        React.createElement(Input, { label: t("companyAddress"), value: data["Company Address"] || "", onChange: function (v) { return handleChange("Company Address", v); } }),
        React.createElement(Input, { label: t("city"), value: data["City"] || "", onChange: function (v) { return handleChange("City", v); } }),
        React.createElement(Input, { label: t("state"), value: data["State"] || "", onChange: function (v) { return handleChange("State", v); } }),
        React.createElement("div", { className: "col-span-2" },
            React.createElement("label", { className: "text-sm text-gray-600 mb-1 block" }, t("country")),
            React.createElement("select", { value: data["Country"] || "", onChange: function (e) { return handleChange("Country", e.target.value); }, className: "w-full px-4 py-3 rounded-xl border border-gray-200" },
                React.createElement("option", { value: "" }, t("selectCountry")),
                countries.map(function (_a) {
                    var region = _a[0], list = _a[1];
                    return (React.createElement("optgroup", { key: region, label: region }, list.map(function (country) { return (React.createElement("option", { key: country, value: country }, country)); })));
                }))),
        React.createElement("div", { className: "col-span-2 flex gap-3" },
            React.createElement("input", { value: data["Phone Code"] || "", readOnly: true, className: "w-28 px-3 py-3 rounded-xl border bg-gray-100" }),
            React.createElement("input", { type: "tel", placeholder: t("phonePlaceholder"), value: data["Phone Number"] || "", onChange: function (e) { return handleChange("Phone Number", e.target.value); }, className: "flex-1 px-4 py-3 rounded-xl border" }))));
};
var Input = function (_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange;
    return (React.createElement("div", null,
        React.createElement("label", { className: "text-sm text-gray-600 mb-1 block" }, label),
        React.createElement("input", { value: value, onChange: function (e) { return onChange(e.target.value); }, className: "w-full px-4 py-3 rounded-xl border" })));
};
