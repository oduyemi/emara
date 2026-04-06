"use client";
"use strict";
exports.__esModule = true;
exports.SuppliersPathways = void 0;
var link_1 = require("next/link");
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var next_intl_1 = require("next-intl");
var react_1 = require("react");
exports.SuppliersPathways = function () {
    var t = next_intl_1.useTranslations("suppliersPathways");
    return (React.createElement("section", { className: "relative px-6 pb-36 -mt-32 z-20" },
        React.createElement("div", { className: "absolute inset-0 overflow-hidden pointer-events-none" },
            React.createElement("div", { className: "absolute top-[-250px] left-[5%] w-[700px] h-[700px] bg-[var(--color-accent-soft)]/20 blur-[200px] rounded-full" }),
            React.createElement("div", { className: "absolute bottom-[-250px] right-[5%] w-[700px] h-[700px] bg-[var(--color-surface)]/20 blur-[200px] rounded-full" })),
        React.createElement("div", { className: "max-w-7xl mx-auto relative" },
            React.createElement("div", { className: "relative backdrop-blur-xl bg-white/80 border border-[var(--color-surface-border)] rounded-[40px] shadow-[0_60px_140px_-40px_rgba(0,0,0,0.25)] p-10 md:p-14" },
                React.createElement("div", { className: "grid lg:grid-cols-3 gap-10" },
                    React.createElement(PathCard, { image: "/images/learnexport.jpg", title: t("academy.title"), desc: t("academy.desc"), link: "/suppliers/academy/roadmap", cta: t("academy.cta"), accent: "var(--color-accent-soft)" }),
                    React.createElement(PathCard, { image: "/images/foodevent.jpg", title: t("events.title"), desc: t("events.desc"), link: "/suppliers/events", cta: t("events.cta"), accent: "var(--color-accent)", featured: true }),
                    React.createElement(PathCard, { image: "/images/how.jpg", title: t("platform.title"), desc: t("platform.desc"), link: "/suppliers/register", cta: t("platform.cta"), accent: "var(--color-primary)" }))))));
};
var PathCard = function (_a) {
    var image = _a.image, title = _a.title, desc = _a.desc, link = _a.link, cta = _a.cta, accent = _a.accent, featured = _a.featured;
    var ref = react_1.useRef(null);
    var x = framer_motion_1.useMotionValue(0);
    var y = framer_motion_1.useMotionValue(0);
    var rotateX = framer_motion_1.useTransform(y, [-100, 100], [6, -6]);
    var rotateY = framer_motion_1.useTransform(x, [-100, 100], [-6, 6]);
    var handleMouseMove = function (e) {
        var _a;
        var rect = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!rect)
            return;
        var px = e.clientX - rect.left - rect.width / 2;
        var py = e.clientY - rect.top - rect.height / 2;
        x.set(px);
        y.set(py);
    };
    var handleLeave = function () {
        x.set(0);
        y.set(0);
    };
    return (React.createElement(framer_motion_1.motion.div, { ref: ref, onMouseMove: handleMouseMove, onMouseLeave: handleLeave, style: {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1200
        }, className: "group relative rounded-3xl overflow-hidden cursor-pointer " + (featured ? "lg:scale-[1.07]" : "") },
        React.createElement("div", { className: "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700", style: {
                background: "linear-gradient(120deg, transparent, " + accent + "50, transparent)"
            } }),
        React.createElement(framer_motion_1.motion.div, { className: "relative h-[440px] overflow-hidden rounded-3xl", style: {
                x: framer_motion_1.useTransform(x, [-100, 100], [-10, 10]),
                y: framer_motion_1.useTransform(y, [-100, 100], [-10, 10])
            } },
            React.createElement(image_1["default"], { src: image, alt: title, fill: true, className: "object-cover scale-110 group-hover:scale-125 transition duration-[1400ms]" }),
            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" })),
        React.createElement(framer_motion_1.motion.div, { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500", style: {
                background: framer_motion_1.useTransform(x, [-200, 200], [
                    "radial-gradient(circle at 20% 20%, " + accent + "50, transparent)",
                    "radial-gradient(circle at 80% 80%, " + accent + "50, transparent)"
                ])
            } }),
        React.createElement("div", { className: "absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-white shadow-xl" },
            React.createElement("h3", { className: "text-xl font-semibold mb-2" }, title),
            React.createElement("p", { className: "text-sm text-white/80 mb-5 leading-relaxed" }, desc),
            React.createElement(link_1["default"], { href: link, className: "inline-flex items-center gap-2 text-sm font-medium btn-primary text-secondary px-4 py-2 rounded-full hover:scale-105 transition" },
                cta,
                React.createElement(lucide_react_1.ArrowRight, { size: 16 })))));
};
