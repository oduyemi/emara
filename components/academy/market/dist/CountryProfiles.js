"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SearchFilters_1 = require("./SearchFilters");
var ProfilesGrid_1 = require("./ProfilesGrid");
function CountryProfiles() {
    var _a = react_1.useState(""), search = _a[0], setSearch = _a[1];
    var _b = react_1.useState(""), country = _b[0], setCountry = _b[1];
    var _c = react_1.useState(""), region = _c[0], setRegion = _c[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(SearchFilters_1["default"], { search: search, setSearch: setSearch, country: country, setCountry: setCountry, region: region, setRegion: setRegion }),
        React.createElement(ProfilesGrid_1["default"], { search: search, country: country, region: region })));
}
exports["default"] = CountryProfiles;
