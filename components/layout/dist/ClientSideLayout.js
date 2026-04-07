"use client";
"use strict";
exports.__esModule = true;
var TopHeader_1 = require("../navigation/TopHeader");
var Footer_1 = require("../navigation/Footer");
var navigation_1 = require("next/navigation");
var Header_1 = require("../navigation/suppliers/Header");
var TopHeader_2 = require("../navigation/suppliers/TopHeader");
var LOCALES = ["en", "fr", "ar"];
function stripLocale(pathname) {
    var segments = pathname.split("/");
    var firstSegment = segments[1];
    if (LOCALES.includes(firstSegment)) {
        return "/" + segments.slice(2).join("/");
    }
    return pathname;
}
function ClientSideLayout(_a) {
    var children = _a.children;
    var pathname = navigation_1.usePathname();
    // Normalize path (remove locale prefix)
    var normalizedPath = stripLocale(pathname);
    var isSupplierRoute = normalizedPath.includes("/suppliers");
    var hideAllLayout = normalizedPath === "/login" ||
        normalizedPath === "/suppliers/login" ||
        normalizedPath === "/suppliers/register" ||
        normalizedPath === "/buyers/login" ||
        normalizedPath === "/buyers/register" ||
        normalizedPath === "/suppliers/onboarding";
    var hideFooter = normalizedPath === "/";
    if (hideAllLayout) {
        return React.createElement(React.Fragment, null, children);
    }
    return (React.createElement("div", { className: "min-h-screen flex flex-col" },
        isSupplierRoute ? React.createElement(TopHeader_2.SupplierTopHeader, null) : React.createElement(TopHeader_1.TopHeader, null),
        isSupplierRoute && React.createElement(Header_1.SupplierHeader, null),
        children,
        !hideFooter && React.createElement(Footer_1["default"], null)));
}
exports["default"] = ClientSideLayout;
