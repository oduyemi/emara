"use client";
"use strict";
exports.__esModule = true;
exports.Content = void 0;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var next_intl_1 = require("next-intl");
exports.Content = function () {
    var t = next_intl_1.useTranslations("Hero");
    var locale = next_intl_1.useLocale();
    var isRTL = ["ar"].includes(locale);
    var slides = [
        {
            highlight: t("slide1.highlight"),
            title: t("slide1.title"),
            description: t("slide1.description"),
            primary: { label: t("slide1.primaryCta"), href: "/buyers" },
            secondary: { label: t("slide1.secondaryCta"), href: "/suppliers" },
            image: "/images/hero1.jpg"
        },
        {
            highlight: t("slide2.highlight"),
            title: t("slide2.title"),
            description: t("slide2.description"),
            primary: { label: t("slide2.primaryCta"), href: "/buyers/register" },
            secondary: { label: t("slide2.secondaryCta"), href: "/suppliers/register" },
            image: "/images/hero2.jpg"
        },
        {
            highlight: t("slide3.highlight"),
            title: t("slide3.title"),
            description: t("slide3.description"),
            primary: { label: t("slide3.primaryCta"), href: "/suppliers/directory" },
            secondary: { label: t("slide3.secondaryCta"), href: "/suppliers/register" },
            image: "/images/hero3.jpg"
        },
    ];
    var _a = react_1.useState(0), index = _a[0], setIndex = _a[1];
    react_1.useEffect(function () {
        var interval = setInterval(function () {
            setIndex(function (prev) { return (prev + 1) % slides.length; });
        }, 8000);
        return function () { return clearInterval(interval); };
    }, [slides.length]);
    return (React.createElement("section", { className: "relative w-full overflow-hidden min-h-screen flex items-center" },
        React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
            React.createElement(framer_motion_1.motion.div, { key: index, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 1.2, ease: "easeInOut" }, className: "absolute inset-0" },
                React.createElement(framer_motion_1.motion.div, { initial: { scale: 1.05 }, animate: { scale: 1 }, transition: { duration: 8, ease: "easeOut" }, className: "absolute inset-0" },
                    React.createElement(image_1["default"], { src: slides[index].image, alt: slides[index].title, fill: true, priority: true, className: "object-cover" })),
                React.createElement("div", { className: "absolute inset-0", style: {
                        background: "\n                radial-gradient(circle at 20% 40%, rgba(255,87,10,0.08) 0%, transparent 50%),\n                linear-gradient(\n                  115deg,\n                  rgba(15,35,65,0.98) 0%,\n                  rgba(15,35,65,0.94) 45%,\n                  rgba(15,35,65,0.88) 75%,\n                  rgba(15,35,65,0.78) 100%\n                )\n              "
                    } }))),
        React.createElement("div", { className: "relative z-10 max-w-7xl mx-auto px-6 py-16 w-full" },
            React.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
                React.createElement(framer_motion_1.motion.div, { key: index + "-content", initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -24 }, transition: { duration: 0.8 }, className: "max-w-2xl text-white space-y-8 " + (isRTL ? "ml-auto text-right" : "") },
                    React.createElement("div", { className: "inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20" },
                        React.createElement("span", { className: "text-[11px] tracking-[0.4em] uppercase font-semibold text-accent" }, slides[index].highlight)),
                    React.createElement("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-semibold leading-[1.08] tracking-tight" }, slides[index].title),
                    React.createElement("p", { className: "text-sm sm:text-base md:text-lg text-white/75 leading-relaxed" }, slides[index].description),
                    React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 pt-4 " + (isRTL ? "justify-end" : "") },
                        React.createElement(link_1["default"], { href: slides[index].primary.href, className: "btn-primary inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-medium shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300" },
                            slides[index].primary.label,
                            isRTL ? (React.createElement(lucide_react_1.ArrowLeft, { size: 18 })) : (React.createElement(lucide_react_1.ArrowRight, { size: 18, className: "group-hover:translate-x-1 transition-transform" }))),
                        React.createElement(link_1["default"], { href: slides[index].secondary.href, className: "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-medium backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 hover:border-accent transition-all duration-300" }, slides[index].secondary.label)))))));
};
