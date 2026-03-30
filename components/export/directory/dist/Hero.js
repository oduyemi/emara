"use client";
"use strict";
exports.__esModule = true;
exports.DirectoryHero = void 0;
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var next_intl_1 = require("next-intl");
var CountUp = function (_a) {
    var value = _a.value;
    var _b = react_1.useState(0), count = _b[0], setCount = _b[1];
    react_1.useEffect(function () {
        var start = 0;
        var duration = 900;
        var increment = value / (duration / 16);
        var counter = setInterval(function () {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(counter);
            }
            else {
                setCount(Math.floor(start));
            }
        }, 16);
        return function () { return clearInterval(counter); };
    }, [value]);
    return React.createElement("span", null, count);
};
exports.DirectoryHero = function () {
    var t = next_intl_1.useTranslations("DirectoryHero");
    var stats = [
        { value: 400, label: t("stats.verifiedSuppliers") },
        { value: 220, label: t("stats.goldMembers") },
        { value: 115, label: t("stats.eliteExporters") },
        { value: 18, label: t("stats.productCategories") },
    ];
    return (React.createElement("section", { className: "relative w-full min-h-[60vh] flex items-center overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 -z-30 overflow-hidden" },
            React.createElement(image_1["default"], { src: "/images/bb1.jpg", alt: t("imageAlt"), fill: true, priority: true, className: "object-cover scale-110 blur-[10px] brightness-[0.97]" })),
        React.createElement("div", { className: "absolute inset-0 -z-20 bg-gradient-to-b from-black/60 via-[#0A0F18]/70 to-black/85" }),
        React.createElement("div", { className: "relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-20" },
            React.createElement(framer_motion_1.motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl" },
                t("headline.prefix"),
                " ",
                React.createElement("span", { className: "bg-gradient-to-r from-[#2E7C99] to-[#C24E00] bg-clip-text text-transparent" }, t("headline.highlight"))),
            React.createElement(framer_motion_1.motion.p, { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15, duration: 0.6 }, className: "mt-5 text-white text-lg max-w-xl" }, t("description")),
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3, duration: 0.6 }, className: "mt-10 max-w-2xl" },
                React.createElement("form", { className: "relative" },
                    React.createElement("div", { className: "flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden focus-within:border-[#2E7C99]/50 transition-all" },
                        React.createElement(lucide_react_1.Search, { className: "ml-4 text-white/40", size: 18 }),
                        React.createElement("input", { type: "text", placeholder: t("search.placeholder"), className: "flex-1 px-4 py-4 bg-transparent text-white placeholder-white/40 focus:outline-none text-sm" }),
                        React.createElement("button", { type: "submit", className: "px-6 py-4 bg-gradient-to-r from-[#2E7C99] to-[#C24E00] text-white text-sm font-semibold hover:opacity-90 transition" }, t("search.button"))))),
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.45, duration: 0.6 }, className: "mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl" }, stats.map(function (stat, i) { return (React.createElement("div", { key: i, className: "border border-white/10 bg-white/5 backdrop-blur-xl rounded-xl p-6" },
                React.createElement("div", { className: "text-3xl font-semibold text-white" },
                    React.createElement(CountUp, { value: stat.value }),
                    "+"),
                React.createElement("div", { className: "mt-1 text-xs uppercase tracking-wider text-white/50" }, stat.label))); })))));
};
