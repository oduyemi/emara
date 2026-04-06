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
    return (React.createElement("div", { className: "w-full mb-8 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm" },
        React.createElement("div", { className: "flex justify-between items-center text-sm mb-3" },
            React.createElement("span", { className: "text-gray-500 font-medium tracking-wide" }, "Progress"),
            React.createElement(framer_motion_1.motion.span, { key: percent, initial: { opacity: 0, y: -4 }, animate: { opacity: 1, y: 0 }, className: "text-gray-800 font-semibold" },
                Math.round(percent),
                "%")),
        React.createElement("div", { className: "relative h-3 bg-gray-200/70 rounded-full overflow-hidden" },
            React.createElement(framer_motion_1.motion.div, { className: "absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-500", initial: { width: 0 }, animate: { width: percent + "%" }, transition: { duration: 0.5, ease: "easeInOut" } }),
            React.createElement(framer_motion_1.motion.div, { className: "absolute top-0 left-0 h-full w-20 bg-white/30 blur-md", animate: { x: ["-100%", "400%"] }, transition: { repeat: Infinity, duration: 2.5, ease: "linear" } })),
        React.createElement("div", { className: "relative mt-5 flex justify-between items-center" },
            React.createElement("div", { className: "absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0" }),
            Array.from({ length: total }).map(function (_, i) {
                var isActive = i === current;
                var isCompleted = i < current;
                return (React.createElement("div", { key: i, className: "relative z-10 flex flex-col items-center" },
                    React.createElement(framer_motion_1.motion.div, { initial: false, animate: {
                            scale: isActive ? 1.2 : 1
                        }, className: "flex items-center justify-center h-6 w-6 rounded-full border-2 transition-all\n                  " + (isCompleted
                            ? "bg-green-500 border-green-500 text-white"
                            : isActive
                                ? "bg-white border-green-500 text-green-600 shadow-md"
                                : "bg-white border-gray-300 text-gray-400") + "\n                " }, isCompleted ? "✓" : i + 1),
                    isActive && (React.createElement(framer_motion_1.motion.span, { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, className: "absolute top-8 text-[10px] text-gray-600 whitespace-nowrap" }, milestones[milestoneIndex]))));
            }))));
};
