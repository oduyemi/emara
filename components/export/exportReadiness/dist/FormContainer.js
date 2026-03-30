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
var RadioScale_1 = require("./RadioScale");
var question_1 = require("./question");
var Fields_1 = require("./Fields");
exports.ExportReadinessForm = function () {
    var _a = react_1.useState("intro"), mode = _a[0], setMode = _a[1];
    var _b = react_1.useState({}), formData = _b[0], setFormData = _b[1];
    var _c = react_1.useState({}), answers = _c[0], setAnswers = _c[1];
    var _d = react_1.useState(0), index = _d[0], setIndex = _d[1];
    var _e = react_1.useState(false), error = _e[0], setError = _e[1];
    var allQuestions = react_1.useMemo(function () {
        return question_1.STEPS.flatMap(function (step) {
            return step.questions.map(function (q) { return (__assign(__assign({}, q), { stepTitle: step.title })); });
        });
    }, []);
    var current = allQuestions[index];
    var isAnswered = answers[current === null || current === void 0 ? void 0 : current.id] !== undefined;
    var progress = mode === "intro"
        ? 0
        : (index / allQuestions.length) * 100;
    var handleAnswer = function (value) {
        setAnswers(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[current.id] = value, _a)));
        });
    };
    var next = function () {
        if (mode === "intro") {
            // validate intro form
            var requiredFields = [
                "Full Name",
                "Email",
                "Company Name",
                "Company Address",
                "City",
                "State",
                "Country",
                "Phone Number",
            ];
            var isValid = requiredFields.every(function (field) { return formData[field] && formData[field].trim() !== ""; });
            if (!isValid) {
                setError(true);
                setTimeout(function () { return setError(false); }, 500);
                return;
            }
            setMode("questions");
            return;
        }
        if (!isAnswered) {
            setError(true);
            setTimeout(function () { return setError(false); }, 400);
            return;
        }
        if (index < allQuestions.length - 1) {
            setIndex(function (i) { return i + 1; });
        }
        else {
            setMode("result");
        }
    };
    var prev = function () {
        if (mode === "questions" && index === 0) {
            setMode("intro");
            return;
        }
        if (index > 0) {
            setIndex(function (i) { return i - 1; });
        }
    };
    var totalScore = Object.values(answers).reduce(function (sum, val) { return sum + val; }, 0);
    var maxScore = allQuestions.length * 5;
    var percentage = maxScore === 0 ? 0 : Math.round((totalScore / maxScore) * 100);
    return (React.createElement("div", { className: "min-h-screen bg-white flex flex-col relative overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 pointer-events-none" },
            React.createElement("div", { className: "absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-200 rounded-full blur-3xl opacity-30" }),
            React.createElement("div", { className: "absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-emerald-300 rounded-full blur-3xl opacity-30" })),
        React.createElement("div", { className: "relative z-10 px-6 py-4 border-b border-gray-100 flex justify-between items-center" },
            React.createElement("div", null,
                React.createElement("h1", { className: "font-semibold text-gray-900" }, "Export Readiness"),
                React.createElement("p", { className: "text-xs text-muted" }, "From local supply \u2192 global markets")),
            React.createElement("div", { className: "text-sm text-gray-400" }, mode === "intro"
                ? "Start"
                : mode === "result"
                    ? "Done"
                    : index + 1 + " / " + allQuestions.length)),
        React.createElement("div", { className: "relative z-10 h-[3px] bg-gray-100" },
            React.createElement(framer_motion_1.motion.div, { className: "h-full bg-gradient-to-r from-green-500 to-emerald-400", animate: { width: progress + "%" }, transition: { duration: 0.3 } })),
        error && (React.createElement("div", { className: "text-center mt-4" },
            React.createElement("p", { className: "text-sm text-red-500 font-medium" }, "Please complete all required fields before continuing"))),
        React.createElement("div", { className: "relative z-10 flex-1 flex items-center justify-center px-4 py-12" },
            React.createElement("div", { className: "w-full max-w-2xl" },
                React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
                    mode === "intro" && (React.createElement(framer_motion_1.motion.div, { key: "intro", initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -40 }, className: "bg-white border border-gray-100 rounded-2xl p-8 shadow-xl" },
                        React.createElement("div", { className: "text-center mb-8" },
                            React.createElement("h2", { className: "text-3xl font-bold text-gray-900" }, "Take Your Business Global"),
                            React.createElement("p", { className: "text-muted mt-3" }, "Discover your export readiness and unlock global opportunities.")),
                        React.createElement(Fields_1.StepOneFields, { data: formData, setData: setFormData }),
                        React.createElement("div", { className: "mt-8 flex justify-end" },
                            React.createElement("button", { onClick: next, className: "btn-primary px-6 py-3 rounded-xl shadow-md" }, "Start Assessment \u2192")))),
                    mode === "questions" && current && (React.createElement(framer_motion_1.motion.div, { key: index, initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -40 }, className: "bg-white border border-gray-100 rounded-2xl p-10 shadow-xl" },
                        React.createElement("p", { className: "text-xs font-medium text-accent mb-3 uppercase" }, current.stepTitle),
                        React.createElement("h2", { className: "text-2xl font-semibold text-muted mb-10" }, current.text),
                        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-5 gap-3" }, RadioScale_1.SCALE_OPTIONS.map(function (opt) {
                            var active = answers[current.id] === opt.value;
                            return (React.createElement(framer_motion_1.motion.button, { key: opt.value, whileHover: { y: -2 }, whileTap: { scale: 0.96 }, onClick: function () { return handleAnswer(opt.value); }, className: "px-4 py-4 rounded-xl border text-sm font-medium transition\n                          " + (active
                                    ? "bg-red-900 text-white border-accent"
                                    : "bg-white border-gray-200 hover:border-gray-400") }, opt.label));
                        })),
                        React.createElement("div", { className: "flex justify-between mt-10 text-sm text-gray-400" },
                            React.createElement("button", { onClick: prev }, "\u2190 Back"),
                            React.createElement("button", { onClick: next, className: "hover:text-gray-700" }, "Next \u2192")))),
                    mode === "result" && (React.createElement(framer_motion_1.motion.div, { key: "result", initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-center" },
                        React.createElement("p", { className: "text-gray-500 mb-2" }, "Your Export Readiness Score"),
                        React.createElement("div", { className: "text-6xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text" },
                            percentage,
                            "%"),
                        React.createElement("p", { className: "mt-4 text-gray-600" }, "You're on your way to becoming a global exporter."))))))));
};
