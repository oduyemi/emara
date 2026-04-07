"use strict";
exports.__esModule = true;
var google_1 = require("next/font/google");
var auth_context_1 = require("@/app/context/auth.context");
require("./globals.css");
var lato = google_1.Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    variable: "--font-lato",
    display: "swap"
});
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { suppressHydrationWarning: true, className: lato.variable },
        React.createElement("body", null,
            React.createElement(auth_context_1.AuthProvider, null, children))));
}
exports["default"] = RootLayout;
