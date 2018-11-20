(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./shared/containers/Home.js":
/*!***********************************!*\
  !*** ./shared/containers/Home.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactCache = __webpack_require__(/*! react-cache */ "./node_modules/react-cache/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var imageReacource = (0, _reactCache.unstable_createResource)(function (source) {
    return new Promise(function (resolve) {
        var img = new Image();
        img.src = source;
        img.onload = resolve;
    });
});

var Img = function Img(_ref) {
    var src = _ref.src,
        alt = _ref.alt,
        props = _objectWithoutProperties(_ref, ["src", "alt"]);

    imageReacource.read(src);
    return _react2.default.createElement("img", _extends({ src: src, alt: alt }, props));
};

var Home = function Home(_ref2) {
    var session = _ref2.session;


    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            "h1",
            null,
            "Home"
        ),
        _react2.default.createElement(
            _react.Suspense,
            { fallback: _react2.default.createElement("img", { src: "/aaa.jpeg", alt: "me" }) },
            _react2.default.createElement(Img, { src: "/a.jpeg", alt: "masoud" })
        )
    );
};

exports.default = Home;

/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map