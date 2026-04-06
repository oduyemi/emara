"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var framer_motion_1 = require("framer-motion");
function ProgressBar(_a) {
    var current = _a.current;
    var t = next_intl_1.useTranslations("AssessmentInteractive");
    var steps = [
        "industry",
        "product",
        "market",
        "volume",
        "certifications",
        "operations",
        "results"
    ];
    var percentage = ((current - 1) / (steps.length - 1)) * 100;
    return (React.createElement("div", { className: "space-y-6 mb-14" },
        React.createElement("div", { className: "flex justify-between text-xs text-neutral-500" }, steps.map(function (step, index) { return (React.createElement("span", { key: step, className: index + 1 <= current
                ? "text-emerald-400"
                : "text-neutral-600" }, t("progress_" + step))); })),
        React.createElement("div", { className: "relative w-full h-2 bg-neutral-900 rounded-full overflow-hidden" },
            React.createElement(framer_motion_1.motion.div, { initial: { width: 0 }, animate: { width: percentage + "%" }, transition: { duration: 0.6 }, className: "h-full bg-emerald-500" }))));
}
exports["default"] = ProgressBar;
