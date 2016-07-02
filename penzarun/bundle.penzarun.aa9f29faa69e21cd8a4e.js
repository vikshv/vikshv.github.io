webpackJsonp([0],{

/***/ 0:
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

	var _services = __webpack_require__(379);

	var _services2 = _interopRequireDefault(_services);

	__webpack_require__(386);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_angular2.default.module('app', [_angularUiRouter2.default, 'firebase', _angularUiBootstrap2.default, _components2.default.name, _services2.default.name]).config(["$urlRouterProvider", function ($urlRouterProvider) {
	    'ngInject';

	    $urlRouterProvider.otherwise('/home');

	    window.firebase.initializeApp({
	        apiKey: 'AIzaSyBmx88VowTEZpgtDyM02J3Y0Ntq6wBPaOE',
	        authDomain: 'project-5043437142388192252.firebaseapp.com',
	        databaseURL: 'https://project-5043437142388192252.firebaseio.com',
	        storageBucket: ''
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

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _navbar = __webpack_require__(310);

	var _navbar2 = _interopRequireDefault(_navbar);

	var _footer = __webpack_require__(315);

	var _footer2 = _interopRequireDefault(_footer);

	var _pages = __webpack_require__(319);

	var _pages2 = _interopRequireDefault(_pages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components', [_navbar2.default.name, _footer2.default.name, _pages2.default.name]);

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(311);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(312);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(313);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.navbar', []).component('navbar', {
	    template: _template2.default,
	    controller: _controller2.default
	});

/***/ },

/***/ 311:
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

/***/ 312:
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" ui-sref=\"home\">Бег в Пензе</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li ng-class=\"{ active: $ctrl.state.news }\"><a ui-sref=\"news\">НОВОСТИ</a></li>\r\n                <li ng-class=\"{ active: $ctrl.state.calendar }\"><a ui-sref=\"calendar\">КАЛЕНДАРЬ</a></li>\r\n                <li ng-class=\"{ active: $ctrl.state.events }\"><a ui-sref=\"events.list\">СОБЫТИЯ</a></li>\r\n                <li ng-class=\"{ active: $ctrl.state.about }\"><a ui-sref=\"about\">О ПРОЕКТЕ</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li ng-if=\"!$ctrl.auth\" ng-class=\"{ active: $ctrl.state.login }\">\r\n                    <a ui-sref=\"login\">\r\n                        <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> ВХОД\r\n                    </a>\r\n                </li>\r\n                <li ng-class=\"{ active: $ctrl.state.user }\" ng-if=\"$ctrl.auth\">\r\n                    <a ui-sref=\"user\">\r\n                        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </li>\r\n                <li ng-if=\"$ctrl.auth\">\r\n                    <a href=\"#\" ng-click=\"$ctrl.logout()\">\r\n                        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> ВЫХОД\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n";

/***/ },

/***/ 313:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(316);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(317);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(318);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.footer', []).component('footer', {
	    template: _template2.default,
	    controller: _controller2.default
	});

/***/ },

/***/ 316:
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

/***/ 317:
/***/ function(module, exports) {

	module.exports = "<div class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <ul class=\"list-unstyled\">\r\n                    <li class=\"list__item\"><a href=\"https://github.com/vikshv/penzarun/\">GitHub</a></li>\r\n                </ul>\r\n                <ul class=\"list-inline\">\r\n                    <li>\r\n                        Style based on <a target=\"_blank\" href=\"http://bootswatch.com/superhero/\" rel=\"nofollow\">Bootswatch</a>\r\n                    </li>\r\n                    <li>\r\n                        Icons from <a target=\"_blank\" href=\"http://fortawesome.github.io/Font-Awesome/\" rel=\"nofollow\">Font Awesome</a>\r\n                    </li>\r\n                    <li>\r\n                        Backend from <a target=\"_blank\" href=\"https://console.firebase.google.com/project/project-5043437142388192252/overview\">Firebase</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 318:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _home = __webpack_require__(320);

	var _home2 = _interopRequireDefault(_home);

	var _news = __webpack_require__(324);

	var _news2 = _interopRequireDefault(_news);

	var _calendarPage = __webpack_require__(328);

	var _calendarPage2 = _interopRequireDefault(_calendarPage);

	var _eventsPage = __webpack_require__(338);

	var _eventsPage2 = _interopRequireDefault(_eventsPage);

	var _about = __webpack_require__(366);

	var _about2 = _interopRequireDefault(_about);

	var _login = __webpack_require__(370);

	var _login2 = _interopRequireDefault(_login);

	var _userPage = __webpack_require__(374);

	var _userPage2 = _interopRequireDefault(_userPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages', [_home2.default.name, _news2.default.name, _calendarPage2.default.name, _eventsPage2.default.name, _about2.default.name, _login2.default.name, _userPage2.default.name]);

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(321);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(322);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(323);

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

/***/ 321:
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

/***/ 322:
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--eventsList\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                Home page\r\n            </div>\r\n        </div>\r\n    <div>\r\n</div>\r\n";

/***/ },

/***/ 323:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(325);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(326);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(327);

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

/***/ 325:
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

/***/ 326:
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--eventsList\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                News page\r\n            </div>\r\n        </div>\r\n    <div>\r\n</div>\r\n";

/***/ },

/***/ 327:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(302);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _component = __webpack_require__(329);

	var _component2 = _interopRequireDefault(_component);

	var _eventsList = __webpack_require__(333);

	var _eventsList2 = _interopRequireDefault(_eventsList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.calendar', [_angularUiRouter2.default, _eventsList2.default.name]).config(["$stateProvider", function ($stateProvider) {
	    'ngInject';

	    $stateProvider.state('calendar', {
	        url: '/calendar/:filter',
	        template: '<calendar filter="$ctrl.filter"></calendar>',
	        controller: ["$stateParams", function controller($stateParams) {
	            'ngInject';

	            this.filter = $stateParams.filter;
	        }],
	        controllerAs: '$ctrl'
	    });
	}]).component('calendar', _component2.default);

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(330);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(331);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(332);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        filter: '<'
	    }
	};

/***/ },

/***/ 330:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CalendarPageController = function () {
	    function CalendarPageController() {
	        _classCallCheck(this, CalendarPageController);

	        this.filter || (this.filter = 'events');
	    }

	    _createClass(CalendarPageController, [{
	        key: 'filterIs',
	        value: function filterIs(val) {
	            return val === this.filter;
	        }
	    }]);

	    return CalendarPageController;
	}();

	exports.default = CalendarPageController;
	;

/***/ },

/***/ 331:
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--calendar\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <ul class=\"nav nav-pills\">\r\n                    <li role=\"presentation\" ng-class=\"{ active: $ctrl.filterIs('events') }\"><a href=\"#calendar/events\">СОБЫТИЯ</a></li>\r\n                    <li role=\"presentation\" ng-class=\"{ active: $ctrl.filterIs('probegs') }\"><a href=\"#calendar/probegs\">ПРОБЕГИ</a></li>\r\n                    <li role=\"presentation\" ng-class=\"{ active: $ctrl.filterIs('marathons') }\"><a href=\"#calendar/marathons\">МАРАФОНЫ</a></li>\r\n                    <li role=\"presentation\" ng-class=\"{ active: $ctrl.filterIs('trainings') }\"><a href=\"#calendar/trainings\">ТРЕНИРОВКИ</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div>\r\n                    <events-list></events-list>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 332:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(334);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.eventsList', []).component('eventsList', _component2.default);

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(335);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(336);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(337);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        events: '<'
	    }
	};

/***/ },

/***/ 335:
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

/***/ 336:
/***/ function(module, exports) {

	module.exports = "<div class=\"eventsList\">\r\n    <div class=\"eventsList__event\" ng-repeat=\"event in $ctrl.events\">\r\n        <div class=\"event__title\">\r\n            <div class=\"event__date\">\r\n                {{ event.date | date: 'dd MMMM yyyy' }}\r\n            </div>\r\n            <div class=\"well well-lg well--event\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-9\">\r\n                        <h4><a ui-sref=\"events.card({ id: event.$id })\" >\r\n                            {{ event.title }}\r\n                        </a></h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"\">\r\n                            {{ event.abstract }}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 337:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(302);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _eventFormPage = __webpack_require__(339);

	var _eventFormPage2 = _interopRequireDefault(_eventFormPage);

	var _eventCardPage = __webpack_require__(349);

	var _eventCardPage2 = _interopRequireDefault(_eventCardPage);

	var _eventsListPage = __webpack_require__(356);

	var _eventsListPage2 = _interopRequireDefault(_eventsListPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events', [_angularUiRouter2.default, _eventFormPage2.default.name, _eventCardPage2.default.name, _eventsListPage2.default.name]).config(["$stateProvider", function ($stateProvider) {
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
	            auth: ["AuthService", function auth(AuthService) {
	                'ngInject';

	                return AuthService.requireSignIn();
	            }]
	        }
	    }).state('events.edit', {
	        url: '/edit/:id',
	        template: '<event-form-page id="$ctrl.id"></event-form-page>',
	        resolve: {
	            auth: ["AuthService", function auth(AuthService) {
	                'ngInject';

	                return AuthService.requireSignIn();
	            }]
	        },
	        controller: ["$stateParams", function controller($stateParams) {
	            'ngInject';

	            this.id = $stateParams.id;
	        }],
	        controllerAs: '$ctrl'
	    }).state('events.card', {
	        url: '/card/:id',
	        template: '<event-card-page id="$ctrl.id"></event-card-page>',
	        controller: ["$stateParams", function controller($stateParams) {
	            'ngInject';

	            this.id = $stateParams.id;
	        }],
	        controllerAs: '$ctrl'
	    });
	}]);

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(340);

	var _component2 = _interopRequireDefault(_component);

	var _progressBar = __webpack_require__(344);

	var _progressBar2 = _interopRequireDefault(_progressBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.form', [_progressBar2.default.name]).component('eventFormPage', _component2.default);

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(341);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(342);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(343);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        id: '<'
	    }
	};

/***/ },

/***/ 341:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventFormPageController = function () {
	    EventFormPageController.$inject = ["$scope", "$state", "EventService"];
	    function EventFormPageController($scope, $state, EventService) {
	        'ngInject';

	        _classCallCheck(this, EventFormPageController);

	        this.$scope = $scope;
	        this.$state = $state;
	        this.EventService = EventService;

	        this._initEvent();

	        this.dateFormat = 'EEEE, dd MMMM yyyy';
	        this.datePopupIsOpen = false;
	    }

	    _createClass(EventFormPageController, [{
	        key: '_initEvent',
	        value: function _initEvent() {
	            var _this = this;

	            if (this.id) {
	                this._startLoadProgress();
	                this.EventService.getEvent(this.id).then(function (event) {
	                    _this.event = event;
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
	            var title = _event.title;
	            var _event$abstract = _event.abstract;
	            var abstract = _event$abstract === undefined ? '' : _event$abstract;
	            var _event$description = _event.description;
	            var description = _event$description === undefined ? '' : _event$description;
	            var tag = _event.tag;
	            var _event$place = _event.place;
	            var place = _event$place === undefined ? 'г. Пенза, Олимпийская аллея' : _event$place;


	            this._startSaveProgress();
	            this._saveEvent({
	                date: date.getTime(),
	                title: title,
	                abstract: abstract,
	                description: description,
	                tag: tag,
	                place: place
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
	        }
	    }, {
	        key: '_stopSaveProgress',
	        value: function _stopSaveProgress() {
	            this.saveProgress = this.disabledForm = false;
	        }
	    }, {
	        key: '_startRemoveProgress',
	        value: function _startRemoveProgress() {
	            this.removeProgress = this.disabledForm = true;
	        }
	    }, {
	        key: '_stopRemoveProgress',
	        value: function _stopRemoveProgress() {
	            this.removeProgress = this.disabledForm = false;
	        }
	    }, {
	        key: '_gotoEventList',
	        value: function _gotoEventList() {
	            this.$state.go('events.list');
	        }
	    }]);

	    return EventFormPageController;
	}();

	exports.default = EventFormPageController;
	;

/***/ },

/***/ 342:
/***/ function(module, exports) {

	module.exports = "\r\n<progress-bar text=\"Загрузка события...\" ng-if=\"$ctrl.loadProgress\"></progress-bar>\r\n\r\n<div class=\"page page--eventForm\" ng-hide=\"$ctrl.loadProgress\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                    <form name=\"event\" class=\"form-horizontal\" ng-submit=\"$ctrl.submit()\">\r\n                        <fieldset>\r\n                            <legend>{{ $ctrl.id ? 'Редактирование события' : 'Добавление нового события' }}</legend>\r\n\r\n                            <div class=\"form-group\" ng-class=\"{ 'has-error' : $ctrl.isHasError('date') }\">\r\n                                <label for=\"date\" class=\"col-md-2 control-label\">Дата</label>\r\n                                <div class=\"col-md-5\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" id=\"date\" name=\"date\" required class=\"form-control\" autocomplete=\"off\" uib-datepicker-popup=\"{{ $ctrl.dateFormat }}\" ng-model=\"$ctrl.event.date\" is-open=\"$ctrl.datePopupIsOpen\" show-button-bar=\"false\" on-open-focus=\"true\">\r\n                                        <span class=\"input-group-btn\">\r\n                                            <button class=\"btn btn-primary\" type=\"button\" ng-click=\"$ctrl.openDatePopup()\">\r\n                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                            </button>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div ng-messages=\"event.date.$error\" ng-if=\"$ctrl.isHasError('date')\" role=\"alert\">\r\n                                        <div ng-message=\"required\" class=\"form__message--error\">Введите дату</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"form-group\" ng-class=\"{ 'has-error' : $ctrl.isHasError('title') }\">\r\n                                <label for=\"title\" class=\"col-md-2 control-label\">Заголовок</label>\r\n                                <div class=\"col-md-10\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" required ng-model=\"$ctrl.event.title\" ng-disabled=\"$ctrl.disabledForm\" autocomplete=\"off\">\r\n                                    <div ng-messages=\"event.title.$error\" ng-if=\"$ctrl.isHasError('title')\" role=\"alert\">\r\n                                        <div ng-message=\"required\" class=\"form__message--error\">Введите заголовок</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"abstract\" class=\"col-md-2 control-label\">Краткое описание</label>\r\n                                <div class=\"col-md-10\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"abstract\" name=\"abstract\" ng-model=\"$ctrl.event.abstract\" ng-disabled=\"$ctrl.disabledForm\" autocomplete=\"off\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"description\" class=\"col-md-2 control-label\">Подробное описание</label>\r\n                                <div class=\"col-md-10\">\r\n                                    <textarea class=\"form-control\" id=\"description\" name=\"description\" rows=\"5\" ng-model=\"$ctrl.event.description\" ng-disabled=\"$ctrl.disabledForm\" autocomplete=\"off\"></textarea>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"place\" class=\"col-md-2 control-label\">Место проведения</label>\r\n                                <div class=\"col-md-10\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"place\" name=\"place\" placeholder=\"г. Пенза, Олимпийская аллея\" ng-model=\"$ctrl.event.place\" ng-disabled=\"$ctrl.disabledForm\" autocomplete=\"off\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"tag\" class=\"col-md-2 control-label\">Теги</label>\r\n                                <div class=\"col-md-10\">\r\n                                    <label class=\"radio-inline\">\r\n                                        <input type=\"radio\" name=\"tag\" id=\"inlineRadio1\" value=\"event\" ng-model=\"$ctrl.event.tag\"> <span class=\"label label-default label--md\">Событие</span>\r\n                                    </label>\r\n                                    <label class=\"radio-inline\">\r\n                                        <input type=\"radio\" name=\"tag\" id=\"inlineRadio1\" value=\"probeg\" ng-model=\"$ctrl.event.tag\"> <span class=\"label label-warning label--md\">Пробег</span>\r\n                                    </label>\r\n                                    <label class=\"radio-inline\">\r\n                                        <input type=\"radio\" name=\"tag\" id=\"inlineRadio2\" value=\"marathon\" ng-model=\"$ctrl.event.tag\"> <span class=\"label label-danger label--md\">Марафон</span>\r\n                                    </label>\r\n                                    <label class=\"radio-inline\">\r\n                                        <input type=\"radio\" name=\"tag\" id=\"inlineRadio3\" value=\"training\" ng-model=\"$ctrl.event.tag\"> <span class=\"label label-success label--md\">Тренировка</span>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\"></div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-10 col-md-offset-2\">\r\n                                    <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"event.$invalid || $ctrl.disabledForm\">\r\n                                        <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=\"$ctrl.saveProgress\"></i> Сохранить\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-danger\" ng-if=\"$ctrl.id\" ng-click=\"$ctrl.onClickRemoveButton()\" ng-disabled=\"$ctrl.disabledForm\">\r\n                                        <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=\"$ctrl.removeProgress\"></i> Удалить\r\n                                    </button>\r\n                                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.onClickCancelButton()\" ng-disabled=\"$ctrl.disabledForm\">Отмена</button>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 343:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(345);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.progressBar', []).component('progressBar', _component2.default);

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(346);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(347);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(348);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        text: '@'
	    }
	};

/***/ },

/***/ 346:
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

/***/ 347:
/***/ function(module, exports) {

	module.exports = "<div class=\"page\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-offset-3 col-md-6\">\r\n                <div class=\"progress\">\r\n                    <div class=\"progress-bar progress-bar-striped progress-bar--full active\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                        {{ $ctrl.text }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 348:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularSanitize = __webpack_require__(350);

	var _angularSanitize2 = _interopRequireDefault(_angularSanitize);

	var _component = __webpack_require__(352);

	var _component2 = _interopRequireDefault(_component);

	var _progressBar = __webpack_require__(344);

	var _progressBar2 = _interopRequireDefault(_progressBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.card', [_angularSanitize2.default, _progressBar2.default.name]).component('eventCardPage', _component2.default);

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(353);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(354);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(355);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        id: '<'
	    }
	};

/***/ },

/***/ 353:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventCardPageController = function () {
	    EventCardPageController.$inject = ["EventService"];
	    function EventCardPageController(EventService) {
	        'ngInject';

	        _classCallCheck(this, EventCardPageController);

	        this.EventService = EventService;

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

/***/ 354:
/***/ function(module, exports) {

	module.exports = "\r\n<progress-bar text=\"Загрузка события...\" ng-if=\"$ctrl.loadProgress\"></progress-bar>\r\n\r\n<div class=\"page page--eventCard\" ng-if=\"!$ctrl.loadProgress\">\r\n    <div class=\"eventCard__header eventCard__header--{{ $ctrl.event.tag }}\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12\">\r\n                    <div class=\"eventCard__jumbotron\">\r\n                        <div class=\"eventCard__title\">{{ $ctrl.event.title }}</div>\r\n                        <div class=\"eventCard__abstract\">{{ $ctrl.event.abstract }}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"eventCard__body\">\r\n        <div class=\"container\" ng-if=\"$ctrl.event.description\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12\">\r\n                    <p class=\"eventCard__description\" ng-bind-html=\"$ctrl.event.description\"></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"eventCard__date\">\r\n                        <h3><span class=\"head-info\">Дата, время и место проведения</span></h3>\r\n                        <p>\r\n                            <strong>Когда:</strong> 23 февраля 2016 г., старт в 11:00 <br>\r\n                            <strong>Где:</strong> {{ $ctrl.event.place }} <br>\r\n                            <strong>Регистрация:</strong> в день соревнований с 10:00\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"eventCard__distance\">\r\n                        <h3>Дистанции</h3>\r\n                    </div>\r\n                    <div class=\"eventCard__master\">\r\n                        <h3>Организаторы</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"eventCard__documents\">\r\n                        <h3>Документы</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"eventCard__footer\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12\">\r\n                    <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                        <div class=\"btn-group\" role=\"group\">\r\n                            <a ui-sref=\"events.edit({ id: $ctrl.event.id })\" class=\"btn btn-default\">Редактировать событие</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 355:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(357);

	var _component2 = _interopRequireDefault(_component);

	var _filter = __webpack_require__(361);

	var _filter2 = _interopRequireDefault(_filter);

	var _eventsList = __webpack_require__(333);

	var _eventsList2 = _interopRequireDefault(_eventsList);

	var _progressBar = __webpack_require__(344);

	var _progressBar2 = _interopRequireDefault(_progressBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.list', [_filter2.default.name, _eventsList2.default.name, _progressBar2.default.name]).component('eventsListPage', _component2.default);

/***/ },

/***/ 357:
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
	    controller: _controller2.default
	};

/***/ },

/***/ 358:
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

/***/ 359:
/***/ function(module, exports) {

	module.exports = "\r\n<progress-bar text=\"Загрузка списка событий...\" ng-if=\"$ctrl.progress\"></progress-bar>\r\n\r\n<div class=\"page page--eventsList\">\r\n    <div class=\"container\" ng-if=\"!$ctrl.progress\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n                <events-list-filter handlers=\"$ctrl.filterHandlers\"></events-list-filter>\r\n            </div>\r\n            <div class=\"col-md-10\">\r\n                <events-list events=\"$ctrl.filtredEvents\"></events-list>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 360:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(362);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.list.filter', []).component('eventsListFilter', _component2.default);

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(363);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(364);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(365);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        handlers: '<'
	    }
	};

/***/ },

/***/ 363:
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

/***/ 364:
/***/ function(module, exports) {

	module.exports = "<div class=\"eventsFilter\">\r\n    <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n            <h3 class=\"panel-title\">Фильтр</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <div class=\"checkbox\">\r\n                <label class=\"label--filter\">\r\n                    <input type=\"checkbox\" value=\"probeg\" ng-click=\"$ctrl.onClickTag()\" ng-model=\"$ctrl.filter.probeg\"> Пробеги\r\n                </label>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n                <label class=\"label--filter\">\r\n                    <input type=\"checkbox\" value=\"marathon\" ng-click=\"$ctrl.onClickTag()\" ng-model=\"$ctrl.filter.marathon\"> Марафоны\r\n                </label>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n                <label class=\"label--filter\">\r\n                    <input type=\"checkbox\" value=\"training\" ng-click=\"$ctrl.onClickTag()\" ng-model=\"$ctrl.filter.training\"> Тренировки\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel-footer\" ng-if=\"$ctrl.isActive()\">\r\n            <button type=\"button\" class=\"btn btn-block btn-default\" ng-click=\"$ctrl.resetFilter()\">Очистить</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 365:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(367);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(368);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(369);

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

/***/ 367:
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

/***/ 368:
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--eventsList\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                About page\r\n            </div>\r\n        </div>\r\n    <div>\r\n</div>\r\n";

/***/ },

/***/ 369:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(371);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(372);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(373);

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

/***/ 371:
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

/***/ 372:
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--login\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"well\">\r\n                    <form name=\"auth\" class=\"form-horizontal from--auth\" ng-submit=\"$ctrl.submit()\">\r\n                        <fieldset>\r\n                            <legend>Авторизация</legend>\r\n                            \r\n                            <div class=\"form-group\" ng-class=\"{ 'has-error' : $ctrl.isHasError('email') }\">\r\n                                <label for=\"inputEmail\" class=\"col-md-2 control-label\">Email</label>\r\n                                <div class=\"col-md-10\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"inputEmail\" name=\"email\" placeholder=\"Email\" required ng-model=\"$ctrl.auth.email\" ng-disabled=\"$ctrl.progress\" autocomplete=\"off\">\r\n                                    <div ng-messages=\"auth.email.$error\" ng-if=\"$ctrl.isHasError('email')\" role=\"alert\">\r\n                                        <div ng-message=\"required\" class=\"form__message--error\">Введите email</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"form-group\" ng-class=\"{ 'has-error' : $ctrl.isHasError('password') }\">\r\n                                <label for=\"inputPassword\" class=\"col-md-2 control-label\">Пароль</label>\r\n                                <div class=\"col-md-10\">\r\n                                    <input type=\"password\" class=\"form-control\" id=\"inputPassword\" name=\"password\" required placeholder=\"Password\" ng-model=\"$ctrl.auth.password\" ng-disabled=\"$ctrl.progress\" autocomplete=\"off\">\r\n                                    <div ng-messages=\"auth.password.$error\" ng-if=\"$ctrl.isHasError('password')\" role=\"alert\">\r\n                                        <div ng-message=\"required\" class=\"form__message--error\">Введите пароль</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-10 col-md-offset-2\">\r\n                                    <button type=\"submit\" class=\"btn btn-success\" ng-disabled=\"auth.$invalid || $ctrl.progress\">\r\n                                        <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=\"$ctrl.progress\"></i> Войти\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 373:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(302);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _component = __webpack_require__(375);

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

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(376);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(377);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(378);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default
	};

/***/ },

/***/ 376:
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

/***/ 377:
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--user\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                    <div class=\"btn-group\" role=\"group\">\r\n                        <a ui-sref=\"events.new\" class=\"btn btn-primary\">Добавить событие</a>\r\n                    </div>\r\n                    <div class=\"btn-group\" role=\"group\">\r\n                        <a ui-sref=\"news.new\" class=\"btn btn-primary\">Добавить новость</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 378:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _authService = __webpack_require__(380);

	var _authService2 = _interopRequireDefault(_authService);

	var _eventService = __webpack_require__(382);

	var _eventService2 = _interopRequireDefault(_eventService);

	var _firebaseService = __webpack_require__(384);

	var _firebaseService2 = _interopRequireDefault(_firebaseService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services', [_authService2.default.name, _eventService2.default.name, _firebaseService2.default.name]);

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(381);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.auth', []).service('AuthService', _controller2.default);

/***/ },

/***/ 381:
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

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(383);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.event', []).service('EventService', _controller2.default);

/***/ },

/***/ 383:
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
	    EventService.$inject = ["$firebaseArray", "$firebaseObject"];
	    function EventService($firebaseArray, $firebaseObject) {
	        'ngInject';

	        _classCallCheck(this, EventService);

	        var ref = firebase.database().ref('events').orderByChild('date');
	        this.list = $firebaseArray(ref);

	        this.$firebaseObject = $firebaseObject;
	    }

	    _createClass(EventService, [{
	        key: 'loadEvents',
	        value: function loadEvents() {
	            return this.list.$loaded();
	        }
	    }, {
	        key: 'getEvent',
	        value: function getEvent(key) {
	            var obj = this._getEventObj(key);
	            return obj.$loaded().then(function (result) {
	                var _ref;

	                var $id = result.$id;
	                var date = result.date;
	                var title = result.title;
	                var abstract = result.abstract;
	                var description = result.description;
	                var _result$tag = result.tag;
	                var tag = _result$tag === undefined ? 'event' : _result$tag;
	                var place = result.place;

	                return _ref = {
	                    id: $id,
	                    date: date,
	                    title: title,
	                    abstract: abstract,
	                    description: description,
	                    tag: tag
	                }, _defineProperty(_ref, 'date', new Date(date)), _defineProperty(_ref, 'place', place), _ref;
	            });
	        }
	    }, {
	        key: 'getDefaultEvent',
	        value: function getDefaultEvent() {
	            return {
	                tag: 'event'
	            };
	        }
	    }, {
	        key: 'saveEvent',
	        value: function saveEvent(key, data) {
	            var obj = this._getEventObj(key);
	            Object.assign(obj, data, {
	                editTimestamp: Date.now()
	            });
	            return obj.$save();
	        }
	    }, {
	        key: 'addEvent',
	        value: function addEvent(data) {
	            return this.list.$add(_extends({}, data, {
	                createTimestamp: Date.now()
	            }));
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

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(385);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.firebaseService', []).service('FirebaseService', _controller2.default);

/***/ },

/***/ 385:
/***/ function(module, exports) {

	'use strict';

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
	        key: 'getFirebase',
	        value: function getFirebase() {
	            console.log('firebase', window.firebase);
	            return window.firebase;
	        }
	    }]);

	    return FirebaseService;
	}();

	exports.default = FirebaseService;
	;

/***/ },

/***/ 386:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});