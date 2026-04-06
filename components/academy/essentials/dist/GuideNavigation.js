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
    return (React.createElement("section", { className: "py-24 relative overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" }),
        React.createElement("div", { className: "max-w-6xl mx-auto px-6 relative" },
            React.createElement("div", { className: "mb-14 text-center" },
                React.createElement("p", { className: "text-xs uppercase tracking-[0.35em] text-accent mb-3" }, "Guide Navigation"),
                React.createElement("h2", { className: "text-3xl font-semibold text-secondary" }, t("title"))),
            React.createElement("div", { className: "flex flex-wrap gap-4 justify-center" }, modules.map(function (item, i) {
                var isActive = active === i;
                return (React.createElement(framer_motion_1.motion.button, { key: i, onClick: function () { return setActive(i); }, whileHover: { y: -4 }, whileTap: { scale: 0.96 }, className: "relative group" },
                    React.createElement("div", { className: "\n                    p-[1.5px] rounded-full\n                    bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40\n                    transition-all duration-300\n                    " + (isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100") + "\n                  " },
                        React.createElement("div", { className: "\n                      px-6 py-3 rounded-full text-sm whitespace-nowrap\n                      backdrop-blur-xl\n                      transition-all duration-300\n                      \n                      " + (isActive
                                ? "\n                            bg-white/90 text-secondary\n                            shadow-[0_10px_30px_rgba(0,0,0,0.08)]\n                          "
                                : "\n                            bg-white/60 text-gray-600\n                            shadow-[0_4px_12px_rgba(0,0,0,0.05)]\n                            group-hover:bg-white/80\n                          ") + "\n                    " },
                            isActive && (React.createElement("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-md" })),
                            React.createElement("span", { className: "relative z-10" }, item)))));
            })))));
};
