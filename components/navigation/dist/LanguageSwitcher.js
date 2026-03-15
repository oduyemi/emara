"use client";
"use strict";
exports.__esModule = true;
exports.LanguageSwitcher = void 0;
var react_1 = require("react");
var next_intl_1 = require("next-intl");
var navigation_1 = require("@/i18n/navigation");
var lucide_react_1 = require("lucide-react");
var clsx_1 = require("clsx");
var languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "ar", label: "العربية" }
];
function LanguageSwitcher() {
    var locale = next_intl_1.useLocale();
    var router = navigation_1.useRouter();
    var pathname = navigation_1.usePathname();
    var _a = react_1.useTransition(), isPending = _a[0], startTransition = _a[1];
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var dropdownRef = react_1.useRef(null);
    var activeLanguage = languages.find(function (l) { return l.code === locale; }) || languages[0];
    var switchLanguage = function (newLocale) {
        if (newLocale === locale)
            return;
        setOpen(false);
        startTransition(function () {
            router.replace({ pathname: pathname }, { locale: newLocale });
        });
    };
    // Close when clicking outside
    react_1.useEffect(function () {
        var handleClickOutside = function (event) {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return function () {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (React.createElement("div", { className: "relative", ref: dropdownRef },
        React.createElement("button", { type: "button", "aria-haspopup": "listbox", "aria-expanded": open, onClick: function () { return setOpen(function (prev) { return !prev; }); }, disabled: isPending, className: clsx_1["default"]("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium", "bg-white/10 border border-white/20", "hover:bg-white/200", "transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-accent/50") },
            React.createElement("span", null, activeLanguage.label),
            React.createElement(lucide_react_1.ChevronDown, { size: 16, className: clsx_1["default"]("transition-transform duration-200", open && "rotate-180") })),
        React.createElement("div", { role: "listbox", onClick: function (e) { return e.stopPropagation(); }, className: clsx_1["default"]("absolute right-0 mt-12 w-44 rounded-2xl overflow-hidden", "bg-surface-dark/30 backdrop-blur-xl", "border border-white/10 shadow-2xl", "transition-all duration-200 origin-top", open
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none") }, languages.map(function (lang) {
            var isActive = locale === lang.code;
            return (React.createElement("button", { key: lang.code, type: "button", role: "option", "aria-selected": isActive, onClick: function () { return switchLanguage(lang.code); }, className: clsx_1["default"]("w-full flex items-center justify-between px-4 py-3 text-sm", "transition-all duration-150 text-blue-400", isActive
                    ? "bg-accent/10 text-accent"
                    : "hover:bg-white/90") },
                React.createElement("span", null, lang.label),
                isActive && React.createElement(lucide_react_1.Check, { size: 16 })));
        }))));
}
exports.LanguageSwitcher = LanguageSwitcher;
