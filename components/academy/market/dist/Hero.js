"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
function MarketProfilesHero() {
    var t = next_intl_1.useTranslations("marketProfiles.hero");
    return (React.createElement("section", { className: "surface-dark py-24" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 gap-12 items-center" },
            React.createElement("div", null,
                React.createElement("div", { className: "flex items-center gap-2 text-accent text-sm mb-4" },
                    React.createElement(lucide_react_1.Globe, { size: 16 }),
                    t("badge")),
                React.createElement("h1", { className: "text-5xl font-semibold mb-6" }, t("title")),
                React.createElement("p", { className: "text-blue-100 text-lg mb-8 max-w-xl" }, t("subtitle")),
                React.createElement(link_1["default"], { href: "#markets" },
                    React.createElement("button", { className: "btn-primary px-7 py-3 rounded-lg" }, t("cta")))),
            React.createElement("div", { className: "surface p-8 rounded-xl shadow-xl text-center" },
                React.createElement("p", { className: "text-sm text-muted mb-2" }, t("marketsLabel")),
                React.createElement("p", { className: "font-semibold text-secondary" }, t("marketsCount"))))));
}
exports["default"] = MarketProfilesHero;
