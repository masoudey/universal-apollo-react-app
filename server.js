/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/Schema/index.js":
/*!********************************!*\
  !*** ./server/Schema/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  type Query {\n    _: Boolean\n  }\n\n  type Mutation {\n    _: Boolean\n  }\n\n  type Subscription {\n    _: Boolean\n  }\n"], ["\n  type Query {\n    _: Boolean\n  }\n\n  type Mutation {\n    _: Boolean\n  }\n\n  type Subscription {\n    _: Boolean\n  }\n"]);

var _apolloServerExpress = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");

var _user = __webpack_require__(/*! ./user */ "./server/Schema/user.js");

var _user2 = _interopRequireDefault(_user);

var _post = __webpack_require__(/*! ./post */ "./server/Schema/post.js");

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var linkSchema = (0, _apolloServerExpress.gql)(_templateObject);

exports.default = [linkSchema, _user2.default, _post2.default];

/***/ }),

/***/ "./server/Schema/post.js":
/*!*******************************!*\
  !*** ./server/Schema/post.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    extend type Query {\n        post(id: ID!): Post!\n        posts(cursor: String, limit: Int): PostConnection!\n    }\n\n    extend type Mutation {\n        createPost(title: String!, desc: String!, content: String!, cotagory: String!, img: String!): Post!\n        deletePost(id: ID!): Boolean!\n    }\n\n    type PostConnection {\n        edges: [Post!]!\n        pageInfo: PageInfo!\n    }\n\n    type PageInfo {\n        hasNextPage: Boolean!\n        endCursor: String!\n    }\n\n    type Post {\n        _id: ID!\n        title: String!\n        desc: String!\n        content: String!\n        cotagory: String!\n        img: String!\n        date: String!\n        user: User!\n    }\n\n    extend type Subscription {\n        postCreated: PostCreated!\n    }\n\n    type PostCreated {\n        post: Post!\n    }\n"], ["\n    extend type Query {\n        post(id: ID!): Post!\n        posts(cursor: String, limit: Int): PostConnection!\n    }\n\n    extend type Mutation {\n        createPost(title: String!, desc: String!, content: String!, cotagory: String!, img: String!): Post!\n        deletePost(id: ID!): Boolean!\n    }\n\n    type PostConnection {\n        edges: [Post!]!\n        pageInfo: PageInfo!\n    }\n\n    type PageInfo {\n        hasNextPage: Boolean!\n        endCursor: String!\n    }\n\n    type Post {\n        _id: ID!\n        title: String!\n        desc: String!\n        content: String!\n        cotagory: String!\n        img: String!\n        date: String!\n        user: User!\n    }\n\n    extend type Subscription {\n        postCreated: PostCreated!\n    }\n\n    type PostCreated {\n        post: Post!\n    }\n"]);

var _apolloServerExpress = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _apolloServerExpress.gql)(_templateObject);

/***/ }),

/***/ "./server/Schema/user.js":
/*!*******************************!*\
  !*** ./server/Schema/user.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    extend type Query {\n        currentUser: User\n        user(id: ID!): User\n        users: [User!]\n    }\n\n    extend type Mutation {\n        signUp(\n            username: String!\n            email: String!\n            password: String!\n            firstName: String! \n            lastName: String!\n            profileImage: String\n        ): AuthPayload!\n        signIn(email: String!, password: String!): AuthPayload!\n        updateUser(email: String!, username: String!, firstName: String!, lastName: String!): User!\n        deleteUser(id: ID!): Boolean!\n        setUserImage(email: String!, userImage: String!): User!\n        changeEmail(currentEmail: String!, newEmail: String!): User!\n        changePassword(email: String!, password: String!): User!\n        passwordReset(email: String!): User! \n    }\n\n    type AuthPayload {\n        token: String!\n        user: User!\n    }\n\n    type User {\n        id: ID!\n        username: String!\n        password: String!\n        email: String!\n        firstName: String! \n        lastName: String!\n        bio: String\n        userImage: String\n        role: String\n        createdAt: String!\n        posts: [Post!]\n    }\n"], ["\n    extend type Query {\n        currentUser: User\n        user(id: ID!): User\n        users: [User!]\n    }\n\n    extend type Mutation {\n        signUp(\n            username: String!\n            email: String!\n            password: String!\n            firstName: String! \n            lastName: String!\n            profileImage: String\n        ): AuthPayload!\n        signIn(email: String!, password: String!): AuthPayload!\n        updateUser(email: String!, username: String!, firstName: String!, lastName: String!): User!\n        deleteUser(id: ID!): Boolean!\n        setUserImage(email: String!, userImage: String!): User!\n        changeEmail(currentEmail: String!, newEmail: String!): User!\n        changePassword(email: String!, password: String!): User!\n        passwordReset(email: String!): User! \n    }\n\n    type AuthPayload {\n        token: String!\n        user: User!\n    }\n\n    type User {\n        id: ID!\n        username: String!\n        password: String!\n        email: String!\n        firstName: String! \n        lastName: String!\n        bio: String\n        userImage: String\n        role: String\n        createdAt: String!\n        posts: [Post!]\n    }\n"]);

var _apolloServerExpress = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _apolloServerExpress.gql)(_templateObject);

/***/ }),

/***/ "./server/helpers/renderer.js":
/*!************************************!*\
  !*** ./server/helpers/renderer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _webConfig = __webpack_require__(/*! ../../webConfig */ "./webConfig.json");

var _webConfig2 = _interopRequireDefault(_webConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTML = function HTML(_ref) {
    var content = _ref.content,
        state = _ref.state,
        helmet = _ref.helmet;

    var htmlAttrs = helmet.htmlAttributes.toComponent();
    var bodyAttrs = helmet.bodyAttributes.toComponent();

    return _react2.default.createElement(
        "html",
        _extends({ lang: "en" }, htmlAttrs),
        _react2.default.createElement("head", { dangerouslySetInnerHTML: {
                __html: helmet.title.toString() + "\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n            " + helmet.meta.toString() + "\n            <link rel=\"shortcut icon\" href=\"" + _webConfig2.default.siteURL + "/assets/graphics/favicon.ico\">\n            <link href=\"" + _webConfig2.default.siteURL + "/styles.css\" rel=\"stylesheet\" type=\"text/css\" />\n            <link href=\"https://fonts.googleapis.com/css?family=Lato:400,700\" rel=\"stylesheet\" />\n            <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossOrigin=\"anonymous\" />\n            " } }),
        _react2.default.createElement(
            "body",
            bodyAttrs,
            _react2.default.createElement("div", { id: "root", dangerouslySetInnerHTML: { __html: content } }),
            _react2.default.createElement("script", { dangerouslySetInnerHTML: {
                    __html: "window.__APOLLO_STATE__=" + JSON.stringify(state).replace(/</g, "\\u003c") + ";"
                } }),
            _react2.default.createElement("script", { src: "https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js" }),
            _react2.default.createElement("script", { src: _webConfig2.default.siteURL + "/bundle.js" })
        )
    );
};

exports.default = HTML;

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! babel-polyfill */ "babel-polyfill");

__webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");

__webpack_require__(/*! dotenv/config */ "dotenv/config");

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _http = __webpack_require__(/*! http */ "http");

var http = _interopRequireWildcard(_http);

var _https = __webpack_require__(/*! https */ "https");

var https = _interopRequireWildcard(_https);

var _fs = __webpack_require__(/*! fs */ "fs");

var fs = _interopRequireWildcard(_fs);

var _cors = __webpack_require__(/*! cors */ "cors");

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _apolloServerExpress = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");

var _apolloServer = __webpack_require__(/*! apollo-server */ "apollo-server");

var _reactApollo = __webpack_require__(/*! react-apollo */ "react-apollo");

var _apolloClient = __webpack_require__(/*! apollo-client */ "apollo-client");

var _apolloLinkSchema = __webpack_require__(/*! apollo-link-schema */ "apollo-link-schema");

var _apolloLinkHttp = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");

var _apolloCacheInmemory = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");

var _graphqlTools = __webpack_require__(/*! graphql-tools */ "graphql-tools");

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _dataloader = __webpack_require__(/*! dataloader */ "dataloader");

var _dataloader2 = _interopRequireDefault(_dataloader);

var _webConfig = __webpack_require__(/*! ../webConfig */ "./webConfig.json");

var _webConfig2 = _interopRequireDefault(_webConfig);

var _renderer = __webpack_require__(/*! ./helpers/renderer */ "./server/helpers/renderer.js");

var _renderer2 = _interopRequireDefault(_renderer);

var _Schema = __webpack_require__(/*! ./Schema */ "./server/Schema/index.js");

var _Schema2 = _interopRequireDefault(_Schema);

var _resolvers = __webpack_require__(/*! ./resolvers */ "./server/resolvers/index.js");

var _resolvers2 = _interopRequireDefault(_resolvers);

var _models = __webpack_require__(/*! ./models */ "./server/models/index.js");

var _models2 = _interopRequireDefault(_models);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import App from "../shared/app";

_mongoose2.default.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true }).then(function () {
    console.log("Connection to Database Successfull!");
}).catch(function (err) {
    console.log("Connection to Database Error", err);
});

var PORT = process.env.PORT || 5000;
var configurations = {
    production: { ssl: true, port: PORT, hostname: 'whatever.com' },
    development: { ssl: false, port: PORT, hostname: 'localhost' }
};

var environment = "development" || false;
var config = configurations[environment];

var app = (0, _express2.default)();
app.use((0, _cors2.default)({
    origin: _webConfig2.default.siteURL,
    credentials: true
}));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _cookieParser2.default)());
app.use('/', _express2.default.static('public'));

var getCurrentUser = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var token;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log("cookies", req.cookies);
                        token = req.cookies.token ? req.cookies.token : null;

                        if (!token) {
                            _context.next = 12;
                            break;
                        }

                        _context.prev = 3;
                        _context.next = 6;
                        return _jsonwebtoken2.default.verify(token, process.env.JWT_SECRET);

                    case 6:
                        return _context.abrupt('return', _context.sent);

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](3);

                        res.clearCookie('token');

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[3, 9]]);
    }));

    return function getCurrentUser(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var apollo = new _apolloServerExpress.ApolloServer({
    typeDefs: _Schema2.default,
    resolvers: _resolvers2.default,
    formatError: function formatError(error) {
        var message = error.message.replace('mogoose Validation Error: ', '').replace('Validation error', '');
        return _extends({}, error, {
            message: message
        });
    },
    context: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
            var req = _ref3.req,
                res = _ref3.res,
                connection = _ref3.connection;
            var currentUser;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            console.log("context");

                            if (!connection) {
                                _context2.next = 4;
                                break;
                            }

                            console.log("connection");
                            return _context2.abrupt('return', {
                                models: _models2.default
                            });

                        case 4:
                            if (!req) {
                                _context2.next = 10;
                                break;
                            }

                            _context2.next = 7;
                            return getCurrentUser(req, res);

                        case 7:
                            currentUser = _context2.sent;

                            console.log("currentUser", currentUser);

                            return _context2.abrupt('return', {
                                models: _models2.default,
                                currentUser: currentUser,
                                secret: process.env.JWT_SECRET
                            });

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function context(_x3) {
            return _ref2.apply(this, arguments);
        };
    }()
});
apollo.applyMiddleware({ app: app, path: '/graphql' });

app.use(["*/:param", '*'], function (req, res) {
    var URL_Param = req.params.param ? req.params.param : null;

    var schema = (0, _graphqlTools.makeExecutableSchema)({
        typeDefs: _Schema2.default,
        resolvers: _resolvers2.default

    });
    var client = new _apolloClient.ApolloClient({
        ssrMode: true,
        // link: new SchemaLink({schema}),
        link: (0, _apolloLinkHttp.createHttpLink)({
            uri: _webConfig2.default.siteURL + '/graphql',
            credentials: 'same-origin',
            headers: {
                cookie: req.header('Cookie')
            }
        }),
        cache: new _apolloCacheInmemory.InMemoryCache()
    });

    var context = {
        URL_Param: URL_Param
    };

    var Html = _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { client: client },
        _react2.default.createElement(_reactRouterDom.StaticRouter, { location: req.url, context: context })
    );

    (0, _reactApollo.getDataFromTree)(Html).then(function () {
        var content = (0, _server.renderToString)(Html);
        var initialState = client.extract();
        var helmet = _reactHelmet.Helmet.renderStatic();

        var html = _react2.default.createElement(_renderer2.default, { content: content, state: initialState, helmet: helmet });

        res.status(200);
        res.send('<!doctype html>\n' + (0, _server.renderToStaticMarkup)(html));
        res.end();
    });
});

var server;

if (config.ssl) {
    server = https.createServer({
        key: fs.readFileSync('./ssl/' + environment + '/server.key'),
        cert: fs.readFileSync('./ssl/' + environment + '/server.crt')
    }, app);
} else {
    server = http.createServer(app);
}

apollo.installSubscriptionHandlers(server);

server.listen({ port: config.port }, function () {
    console.log('🚀 Server ready at', 'http' + (config.ssl ? 's' : '') + '://' + config.hostname + ':' + config.port + apollo.graphqlPath);
});

/***/ }),

/***/ "./server/models/index.js":
/*!********************************!*\
  !*** ./server/models/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = __webpack_require__(/*! ./user */ "./server/models/user.js");

var _user2 = _interopRequireDefault(_user);

var _post = __webpack_require__(/*! ./post */ "./server/models/post.js");

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var models = {
    User: _user2.default,
    Post: _post2.default
};

exports.default = models;

/***/ }),

/***/ "./server/models/post.js":
/*!*******************************!*\
  !*** ./server/models/post.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Post = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    cotagory: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

exports.default = _mongoose2.default.model('Post', Post);

/***/ }),

/***/ "./server/models/user.js":
/*!*******************************!*\
  !*** ./server/models/user.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userImage: {
        type: String
    },
    bio: {
        type: String
    },
    role: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

User.pre('save', function (next) {
    var _this = this;

    if (!this.isModified('password')) {
        return next();
    }

    _bcrypt2.default.genSalt(10, function (err, salt) {
        if (err) return next(err);

        _bcrypt2.default.hash(_this.password, salt, function (err, hash) {
            _this.password = hash;

            next();
        });
    });
});

exports.default = _mongoose2.default.model('User', User);

/***/ }),

/***/ "./server/resolvers/authorization.js":
/*!*******************************************!*\
  !*** ./server/resolvers/authorization.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPostOwner = exports.isAdmin = exports.isAuthenticated = undefined;

var _apolloServer = __webpack_require__(/*! apollo-server */ "apollo-server");

var _graphqlResolvers = __webpack_require__(/*! graphql-resolvers */ "graphql-resolvers");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var isAuthenticated = exports.isAuthenticated = function isAuthenticated(parent, args, _ref) {
    var me = _ref.me;
    return me ? _graphqlResolvers.skip : new _apolloServer.ForbiddenError('Not authenticated');
};

var isAdmin = exports.isAdmin = (0, _graphqlResolvers.combineResolvers)(isAuthenticated, function (parent, args, _ref2) {
    var role = _ref2.me.role;
    return role === 'ADMIN' ? _graphqlResolvers.skip : new _apolloServer.ForbiddenError('Not authorized as admin');
});

var isPostOwner = exports.isPostOwner = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parents, _ref4, _ref5) {
        var id = _ref4.id;
        var models = _ref5.models,
            me = _ref5.me;
        var post;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return models.Post.findById(id, { lean: true });

                    case 2:
                        post = _context.sent;

                        if (!(post.userId !== me.id)) {
                            _context.next = 5;
                            break;
                        }

                        throw new _apolloServer.ForbiddenError('Not authenticated as owner');

                    case 5:
                        return _context.abrupt("return", _graphqlResolvers.skip);

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function isPostOwner(_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
    };
}();

/***/ }),

/***/ "./server/resolvers/index.js":
/*!***********************************!*\
  !*** ./server/resolvers/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _post = __webpack_require__(/*! ./post */ "./server/resolvers/post.js");

var _post2 = _interopRequireDefault(_post);

var _user = __webpack_require__(/*! ./user */ "./server/resolvers/user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_user2.default, _post2.default];

/***/ }),

/***/ "./server/resolvers/post.js":
/*!**********************************!*\
  !*** ./server/resolvers/post.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphqlResolvers = __webpack_require__(/*! graphql-resolvers */ "graphql-resolvers");

var _authorization = __webpack_require__(/*! ./authorization */ "./server/resolvers/authorization.js");

var _subscription = __webpack_require__(/*! ../subscription */ "./server/subscription/index.js");

var _subscription2 = _interopRequireDefault(_subscription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var toCursorHash = function toCursorHash(string) {
    return Buffer.from(string).toString('base64');
};

var fromCursorHash = function fromCursorHash(string) {
    return Buffer.from(string, 'base64').toString('ascii');
};

exports.default = {
    Query: {
        posts: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(parent, _ref2, _ref3) {
                var cursor = _ref2.cursor,
                    _ref2$limit = _ref2.limit,
                    limit = _ref2$limit === undefined ? 50 : _ref2$limit;
                var models = _ref3.models;
                var cursorOptions, posts, hasNextPage, edges;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                cursorOptions = cursor ? { createdAt: { $lte: fromCursorHash(cursor) } } : {};

                                console.log(fromCursorHash(cursor));
                                _context.next = 4;
                                return models.Post.find(cursorOptions, null, { sort: { createdAt: 'desc' }, limit: limit + 1 });

                            case 4:
                                posts = _context.sent;
                                hasNextPage = posts.length > limit;
                                edges = hasNextPage ? posts.slice(0, -1) : posts;
                                return _context.abrupt("return", {
                                    edges: edges,
                                    pageInfo: {
                                        endCursor: toCursorHash(edges[edges.length - 1].date.toString())
                                    }
                                });

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, undefined);
            }));

            return function posts(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            };
        }(),
        post: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(parent, _ref5, _ref6) {
                var id = _ref5.id;
                var models = _ref6.models;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return models.Post.findById(id);

                            case 2:
                                return _context2.abrupt("return", _context2.sent);

                            case 3:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, undefined);
            }));

            return function post(_x4, _x5, _x6) {
                return _ref4.apply(this, arguments);
            };
        }()
    },

    Mutation: {
        createPost: (0, _graphqlResolvers.combineResolvers)(_authorization.isAuthenticated, function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(parent, _ref8, _ref9) {
                var title = _ref8.title,
                    desc = _ref8.desc,
                    content = _ref8.content,
                    cotagory = _ref8.cotagory,
                    img = _ref8.img;
                var models = _ref9.models,
                    me = _ref9.me;
                var post;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return new models.Post({
                                    title: title,
                                    desc: desc,
                                    content: content,
                                    cotagory: cotagory,
                                    img: img,
                                    userId: me.id
                                }).save();

                            case 2:
                                post = _context3.sent;


                                _subscription2.default.publish(_subscription.EVENTS.POST.CREATED, {
                                    postCreated: { post: post }
                                });

                                return _context3.abrupt("return", post);

                            case 5:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, undefined);
            }));

            return function (_x7, _x8, _x9) {
                return _ref7.apply(this, arguments);
            };
        }()),

        deletePost: (0, _graphqlResolvers.combineResolvers)(_authorization.isAuthenticated, _authorization.isPostOwner, function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parent, _ref11, _ref12) {
                var id = _ref11.id;
                var models = _ref12.models;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return models.Post.findByIdAndDelete({ id: id });

                            case 2:
                                return _context4.abrupt("return", _context4.sent);

                            case 3:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, undefined);
            }));

            return function (_x10, _x11, _x12) {
                return _ref10.apply(this, arguments);
            };
        }())
    },

    Post: {
        user: function () {
            var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(post, args, _ref14) {
                var models = _ref14.models;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return models.User.findById(post.userId);

                            case 2:
                                return _context5.abrupt("return", _context5.sent);

                            case 3:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, undefined);
            }));

            return function user(_x13, _x14, _x15) {
                return _ref13.apply(this, arguments);
            };
        }()
    },

    Subscription: {
        postCreated: {
            subscribe: function subscribe() {
                return _subscription2.default.asyncIterator(_subscription.EVENTS.POST.CREATED);
            }
        }
    }
};

/***/ }),

/***/ "./server/resolvers/user.js":
/*!**********************************!*\
  !*** ./server/resolvers/user.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _generatePassword = __webpack_require__(/*! generate-password */ "generate-password");

var _generatePassword2 = _interopRequireDefault(_generatePassword);

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

var _graphqlResolvers = __webpack_require__(/*! graphql-resolvers */ "graphql-resolvers");

var _apolloServer = __webpack_require__(/*! apollo-server */ "apollo-server");

var _webConfig = __webpack_require__(/*! ../../webConfig */ "./webConfig.json");

var _webConfig2 = _interopRequireDefault(_webConfig);

var _authorization = __webpack_require__(/*! ./authorization */ "./server/resolvers/authorization.js");

var _bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createToken = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user, secret, expiresIn) {
        var id, email, username, role;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        id = user.id, email = user.email, username = user.username, role = user.role;
                        _context.next = 3;
                        return _jsonwebtoken2.default.sign({ id: id, email: email, username: username, role: role }, secret, { expiresIn: expiresIn });

                    case 3:
                        return _context.abrupt("return", _context.sent);

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function createToken(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var generatePasswordHash = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(password) {
        var saltRound;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        saltRound = 10;
                        _context2.next = 3;
                        return _bcrypt2.default.hashSync(password, saltRound);

                    case 3:
                        return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function generatePasswordHash(_x4) {
        return _ref2.apply(this, arguments);
    };
}();

var validatePassword = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(password, userPassword) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return _bcrypt2.default.compare(password, userPassword);

                    case 2:
                        return _context3.abrupt("return", _context3.sent);

                    case 3:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function validatePassword(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

exports.default = {
    Query: {
        users: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parent, args, _ref5) {
                var models = _ref5.models;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                console.log("users");
                                _context4.next = 3;
                                return models.User.find();

                            case 3:
                                return _context4.abrupt("return", _context4.sent);

                            case 4:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, undefined);
            }));

            return function users(_x7, _x8, _x9) {
                return _ref4.apply(this, arguments);
            };
        }(),

        user: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(parent, _ref7, _ref8) {
                var id = _ref7.id;
                var models = _ref8.models;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return models.User.findById(id);

                            case 2:
                                return _context5.abrupt("return", _context5.sent);

                            case 3:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, undefined);
            }));

            return function user(_x10, _x11, _x12) {
                return _ref6.apply(this, arguments);
            };
        }(),

        currentUser: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(parent, args, _ref10) {
                var models = _ref10.models,
                    _currentUser = _ref10.currentUser;
                var usr;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                console.log(_currentUser);

                                if (_currentUser) {
                                    _context6.next = 3;
                                    break;
                                }

                                return _context6.abrupt("return", null);

                            case 3:
                                _context6.next = 5;
                                return models.User.findById(_currentUser.id);

                            case 5:
                                usr = _context6.sent;

                                console.log("usr", usr);
                                return _context6.abrupt("return", usr);

                            case 8:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, undefined);
            }));

            return function currentUser(_x13, _x14, _x15) {
                return _ref9.apply(this, arguments);
            };
        }()
    },
    Mutation: {
        signUp: function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(parent, _ref12, _ref13) {
                var username = _ref12.username,
                    email = _ref12.email,
                    password = _ref12.password,
                    firstName = _ref12.firstName,
                    lastName = _ref12.lastName,
                    userImage = _ref12.userImage;
                var models = _ref13.models,
                    secret = _ref13.secret;
                var user, newUser;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _context7.next = 2;
                                return models.User.findOne({ email: email });

                            case 2:
                                user = _context7.sent;

                                if (!user) {
                                    _context7.next = 5;
                                    break;
                                }

                                throw new _apolloServer.UserInputError('User Exist');

                            case 5:
                                _context7.next = 7;
                                return new models.User({
                                    username: username,
                                    email: email,
                                    password: password,
                                    firstName: firstName,
                                    lastName: lastName,
                                    userImage: userImage
                                }).save();

                            case 7:
                                newUser = _context7.sent;
                                return _context7.abrupt("return", {
                                    token: createToken(newUser, secret, '30m'),
                                    newUser: newUser
                                });

                            case 9:
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, undefined);
            }));

            return function signUp(_x16, _x17, _x18) {
                return _ref11.apply(this, arguments);
            };
        }(),

        signIn: function () {
            var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(parents, _ref15, _ref16) {
                var email = _ref15.email,
                    password = _ref15.password;
                var models = _ref16.models,
                    secret = _ref16.secret;
                var user, isValidPass;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                _context8.next = 2;
                                return models.User.findOne({ email: email });

                            case 2:
                                user = _context8.sent;

                                if (user) {
                                    _context8.next = 5;
                                    break;
                                }

                                throw new _apolloServer.UserInputError('User doesnt exist');

                            case 5:
                                _context8.next = 7;
                                return validatePassword(password, user.password);

                            case 7:
                                isValidPass = _context8.sent;

                                if (isValidPass) {
                                    _context8.next = 10;
                                    break;
                                }

                                throw new _apolloServer.AuthenticationError('Invalid password');

                            case 10:
                                return _context8.abrupt("return", {
                                    token: createToken(user, secret, '30m'),
                                    user: user
                                });

                            case 11:
                            case "end":
                                return _context8.stop();
                        }
                    }
                }, _callee8, undefined);
            }));

            return function signIn(_x19, _x20, _x21) {
                return _ref14.apply(this, arguments);
            };
        }(),
        updateUser: (0, _graphqlResolvers.combineResolvers)(_authorization.isAuthenticated, function () {
            var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(parent, _ref18, _ref19) {
                var email = _ref18.email,
                    username = _ref18.username,
                    firstName = _ref18.firstName,
                    lastName = _ref18.lastName;
                var models = _ref19.models,
                    currentUser = _ref19.currentUser;
                var user;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                _context9.next = 2;
                                return models.User.findOneAndUpdate({ email: email }, { $set: { username: username, firstName: firstName, lastName: lastName } }, { new: true });

                            case 2:
                                user = _context9.sent;

                                if (user) {
                                    _context9.next = 5;
                                    break;
                                }

                                throw new _apolloServer.UserInputError('User not found');

                            case 5:
                                return _context9.abrupt("return", user);

                            case 6:
                            case "end":
                                return _context9.stop();
                        }
                    }
                }, _callee9, undefined);
            }));

            return function (_x22, _x23, _x24) {
                return _ref17.apply(this, arguments);
            };
        }()),
        deleteUser: (0, _graphqlResolvers.combineResolvers)(_authorization.isAdmin, function () {
            var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(parent, _ref21, _ref22) {
                var id = _ref21.id;
                var models = _ref22.models;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                        switch (_context10.prev = _context10.next) {
                            case 0:
                                _context10.next = 2;
                                return models.User.findByIdAndDelete({ id: id });

                            case 2:
                                return _context10.abrupt("return", _context10.sent);

                            case 3:
                            case "end":
                                return _context10.stop();
                        }
                    }
                }, _callee10, undefined);
            }));

            return function (_x25, _x26, _x27) {
                return _ref20.apply(this, arguments);
            };
        }()),
        setUserImage: function () {
            var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(parent, _ref24, _ref25) {
                var email = _ref24.email,
                    userImage = _ref24.userImage;
                var models = _ref25.models,
                    currentUser = _ref25.currentUser;
                var user;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                            case 0:
                                _context11.next = 2;
                                return models.User.findOneAndUpdate({ email: email }, { $set: { userImage: userImage } }, { new: true });

                            case 2:
                                user = _context11.sent;

                                if (user) {
                                    _context11.next = 5;
                                    break;
                                }

                                throw new _apolloServer.UserInputError('User not found');

                            case 5:
                                return _context11.abrupt("return", user);

                            case 6:
                            case "end":
                                return _context11.stop();
                        }
                    }
                }, _callee11, undefined);
            }));

            return function setUserImage(_x28, _x29, _x30) {
                return _ref23.apply(this, arguments);
            };
        }(),
        changeEmail: function () {
            var _ref26 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(parent, _ref27, _ref28) {
                var currentEmail = _ref27.currentEmail,
                    newEmail = _ref27.newEmail;
                var models = _ref28.models;
                var user;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) {
                        switch (_context12.prev = _context12.next) {
                            case 0:
                                _context12.next = 2;
                                return models.User.findOneAndUpdate({ email: currentEmail }, { $set: { email: newEmail } }, { new: true });

                            case 2:
                                user = _context12.sent;

                                if (user) {
                                    _context12.next = 5;
                                    break;
                                }

                                throw new _apolloServer.UserInputError('User not found');

                            case 5:
                                return _context12.abrupt("return", user);

                            case 6:
                            case "end":
                                return _context12.stop();
                        }
                    }
                }, _callee12, undefined);
            }));

            return function changeEmail(_x31, _x32, _x33) {
                return _ref26.apply(this, arguments);
            };
        }(),
        changePassword: function () {
            var _ref29 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(parent, _ref30, _ref31) {
                var email = _ref30.email,
                    password = _ref30.password;
                var models = _ref31.models;
                var hashPassword, user;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                        switch (_context13.prev = _context13.next) {
                            case 0:
                                _context13.next = 2;
                                return generatePasswordHash(password);

                            case 2:
                                hashPassword = _context13.sent;
                                _context13.next = 5;
                                return models.User.findOneAndUpdate({ email: email }, { $set: { password: hashPassword } }, { new: true });

                            case 5:
                                user = _context13.sent;

                                if (user) {
                                    _context13.next = 8;
                                    break;
                                }

                                throw new _apolloServer.UserInputError('User not found');

                            case 8:
                                return _context13.abrupt("return", user);

                            case 9:
                            case "end":
                                return _context13.stop();
                        }
                    }
                }, _callee13, undefined);
            }));

            return function changePassword(_x34, _x35, _x36) {
                return _ref29.apply(this, arguments);
            };
        }(),
        passwordReset: function () {
            var _ref32 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(parent, _ref33, _ref34) {
                var email = _ref33.email;
                var models = _ref34.models;
                var generatedPassword, hashPassword, user, data;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                        switch (_context14.prev = _context14.next) {
                            case 0:
                                generatedPassword = _generatePassword2.default.generate({ length: 10, numbers: true });
                                _context14.next = 3;
                                return generatePasswordHash(generatedPassword);

                            case 3:
                                hashPassword = _context14.sent;
                                _context14.next = 6;
                                return models.User.findOneAndUpdate({ email: email }, { $set: { password: hashPassword } }, { new: true });

                            case 6:
                                user = _context14.sent;

                                if (user) {
                                    _context14.next = 11;
                                    break;
                                }

                                throw new _apolloServer.UserInputError('User not found');

                            case 11:
                                data = {
                                    email: email,
                                    generatedPassword: generatedPassword
                                };


                                _axios2.default.post(_webConfig2.default.siteURL + "/password-reset", data).then(function (response) {
                                    console.log('Email has sent!');
                                }).catch(function (err) {
                                    console.log(err);
                                });

                            case 13:
                                return _context14.abrupt("return", user);

                            case 14:
                            case "end":
                                return _context14.stop();
                        }
                    }
                }, _callee14, undefined);
            }));

            return function passwordReset(_x37, _x38, _x39) {
                return _ref32.apply(this, arguments);
            };
        }()
    },
    User: {
        posts: function () {
            var _ref35 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(user, args, _ref36) {
                var models = _ref36.models;
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) {
                        switch (_context15.prev = _context15.next) {
                            case 0:
                                _context15.next = 2;
                                return models.Post.find({ userId: user.id });

                            case 2:
                                return _context15.abrupt("return", _context15.sent);

                            case 3:
                            case "end":
                                return _context15.stop();
                        }
                    }
                }, _callee15, undefined);
            }));

            return function posts(_x40, _x41, _x42) {
                return _ref35.apply(this, arguments);
            };
        }()
    }
};

/***/ }),

/***/ "./server/subscription/index.js":
/*!**************************************!*\
  !*** ./server/subscription/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EVENTS = undefined;

var _apolloServer = __webpack_require__(/*! apollo-server */ "apollo-server");

var _post = __webpack_require__(/*! ./post */ "./server/subscription/post.js");

var POST_EVENTS = _interopRequireWildcard(_post);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var EVENTS = exports.EVENTS = {
    POST: POST_EVENTS
};

exports.default = new _apolloServer.PubSub();

/***/ }),

/***/ "./server/subscription/post.js":
/*!*************************************!*\
  !*** ./server/subscription/post.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CREATED = exports.CREATED = 'CREATED';

/***/ }),

/***/ "./webConfig.json":
/*!************************!*\
  !*** ./webConfig.json ***!
  \************************/
/*! exports provided: siteURL, environment, default */
/***/ (function(module) {

module.exports = {"siteURL":"http://localhost:5000","environment":"development"};

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "apollo-link-schema":
/*!*************************************!*\
  !*** external "apollo-link-schema" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-schema");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dataloader":
/*!*****************************!*\
  !*** external "dataloader" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dataloader");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "generate-password":
/*!************************************!*\
  !*** external "generate-password" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("generate-password");

/***/ }),

/***/ "graphql-resolvers":
/*!************************************!*\
  !*** external "graphql-resolvers" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-resolvers");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map