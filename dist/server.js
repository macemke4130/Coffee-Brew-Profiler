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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\ndotenv.config();\r\nexports.default = {\r\n    mysql: {\r\n        host: process.env.DB_HOST,\r\n        user: process.env.DB_USER,\r\n        password: process.env.DB_PASS,\r\n        database: process.env.DB_SCHEMA\r\n    },\r\n    jwt: {\r\n        secret: process.env.JWT_SECRET,\r\n        expires: process.env.JWT_EXPIRES\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Query = void 0;\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\r\nvar pool = mysql.createPool(config_1.default.mysql);\r\nexports.Query = function (query, values) {\r\n    return new Promise(function (resolve, reject) {\r\n        var sql = mysql.format(query, values);\r\n        console.log(\"Query Running\");\r\n        console.log(sql);\r\n        console.log('');\r\n        pool.query(sql, function (err, results) {\r\n            if (err) {\r\n                reject(err);\r\n            }\r\n            else {\r\n                resolve(results);\r\n            }\r\n        });\r\n    });\r\n};\r\nvar users_1 = __webpack_require__(/*! ./queries/users */ \"./src/server/db/queries/users.ts\");\r\nvar options_1 = __webpack_require__(/*! ./queries/options */ \"./src/server/db/queries/options.ts\");\r\nvar filters_1 = __webpack_require__(/*! ./queries/filters */ \"./src/server/db/queries/filters.ts\");\r\nvar roasters_1 = __webpack_require__(/*! ./queries/roasters */ \"./src/server/db/queries/roasters.ts\");\r\nvar coffee_1 = __webpack_require__(/*! ./queries/coffee */ \"./src/server/db/queries/coffee.ts\");\r\nvar brews_1 = __webpack_require__(/*! ./queries/brews */ \"./src/server/db/queries/brews.ts\");\r\nexports.default = {\r\n    users: users_1.default,\r\n    options: options_1.default,\r\n    filters: filters_1.default,\r\n    roasters: roasters_1.default,\r\n    coffee: coffee_1.default,\r\n    brews: brews_1.default\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/db/queries/brews.ts":
/*!****************************************!*\
  !*** ./src/server/db/queries/brews.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar __1 = __webpack_require__(/*! ../ */ \"./src/server/db/index.ts\");\r\nvar all = function (id) { return __1.Query(\"select brews.id, brews._createdat, brewmethods.name as brewmethod, coffeebags.name as coffeename from brews \tjoin brewmethods on brewmethods.id = brews.brewmethod join coffeebags on coffeebags.id = brews.coffeebag where brews.barista = ? and brews.is_active = 1 order by brews.id desc\", [id]); };\r\nvar list = function (barista) { return __1.Query('select brews.id, coffeebags.name as coffeename, brewmethods.name as brewmethod, brews._createdat from brews join coffeebags on coffeebags.id = brews.coffeebag join brewmethods on brewmethods.id = brews.brewmethod where brews.barista = ? and brews.is_active = 1 order by brews.id desc limit 10', [barista]); };\r\nvar editPull = function (id) { return __1.Query('select * from brews where id = ?', [id]); };\r\nvar insertBrew = function (newBrew) { return __1.Query('Insert into brews set ?', [newBrew]); };\r\nvar editBrew = function (editedBrew, id) { return __1.Query('update brews set ? where id = ?', [editedBrew, id]); };\r\nvar destroy = function (id) { return __1.Query('update brews set is_active = 0 where id = ?', [id]); };\r\nvar delta = function (id1, id2) { return __1.Query('select DATEDIFF((select _createdat from brews where id = ?), (select roasteddate from brews where id = ?)) as delta', [id1, id2]); };\r\nvar prev = function (method, barista) { return __1.Query('select * from brews where barista = ? and brewmethod = ? and is_active = 1 order by id desc limit 1', [barista, method]); };\r\nvar getMethod = function (id) { return __1.Query('select brews.brewmethod, brewmethods.name from brews join brewmethods on brewmethods.id = brews.brewmethod where brews.id = ?', [id]); };\r\nvar sameMethod = function (method, barista) { return __1.Query('select brews.id, brews._createdat, coffeebags.name from brews join coffeebags on coffeebags.id = brews.coffeebag where brews.is_active = 1 and brews.barista = ? and brews.brewmethod = ? order by brews.id desc;', [barista, method]); };\r\nvar one = function (subquery, brewid) { return __1.Query(\"select brews.id, brews._createdat, brews.barista, brews.roasteddate, brews.grindsize, brews.gramspostgrind, brews.watertempprebrew, brews.watertemppostbrew, brews.bloomtimeinsec, brews.bloomweight, brews.brewtimeinsec, brews.drawdownstart, brews.brewweight, brews.yeild, brews.tastingnote, brews.brewingnote, coffeebags.id as coffeebagid, coffeebags.brand as coffeebrand, coffeebags.name as coffeename, filters.brand_name_style as filter, grinders.name as grinder, brewmethods.name as brewmethod from brews join filters on filters.id = brews.filter join coffeebags on coffeebags.id = brews.coffeebag join brewmethods on brewmethods.id = brews.brewmethod join grinders on grinders.id = brews.grinder where brews.id = ?\", [subquery, brewid]); };\r\nexports.default = {\r\n    all: all,\r\n    list: list,\r\n    editPull: editPull,\r\n    insertBrew: insertBrew,\r\n    editBrew: editBrew,\r\n    destroy: destroy,\r\n    delta: delta,\r\n    prev: prev,\r\n    getMethod: getMethod,\r\n    sameMethod: sameMethod,\r\n    one: one\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/brews.ts?");

/***/ }),

/***/ "./src/server/db/queries/coffee.ts":
/*!*****************************************!*\
  !*** ./src/server/db/queries/coffee.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar __1 = __webpack_require__(/*! ../ */ \"./src/server/db/index.ts\");\r\nvar all = function () { return __1.Query('select * from coffeebags'); };\r\nvar one = function (id) { return __1.Query('select coffeebags.id, coffeebags.name as coffeename, coffeebags.region, coffeebags.elevationabovesealevelinmeters as elevation, coffeebags.breed, coffeebags.blend, coffeebags.barista as baristaid, brands.name as brand, processes.name as process from coffeebags join brands on brands.id = coffeebags.brand join processes on processes.id = coffeebags.process where coffeebags.id = ?', [id]); };\r\nvar editPull = function (id) { return __1.Query('select * from coffeebags where id = ?', [id]); };\r\nvar insert = function (newCoffee) { return __1.Query('insert into coffeebags set ?', newCoffee); };\r\nvar edit = function (id, updateObject) { return __1.Query(\"update coffeebags set ? where id = ?\", [updateObject, id]); };\r\nvar empty = function (id) { return __1.Query(\"update coffeebags set is_active = 0 where id = ?\", [id]); };\r\nvar allMyCoffee = function (id) { return __1.Query('select coffeebags.id, coffeebags.name as coffeename, coffeebags.region, coffeebags.elevationabovesealevelinmeters as elevation, coffeebags.breed, coffeebags.blend, brands.name as brand, processes.name as process from coffeebags join brands on brands.id = coffeebags.brand join processes on processes.id = coffeebags.process where coffeebags.barista = ? and coffeebags.is_active = 1 order by coffeebags.id desc', [id]); };\r\nvar allMyCoffeeList = function (id) { return __1.Query('select brands.name as brand, coffeebags.name as coffeename, coffeebags.id from coffeebags join brands on brands.id = coffeebags.brand where coffeebags.barista = ? and coffeebags.is_active = 1 order by coffeebags.id desc', [id]); };\r\nexports.default = {\r\n    all: all,\r\n    one: one,\r\n    editPull: editPull,\r\n    insert: insert,\r\n    edit: edit,\r\n    empty: empty,\r\n    allMyCoffee: allMyCoffee,\r\n    allMyCoffeeList: allMyCoffeeList\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/coffee.ts?");

/***/ }),

/***/ "./src/server/db/queries/filters.ts":
/*!******************************************!*\
  !*** ./src/server/db/queries/filters.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar __1 = __webpack_require__(/*! ../ */ \"./src/server/db/index.ts\");\r\nvar all = function () { return __1.Query('select id, brand_name_style from filters order by brand_name_style'); };\r\nvar insert = function (newFilter) { return __1.Query('insert into filters set ?', [newFilter]); };\r\nexports.default = {\r\n    all: all,\r\n    insert: insert\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/filters.ts?");

/***/ }),

/***/ "./src/server/db/queries/options.ts":
/*!******************************************!*\
  !*** ./src/server/db/queries/options.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar __1 = __webpack_require__(/*! ../ */ \"./src/server/db/index.ts\");\r\nvar allBrewMethods = function () { return __1.Query('select * from brewmethods where is_active = 1'); };\r\nvar allGrinders = function () { return __1.Query('select * from grinders'); };\r\nvar allBrands = function (id) { return __1.Query('select * from brands where barista = ?', [id]); };\r\nvar allProcesses = function () { return __1.Query('select * from processes'); };\r\nexports.default = {\r\n    allBrewMethods: allBrewMethods,\r\n    allGrinders: allGrinders,\r\n    allBrands: allBrands,\r\n    allProcesses: allProcesses\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/options.ts?");

/***/ }),

/***/ "./src/server/db/queries/roasters.ts":
/*!*******************************************!*\
  !*** ./src/server/db/queries/roasters.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar __1 = __webpack_require__(/*! ../ */ \"./src/server/db/index.ts\");\r\n// const all = (id: number) => Query('select * from brands where is_active = 1 and barista = ?', [id]); // Not active yet --\r\nvar insert = function (newRoaster) { return __1.Query('insert into brands set ?', [newRoaster]); };\r\nvar getRoaster = function (id) { return __1.Query('select brands.name from brands where id = ?', [id]); };\r\nexports.default = {\r\n    //all,\r\n    insert: insert,\r\n    getRoaster: getRoaster\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/roasters.ts?");

/***/ }),

/***/ "./src/server/db/queries/users.ts":
/*!****************************************!*\
  !*** ./src/server/db/queries/users.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar __1 = __webpack_require__(/*! ../ */ \"./src/server/db/index.ts\");\r\nvar one = function (id) { return __1.Query('select * from users where id = ?', [id]); };\r\nvar username = function (id) { return __1.Query('select username from users where id = ?', [id]); };\r\nvar insert = function (newUser) { return __1.Query('Insert into baristas set ?', [newUser]); };\r\nvar find = function (column, value) { return __1.Query('select * from baristas where ?? = ? and is_active = 1', [column, value]); };\r\nvar editProfile = function (id, username, email) { return __1.Query('update users set username = ?, email = ? where id = ?', [username, email, id]); };\r\nvar disable = function (id) { return __1.Query('update users set is_visible = 0 where id = ?', [id]); };\r\nvar myBloom = function (id) { return __1.Query('select bloom from baristas where id = ?', [id]); };\r\nexports.default = {\r\n    one: one,\r\n    username: username,\r\n    insert: insert,\r\n    find: find,\r\n    editProfile: editProfile,\r\n    disable: disable,\r\n    myBloom: myBloom\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/users.ts?");

/***/ }),

/***/ "./src/server/middlewares/passport-strategies.ts":
/*!*******************************************************!*\
  !*** ./src/server/middlewares/passport-strategies.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\");\r\nvar PassPortJWT = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\r\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\r\nvar passwords_1 = __webpack_require__(/*! ../utils/passwords */ \"./src/server/utils/passwords.ts\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\r\npassport.serializeUser(function (user, done) { return done(null, user); });\r\npassport.deserializeUser(function (user, done) { return done(null, user); });\r\npassport.use(new LocalStrategy.Strategy({ usernameField: 'email' }, function (email, password, done) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var userRecord, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.users.find('email', email)];\r\n            case 1:\r\n                userRecord = (_a.sent())[0];\r\n                if (userRecord && passwords_1.comparePasswords(password, userRecord.password)) {\r\n                    delete userRecord.password;\r\n                    done(null, userRecord);\r\n                }\r\n                else {\r\n                    done(null, false);\r\n                }\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                done(e_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); }));\r\npassport.use(new PassPortJWT.Strategy({\r\n    jwtFromRequest: PassPortJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),\r\n    secretOrKey: config_1.default.jwt.secret\r\n}, function (payload, done) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        done(null, __assign({ id: payload.userid }, payload));\r\n        return [2 /*return*/];\r\n    });\r\n}); }));\r\n\n\n//# sourceURL=webpack:///./src/server/middlewares/passport-strategies.ts?");

/***/ }),

/***/ "./src/server/routes/api/brews.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/brews.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\nrouter.get('/details/:brew', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var brewid, getBrew, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                brewid = Number(req.params.brew);\r\n                return [4 /*yield*/, db_1.default.brews.one(brewid, brewid)];\r\n            case 1:\r\n                getBrew = _a.sent();\r\n                res.status(200).json({ data: getBrew, status: 418 }); // Just for fun --\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.status(500).json({ message: \"nope\", e: e_1 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/delta/:id', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var delta, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.brews.delta(Number(req.params.id), Number(req.params.id))];\r\n            case 1:\r\n                delta = _a.sent();\r\n                res.status(200).json(delta);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_2 = _a.sent();\r\n                console.log(e_2);\r\n                res.status(500).json({ message: \"nope\", e: e_2 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/list/', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var listBrews, e_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.brews.list(req.user.id)];\r\n            case 1:\r\n                listBrews = _a.sent();\r\n                res.status(200).json(listBrews);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_3 = _a.sent();\r\n                console.log(e_3);\r\n                res.status(500).json({ message: \"nope\", e: e_3 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/all/', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var getAllBrews, e_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.brews.all(req.user.id)];\r\n            case 1:\r\n                getAllBrews = _a.sent();\r\n                res.status(200).json(getAllBrews);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_4 = _a.sent();\r\n                console.log(e_4);\r\n                res.status(500).json({ message: \"nope\", e: e_4 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/editpull/:coffee', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var editPull, e_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.brews.editPull(Number(req.params.coffee))];\r\n            case 1:\r\n                editPull = _a.sent();\r\n                res.status(200).json(editPull);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_5 = _a.sent();\r\n                console.log(e_5);\r\n                res.status(500).json({ message: \"nope\", e: e_5 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post('/new', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var newBrew, e_6;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                console.log(req.body);\r\n                return [4 /*yield*/, db_1.default.brews.insertBrew(req.body)];\r\n            case 1:\r\n                newBrew = _a.sent();\r\n                res.status(200).json(newBrew);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_6 = _a.sent();\r\n                console.log(e_6);\r\n                res.status(500).json({ message: \"nope\", e: e_6 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put('/destroy', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var destroy, e_7;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.brews.destroy(req.body.id)];\r\n            case 1:\r\n                destroy = _a.sent();\r\n                res.status(200).json({ success: 1, destroy: destroy });\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_7 = _a.sent();\r\n                console.log(e_7);\r\n                res.status(500).json({ message: \"nope\", e: e_7 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put('/edit', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var editBrew, e_8;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.brews.editBrew(req.body, Number(req.body.id))];\r\n            case 1:\r\n                editBrew = _a.sent();\r\n                res.status(200).json({ success: 1, editBrew: editBrew });\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_8 = _a.sent();\r\n                console.log(e_8);\r\n                res.status(500).json({ message: \"nope\", e: e_8 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/previous/:method', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var getPrevious, e_9;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.brews.prev(Number(req.params.method), Number(req.user.id))];\r\n            case 1:\r\n                getPrevious = _a.sent();\r\n                res.status(200).json(getPrevious);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_9 = _a.sent();\r\n                console.log(e_9);\r\n                res.status(500).json({ message: \"nope\", e: e_9 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/methodmatches/:method', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var getSameMethod, e_10;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.brews.sameMethod(Number(req.params.method), Number(req.user.id))];\r\n            case 1:\r\n                getSameMethod = _a.sent();\r\n                res.status(200).json(getSameMethod);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_10 = _a.sent();\r\n                console.log(e_10);\r\n                res.status(500).json({ message: \"nope\", e: e_10 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/method/:id', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var getMethod, e_11;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.brews.getMethod(Number(req.params.id))];\r\n            case 1:\r\n                getMethod = _a.sent();\r\n                res.status(200).json(getMethod);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_11 = _a.sent();\r\n                console.log(e_11);\r\n                res.status(500).json({ message: \"nope\", e: e_11 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/brews.ts?");

/***/ }),

/***/ "./src/server/routes/api/coffee.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/api/coffee.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\nrouter.get('/bag/:coffee', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var oneCoffee, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.coffee.one(Number(req.params.coffee))];\r\n            case 1:\r\n                oneCoffee = _a.sent();\r\n                res.json(oneCoffee);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.status(500).json({ message: \"nope\", e: e_1 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/editpull/:coffee', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var editPull, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.coffee.editPull(Number(req.params.coffee))];\r\n            case 1:\r\n                editPull = _a.sent();\r\n                res.json(editPull);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_2 = _a.sent();\r\n                console.log(e_2);\r\n                res.status(500).json({ message: \"nope\", e: e_2 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put('/editbag/:coffee', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var editCoffee, e_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.coffee.edit(Number(req.params.coffee), req.body)];\r\n            case 1:\r\n                editCoffee = _a.sent();\r\n                res.json(editCoffee);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_3 = _a.sent();\r\n                console.log(e_3);\r\n                res.status(500).json({ message: \"nope\", e: e_3 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/all/list', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var allMyCoffeeList, e_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.coffee.allMyCoffeeList(Number(req.user.id))];\r\n            case 1:\r\n                allMyCoffeeList = _a.sent();\r\n                res.json(allMyCoffeeList);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_4 = _a.sent();\r\n                console.log(e_4);\r\n                res.status(500).json({ message: \"nope\", e: e_4 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/all', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var allMyCoffee, e_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.coffee.allMyCoffee(Number(req.user.id))];\r\n            case 1:\r\n                allMyCoffee = _a.sent();\r\n                res.json(allMyCoffee);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_5 = _a.sent();\r\n                console.log(e_5);\r\n                res.status(500).json({ message: \"nope\", e: e_5 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var coffeeBags, e_6;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.coffee.all()];\r\n            case 1:\r\n                coffeeBags = _a.sent();\r\n                res.json(coffeeBags);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_6 = _a.sent();\r\n                console.log(e_6);\r\n                res.status(500).json({ message: \"nope\", e: e_6 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post('/new', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var newCoffeeBag, e_7;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.coffee.insert(req.body)];\r\n            case 1:\r\n                newCoffeeBag = _a.sent();\r\n                res.status(200).json(newCoffeeBag);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_7 = _a.sent();\r\n                console.log(e_7);\r\n                res.status(500).json({ message: \"nope\", e: e_7 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put('/emptybag', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var emptyBag, e_8;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.coffee.empty(Number(req.body.id))];\r\n            case 1:\r\n                emptyBag = _a.sent();\r\n                res.json(emptyBag);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_8 = _a.sent();\r\n                console.log(e_8);\r\n                res.status(500).json({ message: \"nope\", e: e_8 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/coffee.ts?");

/***/ }),

/***/ "./src/server/routes/api/filters.ts":
/*!******************************************!*\
  !*** ./src/server/routes/api/filters.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\nrouter.post('/new', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var newFilter, rFilter, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                newFilter = {\r\n                    barista: req.user.id,\r\n                    brand_name_style: req.body.brand_name_style\r\n                };\r\n                return [4 /*yield*/, db_1.default.filters.insert(newFilter)];\r\n            case 1:\r\n                rFilter = _a.sent();\r\n                res.status(200).json(rFilter);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.status(500).json({ message: \"nope\", e: e_1 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/all', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var getAllfilters, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.filters.all()];\r\n            case 1:\r\n                getAllfilters = _a.sent();\r\n                res.status(200).json(getAllfilters);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_2 = _a.sent();\r\n                console.log(e_2);\r\n                res.status(500).json({ message: \"nope\", e: e_2 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/filters.ts?");

/***/ }),

/***/ "./src/server/routes/api/index.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar users_1 = __webpack_require__(/*! ./users */ \"./src/server/routes/api/users.ts\");\r\nvar options_1 = __webpack_require__(/*! ./options */ \"./src/server/routes/api/options.ts\");\r\nvar filters_1 = __webpack_require__(/*! ./filters */ \"./src/server/routes/api/filters.ts\");\r\nvar roasters_1 = __webpack_require__(/*! ./roasters */ \"./src/server/routes/api/roasters.ts\");\r\nvar coffee_1 = __webpack_require__(/*! ./coffee */ \"./src/server/routes/api/coffee.ts\");\r\nvar brews_1 = __webpack_require__(/*! ./brews */ \"./src/server/routes/api/brews.ts\");\r\nvar router = express.Router();\r\nrouter.use('/options', options_1.default);\r\nrouter.use('/roasters', roasters_1.default);\r\nrouter.use('/filters', filters_1.default);\r\nrouter.use('/coffee', coffee_1.default);\r\nrouter.use('/brews', brews_1.default);\r\nrouter.use('/users', users_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/index.ts?");

/***/ }),

/***/ "./src/server/routes/api/options.ts":
/*!******************************************!*\
  !*** ./src/server/routes/api/options.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar router = express.Router();\r\nrouter.get('/brewmethods', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var brewmethods, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.options.allBrewMethods()];\r\n            case 1:\r\n                brewmethods = _a.sent();\r\n                res.json(brewmethods);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.status(500).json({ message: \"nope\", e: e_1 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/grinders', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var grinders, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.options.allGrinders()];\r\n            case 1:\r\n                grinders = _a.sent();\r\n                res.json(grinders);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_2 = _a.sent();\r\n                console.log(e_2);\r\n                res.status(500).json({ message: \"nope\", e: e_2 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/brands', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var brands, e_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.options.allBrands(Number(req.user.id))];\r\n            case 1:\r\n                brands = _a.sent();\r\n                res.json(brands);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_3 = _a.sent();\r\n                console.log(e_3);\r\n                res.status(500).json({ message: \"nope\", e: e_3 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/processes', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var processes, e_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.options.allProcesses()];\r\n            case 1:\r\n                processes = _a.sent();\r\n                res.json(processes);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_4 = _a.sent();\r\n                console.log(e_4);\r\n                res.status(500).json({ message: \"nope\", e: e_4 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/options.ts?");

/***/ }),

/***/ "./src/server/routes/api/roasters.ts":
/*!*******************************************!*\
  !*** ./src/server/routes/api/roasters.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\nrouter.post('/new', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var roasterObject, newRoaster, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                roasterObject = {\r\n                    barista: req.user.id,\r\n                    name: req.body.brand\r\n                };\r\n                return [4 /*yield*/, db_1.default.roasters.insert(roasterObject)];\r\n            case 1:\r\n                newRoaster = _a.sent();\r\n                res.status(200).json(newRoaster);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.status(500).json({ message: \"nope\", e: e_1 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/name/:id', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var name, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.roasters.getRoaster(Number(req.params.id))];\r\n            case 1:\r\n                name = _a.sent();\r\n                res.status(200).json(name);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_2 = _a.sent();\r\n                console.log(e_2);\r\n                res.status(500).json({ message: \"nope\", e: e_2 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/roasters.ts?");

/***/ }),

/***/ "./src/server/routes/api/users.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/users.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\nrouter.use('/bloom', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var userid, myBloom, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                userid = req.user.id;\r\n                return [4 /*yield*/, db_1.default.users.myBloom(userid)];\r\n            case 1:\r\n                myBloom = _a.sent();\r\n                res.json(myBloom);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.status(500).json({ message: \"nope\", e: e_1 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// Gets userid of person logged in without a db call. COOL! --\r\nrouter.use('/who', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var userid;\r\n    return __generator(this, function (_a) {\r\n        try {\r\n            userid = req.user.id;\r\n            res.json(userid);\r\n        }\r\n        catch (e) {\r\n            console.log(e);\r\n            res.status(500).json({ message: \"nope\", e: e });\r\n        }\r\n        return [2 /*return*/];\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/api/users.ts?");

/***/ }),

/***/ "./src/server/routes/auth/index.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar register_1 = __webpack_require__(/*! ./register */ \"./src/server/routes/auth/register.ts\");\r\nvar login_1 = __webpack_require__(/*! ./login */ \"./src/server/routes/auth/login.ts\");\r\nvar router = express.Router();\r\nrouter.use('/register', register_1.default);\r\nrouter.use('/login', login_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/index.ts?");

/***/ }),

/***/ "./src/server/routes/auth/login.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/login.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar tokens_1 = __webpack_require__(/*! ../../utils/tokens */ \"./src/server/utils/tokens.ts\");\r\nvar router = express.Router();\r\nrouter.post('/', passport.authenticate('local'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var loginAttempt, token;\r\n    return __generator(this, function (_a) {\r\n        loginAttempt = req.body;\r\n        try {\r\n            token = tokens_1.signToken({\r\n                userid: req.user.id,\r\n                email: req.user.email,\r\n                username: req.user.username\r\n            });\r\n            console.log(token);\r\n            res.json(token);\r\n        }\r\n        catch (e) {\r\n            console.log(e);\r\n            res.status(500).json({ message: \"NOPE\", e: e });\r\n        }\r\n        return [2 /*return*/];\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/login.ts?");

/***/ }),

/***/ "./src/server/routes/auth/register.ts":
/*!********************************************!*\
  !*** ./src/server/routes/auth/register.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar passwords_1 = __webpack_require__(/*! ../../utils/passwords */ \"./src/server/utils/passwords.ts\");\r\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\r\nvar tokens_1 = __webpack_require__(/*! ../../utils/tokens */ \"./src/server/utils/tokens.ts\");\r\nvar router = express.Router();\r\nrouter.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var newUser, _a, result, token, e_1;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0:\r\n                newUser = req.body;\r\n                _b.label = 1;\r\n            case 1:\r\n                _b.trys.push([1, 4, , 5]);\r\n                _a = newUser;\r\n                return [4 /*yield*/, passwords_1.generateHash(newUser.password)];\r\n            case 2:\r\n                _a.password = _b.sent();\r\n                return [4 /*yield*/, db_1.default.users.insert(newUser)];\r\n            case 3:\r\n                result = _b.sent();\r\n                token = tokens_1.signToken({ userid: result.insertId, email: newUser.email, username: newUser.username });\r\n                res.json(token);\r\n                return [3 /*break*/, 5];\r\n            case 4:\r\n                e_1 = _b.sent();\r\n                console.log(e_1);\r\n                res.status(500).json({ message: \"NOPE\", e: e_1 });\r\n                return [3 /*break*/, 5];\r\n            case 5: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/register.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/server/routes/api/index.ts\");\r\nvar auth_1 = __webpack_require__(/*! ./auth */ \"./src/server/routes/auth/index.ts\");\r\nvar router = express.Router();\r\nrouter.use('/api', api_1.default);\r\nrouter.use('/auth', auth_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar index_1 = __webpack_require__(/*! ./routes/index */ \"./src/server/routes/index.ts\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\n__webpack_require__(/*! ./middlewares/passport-strategies */ \"./src/server/middlewares/passport-strategies.ts\"); // File runs as import --\r\nvar app = express();\r\nvar p = path.join(__dirname, '../public');\r\napp.use(express.static(p));\r\napp.use(passport.initialize());\r\napp.use(express.json());\r\napp.use(index_1.default);\r\napp.get(\"*\", function (req, res) {\r\n    res.sendFile(path.join(__dirname, '../public/index.html'));\r\n});\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () { return console.log(\"\\n\\n \\u2764\\uFE0F Server listening on port: \" + port + \" \\u2764\\uFE0F \\n\\n\"); });\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/passwords.ts":
/*!***************************************!*\
  !*** ./src/server/utils/passwords.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.comparePasswords = exports.generateHash = void 0;\r\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\r\nfunction generateHash(password) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var salt, hash, e_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 3, , 4]);\r\n                    return [4 /*yield*/, bcrypt.genSalt(12)];\r\n                case 1:\r\n                    salt = _a.sent();\r\n                    return [4 /*yield*/, bcrypt.hash(password, salt)];\r\n                case 2:\r\n                    hash = _a.sent();\r\n                    return [2 /*return*/, hash];\r\n                case 3:\r\n                    e_1 = _a.sent();\r\n                    throw e_1;\r\n                case 4: return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.generateHash = generateHash;\r\nfunction comparePasswords(attemptPassword, storedPassword) {\r\n    return bcrypt.compareSync(attemptPassword, storedPassword);\r\n}\r\nexports.comparePasswords = comparePasswords;\r\n\n\n//# sourceURL=webpack:///./src/server/utils/passwords.ts?");

/***/ }),

/***/ "./src/server/utils/tokens.ts":
/*!************************************!*\
  !*** ./src/server/utils/tokens.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.signToken = void 0;\r\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\r\nfunction signToken(payload) {\r\n    return jwt.sign(payload, config_1.default.jwt.secret, { expiresIn: config_1.default.jwt.expires });\r\n}\r\nexports.signToken = signToken;\r\n\n\n//# sourceURL=webpack:///./src/server/utils/tokens.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });