"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
function NewExportersHero() {
    var t = next_intl_1.useTranslations("roadmap.new.hero");
    return (React.createElement("section", { className: "py-24 surface-dark" },
        React.createElement("div", { className: "max-w-5xl mx-auto px-6 text-center" },
            React.createElement("h1", { className: "text-4xl font-semibold mb-6" }, t("title")),
            React.createElement("p", { className: "text-muted text-lg" }, t("subtitle")))));
}
exports["default"] = NewExportersHero;
