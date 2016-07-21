webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	__webpack_require__(302);

	var _angularUiRouter = __webpack_require__(303);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _firebase = __webpack_require__(304);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _angularfire = __webpack_require__(306);

	var _angularfire2 = _interopRequireDefault(_angularfire);

	var _angularUiBootstrap = __webpack_require__(308);

	var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);

	__webpack_require__(310);

	__webpack_require__(311);

	var _components = __webpack_require__(312);

	var _components2 = _interopRequireDefault(_components);

	var _directives = __webpack_require__(468);

	var _directives2 = _interopRequireDefault(_directives);

	var _services = __webpack_require__(469);

	var _services2 = _interopRequireDefault(_services);

	__webpack_require__(484);

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
/* 309 */,
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: collapse.js v3.3.6
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
	                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
	    this.transitioning = null

	    if (this.options.parent) {
	      this.$parent = this.getParent()
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
	    }

	    if (this.options.toggle) this.toggle()
	  }

	  Collapse.VERSION  = '3.3.6'

	  Collapse.TRANSITION_DURATION = 350

	  Collapse.DEFAULTS = {
	    toggle: true
	  }

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return

	    var activesData
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse')
	      if (activesData && activesData.transitioning) return
	    }

	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide')
	      activesData || actives.data('bs.collapse', null)
	    }

	    var dimension = this.dimension()

	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)
	      .attr('aria-expanded', true)

	    this.$trigger
	      .removeClass('collapsed')
	      .attr('aria-expanded', true)

	    this.transitioning = 1

	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
	  }

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return

	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    var dimension = this.dimension()

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse in')
	      .attr('aria-expanded', false)

	    this.$trigger
	      .addClass('collapsed')
	      .attr('aria-expanded', false)

	    this.transitioning = 1

	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse')
	        .trigger('hidden.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
	  }

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent)
	      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
	      .each($.proxy(function (i, element) {
	        var $element = $(element)
	        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
	      }, this))
	      .end()
	  }

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in')

	    $element.attr('aria-expanded', isOpen)
	    $trigger
	      .toggleClass('collapsed', !isOpen)
	      .attr('aria-expanded', isOpen)
	  }

	  function getTargetFromTrigger($trigger) {
	    var href
	    var target = $trigger.attr('data-target')
	      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

	    return $(target)
	  }


	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.collapse

	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse


	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }


	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this   = $(this)

	    if (!$this.attr('data-target')) e.preventDefault()

	    var $target = getTargetFromTrigger($this)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $this.data()

	    Plugin.call($target, option)
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: transition.js v3.3.6
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap')

	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }

	    return false // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }

	  $(function () {
	    $.support.transition = transitionEnd()

	    if (!$.support.transition) return

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _common = __webpack_require__(313);

	var _common2 = _interopRequireDefault(_common);

	var _pages = __webpack_require__(341);

	var _pages2 = _interopRequireDefault(_pages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components', [_common2.default.name, _pages2.default.name]);

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _navbar = __webpack_require__(314);

	var _navbar2 = _interopRequireDefault(_navbar);

	var _footer = __webpack_require__(319);

	var _footer2 = _interopRequireDefault(_footer);

	var _eventsList = __webpack_require__(323);

	var _eventsList2 = _interopRequireDefault(_eventsList);

	var _progressBar = __webpack_require__(328);

	var _progressBar2 = _interopRequireDefault(_progressBar);

	var _uploadFileButton = __webpack_require__(333);

	var _uploadFileButton2 = _interopRequireDefault(_uploadFileButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.common', [_navbar2.default.name, _footer2.default.name, _eventsList2.default.name, _progressBar2.default.name, _uploadFileButton2.default.name]);

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(315);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(316);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(317);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.navbar', []).component('navbar', {
	    template: _template2.default,
	    controller: _controller2.default
	});

/***/ },
/* 315 */
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
/* 316 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\"> <div class=container> <div class=navbar-header> <button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#navbar aria-expanded=false aria-controls=navbar> <span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span> </button> <a class=navbar-brand ui-sref=home>Бег в Пензе</a> </div> <div id=navbar class=\"navbar-collapse collapse\"> <ul class=\"nav navbar-nav\"> <li ng-class=\"{ active: $ctrl.state.news }\"><a ui-sref=news.list>НОВОСТИ</a></li> <li ng-class=\"{ active: $ctrl.state.calendar }\"><a ui-sref=calendar>КАЛЕНДАРЬ</a></li> <li ng-class=\"{ active: $ctrl.state.events }\"><a ui-sref=events.list>СОБЫТИЯ</a></li> <li ng-class=\"{ active: $ctrl.state.about }\"><a ui-sref=about>О ПРОЕКТЕ</a></li> </ul> <ul class=\"nav navbar-nav navbar-right\"> <li ng-if=!$ctrl.auth ng-class=\"{ active: $ctrl.state.login }\"> <a ui-sref=login> <i class=\"fa fa-sign-in\" aria-hidden=true></i> ВХОД </a> </li> <li ng-class=\"{ active: $ctrl.state.user }\" ng-if=$ctrl.auth> <a ui-sref=user> <i class=\"fa fa-user\" aria-hidden=true></i> </a> </li> <li ng-if=$ctrl.auth> <a href=# ng-click=$ctrl.logout()> <i class=\"fa fa-sign-out\" aria-hidden=true></i> ВЫХОД </a> </li> </ul> </div> </div> </nav>";

/***/ },
/* 317 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 318 */,
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(320);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(321);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(322);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.footer', []).component('footer', {
	    template: _template2.default,
	    controller: _controller2.default
	});

/***/ },
/* 320 */
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
/* 321 */
/***/ function(module, exports) {

	module.exports = "<div class=footer> <div class=container> <div class=row> <div class=\"col-md-3 col-sm-4 col-xs-6\"> <div class=\"\"> <p>Мы в социальных сетях:</p> <ul class=list-inline> <li> <a target=_blank href=https://vk.com/penzarun title=\"В контакте\" rel=nofollow> <i class=\"fa fa-2x fa-vk\" aria-hidden=true></i> </a> </li> </ul> </div> </div> <div class=\"col-md-3 col-sm-4 col-xs-6\"> <div class=footer__contacts> <p>Контакты:</p> <address class=footer__address> <abbr title=Телефон>Тел:</abbr> 8-909-319-63-54<br> <abbr title=\"Электронная почта\">Эл. почта:</abbr> <a href=mailto:#>info@penzarun.ru</a> </address> </div> </div> </div> <div class=row> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> <div class=footer__centerBlock> Бег в Пензе · Автор и разработчик <a href=https://vk.com/vikshv>Виктор&nbsp;Швецов</a> </div> </div> </div> <div class=row> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> <div class=footer__centerBlock> Style based on <a target=_blank href=http://bootswatch.com/superhero/ rel=nofollow>Bootswatch</a> · Icons from <a target=_blank href=http://fortawesome.github.io/Font-Awesome/ rel=nofollow>Font Awesome</a> · Backend from <a target=_blank href=https://console.firebase.google.com/project/project-5043437142388192252/overview rel=nofollow>Firebase</a> </div> </div> </div> <div class=row> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> <div class=footer__centerBlock> <a href=https://github.com/vikshv/penzarun>GitHub Project</a> · <a href=https://github.com/vikshv/penzarun/issues>Issues</a> </div> </div> </div> </div> </div>";

/***/ },
/* 322 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(324);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.eventsList', []).component('eventsList', _component2.default);

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(325);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(326);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(327);

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
/* 325 */
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
/* 326 */
/***/ function(module, exports) {

	module.exports = "<div class=eventsList> <div class=eventsList__event ng-repeat=\"event in $ctrl.events\"> <div class=event__title> <div class=event__date> {{ event.date | date: 'd MMMM yyyy' }} </div> <div class=\"well well-lg well--event\"> <h4><a ui-sref=\"events.card({ id: event.id })\"> {{ event.title }} </a></h4> <p>{{ event.abstract }}</p> <p>Дистанция: <span class=event__distances>{{ event.distances }}</span></p> </div> </div> </div> <div class=eventsList__empty ng-if=!$ctrl.events.length> <div class=\"alert alert-warning\"> <strong>{{ $ctrl.emptyListMessage || 'Нет данных' }}</strong> </div> </div> </div>";

/***/ },
/* 327 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(329);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.progressBar', []).component('progressBar', _component2.default);

/***/ },
/* 329 */
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
	        text: '@'
	    }
	};

/***/ },
/* 330 */
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
/* 331 */
/***/ function(module, exports) {

	module.exports = "<div class=spinerContainer> <i class=\"fa fa-circle-o-notch fa-spin fa-4x fa-fw\"></i><br><span>{{ $ctrl.text }}</span> </div>";

/***/ },
/* 332 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(334);

	var _component2 = _interopRequireDefault(_component);

	var _directives = __webpack_require__(338);

	var _directives2 = _interopRequireDefault(_directives);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.uploadFileButton', [_directives2.default.name]).component('uploadFileButton', _component2.default);

/***/ },
/* 334 */
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
	        uploadFile: '='
	    }
	};

/***/ },
/* 335 */
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
/* 336 */
/***/ function(module, exports) {

	module.exports = "<div class=uploadFileButton> <input type=file class=uploadFileButton__file file=$ctrl.uploadFile> <button class=\"btn btn-primary uploadFileButton__button\" type=button> <i class=\"fa fa-file-text-o\" aria-hidden=true></i> </button> </div>";

/***/ },
/* 337 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _file = __webpack_require__(339);

	var _file2 = _interopRequireDefault(_file);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.uploadFileButton.directives', [_file2.default.name]);

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _directive = __webpack_require__(340);

	var _directive2 = _interopRequireDefault(_directive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.uploadFileButton.directives.file', []).directive('file', function () {
	    return _directive2.default;
	});

/***/ },
/* 340 */
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
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _home = __webpack_require__(342);

	var _home2 = _interopRequireDefault(_home);

	var _news = __webpack_require__(374);

	var _news2 = _interopRequireDefault(_news);

	var _calendar = __webpack_require__(392);

	var _calendar2 = _interopRequireDefault(_calendar);

	var _events = __webpack_require__(406);

	var _events2 = _interopRequireDefault(_events);

	var _about = __webpack_require__(455);

	var _about2 = _interopRequireDefault(_about);

	var _login = __webpack_require__(459);

	var _login2 = _interopRequireDefault(_login);

	var _user = __webpack_require__(463);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages', [_home2.default.name, _news2.default.name, _calendar2.default.name, _events2.default.name, _about2.default.name, _login2.default.name, _user2.default.name]);

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(343);

	var _component2 = _interopRequireDefault(_component);

	var _components = __webpack_require__(347);

	var _components2 = _interopRequireDefault(_components);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.home', [_components2.default.name]).config(["$stateProvider", function ($stateProvider) {
	    'ngInject';

	    $stateProvider.state('home', {
	        url: '/home',
	        template: '<home></home>'
	    });
	}]).component('home', _component2.default);

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(344);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(345);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(346);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {}
	};

/***/ },
/* 344 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomePageController = function HomePageController() {
	    'ngInject';

	    _classCallCheck(this, HomePageController);
	};

	exports.default = HomePageController;
	;

/***/ },
/* 345 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--home\"> <jumbotron></jumbotron> <info></info> </div>";

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

	var _jumbotron = __webpack_require__(348);

	var _jumbotron2 = _interopRequireDefault(_jumbotron);

	var _info = __webpack_require__(353);

	var _info2 = _interopRequireDefault(_info);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.home.components', [_jumbotron2.default.name, _info2.default.name]);

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(349);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.home.components.jumbotron', []).component('jumbotron', _component2.default);

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(350);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(351);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(352);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {}
	};

/***/ },
/* 350 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var JumbotronController = function () {
	    JumbotronController.$inject = ["EventService"];
	    function JumbotronController(EventService) {
	        'ngInject';

	        _classCallCheck(this, JumbotronController);

	        this._loadEvent(EventService);
	    }

	    _createClass(JumbotronController, [{
	        key: '_loadEvent',
	        value: function _loadEvent(EventService) {
	            var _this = this;

	            var options = {
	                dateBegin: Date.now(),
	                limitToFirst: 1
	            };
	            this._startLoadProgress();
	            EventService.loadEvents(options).then(function (result) {
	                _this.event = result[0];
	            }).then(function () {
	                _this._stopLoadProgress();
	            }).catch(function (error) {
	                _this._stopLoadProgress();
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
	    }]);

	    return JumbotronController;
	}();

	exports.default = JumbotronController;
	;

/***/ },
/* 351 */
/***/ function(module, exports) {

	module.exports = "<div class=container> <div class=row> <div class=col-md-12> <div class=jumbotron> <div class=jumbotron__spinner ng-if=$ctrl.loadProgress> <i class=\"fa fa-circle-o-notch fa-spin fa-5x fa-fw\"></i> </div> <div ng-if=!$ctrl.loadProgress> <h1>{{ $ctrl.event.title }}</h1> <p> {{ $ctrl.event.date | date: 'EEEE, d MMMM yyyy' }}, {{ $ctrl.event.time }} </p> <p>{{ $ctrl.event.abstract }}</p> <p> <a class=\"btn btn-primary btn-lg\" ui-sref=\"events.card({ id: $ctrl.event.id })\">Подробнее</a> </p> </div> </div> </div> </div> <div></div></div>";

/***/ },
/* 352 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(354);

	var _component2 = _interopRequireDefault(_component);

	var _components = __webpack_require__(358);

	var _components2 = _interopRequireDefault(_components);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.home.components.info', [_components2.default.name]).component('info', _component2.default);

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(355);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(356);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(357);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default
	};

/***/ },
/* 355 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var InfoController = function InfoController() {
	    'ngInject';

	    _classCallCheck(this, InfoController);
	};

	exports.default = InfoController;
	;

/***/ },
/* 356 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container homeInfo\"> <div class=row> <div class=col-md-4> <info-news></info-news> </div> <div class=col-md-4> <info-event></info-event> </div> <div class=col-md-4> <info-update></info-update> </div> </div> </div>";

/***/ },
/* 357 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _infoNews = __webpack_require__(359);

	var _infoNews2 = _interopRequireDefault(_infoNews);

	var _infoEvent = __webpack_require__(364);

	var _infoEvent2 = _interopRequireDefault(_infoEvent);

	var _infoUpdate = __webpack_require__(369);

	var _infoUpdate2 = _interopRequireDefault(_infoUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.home.components.info.components', [_infoNews2.default.name, _infoEvent2.default.name, _infoUpdate2.default.name]);

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(360);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.home.components.info.components.news', []).component('infoNews', _component2.default);

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(361);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(362);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(363);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default
	};

/***/ },
/* 361 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NewsController = function () {
	    NewsController.$inject = ["NewsService"];
	    function NewsController(NewsService) {
	        'ngInject';

	        _classCallCheck(this, NewsController);

	        this._loadNews(NewsService);
	    }

	    _createClass(NewsController, [{
	        key: '_loadNews',
	        value: function _loadNews(NewsService) {
	            var _this = this;

	            var options = {
	                limitToLast: 3
	            };
	            this._startLoadProgress();
	            NewsService.loadNews(options).then(function (result) {
	                _this.news = result;
	            }).then(function () {
	                _this._stopLoadProgress();
	            }).catch(function (error) {
	                _this._stopLoadProgress();
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
	    }]);

	    return NewsController;
	}();

	exports.default = NewsController;
	;

/***/ },
/* 362 */
/***/ function(module, exports) {

	module.exports = "<div class=homeInfo__news> <h3>Новости</h3> <div class=list-group> <div class=\"list-group-item info__spiner\" ng-if=$ctrl.loadProgress> <i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i> </div> <div ng-if=!$ctrl.loadProgress> <div class=list-group-item ng-repeat=\"news in $ctrl.news\"> <h5 class=list-group-item-heading> {{ news.date | date: 'd.MM.yyyy' }} </h5> <h4 class=list-group-item-heading> <a ui-sref=\"news.card({ id: news.id })\">{{ news.title }}</a> </h4> <p class=list-group-item-text>{{ news.abstract }}</p> </div> <div class=list-group-item ng-if=!$ctrl.news.length> <p class=list-group-item-text>Новостей пока нет</p> </div> </div> </div> </div>";

/***/ },
/* 363 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(365);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.home.components.info.components.event', []).component('infoEvent', _component2.default);

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(366);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(367);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(368);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {}
	};

/***/ },
/* 366 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var InfoEventController = function () {
	    InfoEventController.$inject = ["EventService"];
	    function InfoEventController(EventService) {
	        'ngInject';

	        _classCallCheck(this, InfoEventController);

	        this._loadEvents(EventService);
	    }

	    _createClass(InfoEventController, [{
	        key: '_loadEvents',
	        value: function _loadEvents(EventService) {
	            var _this = this;

	            var options = {
	                dateBegin: Date.now(),
	                limitToFirst: 4
	            };
	            this._startLoadProgress();
	            EventService.loadEvents(options).then(function (result) {
	                _this.events = result.slice(1, options.limitToFirst);
	            }).then(function () {
	                _this._stopLoadProgress();
	            }).catch(function (error) {
	                _this._stopLoadProgress();
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
	    }]);

	    return InfoEventController;
	}();

	exports.default = InfoEventController;
	;

/***/ },
/* 367 */
/***/ function(module, exports) {

	module.exports = "<div class=homeInfo__events> <h3>Ближайшие события</h3> <div class=list-group> <div class=\"list-group-item info__spiner\" ng-if=$ctrl.loadProgress> <i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i> </div> <div class=list-group-item ng-repeat=\"event in $ctrl.events\"> <h5 class=list-group-item-heading> {{ event.date | date: 'd.MM.yyyy' }} </h5> <h4 class=list-group-item-heading> <a ui-sref=\"events.card({ id: event.id })\">{{ event.title }}</a> </h4> <p class=list-group-item-text>{{ event.abstract }}</p> </div> </div> </div>";

/***/ },
/* 368 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(370);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.home.components.info.components.update', []).component('infoUpdate', _component2.default);

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(371);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(372);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(373);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {}
	};

/***/ },
/* 371 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UpdatesController = function () {
	    UpdatesController.$inject = ["UpdateService"];
	    function UpdatesController(UpdateService) {
	        'ngInject';

	        _classCallCheck(this, UpdatesController);

	        this._loadUpdates(UpdateService);
	    }

	    _createClass(UpdatesController, [{
	        key: '_loadUpdates',
	        value: function _loadUpdates(UpdateService) {
	            var _this = this;

	            var options = {
	                limitToLast: 3
	            };
	            this._startLoadProgress();
	            UpdateService.loadUpdates(options).then(function (result) {
	                _this.updates = result;
	            }).then(function () {
	                _this._stopLoadProgress();
	            }).catch(function (error) {
	                _this._stopLoadProgress();
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
	    }]);

	    return UpdatesController;
	}();

	exports.default = UpdatesController;
	;

/***/ },
/* 372 */
/***/ function(module, exports) {

	module.exports = "<div class=homeInfo__updates> <h3>Обновления</h3> <div class=list-group> <div class=\"list-group-item info__spiner\" ng-if=$ctrl.loadProgress> <i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i> </div> <div ng-if=!$ctrl.loadProgress> <div class=list-group-item ng-repeat=\"update in $ctrl.updates\"> <h5 class=list-group-item-heading> {{ update.date | date: 'd.MM.yyyy' }} </h5> <h4 class=list-group-item-heading>{{ update.title }}</h4> <p class=list-group-item-text>{{ update.content }}</p> </div> <div class=list-group-item ng-if=!$ctrl.updates.length> <p class=list-group-item-text>Обновлений пока нет</p> </div> </div> </div> </div>";

/***/ },
/* 373 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	idStateController.$inject = ["$stateParams"];
	authResolve.$inject = ["AuthService"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(303);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _newsList = __webpack_require__(375);

	var _newsList2 = _interopRequireDefault(_newsList);

	var _newsCard = __webpack_require__(380);

	var _newsCard2 = _interopRequireDefault(_newsCard);

	var _newsForm = __webpack_require__(387);

	var _newsForm2 = _interopRequireDefault(_newsForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.news', [_angularUiRouter2.default, _newsList2.default.name, _newsCard2.default.name, _newsForm2.default.name]).config(["$stateProvider", function ($stateProvider) {
	    'ngInject';

	    $stateProvider.state('news', {
	        abstract: true,
	        url: '/news',
	        template: '<ui-view />'
	    }).state('news.list', {
	        url: '/list',
	        template: '<news-list-page></news-list-page>'
	    }).state('news.card', {
	        url: '/card/:id',
	        template: '<news-card-page id="$ctrl.id"></news-card-page>',
	        controller: idStateController,
	        controllerAs: '$ctrl'
	    }).state('news.new', {
	        url: '/new',
	        template: '<news-form-page></news-form-page>',
	        resolve: {
	            authResolve: authResolve
	        }
	    }).state('news.edit', {
	        url: '/edit/:id',
	        template: '<news-form-page id="$ctrl.id"></news-form-page>',
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

	exports.default = _angular2.default.module('app.components.pages.news.list', []).component('newsListPage', _component2.default);

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
	    controller: _controller2.default
	};

/***/ },
/* 377 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NewsListPageController = function () {
	    NewsListPageController.$inject = ["NewsService"];
	    function NewsListPageController(NewsService) {
	        'ngInject';

	        _classCallCheck(this, NewsListPageController);

	        this._loadNews(NewsService);
	    }

	    _createClass(NewsListPageController, [{
	        key: '_loadNews',
	        value: function _loadNews(NewsService) {
	            var _this = this;

	            this._startLoadProgress();
	            NewsService.loadNews().then(function (result) {
	                _this.news = result;
	            }).then(function () {
	                _this._stopLoadProgress();
	            }).catch(function (error) {
	                _this._stopLoadProgress();
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
	    }]);

	    return NewsListPageController;
	}();

	exports.default = NewsListPageController;
	;

/***/ },
/* 378 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка новостей...\" ng-if=$ctrl.loadProgress></progress-bar> <div class=\"page page--newsList\" ng-if=!$ctrl.loadProgress> <div class=container> <div class=row> <div class=\"col-md-4 col-sm-6\" ng-repeat=\"news in $ctrl.news\"> <div class=thumbnail> <div class=caption> <h4><a ui-sref=\"news.card({ id: news.id })\">{{ news.title }}</a></h4> <p>{{ news.abstract }}</p> <p class=news__date>Дата: {{ news.date | date: 'd MMMM yyyy' }}</p> </div> </div> </div> </div> <div> </div></div></div>";

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

	exports.default = _angular2.default.module('app.components.pages.news.card', [_angularSanitize2.default]).component('newsCardPage', _component2.default);

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
	        id: '<'
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

	var NewsCardPageController = function () {
	    NewsCardPageController.$inject = ["$sce", "NewsService"];
	    function NewsCardPageController($sce, NewsService) {
	        'ngInject';

	        _classCallCheck(this, NewsCardPageController);

	        this.$sce = $sce;

	        this._loadNews(NewsService);
	    }

	    _createClass(NewsCardPageController, [{
	        key: 'getContentHtml',
	        value: function getContentHtml() {
	            return this.$sce.trustAsHtml(this.news.content);
	        }
	    }, {
	        key: '_loadNews',
	        value: function _loadNews(NewsService) {
	            var _this = this;

	            this._startLoadProgress();
	            NewsService.getNewsById(this.id).then(function (result) {
	                _this.news = result;
	            }).then(function () {
	                _this._stopLoadProgress();
	            }).catch(function (error) {
	                _this._stopLoadProgress();
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
	    }]);

	    return NewsCardPageController;
	}();

	exports.default = NewsCardPageController;
	;

/***/ },
/* 385 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=Загрузка... ng-if=$ctrl.loadProgress></progress-bar> <div class=\"page page--newsCard\" ng-if=!$ctrl.loadProgress> <div class=container> <div class=row> <div class=col-md-12> <div class=\"page-header news__header\"> <h4><span class=\"label label-default\">{{ $ctrl.news.date | date: 'd MMMM yyyy' }}</span></h4> <h3>{{ $ctrl.news.title }}</h3> <div class=row> <div class=\"col-md-10 col-sm-12\"> <p>{{ $ctrl.news.abstract }}</p> </div> </div> </div> </div> </div> <div class=row> <div class=col-md-12> <div class=\"well well-sm well--news\"> <div class=row> <div class=\"col-md-10 col-sm-12\"> <div class=news__content ng-bind-html=$ctrl.getContentHtml()></div> </div> </div> </div> </div> </div> <div> </div></div></div>";

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

	exports.default = _angular2.default.module('app.components.pages.news.form', []).component('newsFormPage', _component2.default);

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
	        id: '<'
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

	var NewsFormPageController = function () {
	    NewsFormPageController.$inject = ["$q", "$scope", "$state", "NewsService"];
	    function NewsFormPageController($q, $scope, $state, NewsService) {
	        'ngInject';

	        _classCallCheck(this, NewsFormPageController);

	        this.$q = $q;
	        this.$scope = $scope;
	        this.$state = $state;
	        this.NewsService = NewsService;

	        this._initNews();
	        this.ckeditorOptions = this._initCkeditorOptions();
	    }

	    _createClass(NewsFormPageController, [{
	        key: '_initCkeditorOptions',
	        value: function _initCkeditorOptions() {
	            return {
	                language: 'ru',
	                allowedContent: true,
	                entities: false,
	                height: 300
	            };
	        }
	    }, {
	        key: '_initNews',
	        value: function _initNews() {
	            var _this = this;

	            return this.$q.resolve(this.id).then(function (id) {
	                var result = void 0;
	                if (id) {
	                    _this._startLoadProgress();
	                    result = _this.NewsService.getNewsById(id);
	                } else {
	                    result = {};
	                }
	                return result;
	            }).then(function (result) {
	                _this._stopLoadProgress();
	                _this.news = result;
	            }).catch(function (error) {
	                _this._stopLoadProgress();
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
	        key: 'isHasError',
	        value: function isHasError(attrName) {
	            var item = this.$scope.news[attrName];
	            return item.$invalid && item.$dirty && item.$touched;
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this2 = this;

	            var _news = this.news;
	            var title = _news.title;
	            var _news$abstract = _news.abstract;
	            var abstract = _news$abstract === undefined ? '' : _news$abstract;
	            var _news$content = _news.content;
	            var content = _news$content === undefined ? '' : _news$content;


	            this._startSaveProgress();

	            this._saveNews({
	                title: title,
	                abstract: abstract,
	                content: content
	            }).then(function (id) {
	                _this2._gotoNews(id);
	            }).catch(function (error) {
	                _this2._stopSaveProgress();
	                throw Error(error);
	            });
	        }
	    }, {
	        key: 'onClickRemoveButton',
	        value: function onClickRemoveButton() {
	            // TODO: edd confirm dialog
	            this._removeNews();
	        }
	    }, {
	        key: 'onClickCancelButton',
	        value: function onClickCancelButton() {
	            this._gotoNewsList();
	        }
	    }, {
	        key: '_saveNews',
	        value: function _saveNews(data) {
	            var _this3 = this;

	            return this.$q.resolve(this.id).then(function (id) {
	                var result = void 0;
	                if (id) {
	                    result = _this3.NewsService.saveNews(id, data);
	                } else {
	                    result = _this3.NewsService.addNews(data);
	                }
	                return result;
	            });
	        }
	    }, {
	        key: '_removeNews',
	        value: function _removeNews() {
	            var _this4 = this;

	            this._startRemoveProgress();
	            this.NewsService.removeNews(this.id).then(function () {
	                _this4._gotoNewsList();
	            }).catch(function (error) {
	                _this4._stopRemoveProgress();
	                throw Error(error);
	            });
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
	        key: '_setReadOnlyCKEDITOR',
	        value: function _setReadOnlyCKEDITOR(val) {
	            CKEDITOR.instances.newsContent.setReadOnly(val);
	        }
	    }, {
	        key: '_gotoNews',
	        value: function _gotoNews(id) {
	            this.$state.go('news.card', { id: id });
	        }
	    }, {
	        key: '_gotoNewsList',
	        value: function _gotoNewsList() {
	            this.$state.go('news.list');
	        }
	    }]);

	    return NewsFormPageController;
	}();

	exports.default = NewsFormPageController;
	;

/***/ },
/* 390 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка новости...\" ng-if=$ctrl.loadProgress></progress-bar> <div class=\"page page--newsForm\" ng-hide=$ctrl.loadProgress> <div class=container> <div class=row> <div class=col-md-12> <div class=\"well well--form\"> <form name=news class=\"\" ng-submit=$ctrl.submit()> <fieldset> <legend>{{ $ctrl.id ? 'Редактирование новости' : 'Добавление новости' }}</legend> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('title') }\"> <label for=title class=control-label>Заголовок</label> <input type=text class=form-control id=title name=title required ng-model=$ctrl.news.title ng-disabled=$ctrl.disabledForm autocomplete=off> <div ng-messages=news.title.$error ng-if=\"$ctrl.isHasError('title')\" role=alert> <div ng-message=required class=form__message--error>Введите заголовок</div> </div> </div> <div class=form-group> <label for=abstract class=control-label>Краткое описание</label> <textarea class=form-control id=abstract name=abstract rows=2 required ng-model=$ctrl.news.abstract ng-disabled=$ctrl.disabledForm autocomplete=off></textarea> <div ng-messages=news.abstract.$error ng-if=\"$ctrl.isHasError('abstract')\" role=alert> <div ng-message=required class=form__message--error>Введите краткое описание</div> </div> </div> <div class=form-group> <label for=newsContent class=control-label>Содержание</label> <div ckeditor=$ctrl.ckeditorOptions id=newsContent ng-model=$ctrl.news.content></div> </div> <div class=form-group> <button type=submit class=\"btn btn-primary\" ng-disabled=\"news.$invalid || $ctrl.disabledForm\"> <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=$ctrl.saveProgress></i> Сохранить </button> <button type=button class=\"btn btn-danger\" ng-if=$ctrl.id ng-click=$ctrl.onClickRemoveButton() ng-disabled=$ctrl.disabledForm> <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=$ctrl.removeProgress></i> Удалить </button> <button type=button class=\"btn btn-default\" ng-click=$ctrl.onClickCancelButton() ng-disabled=$ctrl.disabledForm>Отмена</button> </div> </fieldset> </form> </div> </div> </div> </div> </div>";

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

	var _angularUiRouter = __webpack_require__(303);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _components = __webpack_require__(393);

	var _components2 = _interopRequireDefault(_components);

	var _component = __webpack_require__(402);

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
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _calendarDatepicker = __webpack_require__(394);

	var _calendarDatepicker2 = _interopRequireDefault(_calendarDatepicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.calendar.components', [_calendarDatepicker2.default.name]);

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(395);

	var _component2 = _interopRequireDefault(_component);

	var _templates = __webpack_require__(399);

	var _templates2 = _interopRequireDefault(_templates);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.calendar.components.calendarDatepicker', [_templates2.default.name]).component('calendarDatepicker', _component2.default);

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(396);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(397);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(398);

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
/* 396 */
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
/* 397 */
/***/ function(module, exports) {

	module.exports = "<div class=calendarDatepicker> <uib-datepicker class=\"well well-sm\" ng-model=$ctrl.date datepicker-options=$ctrl.options template-url=calendarDatepicker/templates/datepicker.html></uib-datepicker> </div>";

/***/ },
/* 398 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _datepicker = __webpack_require__(400);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _day = __webpack_require__(401);

	var _day2 = _interopRequireDefault(_day);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.calendar.components.calendarDatepicker.templates', []).run(["$templateCache", function ($templateCache) {
	    'ngInject';

	    $templateCache.put('calendarDatepicker/templates/datepicker.html', _datepicker2.default);
	    $templateCache.put('calendarDatepicker/templates/day.html', _day2.default);
	}]);

/***/ },
/* 400 */
/***/ function(module, exports) {

	module.exports = "<div class=uib-datepicker ng-switch=datepickerMode role=application ng-keydown=keydown($event)> <uib-daypicker ng-switch-when=day tabindex=0 template-url=calendarDatepicker/templates/day.html></uib-daypicker> <uib-monthpicker ng-switch-when=month tabindex=0></uib-monthpicker> <uib-yearpicker ng-switch-when=year tabindex=0></uib-yearpicker> </div>";

/***/ },
/* 401 */
/***/ function(module, exports) {

	module.exports = "<table class=uib-daypicker role=grid aria-labelledby={{::uniqueId}}-title aria-activedescendant={{activeDateId}}> <thead> <tr> <th><button type=button class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=move(-1) tabindex=-1><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th> <th colspan=\"{{::5 + showWeeks}}\"><button id={{::uniqueId}}-title role=heading aria-live=assertive aria-atomic=true type=button class=\"btn btn-default btn-sm uib-title\" ng-click=toggleMode() ng-disabled=\"datepickerMode === maxMode\" tabindex=-1><strong>{{title}}</strong></button></th> <th><button type=button class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=move(1) tabindex=-1><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th> </tr> <tr> <th ng-if=showWeeks class=text-center></th> <th ng-repeat=\"label in ::labels track by $index\" class=text-center><span aria-label={{::label.full}}>{{::label.abbr}}</span></th> </tr> </thead> <tbody> <tr class=uib-weeks ng-repeat=\"row in rows track by $index\"> <td ng-if=showWeeks class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td> <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=gridcell id={{::dt.uid}} ng-class=::dt.customClass> <button type=button class=\"btn btn-default btn-sm\" uib-is-class=\"\r\n            'btn-primary' for selectedDt,\r\n            'active' for activeDt\r\n            on dt\" ng-click=select(dt.date) ng-disabled=::dt.disabled tabindex=-1><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button> </td> </tr> </tbody> </table>";

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(403);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(404);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(405);

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
/* 403 */
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
/* 404 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--calendar\"> <div class=container> <div class=row> <div class=col-md-12> <div class=pageCalendar__nav> <ul class=\"nav nav-pills\"> <li role=presentation ng-class=\"{ active: $ctrl.filterIs('events') }\"> <a ui-sref=\"calendar($ctrl.getSrefOptions('events'))\">СОБЫТИЯ</a> </li> <li role=presentation ng-class=\"{ active: $ctrl.filterIs('probegs') }\"> <a ui-sref=\"calendar($ctrl.getSrefOptions('probegs'))\">ПРОБЕГИ</a> </li> <li role=presentation ng-class=\"{ active: $ctrl.filterIs('marathons') }\"> <a ui-sref=\"calendar($ctrl.getSrefOptions('marathons'))\">МАРАФОНЫ</a> </li> <li role=presentation ng-class=\"{ active: $ctrl.filterIs('trainings') }\"> <a ui-sref=\"calendar($ctrl.getSrefOptions('trainings'))\">ТРЕНИРОВКИ</a> </li> </ul> </div> </div> </div> <div class=row> <div class=col-md-10> <div class=pageCalendar__datepickers> <div class=\"well well-lg well--datepickers\"> <calendar-datepicker date=$ctrl.dateBegin options=$ctrl.datepickerOptions on-change=$ctrl.onChangeDateBegin(date)></calendar-datepicker> <calendar-datepicker date=$ctrl.dateEnd options=$ctrl.datepickerOptions on-change=$ctrl.onChangeDateEnd(date)></calendar-datepicker> </div> </div> </div> </div> <div class=row> <div class=\"col-md-10 col-sm-12 col-xs-12\"> <div class=pageCalendar__eventList> <progress-bar text=\"Загрузка списка событий...\" ng-if=$ctrl.loadProgress></progress-bar> <events-list events=$ctrl.getEvents() empty-list-message=\"Ничего не найдено\" ng-if=!$ctrl.loadProgress></events-list> </div> </div> </div> </div> </div>";

/***/ },
/* 405 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	authResolve.$inject = ["AuthService"];
	idStateController.$inject = ["$stateParams"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(303);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _eventFormPage = __webpack_require__(407);

	var _eventFormPage2 = _interopRequireDefault(_eventFormPage);

	var _eventCardPage = __webpack_require__(415);

	var _eventCardPage2 = _interopRequireDefault(_eventCardPage);

	var _eventsListPage = __webpack_require__(435);

	var _eventsListPage2 = _interopRequireDefault(_eventsListPage);

	var _eventStartlistPage = __webpack_require__(445);

	var _eventStartlistPage2 = _interopRequireDefault(_eventStartlistPage);

	var _eventRegisterPage = __webpack_require__(450);

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
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularMessages = __webpack_require__(408);

	var _angularMessages2 = _interopRequireDefault(_angularMessages);

	__webpack_require__(410);

	var _component = __webpack_require__(411);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.form', [_angularMessages2.default, 'ckeditor']).component('eventFormPage', _component2.default);

/***/ },
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(412);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(413);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(414);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        id: '<'
	    }
	};

/***/ },
/* 412 */
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

	        this.dateFormat = 'EEEE, d MMMM yyyy';
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
/* 413 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка события...\" ng-if=$ctrl.loadProgress></progress-bar> <div class=\"page page--eventForm\" ng-hide=$ctrl.loadProgress> <div class=container> <div class=row> <div class=col-md-12> <div class=\"well well--form\"> <form name=event class=form-horizontal ng-submit=$ctrl.submit()> <fieldset> <legend>{{ $ctrl.id ? 'Редактирование события' : 'Добавление нового события' }}</legend> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('title') }\"> <label for=title class=\"col-md-2 control-label\">Заголовок</label> <div class=col-md-8> <input type=text class=form-control id=title name=title required ng-model=$ctrl.event.title ng-disabled=$ctrl.disabledForm autocomplete=off> <div ng-messages=event.title.$error ng-if=\"$ctrl.isHasError('title')\" role=alert> <div ng-message=required class=form__message--error>Введите заголовок</div> </div> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('date') }\"> <label for=date class=\"col-md-2 control-label\">Дата события</label> <div class=col-md-4> <div class=input-group> <input type=text id=date name=date required class=form-control autocomplete=off uib-datepicker-popup=\"{{ $ctrl.dateFormat }}\" ng-model=$ctrl.event.date is-open=$ctrl.datePopupIsOpen show-button-bar=false on-open-focus=true> <span class=input-group-btn> <button class=\"btn btn-primary\" type=button ng-click=$ctrl.openDatePopup()> <i class=\"fa fa-calendar\" aria-hidden=true></i> </button> </span> </div> <div ng-messages=event.date.$error ng-if=\"$ctrl.isHasError('date')\" role=alert> <div ng-message=required class=form__message--error>Введите дату события</div> </div> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('time') }\"> <label for=time class=\"col-md-2 control-label\">Время начала</label> <div class=col-md-4> <input type=text class=form-control id=time name=time required placeholder=11:00 ng-model=$ctrl.event.time ng-disabled=$ctrl.disabledForm autocomplete=off> <div ng-messages=event.time.$error ng-if=\"$ctrl.isHasError('time')\" role=alert> <div ng-message=required class=form__message--error>Введите время начала события</div> </div> </div> </div> <div class=form-group> <label for=place class=\"col-md-2 control-label\">Место проведения</label> <div class=col-md-4> <input type=text class=form-control id=place name=place placeholder=\"г. Пенза, Олимпийская аллея\" ng-model=$ctrl.event.place ng-disabled=$ctrl.disabledForm autocomplete=off> </div> </div> <div class=form-group> <label for=distances class=\"col-md-2 control-label\">Дистанции</label> <div class=col-md-4> <input type=text class=form-control id=distances name=distances placeholder=\"1 км, 3 км, 5 км, 10 км, полумарафон, марафон\" ng-model=$ctrl.event.distances ng-disabled=$ctrl.disabledForm autocomplete=off> </div> </div> <div class=form-group> <label for=tag class=\"col-md-2 control-label\">Теги</label> <div class=col-md-8> <label class=radio-inline> <input type=radio name=tag id=inlineRadio1 value=event ng-model=$ctrl.event.tag> <span class=\"label label-default label--md\">Событие</span> </label> <label class=radio-inline> <input type=radio name=tag id=inlineRadio1 value=probeg ng-model=$ctrl.event.tag> <span class=\"label label-warning label--md\">Пробег</span> </label> <label class=radio-inline> <input type=radio name=tag id=inlineRadio2 value=marathon ng-model=$ctrl.event.tag> <span class=\"label label-danger label--md\">Марафон</span> </label> <label class=radio-inline> <input type=radio name=tag id=inlineRadio3 value=training ng-model=$ctrl.event.tag> <span class=\"label label-success label--md\">Тренировка</span> </label> </div> </div> <div class=form-group></div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('master') }\"> <label for=master class=\"col-md-2 control-label\">Организаторы</label> <div class=col-md-8> <input type=text class=form-control id=master name=master placeholder=\"Сообщество &ldquo;Бег в Пензе&rdquo;\" required ng-model=$ctrl.event.master ng-disabled=$ctrl.disabledForm> <div ng-messages=event.master.$error ng-if=\"$ctrl.isHasError('master')\" role=alert> <div ng-message=required class=form__message--error>Укажите организаторов</div> </div> </div> </div> <div class=form-group> <label for=masterUrl class=\"col-md-2 control-label\">Сайт организаторов</label> <div class=col-md-4> <div class=input-group> <span class=input-group-addon>www</span> <input type=text class=form-control id=masterUrl name=masterUrl ng-model=$ctrl.event.masterUrl ng-disabled=$ctrl.disabledForm> </div> </div> </div> <div class=form-group> <label for=masterPerson class=\"col-md-2 control-label\">Контактное лицо</label> <div class=col-md-4> <input type=text class=form-control id=masterPerson name=masterPerson ng-model=$ctrl.event.masterPerson ng-disabled=$ctrl.disabledForm> </div> </div> <div class=form-group> <label for=masterPhone class=\"col-md-2 control-label\">Телефон</label> <div class=col-md-4> <input type=text class=form-control id=masterPhone name=masterPhone ng-model=$ctrl.event.masterPhone ng-disabled=$ctrl.disabledForm> </div> </div> <div class=form-group> <label for=masterEmail class=\"col-md-2 control-label\">Адрес эл. почты</label> <div class=col-md-4> <input type=text class=form-control id=masterEmail name=masterEmail placeholder=info@penzarun.ru ng-model=$ctrl.event.masterEmail ng-disabled=$ctrl.disabledForm> </div> </div> <div class=form-group></div> <div class=form-group> <label for=abstract class=\"col-md-2 control-label\">Краткое описание</label> <div class=col-md-8> <textarea class=form-control id=abstract name=abstract rows=2 ng-model=$ctrl.event.abstract ng-disabled=$ctrl.disabledForm autocomplete=off></textarea> </div> </div> <div class=form-group> <label for=description class=\"col-md-2 control-label\">Подробное описание</label> <div class=col-md-8> <div ckeditor=$ctrl.ckeditorOptions id=eventDescription ng-model=$ctrl.event.description></div> </div> </div> <div class=form-group> <label for=description class=\"col-md-2 control-label\">Положение</label> <div class=col-md-8> <div class=input-group> <input type=text class=form-control readonly=readonly ng-value=$ctrl.provisionFile.name> <span class=input-group-btn> <upload-file-button upload-file=$ctrl.provisionFile></upload-file-button> </span> <span class=input-group-btn> <button class=\"btn btn-danger\" type=button ng-click=$ctrl.removeProvision() ng-disabled=!$ctrl.provisionFile.name> <i class=\"fa fa-times\" aria-hidden=true></i> </button> </span> </div> </div> </div> <div class=form-group></div> <div class=form-group> <div class=\"col-md-8 col-md-offset-2\"> <button type=submit class=\"btn btn-primary\" ng-disabled=\"event.$invalid || $ctrl.disabledForm\"> <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=$ctrl.saveProgress></i> Сохранить </button> <button type=button class=\"btn btn-danger\" ng-if=$ctrl.id ng-click=$ctrl.onClickRemoveButton() ng-disabled=$ctrl.disabledForm> <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=$ctrl.removeProgress></i> Удалить </button> <button type=button class=\"btn btn-default\" ng-click=$ctrl.onClickCancelButton() ng-disabled=$ctrl.disabledForm>Отмена</button> </div> </div> </fieldset> </form> </div> </div> </div> </div> </div>";

/***/ },
/* 414 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(416);

	var _component2 = _interopRequireDefault(_component);

	var _eventCardHeader = __webpack_require__(420);

	var _eventCardHeader2 = _interopRequireDefault(_eventCardHeader);

	var _eventCardBody = __webpack_require__(425);

	var _eventCardBody2 = _interopRequireDefault(_eventCardBody);

	var _eventCardFooter = __webpack_require__(430);

	var _eventCardFooter2 = _interopRequireDefault(_eventCardFooter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.card', [_eventCardHeader2.default.name, _eventCardBody2.default.name, _eventCardFooter2.default.name]).component('eventCardPage', _component2.default);

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(417);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(418);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(419);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        id: '<'
	    }
	};

/***/ },
/* 417 */
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
/* 418 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка события...\" ng-if=$ctrl.loadProgress></progress-bar> <div class=\"page page--eventCard eventCard--{{ $ctrl.event.tag }}\" ng-if=!$ctrl.loadProgress> <event-card-header event=$ctrl.event></event-card-header> <event-card-body event=$ctrl.event provision-file-url=$ctrl.provisionFileUrl provision-file-size=$ctrl.provisionFileSize startlist-length=$ctrl.startlistLength></event-card-body> <event-card-footer event-id=$ctrl.event.id></event-card-footer> </div>";

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

	var _component = __webpack_require__(421);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.card.header', []).component('eventCardHeader', _component2.default);

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
	    controller: _controller2.default,
	    bindings: {
	        event: '<'
	    }
	};

/***/ },
/* 422 */
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
/* 423 */
/***/ function(module, exports) {

	module.exports = "<div class=eventCard__header> <div class=container> <div class=row> <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12\"> <div class=eventCard__jumbotron> <div class=eventCard__title> {{ $ctrl.event.title }} </div> <div class=eventCard__abstract>{{ $ctrl.event.abstract }}</div> </div> </div> </div> </div> <div class=eventHeader__info> <div class=info__title> <div class=container> <div class=row> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"> Дата и время события </div> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"> Место проведения </div> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"> Организаторы </div> </div> </div> </div> <div class=info__division></div> <div class=info__content> <div class=container> <div class=row> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 col--date\"> <h4 class=content__item> {{ $ctrl.event.date | date: 'EEEE, d MMMM yyyy' }}, {{ $ctrl.event.time }} </h4> </div> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 col--place\"> <h4 class=content__item> {{ $ctrl.event.place }} </h4> </div> <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 col--master\"> <h4 class=content__item> {{ $ctrl.event.master }} </h4> </div> </div> </div> </div> </div> </div>";

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

	var _angularSanitize = __webpack_require__(381);

	var _angularSanitize2 = _interopRequireDefault(_angularSanitize);

	var _component = __webpack_require__(426);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.card.body', [_angularSanitize2.default]).component('eventCardBody', _component2.default);

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(427);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(428);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(429);

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
/* 427 */
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
/* 428 */
/***/ function(module, exports) {

	module.exports = "<div class=eventCard__body> <div class=container> <div class=row> <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12 leftBlock\"> <div class=eventCard__description ng-if=$ctrl.event.description ng-bind-html=$ctrl.getDescriptionHtml()></div> <div class=\"verticalLine hidden-sm hidden-xs\"></div> </div> <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12 rightBlock\"> <div class=\"rightBlock__margin--top hidden-lg hidden-md\"></div> <div class=rightBlock__buttons> <a ng-href=\"{{ $ctrl.provisionFileUrl }}\" class=\"btn btn-default btn-lg btn-block btn--overflow\" ng-if=$ctrl.provisionFileUrl> <i class=\"fa fa-download\" aria-hidden=true></i> Положение ({{ $ctrl.getFileSize() }}) </a> <a class=\"btn btn-info btn-lg btn-block btn--overflow\" ng-if=$ctrl.startlistLength ui-sref=\"events.startlist({ id: $ctrl.event.id })\"> Список участников ({{ $ctrl.startlistLength }}) </a> </div> <div class=rightBlock__address> <h4 class=address__title>Контакты</h4> <address> <div> <strong>{{ $ctrl.event.master }}</strong> </div> <div ng-if=$ctrl.event.masterUrl> <abbr title=\"Адрес в сети Интернет\">www:</abbr> <a target=_blank rel=nofollow ng-href=\"http://www.{{ $ctrl.event.masterUrl }}\">{{ $ctrl.event.masterUrl }}</a> </div> </address> <address ng-if=$ctrl.event.masterPerson> <div> <strong>{{ $ctrl.event.masterPerson }}</strong> </div> <div ng-if=$ctrl.event.masterPhone> <abbr title=Телефон>Тел:</abbr> {{ $ctrl.event.masterPhone }} </div> <div ng-if=$ctrl.event.masterEmail> <abbr title=\"Электронная почта\">Эл. почта:</abbr> <a href=mailto:#>{{ $ctrl.event.masterEmail }}</a> </div> </address> </div> </div> </div> </div> </div>";

/***/ },
/* 429 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(431);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.event.card.footer', []).component('eventCardFooter', _component2.default);

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(432);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(433);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(434);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        eventId: '<'
	    }
	};

/***/ },
/* 432 */
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
/* 433 */
/***/ function(module, exports) {

	module.exports = "<div class=eventCard__footer> <div class=container> <div class=row> <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12\"> <div class=btn-toolbar role=toolbar> <div class=btn-group role=group> <a class=\"btn btn-lg btn-primary\" ui-sref=\"events.register({ id: $ctrl.eventId })\" ng-if=$ctrl.isAuth()>Регистрация</a> </div> </div> </div> </div> </div> </div>";

/***/ },
/* 434 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(436);

	var _component2 = _interopRequireDefault(_component);

	var _filter = __webpack_require__(440);

	var _filter2 = _interopRequireDefault(_filter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.list', [_filter2.default.name]).component('eventsListPage', _component2.default);

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(437);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(438);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(439);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default
	};

/***/ },
/* 437 */
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
/* 438 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка списка событий...\" ng-if=$ctrl.progress></progress-bar> <div class=\"page page--eventsList\"> <div class=container ng-if=!$ctrl.progress> <div class=row> <div class=\"col-md-2 col-sm-3 col-xs-12\"> <events-list-filter handlers=$ctrl.filterHandlers></events-list-filter> </div> <div class=\"col-md-10 col-sm-9 col-xs-12\"> <events-list events=$ctrl.filtredEvents></events-list> </div> </div> </div> </div>";

/***/ },
/* 439 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(441);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.list.filter', []).component('eventsListFilter', _component2.default);

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(442);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(443);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(444);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        handlers: '<'
	    }
	};

/***/ },
/* 442 */
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
/* 443 */
/***/ function(module, exports) {

	module.exports = "<div class=eventsFilter> <div class=\"panel panel-primary\"> <div class=panel-heading> <h3 class=panel-title>Фильтр</h3> </div> <div class=panel-body> <div class=eventsFilter__block> <div class=checkbox> <label class=label--filter> <input type=checkbox value=probeg ng-click=$ctrl.onClickTag() ng-model=$ctrl.filter.probeg> Пробеги </label> </div> <div class=checkbox> <label class=label--filter> <input type=checkbox value=marathon ng-click=$ctrl.onClickTag() ng-model=$ctrl.filter.marathon> Марафоны </label> </div> <div class=checkbox> <label class=label--filter> <input type=checkbox value=training ng-click=$ctrl.onClickTag() ng-model=$ctrl.filter.training> Тренировки </label> </div> </div> </div> <div class=panel-footer ng-if=$ctrl.isActive()> <button type=button class=\"btn btn-block btn-default\" ng-click=$ctrl.resetFilter()>Очистить</button> </div> </div> </div>";

/***/ },
/* 444 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _component = __webpack_require__(446);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.startlist', []).component('eventStartlistPage', _component2.default);

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(447);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(448);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(449);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default
	};

/***/ },
/* 447 */
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
/* 448 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка списка участников...\" ng-if=$ctrl.progress></progress-bar> <div class=\"page page--eventStartlist\"> <div class=container ng-if=!$ctrl.progress> <div class=row> <div class=col-md-12> Здесь будет список участников </div> </div> </div> </div>";

/***/ },
/* 449 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularMessages = __webpack_require__(408);

	var _angularMessages2 = _interopRequireDefault(_angularMessages);

	var _component = __webpack_require__(451);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.components.pages.events.register', [_angularMessages2.default]).component('eventRegisterPage', _component2.default);

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(452);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(453);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(454);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default,
	    bindings: {
	        id: '<'
	    }
	};

/***/ },
/* 452 */
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

	        this._initMember();
	        this._initEvent(EventService);
	    }

	    _createClass(EventRegisterPageController, [{
	        key: '_initEvent',
	        value: function _initEvent(EventService) {
	            var _this = this;

	            this._startProgress();
	            EventService.getEvent(this.id).then(function (event) {
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
/* 453 */
/***/ function(module, exports) {

	module.exports = "<progress-bar text=\"Загрузка информации о событии...\" ng-if=$ctrl.progress></progress-bar> <div class=\"page page--eventRegister\"> <div class=container ng-hide=$ctrl.progress> <div class=row> <div class=col-md-12> <div class=\"well well--form\"> <form name=member class=form-horizontal ng-submit=$ctrl.submit()> <fieldset> <legend>Регистрация</legend> <div class=form-group> <label for=place class=\"col-md-2 control-label\">Событие</label> <div class=col-md-8> <p class=\"form-control-static form-control-static--event\"> {{ $ctrl.event.title }} </p> </div> </div> <div class=form-group> <label for=place class=\"col-md-2 control-label\">Дата и время</label> <div class=col-md-4> <p class=\"form-control-static form-control-static--event\"> {{ $ctrl.event.date | date: 'EEEE, d MMMM yyyy' }}, {{ $ctrl.event.time }} </p> </div> </div> <div class=form-group> <label for=place class=\"col-md-2 control-label\">Место проведения</label> <div class=col-md-4> <p class=\"form-control-static form-control-static--event\"> {{ $ctrl.event.place }} </p> </div> </div> <div class=form-group> <label for=place class=\"col-md-2 control-label\">Дистанции</label> <div class=col-md-4> <p class=\"form-control-static form-control-static--event\"> {{ $ctrl.event.distances }} </p> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('fio') }\"> <label for=fio class=\"col-md-2 control-label\">ФИО</label> <div class=col-md-8> <input type=text class=form-control name=fio required ng-model=$ctrl.member.fio ng-disabled=$ctrl.disabledForm autocomplete=off> <div ng-messages=member.fio.$error ng-if=\"$ctrl.isHasError('fio')\" role=alert> <div ng-message=required class=form__message--error>Введите ФИО</div> </div> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('age') }\"> <label for=age class=\"col-md-2 control-label\">Год рождения</label> <div class=col-md-4> <input type=text maxlength=4 class=form-control name=age required ng-model=$ctrl.member.age ng-disabled=$ctrl.disabledForm autocomplete=off> <div ng-messages=member.age.$error ng-if=\"$ctrl.isHasError('age')\" role=alert> <div ng-message=required class=form__message--error>Введите год рождения</div> </div> </div> </div> <div class=form-group> <label for=gender class=\"col-md-2 control-label\">Пол</label> <div class=col-md-4> <label class=radio-inline> <input type=radio name=gender value=муж checked=checked ng-model=$ctrl.member.gender> муж </label> <label class=radio-inline> <input type=radio name=gender value=жен ng-model=$ctrl.member.gender> жен </label> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('distance') }\"> <label for=distance class=\"col-md-2 control-label\">Дистанция</label> <div class=col-md-4> <input type=text maxlength=32 class=form-control name=distance required ng-model=$ctrl.member.distance ng-disabled=$ctrl.disabledForm autocomplete=off> <div ng-messages=member.distance.$error ng-if=\"$ctrl.isHasError('distance')\" role=alert> <div ng-message=required class=form__message--error>Введите дистанцию</div> </div> </div> </div> <div class=form-group> <label for=startNumber class=\"col-md-2 control-label\">Стартовый номер</label> <div class=col-md-4> <input type=text maxlength=8 class=form-control name=startNumber placeholder=\"без номера\"> </div> </div> <div class=form-group> <label for=city class=\"col-md-2 control-label\">Город</label> <div class=col-md-4> <input type=text maxlength=32 class=form-control name=city placeholder=Пенза> </div> </div> <div class=form-group> <label for=club class=\"col-md-2 control-label\">Клуб</label> <div class=col-md-4> <input type=text maxlength=64 class=form-control name=club placeholder=\"Не состою в клубе\"> </div> </div> <div class=form-group> <label for=сountry class=\"col-md-2 control-label\">Страна/Регион</label> <div class=col-md-4> <input type=text maxlength=64 class=form-control name=сountry placeholder=Россия> </div> </div> <div class=form-group></div> <div class=form-group> <div class=\"col-md-8 col-md-offset-2\"> <button type=submit class=\"btn btn-primary\" ng-disabled=\"member.$invalid || $ctrl.disabledForm\"> <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=$ctrl.registerProgress></i> Регистрация </button> <button type=button class=\"btn btn-default\" ng-click=$ctrl.onClickCancelButton() ng-disabled=$ctrl.disabledForm>Отмена</button> </div> </div> </fieldset> </form> </div> </div> </div> </div> </div>";

/***/ },
/* 454 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(456);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(457);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(458);

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
/* 456 */
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
/* 457 */
/***/ function(module, exports) {

	module.exports = "<div class=page> <div class=container> <div class=row> <div class=col-md-12> About page </div> </div> <div> </div></div></div>";

/***/ },
/* 458 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(460);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(461);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(462);

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
/* 460 */
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
/* 461 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--login\"> <div class=container> <div class=row> <div class=col-md-6> <div class=well> <form name=auth class=\"form-horizontal from--auth\" ng-submit=$ctrl.submit()> <fieldset> <legend>Авторизация</legend> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('email') }\"> <label for=inputEmail class=\"col-md-2 control-label\">Email</label> <div class=col-md-10> <input type=text class=form-control id=inputEmail name=email placeholder=Email required ng-model=$ctrl.auth.email ng-disabled=$ctrl.progress autocomplete=off> <div ng-messages=auth.email.$error ng-if=\"$ctrl.isHasError('email')\" role=alert> <div ng-message=required class=form__message--error>Введите email</div> </div> </div> </div> <div class=form-group ng-class=\"{ 'has-error' : $ctrl.isHasError('password') }\"> <label for=inputPassword class=\"col-md-2 control-label\">Пароль</label> <div class=col-md-10> <input type=password class=form-control id=inputPassword name=password required placeholder=Password ng-model=$ctrl.auth.password ng-disabled=$ctrl.progress autocomplete=off> <div ng-messages=auth.password.$error ng-if=\"$ctrl.isHasError('password')\" role=alert> <div ng-message=required class=form__message--error>Введите пароль</div> </div> </div> </div> <div class=form-group> <div class=\"col-md-10 col-md-offset-2\"> <button type=submit class=\"btn btn-success\" ng-disabled=\"auth.$invalid || $ctrl.progress\"> <i class=\"fa fa-lg fa-spinner fa-spin\" ng-if=$ctrl.progress></i> Войти </button> </div> </div> </fieldset> </form> </div> </div> </div> </div> </div>";

/***/ },
/* 462 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(303);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _component = __webpack_require__(464);

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
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(465);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(466);

	var _template2 = _interopRequireDefault(_template);

	__webpack_require__(467);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    template: _template2.default,
	    controller: _controller2.default
	};

/***/ },
/* 465 */
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
/* 466 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page page--user\"> <div class=container> <div class=row> <div class=col-md-12> <div class=btn-toolbar role=toolbar> <div class=btn-group role=group> <a ui-sref=events.new class=\"btn btn-primary\">Добавить событие</a> </div> <div class=btn-group role=group> <a ui-sref=news.new class=\"btn btn-primary\">Добавить новость</a> </div> </div> </div> </div> </div> </div>";

/***/ },
/* 467 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 468 */
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
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _authService = __webpack_require__(470);

	var _authService2 = _interopRequireDefault(_authService);

	var _eventService = __webpack_require__(472);

	var _eventService2 = _interopRequireDefault(_eventService);

	var _firebaseService = __webpack_require__(474);

	var _firebaseService2 = _interopRequireDefault(_firebaseService);

	var _fileStorageService = __webpack_require__(476);

	var _fileStorageService2 = _interopRequireDefault(_fileStorageService);

	var _startlistService = __webpack_require__(478);

	var _startlistService2 = _interopRequireDefault(_startlistService);

	var _updateService = __webpack_require__(480);

	var _updateService2 = _interopRequireDefault(_updateService);

	var _newsService = __webpack_require__(482);

	var _newsService2 = _interopRequireDefault(_newsService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services', [_authService2.default.name, _eventService2.default.name, _firebaseService2.default.name, _fileStorageService2.default.name, _startlistService2.default.name, _updateService2.default.name, _newsService2.default.name]);

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(471);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.auth', []).service('AuthService', _controller2.default);

/***/ },
/* 471 */
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
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(473);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.event', []).service('EventService', _controller2.default);

/***/ },
/* 473 */
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
	            var _this = this;

	            var ref = options ? this._getRefByOptions(options) : this.ref;
	            var list = this.$firebaseArray(ref);
	            return list.$loaded().then(function (result) {
	                return result.map(function (event) {
	                    return _this._mapEvent(event);
	                });
	            });
	        }
	    }, {
	        key: '_getRefByOptions',
	        value: function _getRefByOptions(_ref) {
	            var dateBegin = _ref.dateBegin;
	            var dateEnd = _ref.dateEnd;
	            var limitToFirst = _ref.limitToFirst;

	            var result = this.ref;
	            if (dateBegin) {
	                result = result.startAt(dateBegin);
	            }
	            if (dateEnd) {
	                result = result.endAt(dateEnd);
	            }
	            if (limitToFirst) {
	                result = result.limitToFirst(limitToFirst);
	            }
	            return result;
	        }
	    }, {
	        key: '_mapEvent',
	        value: function _mapEvent(event) {
	            var _ref2;

	            var $id = event.$id;
	            var date = event.date;
	            var time = event.time;
	            var title = event.title;
	            var abstract = event.abstract;
	            var description = event.description;
	            var _event$tag = event.tag;
	            var tag = _event$tag === undefined ? 'event' : _event$tag;
	            var place = event.place;
	            var distances = event.distances;
	            var master = event.master;
	            var masterUrl = event.masterUrl;
	            var masterPerson = event.masterPerson;
	            var masterPhone = event.masterPhone;
	            var masterEmail = event.masterEmail;


	            return _ref2 = {
	                id: $id,
	                date: date,
	                time: time,
	                title: title,
	                abstract: abstract,
	                description: description,
	                tag: tag
	            }, _defineProperty(_ref2, 'date', new Date(date)), _defineProperty(_ref2, 'place', place), _defineProperty(_ref2, 'distances', distances), _defineProperty(_ref2, 'master', master), _defineProperty(_ref2, 'masterUrl', masterUrl), _defineProperty(_ref2, 'masterPerson', masterPerson), _defineProperty(_ref2, 'masterPhone', masterPhone), _defineProperty(_ref2, 'masterEmail', masterEmail), _ref2;
	        }
	    }, {
	        key: 'getEvent',
	        value: function getEvent(key) {
	            var _this2 = this;

	            var obj = this._getEventObj(key);
	            return obj.$loaded().then(function (result) {
	                return _this2._mapEvent(result);
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
	            return obj.$loaded().then(function (result) {
	                Object.assign(result, data, {
	                    editTimestamp: Date.now()
	                });
	                return obj.$save();
	            }).then(function (ref) {
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
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(475);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.firebaseService', []).service('FirebaseService', _controller2.default);

/***/ },
/* 475 */
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
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(477);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.fileStorage', []).service('FileStorageService', _controller2.default);

/***/ },
/* 477 */
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
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(479);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.startlistService', []).service('StartlistService', _controller2.default);

/***/ },
/* 479 */
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
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(481);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.update', []).service('UpdateService', _controller2.default);

/***/ },
/* 481 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UpdateService = function () {
	    UpdateService.$inject = ["FirebaseService", "$firebaseArray"];
	    function UpdateService(FirebaseService, $firebaseArray) {
	        'ngInject';

	        _classCallCheck(this, UpdateService);

	        var firebase = FirebaseService.getFirebase();
	        this.ref = firebase.database().ref('updates');
	        this.$firebaseArray = $firebaseArray;
	    }

	    _createClass(UpdateService, [{
	        key: 'loadUpdates',
	        value: function loadUpdates(options) {
	            var ref = options ? this._getRefByOptions(options) : this.ref;
	            var list = this.$firebaseArray(ref);
	            return list.$loaded();
	        }
	    }, {
	        key: '_getRefByOptions',
	        value: function _getRefByOptions(_ref) {
	            var dateBegin = _ref.dateBegin;
	            var dateEnd = _ref.dateEnd;
	            var limitToLast = _ref.limitToLast;

	            var result = this.ref;
	            if (dateBegin) {
	                result = result.startAt(dateBegin);
	            }
	            if (dateEnd) {
	                result = result.endAt(dateEnd);
	            }
	            if (limitToLast) {
	                result = result.limitToLast(limitToLast);
	            }
	            return result;
	        }
	    }]);

	    return UpdateService;
	}();

	exports.default = UpdateService;
	;

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(299);

	var _angular2 = _interopRequireDefault(_angular);

	var _controller = __webpack_require__(483);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('app.services.news', []).service('NewsService', _controller2.default);

/***/ },
/* 483 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NewsService = function () {
	    NewsService.$inject = ["FirebaseService", "$firebaseArray", "$firebaseObject"];
	    function NewsService(FirebaseService, $firebaseArray, $firebaseObject) {
	        'ngInject';

	        _classCallCheck(this, NewsService);

	        var firebase = FirebaseService.getFirebase();
	        this.ref = firebase.database().ref('news');
	        this.$firebaseArray = $firebaseArray;
	        this.$firebaseObject = $firebaseObject;
	    }

	    _createClass(NewsService, [{
	        key: 'loadNews',
	        value: function loadNews(options) {
	            var _this = this;

	            var ref = options ? this._getRefByOptions(options) : this.ref;
	            var list = this.$firebaseArray(ref.orderByChild('createTimestamp'));
	            return list.$loaded().then(function (result) {
	                return result.map(function (news) {
	                    return _this._mapNews(news);
	                }).reverse();
	            });
	        }
	    }, {
	        key: '_getRefByOptions',
	        value: function _getRefByOptions(_ref) {
	            var dateBegin = _ref.dateBegin;
	            var dateEnd = _ref.dateEnd;
	            var limitToLast = _ref.limitToLast;

	            var result = this.ref;
	            if (dateBegin) {
	                result = result.startAt(dateBegin);
	            }
	            if (dateEnd) {
	                result = result.endAt(dateEnd);
	            }
	            if (limitToLast) {
	                result = result.limitToLast(limitToLast);
	            }
	            return result;
	        }
	    }, {
	        key: 'getNewsById',
	        value: function getNewsById(id) {
	            var _this2 = this;

	            var obj = this._getNewsObj(id);
	            return obj.$loaded().then(function (result) {
	                return _this2._mapNews(result);
	            });
	        }
	    }, {
	        key: '_getNewsObj',
	        value: function _getNewsObj(key) {
	            var ref = this.ref.child(key);
	            return this.$firebaseObject(ref);
	        }
	    }, {
	        key: '_mapNews',
	        value: function _mapNews(news) {
	            var title = news.title;
	            var abstract = news.abstract;
	            var content = news.content;
	            var createTimestamp = news.createTimestamp;

	            return {
	                id: news.$id,
	                date: createTimestamp,
	                title: title,
	                abstract: abstract,
	                content: content
	            };
	        }
	    }, {
	        key: 'addNews',
	        value: function addNews(data) {
	            var list = this.$firebaseArray(this.ref);
	            return list.$add(_extends({}, data, {
	                createTimestamp: Date.now()
	            })).then(function (ref) {
	                return ref.key;
	            });
	        }
	    }, {
	        key: 'saveNews',
	        value: function saveNews(id, data) {
	            var obj = this._getNewsObj(id);
	            return obj.$loaded().then(function (result) {
	                Object.assign(result, data, {
	                    editTimestamp: Date.now()
	                });
	                return obj.$save();
	            }).then(function (ref) {
	                return ref.key;
	            });
	        }
	    }, {
	        key: 'removeNews',
	        value: function removeNews(id) {
	            var obj = this._getNewsObj(id);
	            return obj.$remove();
	        }
	    }]);

	    return NewsService;
	}();

	exports.default = NewsService;
	;

/***/ },
/* 484 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);