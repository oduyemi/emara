"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var useFormNavigation_1 = require("../export/exportReadiness/hooks/useFormNavigation");
function NavigationControls() {
    var _a = useFormNavigation_1.useFormNavigation(), next = _a.next, prev = _a.prev, currentStep = _a.currentStep;
    return (React.createElement(react_1.HStack, { mt: 8, justify: "space-between" },
        React.createElement(react_1.Button, { onClick: prev, isDisabled: currentStep === 0 }, "Back"),
        React.createElement(react_1.Button, { colorScheme: "blackAlpha", onClick: next }, "Next")));
}
exports["default"] = NavigationControls;
