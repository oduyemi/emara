"use strict";
exports.__esModule = true;
exports.NavigationControls = void 0;
exports.NavigationControls = function (_a) {
    var next = _a.next, prev = _a.prev, isAnswered = _a.isAnswered;
    return (React.createElement("div", { className: "flex justify-between mt-10" },
        React.createElement("button", { onClick: prev, className: "px-5 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-700 transition" }, "Back"),
        React.createElement("button", { onClick: next, disabled: !isAnswered, className: "px-5 py-2 rounded-lg text-sm font-medium transition-all " + (isAnswered
                ? "bg-green-600 text-white hover:bg-green-700 shadow"
                : "bg-gray-100 text-gray-400 cursor-not-allowed") }, "Continue \u2192")));
};
