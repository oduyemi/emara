"use strict";
exports.__esModule = true;
exports.SCALE_OPTIONS = void 0;
var next_intl_1 = require("next-intl");
var t = next_intl_1.useTranslations("ReadinessForm.scale");
exports.SCALE_OPTIONS = [
    { label: t("veryHigh"), value: 5 },
    { label: t("high"), value: 4 },
    { label: t("indifferent"), value: 3 },
    { label: t("low"), value: 2 },
    { label: t("veryLow"), value: 1 }
];
