"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MarketCard_1 = require("./MarketCard");
var next_intl_1 = require("next-intl");
var markets_1 = require("@/data/markets");
var ITEMS_PER_PAGE = 6;
function MarketProfilesGrid(_a) {
    var search = _a.search, market = _a.market;
    var t = next_intl_1.useTranslations("marketCountryProfiles");
    var _b = react_1.useState(1), page = _b[0], setPage = _b[1];
    var filtered = react_1.useMemo(function () {
        if (market) {
            return markets_1.markets.filter(function (m) { return m.id === market; });
        }
        return markets_1.markets.filter(function (m) {
            return m.name.toLowerCase().includes(search.toLowerCase());
        });
    }, [search, market]);
    react_1.useEffect(function () {
        setPage(1);
    }, [search, market]);
    var totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    var paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
    return (React.createElement("section", { className: "surface py-24" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
            paginated.length > 0 ? (React.createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" }, paginated.map(function (m) { return (React.createElement(MarketCard_1["default"], { key: m.id, name: m.name, desc: t("markets." + m.id + ".desc"), color: m.color, icon: m.icon })); }))) : (React.createElement("div", { className: "text-center py-20 text-muted" }, t("nomarket"))),
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
exports["default"] = MarketProfilesGrid;
