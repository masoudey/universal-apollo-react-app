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

var _templateObject = _taggedTemplateLiteral(["\n    extend type Query {\n        currentUser: User\n        user(id: ID!): User\n        users: [User!]\n    }\n\n    extend type Mutation {\n        signUp(\n            username: String!\n            email: String!\n            password: String!\n            firstName: String! \n            lastName: String!\n            profileImage: String\n        ): AuthPayload!\n        signIn(email: String!, password: String!): AuthPayload!\n        updateUser(email: String!, username: String!, firstName: String!, lastName: String!): User!\n        deleteUser(id: ID!): Boolean!\n        setUserImage(email: String!, userImage: String!): User!\n        changeEmail(currentEmail: String!, newEmail: String!): User!\n        changePassword(email: String!, password: String!): User!\n        passwordReset(email: String!): User! \n    }\n\n    type AuthPayload {\n        token: String!\n        user: User!\n    }\n\n    type User {\n        _id: ID!\n        username: String!\n        password: String!\n        email: String!\n        firstName: String! \n        lastName: String!\n        bio: String\n        userImage: String\n        rol: String\n        createdAt: String!\n        posts: [Post!]\n    }\n"], ["\n    extend type Query {\n        currentUser: User\n        user(id: ID!): User\n        users: [User!]\n    }\n\n    extend type Mutation {\n        signUp(\n            username: String!\n            email: String!\n            password: String!\n            firstName: String! \n            lastName: String!\n            profileImage: String\n        ): AuthPayload!\n        signIn(email: String!, password: String!): AuthPayload!\n        updateUser(email: String!, username: String!, firstName: String!, lastName: String!): User!\n        deleteUser(id: ID!): Boolean!\n        setUserImage(email: String!, userImage: String!): User!\n        changeEmail(currentEmail: String!, newEmail: String!): User!\n        changePassword(email: String!, password: String!): User!\n        passwordReset(email: String!): User! \n    }\n\n    type AuthPayload {\n        token: String!\n        user: User!\n    }\n\n    type User {\n        _id: ID!\n        username: String!\n        password: String!\n        email: String!\n        firstName: String! \n        lastName: String!\n        bio: String\n        userImage: String\n        rol: String\n        createdAt: String!\n        posts: [Post!]\n    }\n"]);

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
                __html: helmet.title.toString() + "\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n            " + helmet.meta.toString() + "\n            <link rel=\"shortcut icon\" href=\"" + _webConfig2.default.siteURL + "/assets/graphics/favicon.ico\">\n            <link href=\"" + _webConfig2.default.siteURL + "/styles.min.css\" rel=\"stylesheet\" type=\"text/css\" />\n            <link href=\"https://fonts.googleapis.com/css?family=Lato:400,700\" rel=\"stylesheet\" />\n            <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossOrigin=\"anonymous\" />\n            " } }),
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

var _app = __webpack_require__(/*! ../shared/app */ "./shared/app.js");

var _app2 = _interopRequireDefault(_app);

var _Schema = __webpack_require__(/*! ./Schema */ "./server/Schema/index.js");

var _Schema2 = _interopRequireDefault(_Schema);

var _resolvers = __webpack_require__(/*! ./resolvers */ "./server/resolvers/index.js");

var _resolvers2 = _interopRequireDefault(_resolvers);

var _models = __webpack_require__(/*! ./models */ "./server/models/index.js");

var _models2 = _interopRequireDefault(_models);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

var environment = "development" || 'production';
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
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
        var token;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        token = req.cookies.token ? req.cookies.token : null;

                        if (!token) {
                            _context.next = 11;
                            break;
                        }

                        _context.prev = 2;
                        _context.next = 5;
                        return _jsonwebtoken2.default.verify(token, process.env.JWT_SECRET);

                    case 5:
                        return _context.abrupt('return', _context.sent);

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](2);
                        throw new _apolloServer.AuthenticationError('Session Expired...');

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[2, 8]]);
    }));

    return function getCurrentUser(_x) {
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
                connection = _ref3.connection;
            var currentUser;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!connection) {
                                _context2.next = 2;
                                break;
                            }

                            return _context2.abrupt('return', {
                                models: _models2.default
                            });

                        case 2:
                            if (!req) {
                                _context2.next = 5;
                                break;
                            }

                            // const currentUser = await getCurrentUser(req);
                            currentUser = {
                                "_id": {
                                    "$oid": "5ba9f7a39dab691ef4af9ff2"
                                },
                                "users": [],
                                "username": "masoudey",
                                "email": "masoud.ey@gmail.com",
                                "password": "$2b$10$uah18eeMB0O0iji9zwqXxeptqUiwbqXZdikxF9t.M2p67zHs4LEkO",
                                "firstName": "masoud",
                                "lastName": "eyvat",
                                "createdAt": {
                                    "$date": "2018-09-25T08:53:55.570Z"
                                },
                                "__v": 0
                            };
                            return _context2.abrupt('return', {
                                models: _models2.default,
                                currentUser: currentUser,
                                secret: process.env.JWT_SECRET
                            });

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function context(_x2) {
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
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: context },
            _react2.default.createElement(_app2.default, null)
        )
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var saltRound;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        saltRound = 10;
                        _context2.next = 3;
                        return _bcrypt2.default.hashSync(this.password, saltRound);

                    case 3:
                        return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function generatePasswordHash() {
        return _ref2.apply(this, arguments);
    };
}();

var validatePassword = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(password) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return _bcrypt2.default.compare(password, this.password);

                    case 2:
                        return _context3.abrupt("return", _context3.sent);

                    case 3:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function validatePassword(_x4) {
        return _ref3.apply(this, arguments);
    };
}();

exports.default = {
    Query: {
        users: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(parent, args, _ref5) {
                var models = _ref5.models,
                    test = _ref5.test;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return models.User.find();

                            case 2:
                                return _context4.abrupt("return", _context4.sent);

                            case 3:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, undefined);
            }));

            return function users(_x5, _x6, _x7) {
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

            return function user(_x8, _x9, _x10) {
                return _ref6.apply(this, arguments);
            };
        }(),

        currentUser: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(parent, args, _ref10) {
                var models = _ref10.models,
                    _currentUser = _ref10.currentUser;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                if (_currentUser) {
                                    _context6.next = 2;
                                    break;
                                }

                                return _context6.abrupt("return", null);

                            case 2:
                                _context6.next = 4;
                                return models.User.findById(_currentUser.id);

                            case 4:
                                return _context6.abrupt("return", _context6.sent);

                            case 5:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, undefined);
            }));

            return function currentUser(_x11, _x12, _x13) {
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

            return function signUp(_x14, _x15, _x16) {
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
                                return validatePassword(password);

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

            return function signIn(_x17, _x18, _x19) {
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

            return function (_x20, _x21, _x22) {
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

            return function (_x23, _x24, _x25) {
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

            return function setUserImage(_x26, _x27, _x28) {
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

            return function changeEmail(_x29, _x30, _x31) {
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

            return function changePassword(_x32, _x33, _x34) {
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

            return function passwordReset(_x35, _x36, _x37) {
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

            return function posts(_x38, _x39, _x40) {
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

/***/ "./shared/app.js":
/*!***********************!*\
  !*** ./shared/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _withSession = __webpack_require__(/*! ./components/session/withSession */ "./shared/components/session/withSession.js");

var _withSession2 = _interopRequireDefault(_withSession);

var _routes = __webpack_require__(/*! ./routes */ "./shared/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _Header = __webpack_require__(/*! ./components/Header */ "./shared/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var session = this.props.session;
            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(_Header2.default, { session: session }),
                _react2.default.createElement(
                    "main",
                    null,
                    _react2.default.createElement(_routes2.default, { session: session })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _withSession2.default)(App));

/***/ }),

/***/ "./shared/components/Header.js":
/*!*************************************!*\
  !*** ./shared/components/Header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "header",
                null,
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: "/signin" },
                    "SignIn"
                ),
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { to: "/signup" },
                    "SignUp"
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

;

exports.default = (0, _reactRouterDom.withRouter)(Header);

/***/ }),

/***/ "./shared/components/session/withAuth.js":
/*!***********************************************!*\
  !*** ./shared/components/session/withAuth.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactApollo = __webpack_require__(/*! react-apollo */ "react-apollo");

var _userQueries = __webpack_require__(/*! ../../queries/userQueries */ "./shared/queries/userQueries.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withAuth = function withAuth(conditionFn) {
    return function (Component) {
        return function (props) {
            return _react2.default.createElement(
                _reactApollo.Query,
                { query: _userQueries.GET_CURRENT_USER, notifyOnNetworkStatusChange: true },
                function (_ref) {
                    var data = _ref.data,
                        loading = _ref.loading,
                        networkStatus = _ref.networkStatus;

                    if (networkStatus !== 7) {
                        return null;
                    };

                    return conditionFn(data) ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: "/signin" });
                }
            );
        };
    };
};

exports.default = withAuth;

/***/ }),

/***/ "./shared/components/session/withSession.js":
/*!**************************************************!*\
  !*** ./shared/components/session/withSession.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(/*! react-apollo */ "react-apollo");

var _userQueries = __webpack_require__(/*! ../../queries/userQueries */ "./shared/queries/userQueries.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withSession = function withSession(Component) {
    return function (props) {
        return _react2.default.createElement(
            _reactApollo.Query,
            { query: _userQueries.GET_CURRENT_USER },
            function (_ref) {
                var data = _ref.data,
                    refetch = _ref.refetch;
                return _react2.default.createElement(Component, _extends({}, props, { session: data, refetch: refetch }));
            }
        );
    };
};

exports.default = withSession;

/***/ }),

/***/ "./shared/containers/Dashboard.js":
/*!****************************************!*\
  !*** ./shared/containers/Dashboard.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dashboard = function Dashboard() {
    return _react2.default.createElement(
        "h1",
        null,
        "Dashboard"
    );
};

exports.default = Dashboard;

/***/ }),

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(_ref) {
    var session = _ref.session;


    return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
            "h1",
            null,
            "Home"
        )
    );
};

exports.default = Home;

/***/ }),

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
exports.SIGNIN_USER = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    mutation($email: String!, $password: String!) {\n        signIn(email: $email, password: $password) {\n            token\n            user\n        }\n    }\n"], ["\n    mutation($email: String!, $password: String!) {\n        signIn(email: $email, password: $password) {\n            token\n            user\n        }\n    }\n"]);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactApollo = __webpack_require__(/*! react-apollo */ "react-apollo");

var _graphqlTag = __webpack_require__(/*! graphql-tag */ "graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _esCookie = __webpack_require__(/*! es-cookie */ "es-cookie");

var Cookies = _interopRequireWildcard(_esCookie);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SIGNIN_USER = exports.SIGNIN_USER = (0, _graphqlTag2.default)(_templateObject);

var initialState = {
    email: '',
    password: ''
};

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
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
                    var data = _ref2.data;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _this.setState(_extends({}, initialState));

                                    Cookies.set('token', data.signIn.token);

                                    _context.next = 4;
                                    return _this.props.refetch();

                                case 4:

                                    _this.props.history.push('/dashboard');

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
                        function (signIn, _ref3) {
                            var data = _ref3.data,
                                loading = _ref3.loading,
                                error = _ref3.error;

                            return _react2.default.createElement(
                                "form",
                                { name: "form", onSubmit: function onSubmit(e) {
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactApollo = __webpack_require__(/*! react-apollo */ "react-apollo");

var _graphqlTag = __webpack_require__(/*! graphql-tag */ "graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _esCookie = __webpack_require__(/*! es-cookie */ "es-cookie");

var Cookies = _interopRequireWildcard(_esCookie);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

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

/***/ "./shared/queries/userQueries.js":
/*!***************************************!*\
  !*** ./shared/queries/userQueries.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GET_CLIENT_USER = exports.GET_CURRENT_USER = undefined;

var _templateObject = _taggedTemplateLiteral(["\n    {\n        currentUser{\n            id\n            username\n            email\n            role\n        }\n    }\n"], ["\n    {\n        currentUser{\n            id\n            username\n            email\n            role\n        }\n    }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    {\n        currentUser @client{\n            id\n            username\n            email\n            role\n        }\n    }\n"], ["\n    {\n        currentUser @client{\n            id\n            username\n            email\n            role\n        }\n    }\n"]);

var _graphqlTag = __webpack_require__(/*! graphql-tag */ "graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GET_CURRENT_USER = exports.GET_CURRENT_USER = (0, _graphqlTag2.default)(_templateObject);

var GET_CLIENT_USER = exports.GET_CLIENT_USER = (0, _graphqlTag2.default)(_templateObject2);

/***/ }),

/***/ "./shared/routes.js":
/*!**************************!*\
  !*** ./shared/routes.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _signUp = __webpack_require__(/*! ./containers/auth/signUp */ "./shared/containers/auth/signUp.js");

var _signUp2 = _interopRequireDefault(_signUp);

var _signIn = __webpack_require__(/*! ./containers/auth/signIn */ "./shared/containers/auth/signIn.js");

var _signIn2 = _interopRequireDefault(_signIn);

var _Dashboard = __webpack_require__(/*! ./containers/Dashboard */ "./shared/containers/Dashboard.js");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Home = __webpack_require__(/*! ./containers/Home */ "./shared/containers/Home.js");

var _Home2 = _interopRequireDefault(_Home);

var _withAuth = __webpack_require__(/*! ./components/session/withAuth */ "./shared/components/session/withAuth.js");

var _withAuth2 = _interopRequireDefault(_withAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Routes = function Routes(_ref) {
    var session = _ref.session,
        refetch = _ref.refetch,
        props = _objectWithoutProperties(_ref, ["session", "refetch"]);

    var currentUser = session ? session.currentUser : null;
    return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: "/",
            component: function component() {
                return _react2.default.createElement(_Home2.default, null);
            }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: "/signup",
            render: function render(props) {
                return currentUser ? _react2.default.createElement(_reactRouterDom.Redirect, { to: "/" }) : _react2.default.createElement(_signUp2.default, _extends({}, props, { refetch: refetch }));
            }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: "/signin",
            render: function render(props) {
                return currentUser ? _react2.default.createElement(_reactRouterDom.Redirect, { to: "/" }) : _react2.default.createElement(_signIn2.default, _extends({}, props, { refetch: refetch }));
            }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: "/dashboard",
            render: (0, _withAuth2.default)(function (session) {
                return session && session.currentUser;
            })(_Dashboard2.default)
        })
    );
};

exports.default = (0, _reactRouterDom.withRouter)(Routes);

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

/***/ "es-cookie":
/*!****************************!*\
  !*** external "es-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es-cookie");

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

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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