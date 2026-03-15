"use client";
"use strict";
exports.__esModule = true;
exports.ExportReadinessIntro = void 0;
var framer_motion_1 = require("framer-motion");
var next_intl_1 = require("next-intl");
var lucide_react_1 = require("lucide-react");
var container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.18 } }
};
var item = {
    hidden: { opacity: 0, y: 35 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
};
exports.ExportReadinessIntro = function () {
    var t = next_intl_1.useTranslations("exportReadinessIntro");
    var steps = [
        { key: "assessment", icon: React.createElement(lucide_react_1.FileCheck, { size: 26 }), number: "01" },
        { key: "score", icon: React.createElement(lucide_react_1.BarChart3, { size: 26 }), number: "02" },
        { key: "nextSteps", icon: React.createElement(lucide_react_1.Compass, { size: 26 }), number: "03" }
    ];
    return (React.createElement("section", { className: "relative py-28 px-6 bg-[#F7F9FC] overflow-hidden" },
        React.createElement("div", { className: "absolute -top-40 right-[-200px] w-[600px] h-[600px] bg-[var(--color-accent-soft)]/10 blur-[160px] rounded-full" }),
        React.createElement("div", { className: "absolute -bottom-40 left-[-200px] w-[600px] h-[600px] bg-[var(--color-primary)]/10 blur-[160px] rounded-full" }),
        React.createElement(framer_motion_1.motion.div, { variants: container, initial: "hidden", whileInView: "show", viewport: { once: true }, className: "max-w-7xl mx-auto relative" },
            React.createElement(framer_motion_1.motion.div, { variants: item, className: "text-center mb-20 max-w-2xl mx-auto" },
                React.createElement("p", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-4" }, t("label")),
                React.createElement("h2", { className: "text-3xl md:text-4xl font-semibold text-secondary mb-6" }, t("title")),
                React.createElement("p", { className: "text-muted leading-relaxed" }, t("description"))),
            React.createElement("div", { className: "relative grid md:grid-cols-3 gap-12 items-stretch" },
                React.createElement("div", { className: "hidden md:block absolute top-[90px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-surface-border)] to-transparent" }),
                steps.map(function (step) { return (React.createElement(Step, { key: step.key, icon: step.icon, number: step.number, title: t("steps." + step.key + ".title"), text: t("steps." + step.key + ".text") })); })))));
};
var Step = function (_a) {
    var icon = _a.icon, number = _a.number, title = _a.title, text = _a.text;
    return (React.createElement(framer_motion_1.motion.div, { variants: item, whileHover: { y: -10 }, transition: { duration: 0.35 }, className: "group relative bg-white border border-[var(--color-surface-border)] rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[var(--color-accent-soft)]/15 via-transparent to-[var(--color-primary)]/10" }),
        React.createElement("div", { className: "absolute -top-6 left-10 w-14 h-14 rounded-full bg-white border border-[var(--color-surface-border)] flex items-center justify-center text-sm font-semibold text-secondary shadow-md" }, number),
        React.createElement("div", { className: "relative w-14 h-14 rounded-xl bg-[var(--color-surface)] flex items-center justify-center text-secondary mb-7 shadow-sm group-hover:scale-110 transition" }, icon),
        React.createElement("h3", { className: "relative font-semibold text-secondary text-lg mb-3" }, title),
        React.createElement("p", { className: "relative text-muted text-sm leading-relaxed flex-1" }, text)));
};
