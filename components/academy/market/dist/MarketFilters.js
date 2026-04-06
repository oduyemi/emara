"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var markets_1 = require("@/data/markets");
var framer_motion_1 = require("framer-motion");
function MarketSearchFilters(_a) {
    var _b;
    var search = _a.search, setSearch = _a.setSearch, market = _a.market, setMarket = _a.setMarket;
    var t = next_intl_1.useTranslations("marketCountryProfiles");
    return (React.createElement("section", { className: "pb-16" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
            React.createElement("div", { className: "mb-8" },
                React.createElement("p", { className: "text-xs uppercase tracking-[0.25em] text-accent mb-3" }, t("marketProfiles")),
                React.createElement("h2", { className: "text-2xl md:text-3xl font-semibold text-secondary" }, t("exploreMarkets"))),
            React.createElement("div", { className: "relative mb-8" },
                React.createElement("input", { value: search, onChange: function (e) {
                        setSearch(e.target.value);
                        setMarket("");
                    }, placeholder: t("filters.searchMarket"), className: "w-full rounded-2xl px-5 py-4 bg-white/60 backdrop-blur border border-white/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition" }),
                search && (React.createElement("button", { onClick: function () { return setSearch(""); }, className: "absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted hover:text-secondary" }, "\u2715"))),
            React.createElement("div", { className: "flex flex-wrap gap-3" },
                React.createElement("button", { onClick: function () { return setMarket(""); }, className: "px-4 py-2 rounded-full text-sm border transition " + (market === ""
                        ? "bg-primary text-white border-primary"
                        : "bg-white/60 backdrop-blur border-gray-200 hover:bg-gray-100") }, "All Markets"),
                markets_1.markets.map(function (m) {
                    var isActive = market === m.id;
                    return (React.createElement(framer_motion_1.motion.button, { key: m.id, onClick: function () {
                            setMarket(m.id);
                            setSearch("");
                        }, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "flex items-center gap-2 px-4 py-2 rounded-full text-sm transition border " + (isActive
                            ? "text-white border-transparent bg-gradient-to-r " + m.color + " shadow-lg"
                            : "bg-white/60 backdrop-blur border-gray-200 hover:bg-gray-100") },
                        React.createElement("span", null, m.icon),
                        m.name));
                })),
            (market || search) && (React.createElement("div", { className: "mt-6 flex items-center gap-3 text-sm text-muted" },
                React.createElement("span", null, "Filtering by:"),
                market && (React.createElement("span", { className: "px-3 py-1 rounded-full bg-primary/10 text-primary" }, (_b = markets_1.markets.find(function (m) { return m.id === market; })) === null || _b === void 0 ? void 0 : _b.name)),
                search && (React.createElement("span", { className: "px-3 py-1 rounded-full bg-secondary/10 text-secondary" },
                    "\"",
                    search,
                    "\"")),
                React.createElement("button", { onClick: function () {
                        setMarket("");
                        setSearch("");
                    }, className: "ml-2 underline hover:text-secondary" }, "Clear"))))));
}
exports["default"] = MarketSearchFilters;
