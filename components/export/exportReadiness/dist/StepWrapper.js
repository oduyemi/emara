"use client";
"use strict";
exports.__esModule = true;
exports.StepWrapper = void 0;
var framer_motion_1 = require("framer-motion");
exports.StepWrapper = function (_a) {
    var children = _a.children, shake = _a.shake;
    return (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 40 }, 
        // animate={{ opacity: 1, y: 0 }}
        exit: { opacity: 0, y: -40 }, animate: shake ? { x: [-6, 6, -4, 4, 0] } : {}, transition: { duration: 0.3 } }, children));
};
