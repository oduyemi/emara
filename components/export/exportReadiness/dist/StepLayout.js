"use client";
"use strict";
exports.__esModule = true;
exports.StepLayout = void 0;
var framer_motion_1 = require("framer-motion");
exports.StepLayout = function (_a) {
    var title = _a.title, questions = _a.questions, onAnswer = _a.onAnswer, answers = _a.answers;
    var OPTIONS = [
        { label: "Very High", value: 5 },
        { label: "High", value: 4 },
        { label: "Indifferent", value: 3 },
        { label: "Low", value: 2 },
        { label: "Very Low", value: 1 },
    ];
    return (React.createElement("div", null,
        React.createElement("h2", { className: "text-3xl font-semibold mb-10 text-gray-900" }, title),
        React.createElement("div", { className: "space-y-8" }, questions.map(function (q, i) { return (React.createElement("div", { key: i },
            React.createElement("p", { className: "mb-4 text-lg text-gray-700" }, q),
            React.createElement("div", { className: "grid grid-cols-5 gap-3" }, OPTIONS.map(function (opt) {
                var active = answers[q] === opt.value;
                return (React.createElement("button", { key: opt.label, onClick: function () { return onAnswer(q, opt.value); }, className: "relative py-3 rounded-lg text-sm font-medium transition-all " + (active
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200") },
                    active && (React.createElement(framer_motion_1.motion.div, { layoutId: "active-pill", initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.25 }, className: "absolute inset-0 rounded-lg bg-green-500/20" })),
                    opt.label));
            })))); }))));
};
