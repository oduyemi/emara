"use client";
"use strict";
exports.__esModule = true;
var TopHeader_1 = require("../navigation/TopHeader");
var Footer_1 = require("../navigation/Footer");
var navigation_1 = require("next/navigation");
var Header_1 = require("../navigation/suppliers/Header");
var TopHeader_2 = require("../navigation/suppliers/TopHeader");
function ClientSideLayout(_a) {
    var children = _a.children;
    var pathname = navigation_1.usePathname();
    var isSupplierRoute = pathname.includes("/suppliers");
    var hideAllLayout = pathname === "/login" ||
        pathname === "/suppliers/login" ||
        pathname === "/suppliers/register" ||
        pathname === "/buyers/login" ||
        pathname === "/buyers/register" ||
        pathname === "/suppliers/onboarding";
    var hideFooter = pathname === "/" ||
        pathname === "/en" ||
        pathname === "/fr";
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
