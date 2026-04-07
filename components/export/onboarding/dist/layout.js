"use client";
"use strict";
exports.__esModule = true;
exports.OnboardingLayout = void 0;
var SupplierHeader_1 = require("./SupplierHeader");
var ProgressIndicator_1 = require("./ProgressIndicator");
var SidebarCTA_1 = require("./SidebarCTA");
var OnboardingFooter_1 = require("./OnboardingFooter");
exports.OnboardingLayout = function (_a) {
    var children = _a.children, currentStep = _a.currentStep, totalSteps = _a.totalSteps;
    return (React.createElement("div", { className: "min-h-screen bg-[#F7F9FC] flex flex-col" },
        React.createElement(SupplierHeader_1.SupplierHeaderMinimal, null),
        React.createElement("div", { className: "bg-white border-b" },
            React.createElement("div", { className: "max-w-4xl mx-auto px-6 py-6" },
                React.createElement(ProgressIndicator_1.ProgressIndicator, { currentStep: currentStep, totalSteps: totalSteps }))),
        React.createElement("main", { className: "flex-1 relative" },
            React.createElement("div", { className: "max-w-4xl mx-auto px-6 py-16" },
                React.createElement("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12" }, children)),
            React.createElement(SidebarCTA_1.HelpSidebarCTA, null)),
        React.createElement(OnboardingFooter_1.OnboardingFooter, null)));
};
