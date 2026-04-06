"use client";
"use strict";
exports.__esModule = true;
exports.UpcomingEvents = void 0;
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var image_1 = require("next/image");
var next_intl_1 = require("next-intl");
var eventImages = [
    "/images/organic.jpg",
    "/images/export.jpg",
    "/images/grain.jpg",
];
exports.UpcomingEvents = function () {
    var t = next_intl_1.useTranslations("upcomingEvents");
    var events = t.raw("events");
    return (React.createElement("section", { className: "relative py-28 px-6 bg-[var(--color-bg)] overflow-hidden" },
        React.createElement("div", { className: "max-w-7xl mx-auto relative" },
            React.createElement("div", { className: "mb-16 max-w-xl" },
                React.createElement("p", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-4" }, t("label"))),
            React.createElement("div", { className: "grid md:grid-cols-3 gap-10" }, events.map(function (event, i) { return (React.createElement(framer_motion_1.motion.div, { key: i, initial: { opacity: 0, y: 35 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: i * 0.12, duration: 0.6 }, viewport: { once: true }, whileHover: { y: -10 }, className: "group relative rounded-2xl border border-[var(--color-surface-border)] bg-white overflow-hidden shadow-sm hover:shadow-[0_30px_70px_-25px_rgba(0,0,0,0.25)] transition-all duration-500" },
                React.createElement("div", { className: "absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--color-accent-soft)] via-[var(--color-accent)] to-[var(--color-primary)]" }),
                React.createElement("div", { className: "relative h-[180px] overflow-hidden" },
                    React.createElement(image_1["default"], { src: eventImages[i], alt: event.title, fill: true, className: "object-cover transition duration-[1400ms] group-hover:scale-110" }),
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" }),
                    React.createElement("div", { className: "absolute top-4 left-4 bg-white/90 backdrop-blur text-secondary text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-sm" },
                        React.createElement(lucide_react_1.Video, { size: 12 }),
                        event.type)),
                React.createElement("div", { className: "p-7" },
                    React.createElement("h3", { className: "text-secondary font-semibold mb-4 leading-snug text-[17px]" }, event.title),
                    React.createElement("div", { className: "flex items-center text-sm text-muted mb-6" },
                        React.createElement(lucide_react_1.CalendarDays, { size: 16, className: "mr-2 text-accent" }),
                        event.date),
                    React.createElement(link_1["default"], { href: event.link, className: "inline-flex items-center gap-2 text-sm font-medium text-accent" },
                        t("cta"),
                        React.createElement(framer_motion_1.motion.span, { initial: { x: 0 }, whileHover: { x: 6 }, transition: { type: "spring", stiffness: 260 } },
                            React.createElement(lucide_react_1.ArrowRight, { size: 16 })))))); })))));
};
