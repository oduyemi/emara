"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
function CountryCard(_a) {
    var name = _a.name, desc = _a.desc, code = _a.code;
    var t = next_intl_1.useTranslations("marketCountryProfiles");
    return (React.createElement("div", { className: "surface p-6 rounded-xl hover:shadow-xl transition group" },
        React.createElement("div", { className: "flex items-center gap-3 mb-4" },
            React.createElement("img", { src: "https://flagcdn.com/w40/" + code.toLowerCase() + ".png", alt: name, className: "w-6 h-4 object-cover rounded-sm opacity-80 group-hover:opacity-100 transition" }),
            React.createElement("h3", { className: "text-lg font-semibold text-secondary" }, name)),
        React.createElement("p", { className: "text-muted mb-6 text-sm leading-relaxed" }, desc),
        React.createElement("button", { className: "btn-primary px-5 py-2 rounded-lg text-sm" }, t("cta"))));
}
exports["default"] = CountryCard;
