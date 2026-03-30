"use client";
"use strict";
exports.__esModule = true;
exports.QuestionCard = void 0;
var framer_motion_1 = require("framer-motion");
var OPTIONS = [
    { label: "Very High", value: 5 },
    { label: "High", value: 4 },
    { label: "Indifferent", value: 3 },
    { label: "Low", value: 2 },
    { label: "Very Low", value: 1 },
];
exports.QuestionCard = function (_a) {
    var step = _a.step, totalSteps = _a.totalSteps, question = _a.question, value = _a.value, onSelect = _a.onSelect;
    return (React.createElement("div", { className: "min-h-screen flex items-center justify-center px-6 bg-[#0A1625] text-white" },
        React.createElement("div", { className: "w-full max-w-2xl" },
            React.createElement("div", { className: "mb-8" },
                React.createElement("div", { className: "h-1 bg-white/10 rounded-full overflow-hidden" },
                    React.createElement(framer_motion_1.motion.div, { className: "h-full bg-gradient-to-r from-accent to-[#4FD1C5]", initial: { width: 0 }, animate: { width: (step / totalSteps) * 100 + "%" }, transition: { duration: 0.4 } })),
                React.createElement("p", { className: "text-xs text-white/40 mt-2" },
                    "Step ",
                    step,
                    " of ",
                    totalSteps)),
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, className: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl" },
                React.createElement("h2", { className: "text-2xl font-semibold leading-relaxed mb-10" }, question),
                React.createElement("div", { className: "grid gap-3" }, OPTIONS.map(function (opt) { return (React.createElement("button", { key: opt.label, onClick: function () { return onSelect(opt.value); }, className: "group relative px-6 py-4 rounded-xl text-left transition-all duration-200 " + (value === opt.value
                        ? "bg-accent text-white"
                        : "bg-white/5 hover:bg-white/10") },
                    React.createElement("span", { className: "font-medium" }, opt.label),
                    React.createElement("div", { className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-accent/20 to-transparent" }))); }))))));
};
