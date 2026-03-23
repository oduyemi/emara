"use client";
"use strict";
exports.__esModule = true;
exports.ProgramsMap = void 0;
var image_1 = require("next/image");
var link_1 = require("next/link");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
exports.ProgramsMap = function () {
    var ref = react_1.useRef(null);
    var x = framer_motion_1.useMotionValue(0);
    var y = framer_motion_1.useMotionValue(0);
    var cursorX = framer_motion_1.useMotionValue(0);
    var cursorY = framer_motion_1.useMotionValue(0);
    var smoothX = framer_motion_1.useSpring(cursorX, { stiffness: 140, damping: 18 });
    var smoothY = framer_motion_1.useSpring(cursorY, { stiffness: 140, damping: 18 });
    var _a = react_1.useState("Start"), label = _a[0], setLabel = _a[1];
    var rotateX = framer_motion_1.useTransform(y, [-50, 50], [2, -2]);
    var rotateY = framer_motion_1.useTransform(x, [-50, 50], [-2, 2]);
    // 🔥 Hotspots config (clean + reusable)
    var hotspots = [
        { top: "30%", left: "18%", href: "/suppliers/academy", label: "Fundamentals" },
        { top: "50%", left: "18%", href: "/suppliers/programs/export-readiness", label: "Export Readiness" },
        { top: "70%", left: "18%", href: "/suppliers/onboarding", label: "Enter Markets" },
        { top: "30%", left: "80%", href: "/suppliers/academy/export-essentials-online", label: "Export Essentials" },
        { top: "45%", left: "80%", href: "/suppliers/academy/market-country-profiles", label: "Market Profiles" },
        { top: "60%", left: "80%", href: "/suppliers/academy/foodcast", label: "Foodcast" },
        { top: "75%", left: "80%", href: "/suppliers/academy/roadmap", label: "Roadmap" },
        { top: "92%", left: "50%", href: "/suppliers/register", label: "Register" },
    ];
    // 🔥 Set cursor default to "01"
    react_1.useEffect(function () {
        var _a;
        var rect = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!rect)
            return;
        var defaultSpot = hotspots[0]; // 01
        var xPos = (parseFloat(defaultSpot.left) / 100) * rect.width;
        var yPos = (parseFloat(defaultSpot.top) / 100) * rect.height;
        cursorX.set(xPos);
        cursorY.set(yPos);
        setLabel(defaultSpot.label);
    }, []);
    var handleMouseMove = function (e) {
        var _a;
        var rect = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!rect)
            return;
        var px = e.clientX - rect.left;
        var py = e.clientY - rect.top;
        x.set(px - rect.width / 2);
        y.set(py - rect.height / 2);
        cursorX.set(px);
        cursorY.set(py);
    };
    var handleMouseLeave = function () {
        x.set(0);
        y.set(0);
    };
    // ✨ Magnetic pull
    var magnetize = function (e) {
        var rect = e.currentTarget.getBoundingClientRect();
        var mx = e.clientX - rect.left - rect.width / 2;
        var my = e.clientY - rect.top - rect.height / 2;
        cursorX.set(cursorX.get() + mx * 0.2);
        cursorY.set(cursorY.get() + my * 0.2);
    };
    return (React.createElement("section", { className: "relative py-32 px-6 bg-[#F7F9FC] overflow-hidden" },
        React.createElement("div", { className: "absolute -top-40 right-[-120px] w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-60 animate-[float_18s_ease-in-out_infinite]" }),
        React.createElement("div", { className: "absolute -bottom-40 left-[-120px] w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl opacity-60 animate-[float_22s_ease-in-out_infinite]" }),
        React.createElement("div", { className: "max-w-6xl mx-auto" },
            React.createElement(framer_motion_1.motion.div, { ref: ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, style: { rotateX: rotateX, rotateY: rotateY, transformPerspective: 1000 }, className: "relative w-full" },
                React.createElement("div", { className: "relative w-full h-[340px] sm:h-[420px] md:h-[500px] lg:h-[580px] xl:h-[660px]" },
                    React.createElement(framer_motion_1.motion.div, { animate: { scale: [1, 1.05, 1] }, transition: { duration: 24, repeat: Infinity }, className: "absolute inset-0" },
                        React.createElement(image_1["default"], { src: "/images/programsmap.png", alt: "Programs Map", fill: true, priority: true, className: "object-contain" })),
                    hotspots.map(function (spot, i) { return (React.createElement(link_1["default"], { key: i, href: spot.href },
                        React.createElement(framer_motion_1.motion.div, { style: { top: spot.top, left: spot.left }, onMouseEnter: function () { return setLabel(spot.label); }, onMouseMove: magnetize, whileHover: { scale: 1.15 }, whileTap: { scale: 0.95 }, className: "absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 z-40 cursor-none" },
                            React.createElement("div", { className: "w-full h-full rounded-full animate-ping bg-accent/20" })))); }),
                    React.createElement(framer_motion_1.motion.div, { className: "pointer-events-none absolute z-50", style: {
                            x: smoothX,
                            y: smoothY,
                            translateX: "-50%",
                            translateY: "-50%"
                        } },
                        React.createElement(framer_motion_1.motion.div, { animate: {
                                scale: label ? 1 : 0.8
                            }, className: "flex items-center gap-2 px-4 py-2 rounded-full\r\n                           bg-white/80 backdrop-blur-md shadow-xl border border-black/10" },
                            React.createElement("div", { className: "w-2 h-2 rounded-full bg-black" }),
                            React.createElement("span", { className: "text-xs font-medium text-black whitespace-nowrap" }, label))))))));
};
