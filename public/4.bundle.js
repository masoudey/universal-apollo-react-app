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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactCache = __webpack_require__(/*! react-cache */ "./node_modules/react-cache/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const imageReacource = unstable_createResource(
//     source =>
//         new Promise(resolve => {
//             const img = new Image();
//             img.src = source;
//             img.onload = resolve;
//         })
// );

// const Img = ({ src, alt, ...props}) => {
//     imageReacource.read(src);
//     return <img src={src} alt={alt} {...props}/>
// }

var Home = function Home(_ref) {
    var session = _ref.session;


    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            "h1",
            null,
            "Home"
        ),
        _react2.default.createElement(_react.Suspense, { fallback: _react2.default.createElement("img", { src: "/aaa.jpg", alt: "me" }) })
    );
};

exports.default = Home;

/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map