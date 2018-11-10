(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./shared/containers/auth/signUp.js":
/*!******************************************!*\
  !*** ./shared/containers/auth/signUp.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SIGNUP_USER = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    mutation($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!, $profileImage: String) {\n        signUp(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName, profileImage:$profileImage) {\n            token\n            user\n        }\n    }\n"], ["\n    mutation($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!, $profileImage: String) {\n        signUp(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName, profileImage:$profileImage) {\n            token\n            user\n        }\n    }\n"]);

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SIGNUP_USER = exports.SIGNUP_USER = (0, _graphqlTag2.default)(_templateObject);

var initialState = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    passwordMatch: '',
    error: ''
};

function SignUpp(props) {
    var username = (0, _useFormInput2.default)('');
    var email = (0, _useFormInput2.default)('');
    var password = (0, _useFormInput2.default)('');
    var passwordConfirm = (0, _useFormInput2.default)('');
    var firstName = (0, _useFormInput2.default)('');
    var lastName = (0, _useFormInput2.default)('');

    var _useContext = (0, _react.useContext)(),
        data = _useContext.data;

    var passwordMatch = password !== passwordConfirm;
    var isInvalid = !firstName || !lastName || !email || !username || !password || password !== passwordConfirm;

    return _react2.default.createElement(
        "div",
        { className: "login-wrapper" },
        _react2.default.createElement(
            _reactHelmet.Helmet,
            { bodyAttributes: { class: 'signUp' } },
            _react2.default.createElement(
                "title",
                null,
                "Join now - Apollo React App"
            )
        )
    );
}

var SignUp = function (_Component) {
    _inherits(SignUp, _Component);

    function SignUp(props) {
        var _this2 = this;

        _classCallCheck(this, SignUp);

        var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

        _this.onChange = function (e) {
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            _this.setState(_defineProperty({}, name, value));
        };

        _this.handleSubmit = function (e, signUp, client) {
            e.preventDefault();
            console.log(client);
            signUp().then(function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
                    var data = _ref2.data;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    Cookies.set('token', data.signUp.token);
                                    _context.next = 3;
                                    return _this.props.refresh();

                                case 3:
                                    _this.setState(_extends({}, initialState));
                                    _this.props.history.push('/');

                                case 5:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function (_x) {
                    return _ref.apply(this, arguments);
                };
            }()).catch(function (error) {
                _this.setState({
                    error: 'Either your email or username is already taken'
                });
            });
        };

        _this.confirmPW = function () {
            var _this$state = _this.state,
                password = _this$state.password,
                passwordConfirm = _this$state.passwordConfirm;

            var isMatch = password !== passwordConfirm;
            _this.setState({
                passwordMatch: isMatch
            });
        };

        _this.validateForm = function () {
            var _this$state2 = _this.state,
                firstName = _this$state2.firstName,
                lastName = _this$state2.lastName,
                email = _this$state2.email,
                userName = _this$state2.userName,
                password = _this$state2.password,
                passwordConfirm = _this$state2.passwordConfirm;

            var isInvalid = !firstName || !lastName || !email || !userName || !password || password !== passwordConfirm;
            return isInvalid;
        };

        _this.state = _extends({}, initialState);
        return _this;
    }

    _createClass(SignUp, [{
        key: "head",
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                { bodyAttributes: { class: 'signUp' } },
                _react2.default.createElement(
                    "title",
                    null,
                    "Join now - Apollo React App"
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                username = _state.username,
                email = _state.email,
                password = _state.password,
                passwordConfirm = _state.passwordConfirm,
                firstName = _state.firstName,
                lastName = _state.lastName,
                passwordMatch = _state.passwordMatch;


            return _react2.default.createElement(
                "div",
                { className: "login-wrapper" },
                this.head(),
                _react2.default.createElement(
                    "span",
                    { className: "title" },
                    "SignUp"
                ),
                _react2.default.createElement(
                    _reactApollo.Mutation,
                    {
                        mutation: SIGNUP_USER,
                        variables: { username: username, email: email, password: password, firstName: firstName, lastName: lastName },
                        update: function update(cache, _ref3) {
                            var data = _ref3.data;

                            console.log("data", data);
                            console.log("cache", cache);
                        }
                    },
                    function (signUp, _ref4) {
                        var data = _ref4.data,
                            client = _ref4.client,
                            loading = _ref4.loading,
                            error = _ref4.error;

                        return _react2.default.createElement(
                            "form",
                            { name: "form", onSubmit: function onSubmit(e) {
                                    return _this3.handleSubmit(e, signUp, client);
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
                                        name: "username",
                                        id: "username",
                                        placeholder: "UserName",
                                        onChange: _this3.onChange,
                                        onBlur: _this3.validateForm,
                                        value: username,
                                        autoFocus: true,
                                        required: true
                                    })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "inputrow" },
                                    _react2.default.createElement("i", { className: "fa icon-user fa-fw" }),
                                    _react2.default.createElement("input", {
                                        type: "text",
                                        name: "firstName",
                                        id: "firstName",
                                        placeholder: "FirstName",
                                        onChange: _this3.onChange,
                                        value: firstName,
                                        required: true
                                    })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "inputrow" },
                                    _react2.default.createElement("i", { className: "fa icon-user fa-fw" }),
                                    _react2.default.createElement("input", {
                                        type: "text",
                                        name: "lastName",
                                        id: "lastName",
                                        placeholder: "LastName",
                                        onChange: _this3.onChange,
                                        value: lastName,
                                        required: true
                                    })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "inputrow" },
                                    _react2.default.createElement("i", { className: "fa icon-mail4 fa-fw" }),
                                    _react2.default.createElement("input", {
                                        type: "email",
                                        name: "email",
                                        id: "email",
                                        placeholder: "Email",
                                        onChange: _this3.onChange,
                                        value: email,
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
                                    { className: "inputrow" },
                                    _react2.default.createElement("i", { className: "fa icon-key fa-fw" }),
                                    _react2.default.createElement("input", {
                                        type: "password",
                                        name: "passwordConfirm",
                                        id: "passwordConfirm",
                                        "data-typetoggle": "#show",
                                        onChange: _this3.onChange,
                                        onBlur: _this3.confirmPW,
                                        value: passwordConfirm,
                                        placeholder: "Confirm Password",
                                        required: true
                                    })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "button-center" },
                                    _react2.default.createElement(
                                        "button",
                                        { className: "btn-log", type: "submit", id: "submit", disabled: passwordMatch || _this3.validateForm() },
                                        "Register"
                                    ),
                                    loading && _react2.default.createElement("img", { src: "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" })
                                )
                            )
                        );
                    }
                )
            );
        }
    }]);

    return SignUp;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(SignUp);

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
//# sourceMappingURL=1.bundle.js.map