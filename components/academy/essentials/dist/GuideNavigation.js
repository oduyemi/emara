"use client";
"use strict";
exports.__esModule = true;
exports.GuideNavigation = void 0;
var next_intl_1 = require("next-intl");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
exports.GuideNavigation = function () {
    var t = next_intl_1.useTranslations("essentials.navigation");
    var modules = t.raw("modules");
    var _a = react_1.useState(0), active = _a[0], setActive = _a[1];
    return (React.createElement("section", { className: "py-32 relative overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" }),
        React.createElement("div", { className: "max-w-6xl mx-auto px-6 relative" },
            React.createElement("div", { className: "mb-20 text-center" },
                React.createElement("p", { className: "text-xs uppercase tracking-[0.45em] text-accent mb-3" }, "Guide Navigation"),
                React.createElement("h2", { className: "text-3xl md:text-4xl font-semibold text-secondary" }, t("title"))),
            React.createElement("div", { className: "relative" },
                React.createElement("div", { className: "absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" }),
                React.createElement("div", { className: "flex flex-wrap justify-center gap-6 relative" }, modules.map(function (item, i) {
                    var isActive = active === i;
                    return (React.createElement(framer_motion_1.motion.button, { key: i, onClick: function () { return setActive(i); }, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.05 }, whileHover: { y: -8, scale: 1.03 }, whileTap: { scale: 0.96 }, className: "relative group" },
                        React.createElement("div", { className: "\n                      absolute -inset-[3px] rounded-full blur-xl\n                      bg-gradient-to-r from-primary via-accent to-primary\n                      transition duration-500\n                      " + (isActive
                                ? "opacity-80"
                                : "opacity-0 group-hover:opacity-50") + "\n                    " }),
                        React.createElement("div", { className: "\n                      relative z-10 px-6 py-4 rounded-full\n                      backdrop-blur-xl border\n                      transition-all duration-300\n                      max-w-[260px]\n\n                      " + (isActive
                                ? "\n                            bg-white text-secondary\n                            border-white/70\n                            shadow-[0_20px_60px_rgba(0,0,0,0.15)]\n                            scale-105\n                          "
                                : "\n                            bg-white/70 text-gray-600\n                            border-white/40\n                            shadow-[0_6px_20px_rgba(0,0,0,0.06)]\n                            group-hover:bg-white\n                          ") + "\n                    " },
                            React.createElement("div", { className: "\n                        text-[10px] uppercase tracking-widest mb-1\n                        " + (isActive
                                    ? "text-accent"
                                    : "text-gray-400") + "\n                      " },
                                "Module ",
                                i + 1),
                            React.createElement("div", { className: "text-sm leading-snug font-medium" }, item),
                            isActive && (React.createElement(framer_motion_1.motion.div, { className: "absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary", animate: {
                                    scale: [1, 1.4, 1],
                                    opacity: [1, 0.6, 1]
                                }, transition: {
                                    duration: 1.5,
                                    repeat: Infinity
                                } })))));
                }))))));
};
