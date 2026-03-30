"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var steps_1 = require("../export/exportReadiness/config/steps");
var useFormNavigation_1 = require("../export/exportReadiness/hooks/useFormNavigation");
function ProgressBar() {
    var currentStep = useFormNavigation_1.useFormNavigation().currentStep;
    var value = ((currentStep + 1) / steps_1.steps.length) * 100;
    return React.createElement(react_1.Progress, { value: value, borderRadius: "full" });
}
exports["default"] = ProgressBar;
