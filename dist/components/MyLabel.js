"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
var MyLabel = function (props) {
    var _a = props.label, label = _a === void 0 ? 'No Label' : _a, _b = props.size, size = _b === void 0 ? 'normal' : _b, _c = props.allCaps, allCaps = _c === void 0 ? false : _c, _d = props.color, color = _d === void 0 ? 'primary' : _d, customTextColor = props.customTextColor, _e = props.backgroundColor, backgroundColor = _e === void 0 ? 'transparent' : _e;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ style: { color: customTextColor, backgroundColor: backgroundColor }, className: ['label', size, "text-".concat(color)].join(' ') }, { children: allCaps ? label.toUpperCase() : label }), void 0));
};
exports.MyLabel = MyLabel;
