webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(301);

	var _angularUiRouter = __webpack_require__(302);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _firebase = __webpack_require__(303);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _angularfire = __webpack_require__(305);

	var _angularfire2 = _interopRequireDefault(_angularfire);

	var _angularUiBootstrap = __webpack_require__(307);

	var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);

	var _components = __webpack_require__(309);

	var _components2 = _interopRequireDefault(_components);

	var _directives = __webpack_require__(425);

	var _directives2 = _interopRequireDefault(_directives);

	var _services = __webpack_require__(426);

	var _services2 = _interopRequireDefault(_services);

	__webpack_require__(437);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_angular2.default.module('app', [_angularUiRouter2.default, 'firebase', _angularUiBootstrap2.default, _components2.default.name, _directives2.default.name, _services2.default.name]).config(["$urlRouterProvider", function ($urlRouterProvider) {
	    'ngInject';

	    $urlRouterProvider.otherwise('/home');

	    window.firebase.initializeApp({
	        apiKey: 'AIzaSyBmx88VowTEZpgtDyM02J3Y0Ntq6wBPaOE',
	        authDomain: 'project-5043437142388192252.firebaseapp.com',
	        databaseURL: 'https://project-5043437142388192252.firebaseio.com',
	        storageBucket: 'gs://project-5043437142388192252.appspot.com'
	    });
	}]).run(["$rootScope", "$state", function ($rootScope, $state) {
	    'ngInject';

	    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	        console.error('stateChangeError:', error);
	        if (error === 'AUTH_REQUIRED') {
	            $state.go('home');
	        }
	    });
	}]);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _common = __webpack_require__(310);

	var _common2 = _interopRequireDefault(_common);

	var _pages = __webpack_require__(338);

	var _pages2 = _interopRequireDefault(_pages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components', [_common2.default.name, _pages2.default.name]);

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _navbar = __webpack_require__(311);

	var _navbar2 = _interopRequireDefault(_navbar);

	var _footer = __webpack_require__(316);

	var _footer2 = _interopRequireDefault(_footer);

	var _eventsList = __webpack_require__(320);

	var _eventsList2 = _interopRequireDefault(_eventsList);

	var _progressBar = __webpack_require__(325);

	var _progressBar2 = _interopRequireDefault(_progressBar);

	var _uploadFileButton = __webpack_require__(330);

	var _uploadFileButton2 = _interopRequireDefault(_uploadFileButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.common', [_navbar2.default.name, _footer2.default.name, _eventsList2.default.name, _progressBar2.default.name, _uploadFileButton2.default.name]);

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(312);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(313);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(314);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.navbar', []).component('navbar', {
	    template: _template2.default,
	    controller: _controller2.default
	});

/***/ },
/* 312 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavbarController = function () {
	    NavbarController.$inject = ["$scope", "$state", "AuthService"];
	    function NavbarController($scope, $state, AuthService) {
	        'ngInject';

	        _classCallCheck(this, NavbarController);

	        this.$scope = $scope;
	        this.$state = $state;
	        this.AuthService = AuthService;

	        this.stateNames = ['home', 'news', 'calendar', 'events', 'about', 'login', 'user'];

	        this._initState();
	        this._initAuth();
	        this._bindEvents();
	    }

	    _createClass(NavbarController, [{
	        key: 'logout',
	        value: function logout() {
	            this.AuthService.signOut();
	        }
	    }, {
	        key: '_initAuth',
	        value: function _initAuth() {
	            this.auth = this.AuthService.getAuth();
	        }
	    }, {
	        key: '_initState',
	        value: function _initState() {
	            var _this = this;

	            var state = {};
	            this.stateNames.forEach(function (name) {
	                state[name] = _this.$state.includes(name);
	            });
	            this.state = state;
	        }
	    }, {
	        key: '_bindEvents',
	        value: function _bindEvents() {
	            var _this2 = this;

	            this.$scope.$on('$stateChangeSuccess', function () {
	                _this2._initState();
	            });

	            this.AuthService.onAuthStateChanged(function () {
	                _this2._initAuth();
	            });
	        }
	    }]);

	    return NavbarController;
	}();

	exports.default = NavbarController;

/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\"> <div class=container> <div class=navbar-header> <button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#navbar aria-expanded=false aria-controls=navbar> <span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span> </button> <a class=navbar-brand ui-sref=home>Бег в Пензе</a> </div> <div id=navbar class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav\"> <li ng-class=\"{ active: $ctrl.state.news }\"><a ui-sref=news>НОВОСТИ</a></li> <li ng-class=\"{ active: $ctrl.state.calendar }\"><a ui-sref=calendar>КАЛЕНДАРЬ</a></li> <li ng-class=\"{ active: $ctrl.state.events }\"><a ui-sref=events.list>СОБЫТИЯ</a></li> <li ng-class=\"{ active: $ctrl.state.about }\"><a ui-sref=about>О ПРОЕКТЕ</a></li> </ul> <ul class=\"nav navbar-nav navbar-right\"> <li ng-if=!$ctrl.auth ng-class=\"{ active: $ctrl.state.login }\"> <a ui-sref=login> <i class=\"fa fa-sign-in\" aria-hidden=true></i> ВХОД </a> </li> <li ng-class=\"{ active: $ctrl.state.user }\" ng-if=$ctrl.auth> <a ui-sref=user> <i class=\"fa fa-user\" aria-hidden=true></i> </a> </li> <li ng-if=$ctrl.auth> <a href=# ng-click=$ctrl.logout()> <i class=\"fa fa-sign-out\" aria-hidden=true></i> ВЫХОД </a> </li> </ul> </div> </div> </nav>";

/***/ },
/* 314 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 315 */,
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(317);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(318);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(319);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.footer', []).component('footer', {
	    template: _template2.default,
	    controller: _controller2.default
	});

/***/ },
/* 317 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FooterController = function FooterController() {
	    'ngInject';

	    _classCallCheck(this, FooterController);
	};

	exports.default = FooterController;
	;

/***/ },
/* 318 */
/***/ function(module, exports) {

	module.exports = "<div class=footer> <div class=container> <div class=row> <div class=col-md-3> <div class=\"\"> <p>Мы в социальных сетях:</p> <ul class=list-inline> <li> <a target=_blank href=https://vk.com/penzarun title=\"В контакте\" rel=nofollow> <i class=\"fa fa-2x fa-vk\" aria-hidden=true></i> </a> </li> </ul> </div> </div> <div class=col-md-3> <div class=\"\"> <p>Контакты:</p> <address class=footer__address> <abbr title=Телефон>Тел:</abbr> 8-909-319-63-54<br> <abbr title=\"Электронная почта\">Эл. почта:</abbr> <a href=mailto:#>info@penzarun.ru</a> </address> </div> </div> </div> <div class=row> <div class=col-md-12> <div class=footer__centerBlock> <div> Бег в Пензе <span class=hide-xs>·</span> Автор и разработчик &#169; <a href=https://vk.com/vikshv>Виктор Швецов</a> </div> <div> Style based on <a target=_blank href=http://bootswatch.com/superhero/ rel=nofollow>Bootswatch</a> <span class=hide-xs>·</span> Icons from <a target=_blank href=http://fortawesome.github.io/Font-Awesome/ rel=nofollow>Font Awesome</a> <span class=hide-xs>·</span> Backend from <a target=_blank href=https://console.firebase.google.com/project/project-5043437142388192252/overview rel=nofollow>Firebase</a> </div> <div> <a href=https://github.com/vikshv/penzarun>GitHub Project</a> <span class=hide-xs>·</span> <a href=https://github.com/vikshv/penzarun/issues>Issues</a> </div> </div> </div> </div> </div> </div>";

/***/ },
/* 319 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(321);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.eventsList', []).component('eventsList', _component2.default);

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(322);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(323);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(324);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        events: '<',
	        emptyListMessage: '@'
	    }
	};

/***/ },
/* 322 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventsListController = function EventsListController() {
	    'ngInject';

	    _classCallCheck(this, EventsListController);
	};

	exports.default = EventsListController;
	;

/***/ },
/* 323 */
/***/ function(module, exports) {

	module.exports = "<div class=eventsList> <div class=eventsList__event ng-repeat=\"event in $ctrl.events\"> <div class=event__title> <div class=event__date> {{ event.date | date: 'dd MMMM yyyy' }} </div> <div class=\"well well-lg well--event\"> <h4><a ui-sref=\"events.card({ id: event.$id })\"> {{ event.title }} </a></h4> <p>{{ event.abstract }}</p> <p>Дистанция: <span class=event__distances>{{ event.distances }}</span></p> </div> </div> </div> <div class=eventsList__empty ng-if=!$ctrl.events.length> <div class=\"alert alert-warning\"> <strong>{{ $ctrl.emptyListMessage || 'Нет данных' }}</strong> </div> </div> </div>";

/***/ },
/* 324 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(326);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.progressBar', []).component('progressBar', _component2.default);

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(327);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(328);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(329);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        text: '@'
	    }
	};

/***/ },
/* 327 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProgressBarController = function ProgressBarController() {
	    _classCallCheck(this, ProgressBarController);
	};

	exports.default = ProgressBarController;

/***/ },
/* 328 */
/***/ function(module, exports) {

	module.exports = "<div class=page> <div class=container> <div class=row> <div class=\"col-md-offset-3 col-md-6\"> <div class=progress> <div class=\"progress-bar progress-bar-striped progress-bar--full active\" role=progressbar aria-valuenow=45 aria-valuemin=0 aria-valuemax=100> {{ $ctrl.text }} </div> </div> </div> </div> </div> </div>";

/***/ },
/* 329 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(331);

	var _component2 = _interopRequireDefault(_component);

	var _directives = __webpack_require__(335);

	var _directives2 = _interopRequireDefault(_directives);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.uploadFileButton', [_directives2.default.name]).component('uploadFileButton', _component2.default);

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(332);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(333);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(334);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        uploadFile: '='
	    }
	};

/***/ },
/* 332 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UploadFileButtonController = function UploadFileButtonController() {
	    _classCallCheck(this, UploadFileButtonController);
	};

	exports.default = UploadFileButtonController;

/***/ },
/* 333 */
/***/ function(module, exports) {

	module.exports = "<div class=uploadFileButton> <input type=file class=uploadFileButton__file file=$ctrl.uploadFile> <button class=\"btn btn-primary uploadFileButton__button\" type=button> <i class=\"fa fa-file-text-o\" aria-hidden=true></i> </button> </div>";

/***/ },
/* 334 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _file = __webpack_require__(336);

	var _file2 = _interopRequireDefault(_file);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.uploadFileButton.directives', [_file2.default.name]);

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _directive = __webpack_require__(337);

	var _directive2 = _interopRequireDefault(_directive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.uploadFileButton.directives.file', []).directive('file', function () {
	    return _directive2.default;
	});

/***/ },
/* 337 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    scope: {
	        file: '='
	    },

	    link: function link(scope, el, attrs) {
	        el.bind('change', function (event) {
	            var files = event.target.files;
	            scope.file = files[0];
	            scope.$apply();
	        });
	    }
	};

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _home = __webpack_require__(339);

	var _home2 = _interopRequireDefault(_home);

	var _news = __webpack_require__(343);

	var _news2 = _interopRequireDefault(_news);

	var _calendarPage = __webpack_require__(347);

	var _calendarPage2 = _interopRequireDefault(_calendarPage);

	var _eventsPage = __webpack_require__(361);

	var _eventsPage2 = _interopRequireDefault(_eventsPage);

	var _about = __webpack_require__(412);

	var _about2 = _interopRequireDefault(_about);

	var _login = __webpack_require__(416);

	var _login2 = _interopRequireDefault(_login);

	var _userPage = __webpack_require__(420);

	var _userPage2 = _interopRequireDefault(_userPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages', [_home2.default.name, _news2.default.name, _calendarPage2.default.name, _eventsPage2.default.name, _about2.default.name, _login2.default.name, _userPage2.default.name]);

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(340);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(341);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(342);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.home', []).config(["$stateProvider", function ($stateProvider) {
	    'ngInject';

	    $stateProvider.state('home', {
	        url: '/home',
	        template: '<home></home>'
	    });
	}]).component('home', {
	    template: _template2.default,
	    controller: _controller2.default
	});

/***/ },
/* 340 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomePageController = function HomePageController() {
	    _classCallCheck(this, HomePageController);
	};

	exports.default = HomePageController;
	;

/***/ },
/* 341 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--eventsList\"> <div class=container> <div class=row> <div class=col-md-12> Home page </div> </div> <div> </div></div></div>";

/***/ },
/* 342 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(344);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(345);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(346);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.news', []).config(["$stateProvider", function ($stateProvider) {
	    'ngInject';

	    $stateProvider.state('news', {
	        url: '/news',
	        template: '<news></news>'
	    });
	}]).component('news', {
	    template: _template2.default,
	    controller: _controller2.default
	});

/***/ },
/* 344 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NewsPageController = function NewsPageController() {
	    _classCallCheck(this, NewsPageController);
	};

	exports.default = NewsPageController;
	;

/***/ },
/* 345 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--eventsList\"> <div class=container> <div class=row> <div class=col-md-12> News page </div> </div> <div> </div></div></div>";

/***/ },
/* 346 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(302);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _components = __webpack_require__(348);

	var _components2 = _interopRequireDefault(_components);

	var _component = __webpack_require__(357);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.calendar', [_angularUiRouter2.default, _components2.default.name]).config(["$stateProvider", function ($stateProvider) {
	    'ngInject';

	    $stateProvider.state('calendar', {
	        url: '/calendar/:filter?dateBegin&dateEnd',
	        template: '<calendar filter="$ctrl.filter" date-begin="$ctrl.dateBegin" date-end="$ctrl.dateEnd"></calendar>',
	        controller: ["$stateParams", function controller($stateParams) {
	            'ngInject';

	            this.filter = $stateParams.filter;
	            this.dateBegin = $stateParams.dateBegin;
	            this.dateEnd = $stateParams.dateEnd;
	        }],
	        controllerAs: '$ctrl'
	    });
	}]).constant('Constants', {
	    filterTagMap: {
	        'events': null,
	        'probegs': 'probeg',
	        'marathons': 'marathon',
	        'trainings': 'training'
	    }
	}).component('calendar', _component2.default);

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _calendarDatepicker = __webpack_require__(349);

	var _calendarDatepicker2 = _interopRequireDefault(_calendarDatepicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.calendar.components', [_calendarDatepicker2.default.name]);

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(350);

	var _component2 = _interopRequireDefault(_component);

	var _templates = __webpack_require__(354);

	var _templates2 = _interopRequireDefault(_templates);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.calendar.components.calendarDatepicker', [
	//directives.name,
	_templates2.default.name]).component('calendarDatepicker', _component2.default);
	//import directives from './directives';

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(351);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(352);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(353);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        date: '<',
	        options: '<',
	        onChange: '&'
	    }
	};

/***/ },
/* 351 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CalendarDatepickerController = function () {
	    CalendarDatepickerController.$inject = ["$scope"];
	    function CalendarDatepickerController($scope) {
	        'ngInject';

	        var _this = this;

	        _classCallCheck(this, CalendarDatepickerController);

	        this._initDatepickers();

	        $scope.$watch('$ctrl.date', function (date) {
	            _this.onChange({ date: date });
	        });
	    }

	    _createClass(CalendarDatepickerController, [{
	        key: '_initDatepickers',
	        value: function _initDatepickers() {
	            this.options = Object.assign({}, {
	                customClass: function customClass() {
	                    return 'datepicker--calendar';
	                },
	                showWeeks: false
	            }, this.options);
	        }
	    }]);

	    return CalendarDatepickerController;
	}();

	exports.default = CalendarDatepickerController;

/***/ },
/* 352 */
/***/ function(module, exports) {

	module.exports = "<div class=calendarDatepicker> <uib-datepicker class=\"well well-sm\" ng-model=$ctrl.date datepicker-options=$ctrl.options template-url=calendarDatepicker/templates/datepicker.html></uib-datepicker> </div>";

/***/ },
/* 353 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _datepicker = __webpack_require__(355);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _day = __webpack_require__(356);

	var _day2 = _interopRequireDefault(_day);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.calendar.components.calendarDatepicker.templates', []).run(["$templateCache", function ($templateCache) {
	    'ngInject';

	    $templateCache.put('calendarDatepicker/templates/datepicker.html', _datepicker2.default);
	    $templateCache.put('calendarDatepicker/templates/day.html', _day2.default);
	}]);

/***/ },
/* 355 */
/***/ function(module, exports) {

	module.exports = "<div class=uib-datepicker ng-switch=datepickerMode role=application ng-keydown=keydown($event)> <uib-daypicker ng-switch-when=day tabindex=0 template-url=calendarDatepicker/templates/day.html></uib-daypicker> <uib-monthpicker ng-switch-when=month tabindex=0></uib-monthpicker> <uib-yearpicker ng-switch-when=year tabindex=0></uib-yearpicker> </div>";

/***/ },
/* 356 */
/***/ function(module, exports) {

	module.exports = "<table class=uib-daypicker role=grid aria-labelledby={{::uniqueId}}-title aria-activedescendant={{activeDateId}}> <thead> <tr> <th><button type=button class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=move(-1) tabindex=-1><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th> <th colspan=\"{{::5 + showWeeks}}\"><button id={{::uniqueId}}-title role=heading aria-live=assertive aria-atomic=true type=button class=\"btn btn-default btn-sm uib-title\" ng-click=toggleMode() ng-disabled=\"datepickerMode === maxMode\" tabindex=-1><strong>{{title}}</strong></button></th> <th><button type=button class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=move(1) tabindex=-1><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th> </tr> <tr> <th ng-if=showWeeks class=text-center></th> <th ng-repeat=\"label in ::labels track by $index\" class=text-center><span aria-label={{::label.full}}>{{::label.abbr}}</span></th> </tr> </thead> <tbody> <tr class=uib-weeks ng-repeat=\"row in rows track by $index\"> <td ng-if=showWeeks class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td> <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=gridcell id={{::dt.uid}} ng-class=::dt.customClass> <button type=button class=\"btn btn-default btn-sm\" uib-is-class=\"\r\n            'btn-primary' for selectedDt,\r\n            'active' for activeDt\r\n            on dt\" ng-click=select(dt.date) ng-disabled=::dt.disabled tabindex=-1><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button> </td> </tr> </tbody> </table>";

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(358);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(359);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(360);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        filter: '<',
	        dateBegin: '<',
	        dateEnd: '<'
	    }
	};

/***/ },
/* 358 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CalendarPageController = function () {
	    CalendarPageController.$inject = ["$scope", "$state", "EventService", "Constants"];
	    function CalendarPageController($scope, $state, EventService, Constants) {
	        'ngInject';

	        _classCallCheck(this, CalendarPageController);

	        this.$state = $state;
	        this.Constants = Constants;
	        this.EventService = EventService;

	        this.filter || (this.filter = 'events');
	        this.dateBegin || (this.dateBegin = this._getDefaultDateBegin());
	        this.dateEnd || (this.dateEnd = this._getDefaultDateEnd());

	        this._initDatepickers();
	        this._loadEvents();
	    }

	    _createClass(CalendarPageController, [{
	        key: '_getDefaultDateBegin',
	        value: function _getDefaultDateBegin() {
	            var now = new Date();
	            return new Date(now.getFullYear(), now.getMonth(), now.getDate());
	        }
	    }, {
	        key: '_getDefaultDateEnd',
	        value: function _getDefaultDateEnd() {
	            return this._getMaxDate();
	        }
	    }, {
	        key: '_getMaxDate',
	        value: function _getMaxDate() {
	            var now = new Date();
	            return new Date(now.getFullYear(), 11, 31);
	        }
	    }, {
	        key: '_getFormatDate',
	        value: function _getFormatDate(date) {
	            var dt = new Date(date);
	            return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate();
	        }
	    }, {
	        key: '_initDatepickers',
	        value: function _initDatepickers() {
	            this.datepickerOptions = {
	                minDate: new Date(2015, 0, 1),
	                maxDate: this._getMaxDate()
	            };
	        }
	    }, {
	        key: 'filterIs',
	        value: function filterIs(val) {
	            return val === this.filter;
	        }
	    }, {
	        key: 'getEvents',
	        value: function getEvents() {
	            return this.events;
	        }
	    }, {
	        key: '_loadEvents',
	        value: function _loadEvents() {
	            var _this = this;

	            var options = this._getLoadEventsOptions();
	            this._startLoadProgress();
	            this.EventService.loadEvents(options).then(function (result) {
	                _this._stopLoadProgress();
	                _this.events = _this._filterEvents(result);
	            });
	        }
	    }, {
	        key: '_filterEvents',
	        value: function _filterEvents(events) {
	            var filterTagMap = this.Constants.filterTagMap;

	            var tagName = filterTagMap[this.filter];
	            var result = void 0;

	            if (tagName) {
	                result = events.filter(function (event) {
	                    return event.tag === tagName;
	                });
	            } else {
	                result = events;
	            }

	            return result;
	        }
	    }, {
	        key: '_getLoadEventsOptions',
	        value: function _getLoadEventsOptions() {
	            var dateBegin = this.dateBegin;
	            var dateEnd = this.dateEnd;

	            return {
	                dateBegin: Date.parse(dateBegin),
	                dateEnd: Date.parse(dateEnd)
	            };
	        }
	    }, {
	        key: '_startLoadProgress',
	        value: function _startLoadProgress() {
	            this.loadProgress = true;
	        }
	    }, {
	        key: '_stopLoadProgress',
	        value: function _stopLoadProgress() {
	            this.loadProgress = false;
	        }
	    }, {
	        key: 'onChangeDateBegin',
	        value: function onChangeDateBegin(value) {
	            this.dateBegin = value;
	            this.$state.go('calendar', this.getSrefOptions());
	        }
	    }, {
	        key: 'onChangeDateEnd',
	        value: function onChangeDateEnd(value) {
	            this.dateEnd = value;
	            this.$state.go('calendar', this.getSrefOptions());
	        }
	    }, {
	        key: 'getSrefOptions',
	        value: function getSrefOptions() {
	            var filter = arguments.length <= 0 || arguments[0] === undefined ? this.filter : arguments[0];
	            var dateBegin = this.dateBegin;
	            var dateEnd = this.dateEnd;

	            return {
	                filter: filter,
	                dateBegin: this._getFormatDate(dateBegin),
	                dateEnd: this._getFormatDate(dateEnd)
	            };
	        }
	    }]);

	    return CalendarPageController;
	}();

	exports.default = CalendarPageController;
	;

/***/ },
/* 359 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--calendar\"> <div class=container> <div class=row> <div class=col-md-12> <div class=pageCalendar__nav> <ul class=\"nav nav-pills\"> <li role=presentation ng-class=\"{ active: $ctrl.filterIs('events') }\"> <a ui-sref=\"calendar($ctrl.getSrefOptions('events'))\">СОБЫТИЯ</a> </li> <li role=presentation ng-class=\"{ active: $ctrl.filterIs('probegs') }\"> <a ui-sref=\"calendar($ctrl.getSrefOptions('probegs'))\">ПРОБЕГИ</a> </li> <li role=presentation ng-class=\"{ active: $ctrl.filterIs('marathons') }\"> <a ui-sref=\"calendar($ctrl.getSrefOptions('marathons'))\">МАРАФОНЫ</a> </li> <li role=presentation ng-class=\"{ active: $ctrl.filterIs('trainings') }\"> <a ui-sref=\"calendar($ctrl.getSrefOptions('trainings'))\">ТРЕНИРОВКИ</a> </li> </ul> </div> </div> </div> <div class=row> <div class=col-md-10> <div class=pageCalendar__datepickers> <div class=\"well well-lg well--datepickers\"> <calendar-datepicker date=$ctrl.dateBegin options=$ctrl.datepickerOptions on-change=$ctrl.onChangeDateBegin(date)></calendar-datepicker> <calendar-datepicker date=$ctrl.dateEnd options=$ctrl.datepickerOptions on-change=$ctrl.onChangeDateEnd(date)></calendar-datepicker> </div> </div> </div> </div> <div class=row> <div class=\"col-md-10 col-sm-12 col-xs-12\"> <div class=pageCalendar__eventList> <progress-bar text=\"Загрузка списка событий...\" ng-if=$ctrl.loadProgress></progress-bar> <events-list events=$ctrl.getEvents() empty-list-message=\"Ничего не найдено\" ng-if=!$ctrl.loadProgress></events-list> </div> </div> </div> </div> </div>";

/***/ },
/* 360 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	authResolve.$inject = ["AuthService"];
	idStateController.$inject = ["$stateParams"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(302);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _eventFormPage = __webpack_require__(362);

	var _eventFormPage2 = _interopRequireDefault(_eventFormPage);

	var _eventCardPage = __webpack_require__(370);

	var _eventCardPage2 = _interopRequireDefault(_eventCardPage);

	var _eventsListPage = __webpack_require__(392);

	var _eventsListPage2 = _interopRequireDefault(_eventsListPage);

	var _eventStartlistPage = __webpack_require__(402);

	var _eventStartlistPage2 = _interopRequireDefault(_eventStartlistPage);

	var _eventRegisterPage = __webpack_require__(407);

	var _eventRegisterPage2 = _interopRequireDefault(_eventRegisterPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events', [_angularUiRouter2.default, _eventFormPage2.default.name, _eventCardPage2.default.name, _eventsListPage2.default.name, _eventStartlistPage2.default.name, _eventRegisterPage2.default.name]).config(["$stateProvider", function ($stateProvider) {
	    'ngInject';

	    $stateProvider.state('events', {
	        abstract: true,
	        url: '/events',
	        template: '<ui-view />'
	    }).state('events.list', {
	        url: '/list',
	        template: '<events-list-page></events-list-page>'
	    }).state('events.new', {
	        url: '/new',
	        template: '<event-form-page></event-form-page>',
	        resolve: {
	            authResolve: authResolve
	        }
	    }).state('events.edit', {
	        url: '/edit/:id',
	        template: '<event-form-page id="$ctrl.id"></event-form-page>',
	        resolve: {
	            authResolve: authResolve
	        },
	        controller: idStateController,
	        controllerAs: '$ctrl'
	    }).state('events.card', {
	        url: '/card/:id',
	        template: '<event-card-page id="$ctrl.id"></event-card-page>',
	        controller: idStateController,
	        controllerAs: '$ctrl'
	    }).state('events.startlist', {
	        url: '/startlist/:id',
	        template: '<event-startlist-page id="$ctrl.id"></event-startlist-page>',
	        controller: idStateController,
	        controllerAs: '$ctrl'
	    }).state('events.register', {
	        url: '/register/:id',
	        template: '<event-register-page id="$ctrl.id"></event-register-page>',
	        resolve: {
	            authResolve: authResolve
	        },
	        controller: idStateController,
	        controllerAs: '$ctrl'
	    });
	}]);


	function idStateController($stateParams) {
	    'ngInject';

	    this.id = $stateParams.id;
	}

	function authResolve(AuthService) {
	    'ngInject';

	    return AuthService.requireSignIn();
	}

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularMessages = __webpack_require__(363);

	var _angularMessages2 = _interopRequireDefault(_angularMessages);

	__webpack_require__(365);

	var _component = __webpack_require__(366);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.form', [_angularMessages2.default, 'ckeditor']).component('eventFormPage', _component2.default);

/***/ },
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(367);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(368);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(369);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        id: '<'
	    }
	};

/***/ },
/* 367 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventFormPageController = function () {
	    EventFormPageController.$inject = ["$scope", "$state", "EventService", "FileStorageService"];
	    function EventFormPageController($scope, $state, EventService, FileStorageService) {
	        'ngInject';

	        _classCallCheck(this, EventFormPageController);

	        this.$scope = $scope;
	        this.$state = $state;
	        this.EventService = EventService;
	        this.FileStorageService = FileStorageService;

	        this._initEvent();

	        this.dateFormat = 'EEEE, dd MMMM yyyy';
	        this.datePopupIsOpen = false;

	        this._initCkeditorOptions();
	    }

	    _createClass(EventFormPageController, [{
	        key: '_initCkeditorOptions',
	        value: function _initCkeditorOptions() {
	            this.ckeditorOptions = {
	                language: 'ru',
	                allowedContent: true,
	                entities: false,
	                height: 300
	            };
	        }
	    }, {
	        key: '_initEvent',
	        value: function _initEvent() {
	            var _this = this;

	            if (this.id) {
	                this._startLoadProgress();
	                this.EventService.getEvent(this.id).then(function (event) {
	                    _this.event = event;
	                    return event.id;
	                }).then(function (eventId) {
	                    return _this.FileStorageService.getProvisionFileName(eventId);
	                }).then(function (name) {
	                    _this.provisionFile = {
	                        name: name
	                    };
	                }).then(function () {
	                    _this._stopLoadProgress();
	                }).catch(function (error) {
	                    _this._stopLoadProgress();
	                    throw Error(error);
	                });
	            } else {
	                this.event = this.EventService.getDefaultEvent();
	            }
	        }
	    }, {
	        key: 'isHasError',
	        value: function isHasError(attrName) {
	            var item = this.$scope.event[attrName];
	            return item.$invalid && item.$dirty && item.$touched;
	        }
	    }, {
	        key: 'openDatePopup',
	        value: function openDatePopup() {
	            this.datePopupIsOpen = true;
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            var _event = this.event;
	            var date = _event.date;
	            var time = _event.time;
	            var title = _event.title;
	            var _event$abstract = _event.abstract;
	            var abstract = _event$abstract === undefined ? '' : _event$abstract;
	            var _event$description = _event.description;
	            var description = _event$description === undefined ? '' : _event$description;
	            var tag = _event.tag;
	            var _event$place = _event.place;
	            var place = _event$place === undefined ? 'г. Пенза, Олимпийская аллея' : _event$place;
	            var _event$distances = _event.distances;
	            var distances = _event$distances === undefined ? '' : _event$distances;
	            var _event$master = _event.master;
	            var master = _event$master === undefined ? '' : _event$master;
	            var _event$masterUrl = _event.masterUrl;
	            var masterUrl = _event$masterUrl === undefined ? '' : _event$masterUrl;
	            var _event$masterPerson = _event.masterPerson;
	            var masterPerson = _event$masterPerson === undefined ? '' : _event$masterPerson;
	            var _event$masterPhone = _event.masterPhone;
	            var masterPhone = _event$masterPhone === undefined ? '' : _event$masterPhone;
	            var _event$masterEmail = _event.masterEmail;
	            var masterEmail = _event$masterEmail === undefined ? '' : _event$masterEmail;


	            this._startSaveProgress();

	            this._saveEvent({
	                date: date.getTime(),
	                time: time,
	                title: title,
	                abstract: abstract,
	                description: description,
	                tag: tag,
	                place: place,
	                distances: distances,
	                master: master,
	                masterUrl: masterUrl,
	                masterPerson: masterPerson,
	                masterPhone: masterPhone,
	                masterEmail: masterEmail
	            }).then(function (id) {
	                if (_this2.provisionFile) {
	                    if (_this2.provisionFile.size) {
	                        return _this2._uploadProvisionFile(id);
	                    }
	                } else {
	                    return _this2._deleteProvisionFile(id);
	                }
	            }).then(function () {
	                _this2._gotoEventList();
	            }).catch(function (error) {
	                _this2._stopSaveProgress();
	                throw Error(error);
	            });
	        }
	    }, {
	        key: 'onClickRemoveButton',
	        value: function onClickRemoveButton() {
	            // TODO: edd confirm dialog
	            this._removeEvent();
	        }
	    }, {
	        key: 'onClickCancelButton',
	        value: function onClickCancelButton() {
	            this._gotoEventList();
	        }
	    }, {
	        key: 'removeProvision',
	        value: function removeProvision() {
	            this.provisionFile = null;
	        }
	    }, {
	        key: '_saveEvent',
	        value: function _saveEvent(data) {
	            var result = void 0;
	            if (this.id) {
	                result = this.EventService.saveEvent(this.id, data);
	            } else {
	                result = this.EventService.addEvent(data);
	            }
	            return result;
	        }
	    }, {
	        key: '_removeEvent',
	        value: function _removeEvent() {
	            var _this3 = this;

	            this._startRemoveProgress();
	            this.EventService.removeEvent(this.id).then(function () {
	                _this3._gotoEventList();
	            }).catch(function (error) {
	                _this3._stopRemoveProgress();
	                throw Error(error);
	            });
	        }
	    }, {
	        key: '_uploadProvisionFile',
	        value: function _uploadProvisionFile(eventId) {
	            return this.FileStorageService.uploadProvisionFile(eventId, this.provisionFile);
	        }
	    }, {
	        key: '_deleteProvisionFile',
	        value: function _deleteProvisionFile(eventId) {
	            return this.FileStorageService.deleteProvisionFile(eventId);
	        }
	    }, {
	        key: '_startLoadProgress',
	        value: function _startLoadProgress() {
	            this.loadProgress = true;
	        }
	    }, {
	        key: '_stopLoadProgress',
	        value: function _stopLoadProgress() {
	            this.loadProgress = false;
	        }
	    }, {
	        key: '_startSaveProgress',
	        value: function _startSaveProgress() {
	            this.saveProgress = this.disabledForm = true;
	            this._setReadOnlyCKEDITOR(this.disabledForm);
	        }
	    }, {
	        key: '_stopSaveProgress',
	        value: function _stopSaveProgress() {
	            this.saveProgress = this.disabledForm = false;
	            this._setReadOnlyCKEDITOR(this.disabledForm);
	        }
	    }, {
	        key: '_startRemoveProgress',
	        value: function _startRemoveProgress() {
	            this.removeProgress = this.disabledForm = true;
	            this._setReadOnlyCKEDITOR(this.disabledForm);
	        }
	    }, {
	        key: '_stopRemoveProgress',
	        value: function _stopRemoveProgress() {
	            this.removeProgress = this.disabledForm = false;
	            this._setReadOnlyCKEDITOR(this.disabledForm);
	        }
	    }, {
	        key: '_gotoEventList',
	        value: function _gotoEventList() {
	            this.$state.go('events.list');
	        }
	    }, {
	        key: '_setReadOnlyCKEDITOR',
	        value: function _setReadOnlyCKEDITOR(val) {
	            CKEDITOR.instances.eventDescription.setReadOnly(val);
	        }
	    }]);

	    return EventFormPageController;
	}();

	exports.default = EventFormPageController;
	;

/***/ },
/* 368 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка события...\" ng-if=$ctrl.loadProgress></progress-bar> <div class=\"page page--eventForm\" ng-hide=$ctrl.loadProgress> <div class=container> <div class=row> <div class=col-md-12> <div class=\"well well--form\"> <form name=event class=form-horizontal ng-submit=$ctrl.submit()> <fieldset> <legend>{{ $ctrl.id ? 'Редактирование события' : 'Добавление нового события' }}</legend> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('title') }\"> <label for=title class=\"col-md-2 control-label\">Заголовок</label> <div class=col-md-8> <input type=text class=form-control id=title name=title required ng-model=$ctrl.event.title ng-disabled=$ctrl.disabledForm autocomplete=off> <div ng-messages=event.title.$error ng-if=\"$ctrl.isHasError('title')\" role=alert> <div ng-message=required class=form__message--error>Введите заголовок</div> </div> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('date') }\"> <label for=date class=\"col-md-2 control-label\">Дата события</label> <div class=col-md-4> <div class=input-group> <input type=text id=date name=date required class=form-control autocomplete=off uib-datepicker-popup=\"{{ $ctrl.dateFormat }}\" ng-model=$ctrl.event.date is-open=$ctrl.datePopupIsOpen show-button-bar=false on-open-focus=true> <span class=input-group-btn> <button class=\"btn btn-primary\" type=button ng-click=$ctrl.openDatePopup()> <i class=\"fa fa-calendar\" aria-hidden=true></i> </button> </span> </div> <div ng-messages=event.date.$error ng-if=\"$ctrl.isHasError('date')\" role=alert> <div ng-message=required class=form__message--error>Введите дату события</div> </div> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('time') }\"> <label for=time class=\"col-md-2 control-label\">Время начала</label> <div class=col-md-4> <input type=text class=form-control id=time name=time required placeholder=11:00 ng-model=$ctrl.event.time ng-disabled=$ctrl.disabledForm autocomplete=off> <div ng-messages=event.time.$error ng-if=\"$ctrl.isHasError('time')\" role=alert> <div ng-message=required class=form__message--error>Введите время начала события</div> </div> </div> </div> <div class=form-group> <label for=place class=\"col-md-2 control-label\">Место проведения</label> <div class=col-md-4> <input type=text class=form-control id=place name=place placeholder=\"г. Пенза, Олимпийская аллея\" ng-model=$ctrl.event.place ng-disabled=$ctrl.disabledForm autocomplete=off> </div> </div> <div class=form-group> <label for=distances class=\"col-md-2 control-label\">Дистанции</label> <div class=col-md-4> <input type=text class=form-control id=distances name=distances placeholder=\"1 км, 3 км, 5 км, 10 км, полумарафон, марафон\" ng-model=$ctrl.event.distances ng-disabled=$ctrl.disabledForm autocomplete=off> </div> </div> <div class=form-group> <label for=tag class=\"col-md-2 control-label\">Теги</label> <div class=col-md-8> <label class=radio-inline> <input type=radio name=tag id=inlineRadio1 value=event ng-model=$ctrl.event.tag> <span class=\"label label-default label--md\">Событие</span> </label> <label class=radio-inline> <input type=radio name=tag id=inlineRadio1 value=probeg ng-model=$ctrl.event.tag> <span class=\"label label-warning label--md\">Пробег</span> </label> <label class=radio-inline> <input type=radio name=tag id=inlineRadio2 value=marathon ng-model=$ctrl.event.tag> <span class=\"label label-danger label--md\">Марафон</span> </label> <label class=radio-inline> <input type=radio name=tag id=inlineRadio3 value=training ng-model=$ctrl.event.tag> <span class=\"label label-success label--md\">Тренировка</span> </label> </div> </div> <div class=form-group></div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('master') }\"> <label for=master class=\"col-md-2 control-label\">Организаторы</label> <div class=col-md-8> <input type=text class=form-control id=master name=master placeholder=\"Сообщество &ldquo;Бег в Пензе&rdquo;\" required ng-model=$ctrl.event.master ng-disabled=$ctrl.disabledForm> <div ng-messages=event.master.$error ng-if=\"$ctrl.isHasError('master')\" role=alert> <div ng-message=required class=form__message--error>Укажите организаторов</div> </div> </div> </div> <div class=form-group> <label for=masterUrl class=\"col-md-2 control-label\">Сайт организаторов</label> <div class=col-md-4> <div class=input-group> <span class=input-group-addon>www</span> <input type=text class=form-control id=masterUrl name=masterUrl ng-model=$ctrl.event.masterUrl ng-disabled=$ctrl.disabledForm> </div> </div> </div> <div class=form-group> <label for=masterPerson class=\"col-md-2 control-label\">Контактное лицо</label> <div class=col-md-4> <input type=text class=form-control id=masterPerson name=masterPerson ng-model=$ctrl.event.masterPerson ng-disabled=$ctrl.disabledForm> </div> </div> <div class=form-group> <label for=masterPhone class=\"col-md-2 control-label\">Телефон</label> <div class=col-md-4> <input type=text class=form-control id=masterPhone name=masterPhone ng-model=$ctrl.event.masterPhone ng-disabled=$ctrl.disabledForm> </div> </div> <div class=form-group> <label for=masterEmail class=\"col-md-2 control-label\">Адрес эл. почты</label> <div class=col-md-4> <input type=text class=form-control id=masterEmail name=masterEmail placeholder=info@penzarun.ru ng-model=$ctrl.event.masterEmail ng-disabled=$ctrl.disabledForm> </div> </div> <div class=form-group></div> <div class=form-group> <label for=abstract class=\"col-md-2 control-label\">Краткое описание</label> <div class=col-md-8> <textarea class=form-control id=abstract name=abstract rows=2 ng-model=$ctrl.event.abstract ng-disabled=$ctrl.disabledForm autocomplete=off></textarea> </div> </div> <div class=form-group> <label for=description class=\"col-md-2 control-label\">Подробное описание</label> <div class=col-md-8> <div ckeditor=$ctrl.ckeditorOptions id=eventDescription ng-model=$ctrl.event.description></div> </div> </div> <div class=form-group> <label for=description class=\"col-md-2 control-label\">Положение</label> <div class=col-md-8> <div class=input-group> <input type=text class=form-control readonly=readonly ng-value=$ctrl.provisionFile.name> <span class=input-group-btn> <upload-file-button upload-file=$ctrl.provisionFile></upload-file-button> </span> <span class=input-group-btn> <button class=\"btn btn-danger\" type=button ng-click=$ctrl.removeProvision() ng-disabled=!$ctrl.provisionFile.name> <i class=\"fa fa-times\" aria-hidden=true></i> </button> </span> </div> </div> </div> <div class=form-group></div> <div class=form-group> <div class=\"col-md-8 col-md-offset-2\"> <button type=submit class=\"btn btn-primary\" ng-disabled=\"event.$invalid || $ctrl.disabledForm\"> <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=$ctrl.saveProgress></i> Сохранить </button> <button type=button class=\"btn btn-danger\" ng-if=$ctrl.id ng-click=$ctrl.onClickRemoveButton() ng-disabled=$ctrl.disabledForm> <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=$ctrl.removeProgress></i> Удалить </button> <button type=button class=\"btn btn-default\" ng-click=$ctrl.onClickCancelButton() ng-disabled=$ctrl.disabledForm>Отмена</button> </div> </div> </fieldset> </form> </div> </div> </div> </div> </div>";

/***/ },
/* 369 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(371);

	var _component2 = _interopRequireDefault(_component);

	var _eventCardHeader = __webpack_require__(375);

	var _eventCardHeader2 = _interopRequireDefault(_eventCardHeader);

	var _eventCardBody = __webpack_require__(380);

	var _eventCardBody2 = _interopRequireDefault(_eventCardBody);

	var _eventCardFooter = __webpack_require__(387);

	var _eventCardFooter2 = _interopRequireDefault(_eventCardFooter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.card', [_eventCardHeader2.default.name, _eventCardBody2.default.name, _eventCardFooter2.default.name]).component('eventCardPage', _component2.default);

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(372);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(373);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(374);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        id: '<'
	    }
	};

/***/ },
/* 372 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventCardPageController = function () {
	    EventCardPageController.$inject = ["EventService", "FileStorageService", "StartlistService"];
	    function EventCardPageController(EventService, FileStorageService, StartlistService) {
	        'ngInject';

	        _classCallCheck(this, EventCardPageController);

	        this.EventService = EventService;
	        this.FileStorageService = FileStorageService;
	        this.StartlistService = StartlistService;

	        this._initEvent();
	    }

	    _createClass(EventCardPageController, [{
	        key: '_initEvent',
	        value: function _initEvent() {
	            var _this = this;

	            if (this.id) {
	                this._startLoadProgress();
	                this.EventService.getEvent(this.id).then(function (event) {
	                    _this.event = event;
	                    return event.id;
	                }).then(function (eventId) {
	                    return _this._initProvisionFile(eventId);
	                }).then(function () {
	                    return _this.StartlistService.getStartlist(_this.event.id);
	                }).then(function (startlist) {
	                    _this.startlistLength = startlist.length;
	                }).then(function () {
	                    _this._stopLoadProgress();
	                }).catch(function (error) {
	                    _this._stopLoadProgress();
	                    throw Error(error);
	                });
	            } else {
	                this.event = {};
	            }
	        }
	    }, {
	        key: '_initProvisionFile',
	        value: function _initProvisionFile(eventId) {
	            var _this2 = this;

	            return Promise.all([this.FileStorageService.getProvisionFileUrl(eventId), this.FileStorageService.getProvisionFileSize(eventId)]).then(function (result) {
	                _this2.provisionFileUrl = result[0];
	                _this2.provisionFileSize = result[1];
	            });
	        }
	    }, {
	        key: '_startLoadProgress',
	        value: function _startLoadProgress() {
	            this.loadProgress = true;
	        }
	    }, {
	        key: '_stopLoadProgress',
	        value: function _stopLoadProgress() {
	            this.loadProgress = false;
	        }
	    }]);

	    return EventCardPageController;
	}();

	exports.default = EventCardPageController;
	;

/***/ },
/* 373 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка события...\" ng-if=$ctrl.loadProgress></progress-bar> <div class=\"page page--eventCard eventCard--{{ $ctrl.event.tag }}\" ng-if=!$ctrl.loadProgress> <event-card-header event=$ctrl.event></event-card-header> <event-card-body event=$ctrl.event provision-file-url=$ctrl.provisionFileUrl provision-file-size=$ctrl.provisionFileSize startlist-length=$ctrl.startlistLength></event-card-body> <event-card-footer event-id=$ctrl.event.id></event-card-footer> </div>";

/***/ },
/* 374 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(376);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.card.header', []).component('eventCardHeader', _component2.default);

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(377);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(378);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(379);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        event: '<'
	    }
	};

/***/ },
/* 377 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventCardHeaderController = function EventCardHeaderController() {
	    'ngInject';

	    _classCallCheck(this, EventCardHeaderController);
	};

	exports.default = EventCardHeaderController;
	;

/***/ },
/* 378 */
/***/ function(module, exports) {

	module.exports = "<div class=eventCard__header> <div class=container> <div class=row> <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12\"> <div class=eventCard__jumbotron> <div class=eventCard__title> {{ $ctrl.event.title }} </div> <div class=eventCard__abstract>{{ $ctrl.event.abstract }}</div> </div> </div> </div> </div> <div class=eventHeader__info> <div class=info__title> <div class=container> <div class=row> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"> Дата и время события </div> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"> Место проведения </div> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"> Организаторы </div> </div> </div> </div> <div class=info__division></div> <div class=info__content> <div class=container> <div class=row> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 col--date\"> <h4 class=content__item> {{ $ctrl.event.date | date: 'EEEE, dd MMMM yyyy' }}, {{ $ctrl.event.time }} </h4> </div> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 col--place\"> <h4 class=content__item> {{ $ctrl.event.place }} </h4> </div> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 col--master\"> <h4 class=content__item> {{ $ctrl.event.master }} </h4> </div> </div> </div> </div> </div> </div>";

/***/ },
/* 379 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularSanitize = __webpack_require__(381);

	var _angularSanitize2 = _interopRequireDefault(_angularSanitize);

	var _component = __webpack_require__(383);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.card.body', [_angularSanitize2.default]).component('eventCardBody', _component2.default);

/***/ },
/* 381 */,
/* 382 */,
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(384);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(385);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(386);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        event: '<',
	        provisionFileUrl: '<',
	        provisionFileSize: '<',
	        startlistLength: '<'
	    }
	};

/***/ },
/* 384 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Kb = 1024;
	var Mb = Kb * Kb;

	var EventCardBodyController = function () {
	    EventCardBodyController.$inject = ["$sce"];
	    function EventCardBodyController($sce) {
	        'ngInject';

	        _classCallCheck(this, EventCardBodyController);

	        this.$sce = $sce;
	    }

	    _createClass(EventCardBodyController, [{
	        key: 'getDescriptionHtml',
	        value: function getDescriptionHtml() {
	            return this.$sce.trustAsHtml(this.event.description);
	        }
	    }, {
	        key: 'getFileSize',
	        value: function getFileSize() {
	            var result = void 0;
	            if (Mb < this.provisionFileSize) {
	                var size = this.provisionFileSize / Mb;
	                result = size.toFixed() + ' Мб';
	            } else {
	                var _size = this.provisionFileSize / Kb;
	                result = _size.toFixed() + ' Кб';
	            }
	            return result;
	        }
	    }]);

	    return EventCardBodyController;
	}();

	exports.default = EventCardBodyController;
	;

/***/ },
/* 385 */
/***/ function(module, exports) {

	module.exports = "<div class=eventCard__body> <div class=container> <div class=row> <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12 leftBlock\"> <div class=eventCard__description ng-if=$ctrl.event.description ng-bind-html=$ctrl.getDescriptionHtml()></div> </div> <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12 rightBlock\"> <div class=rightBlock__buttons> <a ng-href=\"{{ $ctrl.provisionFileUrl }}\" class=\"btn btn-default btn-lg btn-block\" ng-if=$ctrl.provisionFileUrl> <i class=\"fa fa-download\" aria-hidden=true></i> Положение ({{ $ctrl.getFileSize() }}) </a> <a class=\"btn btn-info btn-lg btn-block\" ng-if=$ctrl.startlistLength ui-sref=\"events.startlist({ id: $ctrl.event.id })\"> Список участников ({{ $ctrl.startlistLength }}) </a> </div> <div class=rightBlock__address> <h4 class=address__title>Контакты</h4> <address> <div> <strong>{{ $ctrl.event.master }}</strong> </div> <div ng-if=$ctrl.event.masterUrl> <abbr title=\"Адрес в сети Интернет\">www:</abbr> <a target=_blank rel=nofollow ng-href=\"http://www.{{ $ctrl.event.masterUrl }}\">{{ $ctrl.event.masterUrl }}</a> </div> </address> <address ng-if=$ctrl.event.masterPerson> <div> <strong>{{ $ctrl.event.masterPerson }}</strong> </div> <div ng-if=$ctrl.event.masterPhone> <abbr title=Телефон>Тел:</abbr> {{ $ctrl.event.masterPhone }} </div> <div ng-if=$ctrl.event.masterEmail> <abbr title=\"Электронная почта\">Эл. почта:</abbr> <a href=mailto:#>{{ $ctrl.event.masterEmail }}</a> </div> </address> </div> </div> </div> </div> </div>";

/***/ },
/* 386 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(388);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.card.footer', []).component('eventCardFooter', _component2.default);

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(389);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(390);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(391);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        eventId: '<'
	    }
	};

/***/ },
/* 389 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventCardFooterController = function () {
	    EventCardFooterController.$inject = ["AuthService"];
	    function EventCardFooterController(AuthService) {
	        'ngInject';

	        _classCallCheck(this, EventCardFooterController);

	        this.AuthService = AuthService;
	    }

	    _createClass(EventCardFooterController, [{
	        key: 'isAuth',
	        value: function isAuth() {
	            return this.AuthService.getAuth();
	        }
	    }]);

	    return EventCardFooterController;
	}();

	exports.default = EventCardFooterController;
	;

/***/ },
/* 390 */
/***/ function(module, exports) {

	module.exports = "<div class=eventCard__footer> <div class=container> <div class=row> <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12\"> <div class=btn-toolbar role=toolbar> <div class=btn-group role=group> <a class=\"btn btn-lg btn-primary\" ui-sref=\"events.register({ id: $ctrl.eventId })\" ng-if=$ctrl.isAuth()>Регистрация</a> </div> </div> </div> </div> </div> </div>";

/***/ },
/* 391 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(393);

	var _component2 = _interopRequireDefault(_component);

	var _filter = __webpack_require__(397);

	var _filter2 = _interopRequireDefault(_filter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.list', [_filter2.default.name]).component('eventsListPage', _component2.default);

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(394);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(395);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(396);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default
	};

/***/ },
/* 394 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventsListPageController = function () {
	    EventsListPageController.$inject = ["EventService"];
	    function EventsListPageController(EventService) {
	        'ngInject';

	        _classCallCheck(this, EventsListPageController);

	        this.EventService = EventService;

	        this._initFilterHandlers();

	        this._loadEvents();
	    }

	    _createClass(EventsListPageController, [{
	        key: '_loadEvents',
	        value: function _loadEvents() {
	            var _this = this;

	            this._startProgress();
	            this.EventService.loadEvents().then(function (result) {
	                _this._stopProgress();
	                _this.filtredEvents = _this.events = result;
	            });
	        }
	    }, {
	        key: '_startProgress',
	        value: function _startProgress() {
	            this.progress = true;
	        }
	    }, {
	        key: '_stopProgress',
	        value: function _stopProgress() {
	            this.progress = false;
	        }
	    }, {
	        key: '_initFilterHandlers',
	        value: function _initFilterHandlers() {
	            var _this2 = this;

	            this.filterHandlers = {
	                onChangeFilter: function onChangeFilter(filter) {
	                    _this2.filtredEvents = !filter.length ? _this2.events : _this2.events.filter(function (event) {
	                        return filter.some(function (item) {
	                            return item === event.tag;
	                        });
	                    });
	                }
	            };
	        }
	    }]);

	    return EventsListPageController;
	}();

	exports.default = EventsListPageController;
	;

/***/ },
/* 395 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка списка событий...\" ng-if=$ctrl.progress></progress-bar> <div class=\"page page--eventsList\"> <div class=container ng-if=!$ctrl.progress> <div class=row> <div class=\"col-md-2 col-sm-3 col-xs-12\"> <events-list-filter handlers=$ctrl.filterHandlers></events-list-filter> </div> <div class=\"col-md-10 col-sm-9 col-xs-12\"> <events-list events=$ctrl.filtredEvents></events-list> </div> </div> </div> </div>";

/***/ },
/* 396 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(398);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.list.filter', []).component('eventsListFilter', _component2.default);

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(399);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(400);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(401);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        handlers: '<'
	    }
	};

/***/ },
/* 399 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventsFilterController = function () {
	    function EventsFilterController() {
	        'ngInject';

	        _classCallCheck(this, EventsFilterController);

	        this._initFilter();
	    }

	    _createClass(EventsFilterController, [{
	        key: 'isActive',
	        value: function isActive() {
	            var _filter = this.filter;
	            var probeg = _filter.probeg;
	            var marathon = _filter.marathon;
	            var training = _filter.training;

	            return probeg || marathon || training;
	        }
	    }, {
	        key: 'onClickTag',
	        value: function onClickTag() {
	            this._onChangeFilter();
	        }
	    }, {
	        key: 'resetFilter',
	        value: function resetFilter() {
	            this._initFilter();
	            this._onChangeFilter();
	        }
	    }, {
	        key: '_initFilter',
	        value: function _initFilter() {
	            this.filter = {
	                probeg: false,
	                marathon: false,
	                training: false
	            };
	        }
	    }, {
	        key: '_onChangeFilter',
	        value: function _onChangeFilter() {
	            var filter = this._createFiterArray(this.filter);
	            this.handlers.onChangeFilter(filter);
	        }
	    }, {
	        key: '_createFiterArray',
	        value: function _createFiterArray(obj) {
	            var result = [];
	            for (var key in obj) {
	                obj[key] && result.push(key);
	            }
	            return result;
	        }
	    }]);

	    return EventsFilterController;
	}();

	exports.default = EventsFilterController;
	;

/***/ },
/* 400 */
/***/ function(module, exports) {

	module.exports = "<div class=eventsFilter> <div class=\"panel panel-primary\"> <div class=panel-heading> <h3 class=panel-title>Фильтр</h3> </div> <div class=panel-body> <div class=checkbox> <label class=label--filter> <input type=checkbox value=probeg ng-click=$ctrl.onClickTag() ng-model=$ctrl.filter.probeg> Пробеги </label> </div> <div class=checkbox> <label class=label--filter> <input type=checkbox value=marathon ng-click=$ctrl.onClickTag() ng-model=$ctrl.filter.marathon> Марафоны </label> </div> <div class=checkbox> <label class=label--filter> <input type=checkbox value=training ng-click=$ctrl.onClickTag() ng-model=$ctrl.filter.training> Тренировки </label> </div> </div> <div class=panel-footer ng-if=$ctrl.isActive()> <button type=button class=\"btn btn-block btn-default\" ng-click=$ctrl.resetFilter()>Очистить</button> </div> </div> </div>";

/***/ },
/* 401 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(403);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.startlist', []).component('eventStartlistPage', _component2.default);

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(404);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(405);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(406);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default
	};

/***/ },
/* 404 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventsListPageController = function () {
	    EventsListPageController.$inject = ["EventService"];
	    function EventsListPageController(EventService) {
	        'ngInject';

	        _classCallCheck(this, EventsListPageController);

	        this.EventService = EventService;

	        this._loadEvents();
	    }

	    _createClass(EventsListPageController, [{
	        key: '_loadEvents',
	        value: function _loadEvents() {
	            var _this = this;

	            this._startProgress();
	            this.EventService.loadEvents().then(function (result) {
	                _this._stopProgress();
	                _this.filtredEvents = _this.events = result;
	            });
	        }
	    }, {
	        key: '_startProgress',
	        value: function _startProgress() {
	            this.progress = true;
	        }
	    }, {
	        key: '_stopProgress',
	        value: function _stopProgress() {
	            this.progress = false;
	        }
	    }]);

	    return EventsListPageController;
	}();

	exports.default = EventsListPageController;
	;

/***/ },
/* 405 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка списка участников...\" ng-if=$ctrl.progress></progress-bar> <div class=\"page page--eventStartlist\"> <div class=container ng-if=!$ctrl.progress> <div class=row> <div class=col-md-12> Здесь будет список участников </div> </div> </div> </div>";

/***/ },
/* 406 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularMessages = __webpack_require__(363);

	var _angularMessages2 = _interopRequireDefault(_angularMessages);

	var _component = __webpack_require__(408);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.register', [_angularMessages2.default]).component('eventRegisterPage', _component2.default);

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(409);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(410);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(411);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        id: '<'
	    }
	};

/***/ },
/* 409 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventRegisterPageController = function () {
	    EventRegisterPageController.$inject = ["$scope", "$state", "EventService"];
	    function EventRegisterPageController($scope, $state, EventService) {
	        'ngInject';

	        _classCallCheck(this, EventRegisterPageController);

	        this.$scope = $scope;
	        this.$state = $state;
	        this.EventService = EventService;

	        this._initMember();
	        this._initEvent();
	    }

	    _createClass(EventRegisterPageController, [{
	        key: '_initEvent',
	        value: function _initEvent() {
	            var _this = this;

	            this._startProgress();
	            this.EventService.getEvent(this.id).then(function (event) {
	                console.log({ event: event });
	                _this.event = event;
	            }).then(function () {
	                _this._stopProgress();
	            }).catch(function (error) {
	                _this._stopProgress();
	                throw Error(error);
	            });
	        }
	    }, {
	        key: '_initMember',
	        value: function _initMember() {
	            this.member = {
	                fio: '',
	                age: ''
	            };
	        }
	    }, {
	        key: '_startProgress',
	        value: function _startProgress() {
	            this.progress = true;
	        }
	    }, {
	        key: '_stopProgress',
	        value: function _stopProgress() {
	            this.progress = false;
	        }
	    }, {
	        key: 'onClickCancelButton',
	        value: function onClickCancelButton() {
	            this.$state.go('events.list');
	        }
	    }, {
	        key: 'isHasError',
	        value: function isHasError(attrName) {
	            var item = this.$scope.member[attrName];
	            return item.$invalid && item.$dirty && item.$touched;
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {}
	    }]);

	    return EventRegisterPageController;
	}();

	exports.default = EventRegisterPageController;
	;

/***/ },
/* 410 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка информации о событии...\" ng-if=$ctrl.progress></progress-bar> <div class=\"page page--eventRegister\"> <div class=container ng-hide=$ctrl.progress> <div class=row> <div class=col-md-12> <div class=\"well well--form\"> <form name=member class=form-horizontal ng-submit=$ctrl.submit()> <fieldset> <legend>Регистрация</legend> <div class=form-group> <label for=place class=\"col-md-2 control-label\">Событие</label> <div class=col-md-8> <p class=\"form-control-static form-control-static--event\"> {{ $ctrl.event.title }} </p> </div> </div> <div class=form-group> <label for=place class=\"col-md-2 control-label\">Дата и время</label> <div class=col-md-4> <p class=\"form-control-static form-control-static--event\"> {{ $ctrl.event.date | date: 'EEEE, dd MMMM yyyy' }}, {{ $ctrl.event.time }} </p> </div> </div> <div class=form-group> <label for=place class=\"col-md-2 control-label\">Место проведения</label> <div class=col-md-4> <p class=\"form-control-static form-control-static--event\"> {{ $ctrl.event.place }} </p> </div> </div> <div class=form-group> <label for=place class=\"col-md-2 control-label\">Дистанции</label> <div class=col-md-4> <p class=\"form-control-static form-control-static--event\"> {{ $ctrl.event.distances }} </p> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('fio') }\"> <label for=fio class=\"col-md-2 control-label\">ФИО</label> <div class=col-md-8> <input type=text class=form-control name=fio required ng-model=$ctrl.member.fio ng-disabled=$ctrl.disabledForm autocomplete=off> <div ng-messages=member.fio.$error ng-if=\"$ctrl.isHasError('fio')\" role=alert> <div ng-message=required class=form__message--error>Введите ФИО</div> </div> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('age') }\"> <label for=age class=\"col-md-2 control-label\">Год рождения</label> <div class=col-md-4> <input type=text maxlength=4 class=form-control name=age required ng-model=$ctrl.member.age ng-disabled=$ctrl.disabledForm autocomplete=off> <div ng-messages=member.age.$error ng-if=\"$ctrl.isHasError('age')\" role=alert> <div ng-message=required class=form__message--error>Введите год рождения</div> </div> </div> </div> <div class=form-group> <label for=gender class=\"col-md-2 control-label\">Пол</label> <div class=col-md-4> <label class=radio-inline> <input type=radio name=gender value=муж checked=checked ng-model=$ctrl.member.gender> муж </label> <label class=radio-inline> <input type=radio name=gender value=жен ng-model=$ctrl.member.gender> жен </label> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('distance') }\"> <label for=distance class=\"col-md-2 control-label\">Дистанция</label> <div class=col-md-4> <input type=text maxlength=32 class=form-control name=distance required ng-model=$ctrl.member.distance ng-disabled=$ctrl.disabledForm autocomplete=off> <div ng-messages=member.distance.$error ng-if=\"$ctrl.isHasError('distance')\" role=alert> <div ng-message=required class=form__message--error>Введите дистанцию</div> </div> </div> </div> <div class=form-group> <label for=startNumber class=\"col-md-2 control-label\">Стартовый номер</label> <div class=col-md-4> <input type=text maxlength=8 class=form-control name=startNumber placeholder=\"без номера\"> </div> </div> <div class=form-group> <label for=city class=\"col-md-2 control-label\">Город</label> <div class=col-md-4> <input type=text maxlength=32 class=form-control name=city placeholder=Пенза> </div> </div> <div class=form-group> <label for=club class=\"col-md-2 control-label\">Клуб</label> <div class=col-md-4> <input type=text maxlength=64 class=form-control name=club placeholder=\"Не состою в клубе\"> </div> </div> <div class=form-group> <label for=сountry class=\"col-md-2 control-label\">Страна/Регион</label> <div class=col-md-4> <input type=text maxlength=64 class=form-control name=сountry placeholder=Россия> </div> </div> <div class=form-group></div> <div class=form-group> <div class=\"col-md-8 col-md-offset-2\"> <button type=submit class=\"btn btn-primary\" ng-disabled=\"member.$invalid || $ctrl.disabledForm\"> <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=$ctrl.registerProgress></i> Регистрация </button> <button type=button class=\"btn btn-default\" ng-click=$ctrl.onClickCancelButton() ng-disabled=$ctrl.disabledForm>Отмена</button> </div> </div> </fieldset> </form> </div> </div> </div> </div> </div>";

/***/ },
/* 411 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(413);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(414);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(415);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.about', []).config(["$stateProvider", function ($stateProvider) {
	    'ngInject';

	    $stateProvider.state('about', {
	        url: '/about',
	        template: '<about></about>'
	    });
	}]).component('about', {
	    template: _template2.default,
	    controller: _controller2.default
	});

/***/ },
/* 413 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AboutPageController = function AboutPageController() {
	    _classCallCheck(this, AboutPageController);
	};

	exports.default = AboutPageController;
	;

/***/ },
/* 414 */
/***/ function(module, exports) {

	module.exports = "<div class=page> <div class=container> <div class=row> <div class=col-md-12> About page </div> </div> <div> </div></div></div>";

/***/ },
/* 415 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(417);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(418);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(419);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.login', []).config(["$stateProvider", function ($stateProvider) {
	    'ngInject';

	    $stateProvider.state('login', {
	        url: '/login',
	        template: '<login></login>'
	    });
	}]).component('login', {
	    template: _template2.default,
	    controller: _controller2.default
	});

/***/ },
/* 417 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginController = function () {
	    LoginController.$inject = ["$scope", "$state", "AuthService"];
	    function LoginController($scope, $state, AuthService) {
	        'ngInject';

	        _classCallCheck(this, LoginController);

	        this.$scope = $scope;
	        this.$state = $state;
	        this.AuthService = AuthService;

	        this.auth = {
	            email: '',
	            password: ''
	        };
	    }

	    _createClass(LoginController, [{
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            var _auth = this.auth;
	            var email = _auth.email;
	            var password = _auth.password;

	            this._startProgress();
	            this.AuthService.signInWithEmailAndPassword(email, password).then(function () {
	                _this._gotoUserState();
	            }).catch(function (error) {
	                _this._stopProgress();
	                throw Error(error);
	            });
	        }
	    }, {
	        key: 'isHasError',
	        value: function isHasError(attrName) {
	            var item = this.$scope.auth[attrName];
	            return item.$invalid && item.$dirty && item.$touched;
	        }
	    }, {
	        key: '_startProgress',
	        value: function _startProgress() {
	            this.progress = true;
	        }
	    }, {
	        key: '_stopProgress',
	        value: function _stopProgress() {
	            this.progress = false;
	        }
	    }, {
	        key: '_gotoUserState',
	        value: function _gotoUserState() {
	            this.$state.go('user');
	        }
	    }]);

	    return LoginController;
	}();

	exports.default = LoginController;
	;

/***/ },
/* 418 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--login\"> <div class=container> <div class=row> <div class=col-md-6> <div class=well> <form name=auth class=\"form-horizontal from--auth\" ng-submit=$ctrl.submit()> <fieldset> <legend>Авторизация</legend> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('email') }\"> <label for=inputEmail class=\"col-md-2 control-label\">Email</label> <div class=col-md-10> <input type=text class=form-control id=inputEmail name=email placeholder=Email required ng-model=$ctrl.auth.email ng-disabled=$ctrl.progress autocomplete=off> <div ng-messages=auth.email.$error ng-if=\"$ctrl.isHasError('email')\" role=alert> <div ng-message=required class=form__message--error>Введите email</div> </div> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('password') }\"> <label for=inputPassword class=\"col-md-2 control-label\">Пароль</label> <div class=col-md-10> <input type=password class=form-control id=inputPassword name=password required placeholder=Password ng-model=$ctrl.auth.password ng-disabled=$ctrl.progress autocomplete=off> <div ng-messages=auth.password.$error ng-if=\"$ctrl.isHasError('password')\" role=alert> <div ng-message=required class=form__message--error>Введите пароль</div> </div> </div> </div> <div class=form-group> <div class=\"col-md-10 col-md-offset-2\"> <button type=submit class=\"btn btn-success\" ng-disabled=\"auth.$invalid || $ctrl.progress\"> <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=$ctrl.progress></i> Войти </button> </div> </div> </fieldset> </form> </div> </div> </div> </div> </div>";

/***/ },
/* 419 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(302);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _component = __webpack_require__(421);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.user', [_angularUiRouter2.default]).config(["$stateProvider", function ($stateProvider) {
	    'ngInject';

	    $stateProvider.state('user', {
	        url: '/user',
	        template: '<user-page />'
	    });
	}]).component('userPage', _component2.default);

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(422);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(423);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(424);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default
	};

/***/ },
/* 422 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserPageController = function UserPageController() {
	    _classCallCheck(this, UserPageController);
	};

	exports.default = UserPageController;

/***/ },
/* 423 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--user\"> <div class=container> <div class=row> <div class=col-md-12> <div class=btn-toolbar role=toolbar> <div class=btn-group role=group> <a ui-sref=events.new class=\"btn btn-primary\">Добавить событие</a> </div> <div class=btn-group role=group> <a ui-sref=news.new class=\"btn btn-primary\">Добавить новость</a> </div> </div> </div> </div> </div> </div>";

/***/ },
/* 424 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.directives', []);

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _authService = __webpack_require__(427);

	var _authService2 = _interopRequireDefault(_authService);

	var _eventService = __webpack_require__(429);

	var _eventService2 = _interopRequireDefault(_eventService);

	var _firebaseService = __webpack_require__(431);

	var _firebaseService2 = _interopRequireDefault(_firebaseService);

	var _fileStorageService = __webpack_require__(433);

	var _fileStorageService2 = _interopRequireDefault(_fileStorageService);

	var _startlistService = __webpack_require__(435);

	var _startlistService2 = _interopRequireDefault(_startlistService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services', [_authService2.default.name, _eventService2.default.name, _firebaseService2.default.name, _fileStorageService2.default.name, _startlistService2.default.name]);

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(428);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.auth', []).service('AuthService', _controller2.default);

/***/ },
/* 428 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AuthServiceController = function () {
	    AuthServiceController.$inject = ["$firebaseAuth"];
	    function AuthServiceController($firebaseAuth) {
	        'ngInject';

	        _classCallCheck(this, AuthServiceController);

	        this.auth = $firebaseAuth();
	    }

	    _createClass(AuthServiceController, [{
	        key: 'waitForSignIn',
	        value: function waitForSignIn() {
	            return this.auth.$waitForSignIn();
	        }
	    }, {
	        key: 'requireSignIn',
	        value: function requireSignIn() {
	            return this.auth.$requireSignIn();
	        }
	    }, {
	        key: 'getAuth',
	        value: function getAuth() {
	            return this.auth.$getAuth();
	        }
	    }, {
	        key: 'onAuthStateChanged',
	        value: function onAuthStateChanged(callback) {
	            this.auth.$onAuthStateChanged(callback);
	        }
	    }, {
	        key: 'signInWithEmailAndPassword',
	        value: function signInWithEmailAndPassword(email, password) {
	            return this.auth.$signInWithEmailAndPassword(email, password).then(function (firebaseUser) {
	                console.log({ firebaseUser: firebaseUser });
	            });
	        }
	    }, {
	        key: 'signOut',
	        value: function signOut() {
	            this.auth.$signOut();
	        }
	    }]);

	    return AuthServiceController;
	}();

	exports.default = AuthServiceController;
	;

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(430);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.event', []).service('EventService', _controller2.default);

/***/ },
/* 430 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventService = function () {
	    EventService.$inject = ["FirebaseService", "$firebaseArray", "$firebaseObject"];
	    function EventService(FirebaseService, $firebaseArray, $firebaseObject) {
	        'ngInject';

	        _classCallCheck(this, EventService);

	        var firebase = FirebaseService.getFirebase();
	        this.ref = firebase.database().ref('events').orderByChild('date');

	        this.$firebaseArray = $firebaseArray;
	        this.$firebaseObject = $firebaseObject;
	    }

	    _createClass(EventService, [{
	        key: 'loadEvents',
	        value: function loadEvents(options) {
	            var ref = options ? this._getOptionsRef(options) : this.ref;
	            var list = this.$firebaseArray(ref);
	            return list.$loaded();
	        }
	    }, {
	        key: '_getOptionsRef',
	        value: function _getOptionsRef(_ref) {
	            var dateBegin = _ref.dateBegin;
	            var dateEnd = _ref.dateEnd;

	            var result = void 0;
	            if (dateBegin && dateEnd) {
	                result = this.ref.startAt(dateBegin).endAt(dateEnd);
	            } else {
	                result = this.ref;
	            }
	            return result;
	        }
	    }, {
	        key: 'getEvent',
	        value: function getEvent(key) {
	            var obj = this._getEventObj(key);
	            return obj.$loaded().then(function (result) {
	                var _ref2;

	                var $id = result.$id;
	                var date = result.date;
	                var time = result.time;
	                var title = result.title;
	                var abstract = result.abstract;
	                var description = result.description;
	                var _result$tag = result.tag;
	                var tag = _result$tag === undefined ? 'event' : _result$tag;
	                var place = result.place;
	                var distances = result.distances;
	                var master = result.master;
	                var masterUrl = result.masterUrl;
	                var masterPerson = result.masterPerson;
	                var masterPhone = result.masterPhone;
	                var masterEmail = result.masterEmail;


	                return _ref2 = {
	                    id: $id,
	                    date: date,
	                    time: time,
	                    title: title,
	                    abstract: abstract,
	                    description: description,
	                    tag: tag
	                }, _defineProperty(_ref2, 'date', new Date(date)), _defineProperty(_ref2, 'place', place), _defineProperty(_ref2, 'distances', distances), _defineProperty(_ref2, 'master', master), _defineProperty(_ref2, 'masterUrl', masterUrl), _defineProperty(_ref2, 'masterPerson', masterPerson), _defineProperty(_ref2, 'masterPhone', masterPhone), _defineProperty(_ref2, 'masterEmail', masterEmail), _ref2;
	            });
	        }
	    }, {
	        key: 'getDefaultEvent',
	        value: function getDefaultEvent() {
	            return {
	                tag: 'event',
	                time: '11:00'
	            };
	        }
	    }, {
	        key: 'saveEvent',
	        value: function saveEvent(key, data) {
	            var obj = this._getEventObj(key);
	            Object.assign(obj, data, {
	                editTimestamp: Date.now()
	            });
	            return obj.$save().then(function (ref) {
	                return ref.key;
	            });
	        }
	    }, {
	        key: 'addEvent',
	        value: function addEvent(data) {
	            var list = this.$firebaseArray(this.ref);
	            return list.$add(_extends({}, data, {
	                createTimestamp: Date.now()
	            })).then(function (ref) {
	                return ref.key;
	            });
	        }
	    }, {
	        key: 'removeEvent',
	        value: function removeEvent(key) {
	            var obj = this._getEventObj(key);
	            return obj.$remove();
	        }
	    }, {
	        key: '_getEventObj',
	        value: function _getEventObj(key) {
	            var ref = firebase.database().ref('events/' + key);
	            return this.$firebaseObject(ref);
	        }
	    }]);

	    return EventService;
	}();

	exports.default = EventService;
	;

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(432);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.firebaseService', []).service('FirebaseService', _controller2.default);

/***/ },
/* 432 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FirebaseService = function () {
	    function FirebaseService() {
	        _classCallCheck(this, FirebaseService);
	    }

	    _createClass(FirebaseService, [{
	        key: "getFirebase",
	        value: function getFirebase() {
	            return window.firebase;
	        }
	    }]);

	    return FirebaseService;
	}();

	exports.default = FirebaseService;
	;

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(434);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.fileStorage', []).service('FileStorageService', _controller2.default);

/***/ },
/* 434 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var fileName = {
	    provision: 'Положение'
	};

	var FileStorageServiceController = function () {
	    FileStorageServiceController.$inject = ["FirebaseService"];
	    function FileStorageServiceController(FirebaseService) {
	        'ngInject';

	        _classCallCheck(this, FileStorageServiceController);

	        var firebase = FirebaseService.getFirebase();
	        this.storageRef = firebase.storage().ref();
	    }

	    _createClass(FileStorageServiceController, [{
	        key: 'uploadProvisionFile',
	        value: function uploadProvisionFile(eventKey, file) {
	            return this._uploadFile(eventKey, file, fileName.provision);
	        }
	    }, {
	        key: 'deleteProvisionFile',
	        value: function deleteProvisionFile(eventKey) {
	            return this._deleteFile(eventKey, fileName.provision);
	        }
	    }, {
	        key: 'getProvisionFileUrl',
	        value: function getProvisionFileUrl(eventKey) {
	            return this._getUrl(eventKey, fileName.provision);
	        }
	    }, {
	        key: 'getProvisionFileName',
	        value: function getProvisionFileName(eventKey) {
	            return this._getFileName({
	                eventKey: eventKey,
	                fileName: fileName.provision
	            });
	        }
	    }, {
	        key: 'getProvisionFileSize',
	        value: function getProvisionFileSize(eventKey) {
	            return this._getFileSize({
	                eventKey: eventKey,
	                fileName: fileName.provision
	            });
	        }
	    }, {
	        key: '_getFileRef',
	        value: function _getFileRef(key, fileName) {
	            return this.storageRef.child('' + fileName + key);
	        }
	    }, {
	        key: '_uploadFile',
	        value: function _uploadFile(eventKey, file, fileName) {
	            var uploadTask = this._getFileRef(eventKey, fileName).put(file);
	            return new Promise(function (resolve, reject) {
	                uploadTask.on('state_changed', function (snapshot) {}, function (error) {
	                    reject(error);
	                }, function () {
	                    resolve(uploadTask.snapshot.downloadURL);
	                });
	            });
	        }
	    }, {
	        key: '_deleteFile',
	        value: function _deleteFile(eventKey, fileName) {
	            var ref = this._getFileRef(eventKey, fileName);
	            return ref.delete().catch(function (error) {
	                if (error.code === 'storage/object-not-found') {
	                    return;
	                } else {
	                    throw Error(error);
	                }
	            });
	        }
	    }, {
	        key: '_getUrl',
	        value: function _getUrl(key, fileName) {
	            var ref = this._getFileRef(key, fileName);
	            return ref.getDownloadURL().then(function (url) {
	                return url;
	            }).catch(function (error) {
	                if (error.code === 'storage/object-not-found') {
	                    return null;
	                } else {
	                    throw Error(error);
	                }
	            });
	        }
	    }, {
	        key: '_getFileName',
	        value: function _getFileName(options) {
	            return this._getFileMetadata(options).then(function (metadata) {
	                return metadata ? metadata.name : null;
	            });
	        }
	    }, {
	        key: '_getFileSize',
	        value: function _getFileSize(options) {
	            return this._getFileMetadata(options).then(function (metadata) {
	                return metadata ? metadata.size : null;
	            });
	        }
	    }, {
	        key: '_getFileMetadata',
	        value: function _getFileMetadata(_ref) {
	            var eventKey = _ref.eventKey;
	            var fileName = _ref.fileName;

	            var ref = this._getFileRef(eventKey, fileName);
	            return ref.getMetadata().catch(function (error) {
	                if (error.code === 'storage/object-not-found') {
	                    return null;
	                } else {
	                    throw Error(error);
	                }
	            });
	        }
	    }]);

	    return FileStorageServiceController;
	}();

	exports.default = FileStorageServiceController;
	;

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(436);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.startlistService', []).service('StartlistService', _controller2.default);

/***/ },
/* 436 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StartlistServiceController = function () {
	    StartlistServiceController.$inject = ["FirebaseService", "$firebaseArray", "$firebaseObject"];
	    function StartlistServiceController(FirebaseService, $firebaseArray, $firebaseObject) {
	        'ngInject';

	        _classCallCheck(this, StartlistServiceController);

	        var firebase = FirebaseService.getFirebase();

	        this.startlist = firebase.database().ref('startlist');
	        this.$firebaseArray = $firebaseArray;
	        this.$firebaseObject = $firebaseObject;
	    }

	    _createClass(StartlistServiceController, [{
	        key: 'getStartlist',
	        value: function getStartlist(eventId) {
	            var ref = this.startlist.child(eventId);
	            return this.$firebaseArray(ref);
	        }
	    }]);

	    return StartlistServiceController;
	}();

	exports.default = StartlistServiceController;
	;

/***/ },
/* 437 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);