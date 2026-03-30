"use client";
"use strict";
exports.__esModule = true;
exports.ProgressBar = void 0;
var framer_motion_1 = require("framer-motion");
exports.ProgressBar = function (_a) {
    var current = _a.current, total = _a.total;
    var percent = ((current + 1) / total) * 100;
    var milestones = [
        "Getting Started",
        "Understanding Your Business",
        "Export Capability",
        "Market Readiness",
        "Final Evaluation",
    ];
    var milestoneIndex = Math.floor((current / total) * milestones.length);
    return (React.createElement("div", { className: "w-full mb-6" },
        React.createElement("div", { className: "flex justify-between text-sm mb-2" },
            React.createElement("span", { className: "text-gray-500" }, "Progress"),
            React.createElement("span", { className: "text-gray-700 font-medium" },
                Math.round(percent),
                "%")),
        React.createElement("div", { className: "relative h-2 bg-gray-200 rounded-full overflow-hidden" },
            React.createElement(framer_motion_1.motion.div, { className: "absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full", initial: { width: 0 }, animate: { width: percent + "%" }, transition: { duration: 0.4 } }),
            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent blur-sm" })),
        React.createElement("div", { className: "flex justify-between mt-3" }, Array.from({ length: total }).map(function (_, i) {
            var isActive = i === current;
            var isCompleted = i < current;
            return (React.createElement("div", { key: i, className: "h-2.5 w-2.5 rounded-full transition-all " + (isCompleted ? "bg-green-500" : isActive ? "bg-green-500 scale-125" : "bg-gray-300") }));
        })),
        React.createElement("p", { className: "text-xs text-gray-500 mt-2 text-center" }, milestones[milestoneIndex])));
};
