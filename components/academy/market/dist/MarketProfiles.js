"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MarketFilters_1 = require("./MarketFilters");
var MarketProfilesGrid_1 = require("./MarketProfilesGrid");
function MarketProfiles() {
    var _a = react_1.useState(""), search = _a[0], setSearch = _a[1];
    var _b = react_1.useState(""), market = _b[0], setMarket = _b[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(MarketFilters_1["default"], { search: search, setSearch: setSearch, market: market, setMarket: setMarket }),
        React.createElement(MarketProfilesGrid_1["default"], { search: search, market: market })));
}
exports["default"] = MarketProfiles;
