"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ExportReadinessForm = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var question_1 = require("./question");
var StepLayout_1 = require("./StepLayout");
var Fields_1 = require("./Fields");
var next_intl_1 = require("next-intl");
exports.ExportReadinessForm = function () {
    var t = next_intl_1.useTranslations("ReadinessForm");
    var _a = react_1.useState("intro"), mode = _a[0], setMode = _a[1];
    var _b = react_1.useState({}), formData = _b[0], setFormData = _b[1];
    var _c = react_1.useState({}), answers = _c[0], setAnswers = _c[1];
    var _d = react_1.useState(0), stepIndex = _d[0], setStepIndex = _d[1];
    var currentStep = question_1.STEPS[stepIndex];
    var handleAnswer = function (id, value) {
        setAnswers(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[id] = value, _a)));
        });
    };
    var isStepComplete = currentStep === null || currentStep === void 0 ? void 0 : currentStep.questions.every(function (q) { return answers[q.id] !== undefined; });
    var progress = mode === "questions"
        ? (stepIndex / question_1.STEPS.length) * 100
        : 0;
    var next = function () {
        if (mode === "intro") {
            setMode("questions");
            return;
        }
        if (!isStepComplete)
            return;
        if (stepIndex < question_1.STEPS.length - 1) {
            setStepIndex(function (i) { return i + 1; });
        }
        else {
            setMode("result");
        }
    };
    var prev = function () {
        if (mode === "questions" && stepIndex === 0) {
            setMode("intro");
            return;
        }
        setStepIndex(function (i) { return i - 1; });
    };
    var totalScore = Object.values(answers).reduce(function (sum, val) { return sum + val; }, 0);
    var maxScore = Object.keys(answers).length * 5;
    var percentage = maxScore === 0 ? 0 : Math.round((totalScore / maxScore) * 100);
    return (React.createElement("div", { className: "min-h-screen bg-white flex flex-col relative overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 pointer-events-none bg-gradient-to-br from-green-50 via-white to-emerald-50 opacity-10" }),
        React.createElement("div", { className: "relative z-10 px-6 py-4 border-b flex justify-between" },
            React.createElement("h1", { className: "font-semibold" }, t("header.title")),
            React.createElement("div", { className: "text-sm text-gray-400" }, mode === "questions" &&
                stepIndex + 1 + " / " + question_1.STEPS.length)),
        mode === "questions" && (React.createElement("div", { className: "h-[3px] bg-gray-100" },
            React.createElement(framer_motion_1.motion.div, { className: "h-full bg-gradient-to-r from-green-500 to-emerald-400", initial: { width: 0 }, animate: { width: progress + "%" } }))),
        React.createElement("div", { className: "flex-1 flex items-center justify-center px-4 py-12" },
            React.createElement("div", { className: "w-full max-w-3xl" },
                React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
                    mode === "intro" && (React.createElement(framer_motion_1.motion.div, { key: "intro", initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -40 }, className: "bg-white border rounded-2xl p-8 shadow-xl" },
                        React.createElement("h2", { className: "text-3xl font-bold mb-4" }, t("intro.title")),
                        React.createElement(Fields_1.StepOneFields, { data: formData, setData: setFormData }),
                        React.createElement("div", { className: "flex justify-end" },
                            React.createElement("button", { onClick: next, className: "mt-6 px-6 py-3 rounded-xl btn-primary" }, t("intro.cta"))))),
                    mode === "questions" && (React.createElement(framer_motion_1.motion.div, { key: stepIndex, initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -40 }, className: "bg-white border rounded-2xl p-10 shadow-xl" },
                        React.createElement(StepLayout_1.StepLayout, { title: currentStep.title, questions: currentStep.questions, answers: answers, onAnswer: handleAnswer, stepIndex: stepIndex, totalSteps: question_1.STEPS.length }),
                        React.createElement("div", { className: "flex justify-between mt-10" },
                            React.createElement("button", { onClick: prev, className: "text-gray-500" },
                                "\u2190 ",
                                t("navigation.back")),
                            React.createElement("button", { onClick: next, disabled: !isStepComplete, className: "px-6 py-3 rounded-xl btn-primary disabled:opacity-40" }, t("navigation.continue"))))),
                    mode === "result" && (React.createElement(framer_motion_1.motion.div, { key: "result", className: "text-center" },
                        React.createElement("h2", { className: "text-2xl mb-4" }, t("result.title")),
                        React.createElement("div", { className: "text-6xl font-bold text-green-500" },
                            percentage,
                            "%"),
                        React.createElement("p", { className: "mt-4 text-gray-600" }, t("result.title")))))))));
};
