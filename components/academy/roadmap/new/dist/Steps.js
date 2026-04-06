"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
function RoadmapSteps() {
    var t = next_intl_1.useTranslations("roadmap.new.checklist");
    var steps = [
        t("item1"),
        t("item2"),
        t("item3"),
        t("item4"),
    ];
    return (React.createElement("section", { className: "surface py-24" },
        React.createElement("div", { className: "max-w-5xl mx-auto px-6" },
            React.createElement("h2", { className: "text-3xl font-semibold mb-12 text-center" }, t("title")),
            React.createElement("div", { className: "space-y-10" }, steps.map(function (step, i) { return (React.createElement("div", { key: i, className: "surface p-8 rounded-lg" },
                React.createElement("h3", { className: "font-semibold text-lg mb-2" },
                    "Step ",
                    i + 1),
                React.createElement("p", { className: "text-muted" }, step))); })))));
}
exports["default"] = RoadmapSteps;
