"use client";
"use strict";
exports.__esModule = true;
exports.EventsHero = void 0;
var framer_motion_1 = require("framer-motion");
var link_1 = require("next/link");
var next_intl_1 = require("next-intl");
exports.EventsHero = function () {
    var t = next_intl_1.useTranslations("EventsHero");
    return (React.createElement("section", { className: "relative min-h-[90vh] flex items-center px-6 overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 bg-cover bg-center scale-105", style: {
                backgroundImage: "url('/images/eventshero.jpg')"
            } }),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-[#0A2540]/80 via-[#0F3A5D]/70 to-[#1E5F8C]/60" }),
        React.createElement("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(79,209,197,0.15),transparent_40%)]" }),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" }),
        React.createElement("div", { className: "absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-40" }),
        React.createElement("div", { className: "absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl opacity-40" }),
        React.createElement("div", { className: "absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" }),
        React.createElement("div", { className: "relative max-w-6xl mx-auto w-full text-white" },
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "max-w-3xl" },
                React.createElement("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-6" }, t("label")),
                React.createElement("h1", { className: "text-4xl md:text-6xl font-semibold leading-tight mb-6" },
                    t("title"),
                    React.createElement("span", { className: "block text-gray-400 bg-clip-text bg-gradient-to-r from-accent to-[#4FD1C5]" }, t("highlight"))),
                React.createElement("p", { className: "text-lg text-blue-100/90 mb-10 leading-relaxed" }, t("description")),
                React.createElement("div", { className: "flex flex-wrap gap-4" },
                    React.createElement(link_1["default"], { href: "#events" },
                        React.createElement("button", { className: "px-8 py-4 btn-primary rounded-xl font-medium hover:opacity-90 transition shadow-xl shadow-accent/30" }, t("cta")))))),
        React.createElement("div", { className: "absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A2540] to-transparent" })));
};
