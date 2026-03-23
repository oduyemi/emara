"use client";
"use strict";
exports.__esModule = true;
exports.CalendlyBooking = void 0;
var react_calendly_1 = require("react-calendly");
var next_intl_1 = require("next-intl");
exports.CalendlyBooking = function () {
    var t = next_intl_1.useTranslations("CalendlyBooking");
    return (React.createElement("section", { className: "py-28 px-6 bg-white" },
        React.createElement("div", { className: "max-w-5xl mx-auto text-center" },
            React.createElement("h2", { className: "text-3xl font-semibold text-[#0F233F] mb-6" }, t("title")),
            React.createElement("p", { className: "text-gray-600 mb-10" }, t("description")),
            React.createElement("div", { className: "rounded-2xl border border-gray-200 shadow-lg overflow-hidden" },
                React.createElement(react_calendly_1.InlineWidget, { url: "https://calendly.com/care-trademara/30min?primary_color=6f1a07", styles: { height: "720px" } })))));
};
