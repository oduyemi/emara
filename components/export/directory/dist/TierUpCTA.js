"use client";
"use strict";
exports.__esModule = true;
exports.TierUpCTA = void 0;
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var next_intl_1 = require("next-intl");
exports.TierUpCTA = function (_a) {
    var _b = _a.currentTier, currentTier = _b === void 0 ? "bronze" : _b;
    var t = next_intl_1.useTranslations("TierUpCTA");
    var tiers = ["bronze", "silver", "gold", "goldElite"];
    var currentIndex = tiers.indexOf(currentTier);
    var nextTier = tiers[currentIndex + 1];
    var progressPercent = (currentIndex / (tiers.length - 1)) * 100;
    return (React.createElement("section", { className: "relative overflow-hidden rounded-3xl p-[1px] mb-8 bg-gradient-to-br from-white/20 via-white/10 to-transparent shadow-[0_20px_80px_rgba(0,0,0,0.25)]" },
        React.createElement("div", { className: "absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 via-transparent to-emerald-400/20 blur-2xl opacity-40" }),
        React.createElement("div", { className: "relative rounded-3xl bg-gradient-to-br from-[#0F233F] to-[#132E57] p-10 backdrop-blur-xl" },
            React.createElement("div", { className: "absolute -top-40 right-[-120px] w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full" }),
            React.createElement("div", { className: "absolute -bottom-40 left-[-120px] w-[400px] h-[400px] bg-emerald-400/10 blur-3xl rounded-full" }),
            React.createElement("div", { className: "relative z-10 mb-12" },
                React.createElement("h2", { className: "text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight" }, t("header")),
                React.createElement("p", { className: "text-white/70 max-w-xl leading-relaxed" }, t("description"))),
            React.createElement("div", { className: "mb-14" },
                React.createElement("div", { className: "relative h-3 bg-white/10 rounded-full overflow-hidden" },
                    React.createElement(framer_motion_1.motion.div, { initial: { width: 0 }, animate: { width: progressPercent + "%" }, transition: { duration: 1, ease: "easeOut" }, className: "h-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full relative" },
                        React.createElement(framer_motion_1.motion.div, { animate: { opacity: [0.3, 0.8, 0.3] }, transition: { duration: 2, repeat: Infinity }, className: "absolute inset-0 bg-white/30 blur-md" })))),
            React.createElement("div", { className: "flex flex-wrap items-center gap-6 mb-14" }, tiers.map(function (tier, index) {
                var isCurrent = tier === currentTier;
                var isPassed = currentIndex > index;
                var isNext = currentIndex + 1 === index;
                var isLocked = currentIndex < index;
                return (React.createElement("div", { key: tier, className: "flex items-center gap-4" },
                    React.createElement(framer_motion_1.motion.div, { whileHover: { scale: 1.08 }, animate: isCurrent
                            ? { scale: [1, 1.05, 1] }
                            : {}, transition: { duration: 2, repeat: Infinity }, className: "\n                    relative px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 border\n                    " + (isCurrent
                            ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-xl border-transparent"
                            : "") + "\n                    " + (isPassed
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-400/30"
                            : "") + "\n                    " + (isNext
                            ? "bg-yellow-400/10 text-yellow-300 border-yellow-400/30"
                            : "") + "\n                    " + (isLocked
                            ? "bg-white/5 text-white/40 border-white/10"
                            : "") + "\n                  " },
                        isPassed && React.createElement(lucide_react_1.CheckCircle2, { size: 16 }),
                        isLocked && !isNext && React.createElement(lucide_react_1.Lock, { size: 16 }),
                        React.createElement("span", null, t("tiers." + tier)),
                        isCurrent && (React.createElement("span", { className: "text-xs opacity-80" }, t("current"))),
                        isCurrent && (React.createElement("div", { className: "absolute inset-0 rounded-full bg-yellow-400/30 blur-xl opacity-40" }))),
                    index < tiers.length - 1 && (React.createElement(framer_motion_1.motion.div, { animate: { x: [0, 6, 0] }, transition: { duration: 1.5, repeat: Infinity } },
                        React.createElement(lucide_react_1.ArrowRight, { size: 18, className: "text-white/40" })))));
            })),
            React.createElement("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6" },
                React.createElement("p", { className: "text-white/70 max-w-lg leading-relaxed" }, nextTier
                    ? t("ctaAdvance", { nextTier: t("tiers." + nextTier) })
                    : t("ctaMax")),
                nextTier && (React.createElement(framer_motion_1.motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.96 }, className: "relative overflow-hidden group btn-primary font-semibold px-8 py-3 rounded-xl shadow-lg" },
                    React.createElement("span", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition" },
                        React.createElement("span", { className: "absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shine_1.2s_linear]" })),
                    React.createElement("span", { className: "relative z-10" }, t("upgradeButton", {
                        nextTier: t("tiers." + nextTier)
                    }))))))));
};
