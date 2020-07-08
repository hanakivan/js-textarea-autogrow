"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeTextAreaAutoGrow = exports["default"] = void 0;

var autoGrow = function autoGrow(textArea) {
  if (textArea instanceof HTMLTextAreaElement) {
    textArea.style.height = 0;
    textArea.style.height = "".concat(textArea.scrollHeight, "px");
  }
};

var initializeTextAreaAutoGrow = function initializeTextAreaAutoGrow(textArea) {
  if (textArea instanceof HTMLTextAreaElement) {
    textArea.style.resize = "none";
    textArea.addEventListener("input", function (e) {
      autoGrow(textArea);
    });
    autoGrow(textArea);
  }
};

exports.initializeTextAreaAutoGrow = initializeTextAreaAutoGrow;
var _default = autoGrow;
exports["default"] = _default;