"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var ProgressBar_1 = require("./ProgressBar");
function FormLayout(_a) {
    var children = _a.children;
    return (React.createElement(react_1.Container, { maxW: "800px", py: 10 },
        React.createElement(ProgressBar_1["default"], null),
        React.createElement(react_1.Box, { mt: 6 }, children)));
}
exports["default"] = FormLayout;
