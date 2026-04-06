"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var framer_motion_1 = require("framer-motion");
function FeaturedMarketInsights() {
    var t = next_intl_1.useTranslations("marketProfiles.insights");
    var insights = [
        {
            title: "Demand Trends",
            text: t("demand"),
            icon: "📈",
            color: "from-blue-400 to-indigo-500"
        },
        {
            title: "Regulatory Landscape",
            text: t("regulations"),
            icon: "📜",
            color: "from-purple-400 to-pink-500"
        },
        {
            title: "Buyer Behavior",
            text: t("buyers"),
            icon: "🛒",
            color: "from-emerald-400 to-teal-500"
        },
    ];
    return (React.createElement("section", { className: "relative py-28 overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" }),
        React.createElement("div", { className: "max-w-6xl mx-auto px-6 relative" },
            React.createElement("div", { className: "text-center mb-16" },
                React.createElement("p", { className: "text-xs uppercase tracking-[0.3em] text-accent mb-3" }, "Insights"),
                React.createElement("h2", { className: "text-3xl md:text-4xl font-semibold text-secondary" }, t("title")),
                React.createElement("p", { className: "mt-4 text-muted max-w-2xl mx-auto text-sm md:text-base" }, "Key signals shaping global opportunities \u2014 before diving into markets.")),
            React.createElement("div", { className: "grid md:grid-cols-3 gap-10" }, insights.map(function (item, i) { return (React.createElement(framer_motion_1.motion.div, { key: item.title, initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: i * 0.1 }, viewport: { once: true }, whileHover: { y: -6 }, className: "relative group rounded-2xl overflow-hidden" },
                React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br " + item.color + " opacity-0 group-hover:opacity-100 transition" }),
                React.createElement("div", { className: "relative bg-white/80 backdrop-blur border border-white/40 rounded-2xl p-6 h-full shadow-sm group-hover:shadow-xl transition" },
                    React.createElement("div", { className: "text-3xl mb-4" }, item.icon),
                    React.createElement("h3", { className: "text-lg font-semibold text-secondary mb-2" }, item.title),
                    React.createElement("p", { className: "text-muted text-sm leading-relaxed" }, item.text)))); })))));
}
exports["default"] = FeaturedMarketInsights;
