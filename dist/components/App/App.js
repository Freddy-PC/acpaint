"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _paintLogo = _interopRequireDefault(require("../../images/paintLogo.svg"));
require("./App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("img", {
    src: _paintLogo.default,
    className: "App-logo",
    alt: "logo"
  }));
}
var _default = exports.default = App;