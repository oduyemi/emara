"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CountryCard_1 = require("./CountryCard");
var next_intl_1 = require("next-intl");
var marketcountries_1 = require("@/data/marketcountries");
var ITEMS_PER_PAGE = 6;
function CountryProfilesGrid(_a) {
    var search = _a.search, country = _a.country, region = _a.region;
    var t = next_intl_1.useTranslations("marketCountryProfiles");
    var _b = react_1.useState(1), page = _b[0], setPage = _b[1];
    // ✅ FIXED FILTER LOGIC
    var filtered = react_1.useMemo(function () {
        // 1. Country override
        if (country) {
            return marketcountries_1.marketCountries.filter(function (c) { return c.code === country; });
        }
        // 2. Search + Region
        return marketcountries_1.marketCountries.filter(function (c) {
            var matchesSearch = !search ||
                c.name.toLowerCase().includes(search.toLowerCase());
            var matchesRegion = !region || c.region === region;
            return matchesSearch && matchesRegion;
        });
    }, [search, country, region]);
    // Reset page when filters change
    react_1.useEffect(function () {
        setPage(1);
    }, [search, country, region]);
    var totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    var paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
    return (React.createElement("section", { className: "surface py-24" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
            paginated.length > 0 ? (React.createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" }, paginated.map(function (c) { return (React.createElement(CountryCard_1["default"], { key: c.code, name: c.name, code: c.code, desc: t("countries." + c.code + ".desc") })); }))) : (React.createElement("div", { className: "text-center py-20 text-muted" }, t("noCountry"))),
            totalPages > 1 && (React.createElement("div", { className: "flex justify-center items-center gap-2 mt-16 flex-wrap" },
                React.createElement("button", { onClick: function () { return setPage(function (p) { return Math.max(p - 1, 1); }); }, disabled: page === 1, className: "px-4 py-2 rounded-lg border text-sm disabled:opacity-40" }, t("previous")),
                Array.from({ length: totalPages }).map(function (_, i) {
                    var pageNumber = i + 1;
                    var isActive = pageNumber === page;
                    return (React.createElement("button", { key: pageNumber, onClick: function () { return setPage(pageNumber); }, className: "px-4 py-2 rounded-lg text-sm " + (isActive
                            ? "bg-primary text-white"
                            : "border hover:bg-gray-50") }, pageNumber));
                }),
                React.createElement("button", { onClick: function () { return setPage(function (p) { return Math.min(p + 1, totalPages); }); }, disabled: page === totalPages, className: "px-4 py-2 rounded-lg border text-sm disabled:opacity-40" }, t("next")))))));
}
exports["default"] = CountryProfilesGrid;
