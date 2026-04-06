"use client";
"use strict";
exports.__esModule = true;
exports.ExportReadinessHero = void 0;
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var next_intl_1 = require("next-intl");
exports.ExportReadinessHero = function () {
    var t = next_intl_1.useTranslations("exportReadinessHero");
    return (React.createElement("section", { className: "relative min-h-[520px] flex items-center px-6 overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 bg-cover bg-center scale-105", style: {
                backgroundImage: "url('/images/buy.jpg')"
            } }),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-b from-[#0F233F]/75 via-[#0F233F]/70 to-[#0F233F]/85" }),
        React.createElement("div", { className: "absolute -top-40 right-0 w-[700px] h-[700px] bg-accent/20 rounded-full blur-3xl opacity-40" }),
        React.createElement("div", { className: "absolute -bottom-40 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-30" }),
        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 35 }, animate: { opacity: 1, y: 0 }, transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }, className: "relative max-w-5xl mx-auto text-center text-white" },
            React.createElement("p", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-6" }, t("label")),
            React.createElement("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight" }, t("title")),
            React.createElement("p", { className: "text-white/85 max-w-2xl mx-auto leading-relaxed mb-10" }, t("description")),
            React.createElement(link_1["default"], { href: "#assessment", className: "group inline-flex items-center px-8 py-3 rounded-lg btn-primary text-sm font-medium text-white hover:shadow-lg transition" },
                React.createElement(lucide_react_1.ClipboardCheck, { className: "mr-2", size: 16 }),
                t("cta"),
                React.createElement("span", { className: "ml-2 transition group-hover:translate-x-1" }, "\u2192")))));
};
