"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
var next_intl_1 = require("next-intl");
function ExportHero() {
    var t = next_intl_1.useTranslations("exportHero");
    return (React.createElement("section", { className: "relative h-[72vh] min-h-[520px] max-h-[720px] flex items-center overflow-hidden" },
        React.createElement(image_1["default"], { src: "/images/exporthome.jpg", alt: "African export processing facility", fill: true, priority: true, className: "object-cover" }),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" }),
        React.createElement("div", { className: "absolute -left-40 top-20 w-[500px] h-[500px] bg-[var(--color-accent-soft)] opacity-[0.15] blur-[140px] rounded-full" }),
        React.createElement("div", { className: "relative max-w-7xl mx-auto px-6 w-full" },
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 25 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, className: "max-w-2xl space-y-8 text-white" },
                React.createElement("div", { className: "inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium" },
                    React.createElement("span", { className: "w-2 h-2 bg-[var(--color-accent)] rounded-full" }),
                    t("badge")),
                React.createElement("h1", { className: "text-4xl md:text-6xl xl:text-7xl font-semibold tracking-[-0.02em] leading-[1.05]" }, t("headline")),
                React.createElement("p", { className: "text-lg md:text-xl text-white/85 leading-relaxed" },
                    t("subhead"),
                    " ",
                    React.createElement("br", null),
                    t("subheadline")),
                React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 pt-2" },
                    React.createElement(link_1["default"], { href: "/suppliers/programs/export-readiness", className: "btn-primary px-8 py-4 rounded-xl shadow-xl text-center" }, t("checkReadiness")),
                    React.createElement(link_1["default"], { href: "/suppliers/academy", className: "px-8 py-4 mb-4 rounded-xl border border-white/40 text-white hover:bg-white hover:text-[var(--color-secondary)] transition-all text-center" }, t("secondaryCta")))))));
}
exports["default"] = ExportHero;
