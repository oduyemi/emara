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
exports.StepOneFields = function (_a) {
    var data = _a.data, setData = _a.setData;
    var fields = [
        "Full Name",
        "Email",
        "Company Name",
        "Company Address",
        "City",
        "State",
        "Country",
        "Phone Number",
    ];
    return (React.createElement("div", { className: "space-y-6" },
        React.createElement("h2", { className: "text-3xl font-semibold mb-6 text-gray-900" }, "Basic Information"),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-4" }, fields.map(function (field) { return (React.createElement("input", { key: field, placeholder: field, value: data[field] || "", onChange: function (e) {
                var _a;
                return setData(__assign(__assign({}, data), (_a = {}, _a[field] = e.target.value, _a)));
            }, className: "bg-white border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition" })); }))));
};
