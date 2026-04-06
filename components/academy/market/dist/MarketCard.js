"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var framer_motion_1 = require("framer-motion");
function MarketCard(_a) {
    var name = _a.name, desc = _a.desc, color = _a.color, icon = _a.icon;
    var t = next_intl_1.useTranslations("marketCountryProfiles");
    return (React.createElement(framer_motion_1.motion.div, { whileHover: { y: -8, scale: 1.02 }, transition: { type: "spring", stiffness: 200, damping: 15 }, className: "relative rounded-2xl overflow-hidden group" },
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br " + color + " opacity-90 group-hover:opacity-100 transition" }),
        React.createElement("div", { className: "absolute inset-0 bg-black/40 backdrop-blur-sm" }),
        React.createElement("div", { className: "relative p-6 h-full flex flex-col justify-between min-h-[220px]" },
            React.createElement("div", null,
                React.createElement("div", { className: "flex items-center justify-between mb-4" },
                    React.createElement("span", { className: "text-2xl" }, icon),
                    React.createElement("span", { className: "text-[10px] uppercase tracking-widest text-white/70" }, "Market")),
                React.createElement("h3", { className: "text-xl font-semibold text-white mb-2 leading-snug" }, name),
                React.createElement("p", { className: "text-white/80 text-sm leading-relaxed line-clamp-3" }, desc)),
            React.createElement("button", { className: "mt-6 self-start text-sm px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur transition" },
                t("cta"),
                " \u2192"))));
}
exports["default"] = MarketCard;
