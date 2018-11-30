(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./shared/containers/auth/signIn.js":
/*!******************************************!*\
  !*** ./shared/containers/auth/signIn.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = exports.SIGNIN_USER = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    mutation($email: String!, $password: String!) {\n        signIn(email: $email, password: $password) {\n            token\n            user{\n                username\n                email\n                firstName\n                lastName\n                password\n            }\n        }\n    }\n"], ["\n    mutation($email: String!, $password: String!) {\n        signIn(email: $email, password: $password) {\n            token\n            user{\n                username\n                email\n                firstName\n                lastName\n                password\n            }\n        }\n    }\n"]);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactApollo = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");

var _graphqlTag = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _esCookie = __webpack_require__(/*! es-cookie */ "./node_modules/es-cookie/src/es-cookie.js");

var Cookies = _interopRequireWildcard(_esCookie);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");

var _useFormInput = __webpack_require__(/*! ../../hooks/useFormInput */ "./shared/hooks/useFormInput.js");

var _useFormInput2 = _interopRequireDefault(_useFormInput);

var _util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SIGNIN_USER = exports.SIGNIN_USER = (0, _graphqlTag2.default)(_templateObject);

var initialState = {
    email: '',
    password: ''
};

function SignInn(props) {
    var email = (0, _useFormInput2.default)('');
    var password = (0, _useFormInput2.default)('');

    var isInvalid = !email || !password;

    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            _reactHelmet.Helmet,
            { bodyAttributes: { class: 'signIn' } },
            _react2.default.createElement(
                "title",
                null,
                "LogIn - Apollo React App"
            )
        )
    );
}

var testComponent = function testComponent(_ref) {
    var data = _ref.data;
    return data;
};

var login = exports.login = (0, _reactApollo.graphql)(SIGNIN_USER, {
    options: function options(props) {
        return {
            variables: {
                email: props.email,
                password: props.password
            },
            update: function update(cache, _ref2) {
                _objectDestructuringEmpty(_ref2.data);
            }
        };
    },
    props: {}
})(testComponent);
console.log(testComponent(props));

var SignIn = function (_Component) {
    _inherits(SignIn, _Component);

    function SignIn(props) {
        var _this2 = this;

        _classCallCheck(this, SignIn);

        var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));

        _this.onChange = function (e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            _this.setState(_defineProperty({}, name, value));
        };

        _this.onSubmit = function (e, signIn) {
            e.preventDefault();
            signIn().then(function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref4) {
                    var data = _ref4.data;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _this.setState(_extends({}, initialState));

                                    Cookies.set('token', data.signIn.token);
                                    console.log(data, Cookies.get('token'));
                                    _context.next = 5;
                                    return _this.props.refetch();

                                case 5:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function (_x) {
                    return _ref3.apply(this, arguments);
                };
            }()

            // this.props.history.push('/dashboard');
            ).catch(function (error) {
                _this.setState({
                    error: error.graphQLErrors.map(function (x) {
                        return x.message;
                    })
                });
                console.error("ERR -", error.graphQLErrors.map(function (x) {
                    return x.message;
                }));
            });
        };

        _this.validationForm = function () {
            var _this$state = _this.state,
                email = _this$state.email,
                password = _this$state.password;

            var isInvalid = !email || !password;
            return isInvalid;
        };

        _this.state = _extends({}, initialState);
        return _this;
    }

    _createClass(SignIn, [{
        key: "head",
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                { bodyAttributes: { class: 'signIn' } },
                _react2.default.createElement(
                    "title",
                    null,
                    "LogIn - Apollo React App"
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                email = _state.email,
                password = _state.password;

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    "div",
                    { className: "login-wrapper" },
                    _react2.default.createElement("div", { className: "logo ir" }),
                    _react2.default.createElement(
                        "span",
                        { className: "title" },
                        "Login"
                    ),
                    _react2.default.createElement(
                        _reactApollo.Mutation,
                        {
                            mutation: SIGNIN_USER,
                            variables: { email: email, password: password }
                        },
                        function (signIn, _ref5) {
                            var data = _ref5.data,
                                loading = _ref5.loading,
                                error = _ref5.error;

                            console.log("data", data);
                            console.log("signin", signIn);
                            return _react2.default.createElement(
                                "form",
                                { onSubmit: function onSubmit(e) {
                                        return _this3.onSubmit(e, signIn);
                                    } },
                                _react2.default.createElement(
                                    "fieldset",
                                    null,
                                    _react2.default.createElement(
                                        "div",
                                        { className: "inputrow" },
                                        _react2.default.createElement("i", { className: "fa icon-user fa-fw" }),
                                        _react2.default.createElement("input", {
                                            type: "text",
                                            name: "email",
                                            id: "user",
                                            placeholder: "Email",
                                            onChange: _this3.onChange,
                                            value: email,
                                            autoFocus: true,
                                            required: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "inputrow" },
                                        _react2.default.createElement("i", { className: "fa icon-key fa-fw" }),
                                        _react2.default.createElement("input", {
                                            type: "password",
                                            name: "password",
                                            id: "password",
                                            "data-typetoggle": "#show",
                                            onChange: _this3.onChange,
                                            value: password,
                                            placeholder: "Password",
                                            required: true
                                        })
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "remember" },
                                        _react2.default.createElement("input", {
                                            type: "checkbox",
                                            name: "remember_login",
                                            value: "1",
                                            id: "remember_login"
                                        }),
                                        _react2.default.createElement(
                                            "label",
                                            { htmlFor: "remember_login", className: "radio" },
                                            "Remember me"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "button-center" },
                                        _react2.default.createElement(
                                            "button",
                                            { className: "btn-log", type: "submit", id: "submit" },
                                            "SignIn"
                                        ),
                                        loading && _react2.default.createElement("img", { src: "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" })
                                    )
                                )
                            );
                        }
                    )
                )
            );
        }
    }]);

    return SignIn;
}(_react.Component);

;

exports.default = (0, _reactRouterDom.withRouter)(SignIn);

/***/ }),

/***/ "./shared/hooks/useFormInput.js":
/*!**************************************!*\
  !*** ./shared/hooks/useFormInput.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = useFormInput;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function useFormInput(initialValue) {
    var _useState = (0, _react.useState)(initialValue),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    function handleChange(e) {
        setValue(e.target.value);
    };

    return {
        value: value,
        onChange: handleChange
    };
}

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map