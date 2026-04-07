"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.StepTwoCompliance = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var next_intl_1 = require("next-intl");
var onboarding_1 = require("@/lib/api/onboarding");
var MAX_FILE_SIZE = 10 * 1024 * 1024;
var ACCEPTED_TYPES = ["application/pdf", "image/png", "image/jpeg"];
exports.StepTwoCompliance = function (_a) {
    var onNext = _a.onNext, onBack = _a.onBack;
    var t = next_intl_1.useTranslations("stepTwo");
    var _b = react_1.useState([]), selectedCerts = _b[0], setSelectedCerts = _b[1];
    var _c = react_1.useState([]), documents = _c[0], setDocuments = _c[1];
    var _d = react_1.useState(false), isDragging = _d[0], setIsDragging = _d[1];
    var _e = react_1.useState(null), error = _e[0], setError = _e[1];
    var _f = react_1.useState(false), loading = _f[0], setLoading = _f[1];
    var certifications = [
        "ISO 9001",
        "ISO 22000",
        "HACCP",
        "GlobalGAP",
        "Organic",
        "Fair Trade",
        "FDA Approved",
        "Halal Certified",
    ];
    var toggleCert = function (cert) {
        setSelectedCerts(function (prev) {
            return prev.includes(cert)
                ? prev.filter(function (c) { return c !== cert; })
                : __spreadArrays(prev, [cert]);
        });
    };
    var isValid = selectedCerts.length > 0 || documents.length > 0;
    var validateFiles = function (files) {
        var validFiles = [];
        var _loop_1 = function (file) {
            if (!ACCEPTED_TYPES.includes(file.type)) {
                setError("Invalid file type");
                return "continue";
            }
            if (file.size > MAX_FILE_SIZE) {
                setError("File exceeds 10MB");
                return "continue";
            }
            var duplicate = documents.some(function (doc) { return doc.name === file.name; });
            if (!duplicate)
                validFiles.push(file);
        };
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            _loop_1(file);
        }
        return validFiles;
    };
    var addFiles = function (files) {
        var valid = validateFiles(files);
        if (valid.length > 0) {
            setDocuments(function (prev) { return __spreadArrays(prev, valid); });
            setError(null);
        }
    };
    var uploadDocs = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = new FormData();
                    documents.forEach(function (file) {
                        formData.append("files", file);
                    });
                    return [4 /*yield*/, fetch("/api/uploads/supplier/docs", {
                            method: "POST",
                            body: formData
                        })];
                case 1:
                    res = _a.sent();
                    if (!res.ok)
                        throw new Error("Upload failed");
                    return [2 /*return*/, res.json()];
            }
        });
    }); };
    var handleFileUpload = function (e) {
        if (!e.target.files)
            return;
        addFiles(Array.from(e.target.files));
    };
    var handleDrop = react_1.useCallback(function (e) {
        e.preventDefault();
        setIsDragging(false);
        var files = Array.from(e.dataTransfer.files);
        addFiles(files);
    }, [documents]);
    var removeFile = function (index) {
        setDocuments(function (prev) { return prev.filter(function (_, i) { return i !== index; }); });
    };
    var getFileIcon = function (file) {
        if (file.type === "application/pdf")
            return React.createElement(lucide_react_1.FileText, { size: 18 });
        if (file.type.startsWith("image"))
            return React.createElement(lucide_react_1.Image, { size: 18 });
        return React.createElement(lucide_react_1.FileText, { size: 18 });
    };
    var handleNext = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, 6, 7]);
                    if (!(documents.length > 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, uploadDocs()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [4 /*yield*/, onboarding_1.saveOnboardingStep(2, {
                        certifications: selectedCerts
                    })];
                case 4:
                    _a.sent();
                    onNext();
                    return [3 /*break*/, 7];
                case 5:
                    err_1 = _a.sent();
                    alert("Error saving compliance");
                    return [3 /*break*/, 7];
                case 6:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "space-y-12" },
        React.createElement("div", { className: "space-y-3" },
            React.createElement("h2", { className: "text-2xl font-semibold text-secondary tracking-tight" }, t("title")),
            React.createElement("p", { className: "text-muted text-sm max-w-2xl leading-relaxed" }, t("description"))),
        React.createElement("div", { className: "space-y-6" },
            React.createElement("h3", { className: "text-base font-semibold text-secondary" }, t("sections.certifications")),
            React.createElement("div", { className: "flex flex-wrap gap-3" }, certifications.map(function (cert) {
                var isSelected = selectedCerts.includes(cert);
                return (React.createElement("button", { key: cert, type: "button", onClick: function () { return toggleCert(cert); }, className: "\n                  px-4 py-2 rounded-full border text-sm transition-all duration-200 flex items-center gap-2\n                  " + (isSelected
                        ? "bg-secondary text-white border-secondary shadow-md"
                        : "bg-white text-secondary border-gray-300 hover:border-secondary") + "\n                " },
                    isSelected && React.createElement(lucide_react_1.CheckCircle2, { size: 14 }),
                    cert));
            }))),
        React.createElement("div", { className: "space-y-6" },
            React.createElement("h3", { className: "text-base font-semibold text-secondary" }, t("sections.documents")),
            React.createElement("div", { onDragOver: function (e) {
                    e.preventDefault();
                    setIsDragging(true);
                }, onDragLeave: function () { return setIsDragging(false); }, onDrop: handleDrop, className: "border-2 border-dashed rounded-3xl p-12 text-center transition-all bg-white\n          " + (isDragging
                    ? "border-secondary bg-secondary/5"
                    : "border-gray-300 hover:border-accent hover:bg-gray-50") },
                React.createElement("label", { className: "cursor-pointer block" },
                    React.createElement(lucide_react_1.UploadCloud, { className: "mx-auto mb-4 text-muted", size: 36 }),
                    React.createElement("p", { className: "text-sm text-secondary font-medium mb-2" }, t("upload.placeholder")),
                    React.createElement("p", { className: "text-xs text-muted" }, t("upload.helper")),
                    React.createElement("input", { type: "file", multiple: true, onChange: handleFileUpload, className: "hidden", accept: ".pdf,.png,.jpg,.jpeg" }))),
            error && (React.createElement("p", { className: "text-sm text-red-500" }, error)),
            documents.length > 0 && (React.createElement("div", { className: "space-y-3" }, documents.map(function (doc, index) { return (React.createElement("div", { key: index, className: "flex items-center justify-between bg-surface rounded-2xl px-4 py-3 text-sm border" },
                React.createElement("div", { className: "flex items-center gap-3" },
                    getFileIcon(doc),
                    React.createElement("div", null,
                        React.createElement("p", { className: "text-secondary font-medium" }, doc.name),
                        React.createElement("p", { className: "text-xs text-muted" },
                            (doc.size / 1024 / 1024).toFixed(2),
                            " MB"))),
                React.createElement("button", { type: "button", onClick: function () { return removeFile(index); }, className: "text-red-500 hover:text-red-700 transition" },
                    React.createElement(lucide_react_1.Trash2, { size: 18 })))); })))),
        React.createElement("div", { className: "flex justify-between items-center pt-6 border-t border-gray-200" },
            React.createElement("button", { onClick: onBack, className: "text-sm text-muted hover:text-secondary transition-colors" }, t("actions.back")),
            React.createElement("button", { onClick: handleNext, disabled: !isValid || loading, className: "btn-primary px-8 py-3 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md transition-all" }, loading ? "Saving..." : t("actions.continue")))));
};
