"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var marketcountries_1 = require("@/data/marketcountries");
function CountrySearchFilters(_a) {
    var search = _a.search, setSearch = _a.setSearch, country = _a.country, setCountry = _a.setCountry, region = _a.region, setRegion = _a.setRegion;
    var t = next_intl_1.useTranslations("marketCountryProfiles");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mt-8 mb-4" },
            React.createElement("p", { className: "pl-24 text-xs uppercase tracking-[0.25em] text-accent mb-3" }, t("countryProfiles"))),
        React.createElement("section", { className: "pb-16" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6" },
                React.createElement("input", { value: search, onChange: function (e) {
                        setSearch(e.target.value);
                        setCountry("");
                    }, placeholder: t("filters.search"), className: "border border-gray-200 rounded-lg px-4 py-3" }),
                React.createElement("select", { value: country, onChange: function (e) {
                        var value = e.target.value;
                        setCountry(value);
                        // override others
                        if (value) {
                            setSearch("");
                            setRegion("");
                        }
                    }, className: "border border-gray-200 rounded-lg px-4 py-3" },
                    React.createElement("option", { value: "" }, t("filters.country")),
                    marketcountries_1.marketCountries.map(function (c) { return (React.createElement("option", { key: c.code, value: c.code }, c.name)); })),
                React.createElement("select", { value: region, onChange: function (e) {
                        setRegion(e.target.value);
                        setCountry(""); // reset country when selecting region
                    }, className: "border border-gray-200 rounded-lg px-4 py-3" },
                    React.createElement("option", { value: "" }, t("filters.region")),
                    marketcountries_1.regions.map(function (r) { return (React.createElement("option", { key: r, value: r }, r)); }))))));
}
exports["default"] = CountrySearchFilters;
