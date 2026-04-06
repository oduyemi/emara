"use client";
"use strict";
exports.__esModule = true;
exports.SupplierHeader = void 0;
var react_1 = require("react");
var navigation_1 = require("@/i18n/navigation");
var image_1 = require("next/image");
var clsx_1 = require("clsx");
var lucide_react_1 = require("lucide-react");
var next_intl_1 = require("next-intl");
var MobileSearch_1 = require("../MobileSearch");
var dynamic_1 = require("next/dynamic");
var MobileDrawer_1 = require("./MobileDrawer");
var LanguageSwitcher_1 = require("../LanguageSwitcher");
var ExploreMenu = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("./ExploreMenu"); }); }, { ssr: false });
exports.SupplierHeader = function () {
    var t = next_intl_1.useTranslations("Header");
    var _a = react_1.useState(false), scrolled = _a[0], setScrolled = _a[1];
    var _b = react_1.useState(false), mobileMenuOpen = _b[0], setMobileMenuOpen = _b[1];
    var _c = react_1.useState(false), mobileSearchOpen = _c[0], setMobileSearchOpen = _c[1];
    react_1.useEffect(function () {
        var handleScroll = function () { return setScrolled(window.scrollY > 30); };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    return (React.createElement("header", { className: "sticky top-0 z-50" },
        React.createElement("div", { className: clsx_1["default"]("transition-all duration-300 backdrop-blur-2xl", "bg-gradient-to-r from-surface-dark/95 via-surface-dark/90 to-surface-dark/95", scrolled ? "shadow-xl border-b border-white/5" : "border-b border-white/5") },
            React.createElement("div", { className: clsx_1["default"]("max-w-7xl mx-auto px-6 flex items-center gap-6 transition-all duration-300", scrolled ? "h-14" : "h-16") },
                React.createElement("button", { className: "lg:hidden text-black/80 hover:text-accent transition-colors", onClick: function () { return setMobileMenuOpen(true); } },
                    React.createElement(lucide_react_1.Menu, { size: 22 })),
                React.createElement(navigation_1.Link, { href: "/suppliers", className: "flex-shrink-0" },
                    React.createElement(image_1["default"], { src: "/images/logo/logofix.png", alt: "Emara", width: 240, height: 40, priority: true, className: clsx_1["default"]("transition-all duration-300 object-contain", scrolled ? "scale-90" : "scale-100") })),
                React.createElement("div", { className: "hidden md:flex flex-1 relative group max-w-xl" },
                    React.createElement(lucide_react_1.Search, { size: 18, className: "absolute left-4 top-1/2 -translate-y-1/2 text-black/40 group-focus-within:text-accent transition-colors" }),
                    React.createElement("input", { type: "text", placeholder: t("search_placeholder"), className: "\r\n                w-full pl-12 pr-4 py-2.5\r\n                rounded-full \r\n                bg-white/5\r\n                border border-white/10\r\n                text-black\r\n                placeholder:text-black/40\r\n                focus:outline-none\r\n                focus:border-accent\r\n                focus:ring-2 focus:ring-accent/30\r\n                transition-all duration-300\r\n              " })),
                React.createElement("button", { onClick: function () { return setMobileSearchOpen(true); }, className: "md:hidden ml-auto text-black/80 hover:text-accent transition-colors" },
                    React.createElement(lucide_react_1.Search, { size: 20 })),
                React.createElement("div", { className: "hidden md:flex items-center gap-6 text-sm font-medium" },
                    React.createElement(LanguageSwitcher_1.LanguageSwitcher, null),
                    React.createElement(navigation_1.Link, { href: "/suppliers/login", className: "text-accent hover:text-yellow-800 transition-colors" }, t("signIn")),
                    React.createElement(navigation_1.Link, { href: "/suppliers/verify", className: "btn-primary px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300" }, t("start_journey")),
                    React.createElement(navigation_1.Link, { href: "/suppliers/dashboard", className: "text-black/80 hover:text-yellow-800 transition-colors" }, t("dashboard"))))),
        React.createElement("div", { className: "hidden md:block bg-surface-dark/70 backdrop-blur-2xl border-b border-black/5" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-6 py-3 flex gap-8 items-center text-sm font-medium text-black/80" },
                React.createElement(ExploreMenu, null),
                [
                    // { href: "/suppliers/directory", label: t("directory") },
                    { href: "/suppliers/programs/export-readiness", label: t("readiness") },
                    { href: "/suppliers/onboarding", label: t("onboarding") },
                    { href: "/suppliers/academy", label: t("academy") },
                    { href: "/suppliers/events", label: t("events") },
                ].map(function (item) { return (React.createElement(navigation_1.Link, { key: item.href, href: item.href, className: "\r\n                relative transition-colors\r\n                after:absolute after:-bottom-1 after:left-0\r\n                after:h-[2px] after:w-0 after:bg-accent\r\n                after:transition-all hover:after:w-full hover:text-yellow-800\r\n              " }, item.label)); }))),
        React.createElement(MobileDrawer_1.SupplierMobileDrawer, { open: mobileMenuOpen, setOpen: setMobileMenuOpen }),
        React.createElement(MobileSearch_1.MobileSearch, { open: mobileSearchOpen, setOpen: setMobileSearchOpen })));
};
