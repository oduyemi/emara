"use client";
"use strict";
exports.__esModule = true;
exports.LoginForm = void 0;
var next_intl_1 = require("next-intl");
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
exports.LoginForm = function () {
    var t = next_intl_1.useTranslations("auth.login");
    return (React.createElement("div", { className: "max-w-md mx-auto w-full mt-16" },
        React.createElement("div", { className: "bg-white border border-[var(--color-surface-border)] rounded-3xl shadow-xl p-10" },
            React.createElement("div", { className: "flex justify-center mb-8" },
                React.createElement(link_1["default"], { href: "/suppliers" },
                    React.createElement(image_1["default"], { src: "/images/logo/logofix.png", alt: "Emara", height: 120, width: 120, className: "object-contain", priority: true }))),
            React.createElement("div", { className: "text-center mb-10" },
                React.createElement("h1", { className: "text-2xl font-semibold text-secondary mb-2" }, t("title")),
                React.createElement("p", { className: "text-sm text-muted" }, t("subtitle"))),
            React.createElement("form", { className: "space-y-6" },
                React.createElement("div", null,
                    React.createElement("label", { className: "text-sm font-medium text-secondary block mb-2" }, t("email")),
                    React.createElement("div", { className: "relative" },
                        React.createElement(lucide_react_1.Mail, { size: 18, className: "absolute left-3 top-3.5 text-muted" }),
                        React.createElement("input", { type: "email", placeholder: t("emailPlaceholder"), className: "w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--color-surface-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)] text-sm" }))),
                React.createElement("div", null,
                    React.createElement("label", { className: "text-sm font-medium text-secondary block mb-2" }, t("password")),
                    React.createElement("div", { className: "relative" },
                        React.createElement(lucide_react_1.Lock, { size: 18, className: "absolute left-3 top-3.5 text-muted" }),
                        React.createElement("input", { type: "password", placeholder: t("passwordPlaceholder"), className: "w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--color-surface-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-soft)] text-sm" }))),
                React.createElement("div", { className: "flex justify-end text-sm" },
                    React.createElement(link_1["default"], { href: "/forgot-password", className: "text-accent hover:underline" }, t("forgot"))),
                React.createElement("button", { type: "submit", className: "w-full btn-primary py-3 rounded-xl font-medium" }, t("loginButton"))),
            React.createElement("p", { className: "text-center text-sm text-muted mt-8" },
                t("noAccount"),
                " ",
                React.createElement(link_1["default"], { href: "/suppliers/register", className: "text-accent font-medium hover:underline" }, t("register"))))));
};
