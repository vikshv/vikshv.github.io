/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(218);

/***/ },

/***/ 218:
/***/ function(module, exports) {

	'use strict';
	
	describe('directive', function () {
	
	    beforeEach(angular.mock.module('app'));
	
	    var UserService = void 0;
	    var element = void 0;
	
	    beforeEach(angular.mock.inject(function ($q, $rootScope, $compile, _UserService_) {
	        UserService = _UserService_;
	
	        var deferred = $q.defer();
	
	        spyOn(UserService, 'getOne').and.returnValue(deferred.promise);
	        deferred.resolve({ name: 'Bob' });
	
	        element = angular.element('<user-card user="user"></user-card>');
	
	        var $scope = $rootScope.$new(); // создание скоупа
	
	        $scope.user = { name: 'Bob' };
	
	        $compile(element)($scope); // компиляция тестируемой директивы  в скоуп
	
	        // получение скоупа элемента (для унаследованного от родителя)
	        scope = element.scope();
	
	        // получение скоупа элемента (для изолированного)
	        scope = element.isolateScope();
	    }));
	
	    it('should call UserService', function () {
	        scope.someMethod();
	        expect(UserService.getOne).toHave;
	    });
	
	    it('should set user', function () {});
	});

/***/ }

/******/ });
//# sourceMappingURL=tests.js.map