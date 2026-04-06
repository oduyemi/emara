"use client";
"use strict";
exports.__esModule = true;
exports.StepLayout = void 0;
var framer_motion_1 = require("framer-motion");
var next_intl_1 = require("next-intl");
var OPTIONS = [
    { label: "Very High", value: 5 },
    { label: "High", value: 4 },
    { label: "Indifferent", value: 3 },
    { label: "Low", value: 2 },
    { label: "Very Low", value: 1 },
];
exports.StepLayout = function (_a) {
    var title = _a.title, questions = _a.questions, answers = _a.answers, onAnswer = _a.onAnswer, stepIndex = _a.stepIndex, totalSteps = _a.totalSteps;
    var t = next_intl_1.useTranslations("ReadinessForm.stepLayout");
    return (React.createElement("div", null,
        React.createElement("div", { className: "mb-10" },
            React.createElement("p", { className: "text-xs uppercase tracking-wider text-green-600 font-medium mb-2" }, t("step", { current: stepIndex + 1, total: totalSteps })),
            React.createElement("h2", { className: "text-3xl font-semibold text-gray-900" }, title),
            React.createElement("p", { className: "text-sm text-gray-500 mt-2" }, t("instruction"))),
        React.createElement("div", { className: "max-h-[70vh] overflow-y-auto pr-2 space-y-6" }, questions.map(function (q) { return (React.createElement("div", { key: q.id, className: "p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition" },
            React.createElement("div", { className: "flex justify-between mb-2" },
                React.createElement("span", { className: "text-xs text-gray-400" }, t("questionLabel")),
                answers[q.id] && (React.createElement("span", { className: "text-xs text-green-500" },
                    "\u2713 ",
                    t("answered")))),
            React.createElement("p", { className: "mb-5 text-base font-medium text-gray-800" }, q.text),
            React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-3" }, OPTIONS.map(function (opt) {
                var active = answers[q.id] === opt.value;
                return (React.createElement("button", { key: opt.label, onClick: function () { return onAnswer(q.id, opt.value); }, className: "relative py-3 rounded-xl text-sm font-medium border transition-all\n                      " + (active
                        ? "btn-primary border-transparent shadow-md"
                        : "bg-gray-50 border-gray-200 hover:border-gray-400 hover:bg-white") },
                    active && (React.createElement(framer_motion_1.motion.div, { layoutId: "active-" + q.id, className: "absolute inset-0 rounded-xl bg-white/10" })),
                    opt.label));
            })))); }))));
};
