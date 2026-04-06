"use client";
"use strict";
exports.__esModule = true;
exports.ConsultationHero = void 0;
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
var next_intl_1 = require("next-intl");
exports.ConsultationHero = function () {
    var t = next_intl_1.useTranslations("ConsultationHero");
    return (React.createElement("section", { className: "relative min-h-[720px] flex items-center justify-center px-6 overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 bg-cover bg-center", style: {
                backgroundImage: "url('/images/sea.jpg')"
            } }),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-[#0F233F]/90 via-[#0F233F]/80 to-[#0F233F]/70" }),
        React.createElement("div", { className: "absolute -top-40 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" }),
        React.createElement("div", { className: "absolute bottom-[-120px] right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" }),
        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, className: "relative max-w-5xl mx-auto text-center" },
            React.createElement("p", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-6" }, t("label")),
            React.createElement("h1", { className: "text-4xl md:text-6xl font-semibold text-white leading-tight mb-6" },
                t("headline"),
                React.createElement("span", { className: "block text-accent" }, t("headlineHighlight"))),
            React.createElement("p", { className: "text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-10" }, t("description")),
            React.createElement("div", { className: "flex flex-col sm:flex-row justify-center gap-4" },
                React.createElement(link_1["default"], { href: "#book-session", className: "px-8 py-3 btn-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition shadow-lg" }, t("ctaBook"))))));
};
