/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Agent/Agent.ts":
/*!****************************!*\
  !*** ./src/Agent/Agent.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Agent": () => (/* binding */ Agent)
/* harmony export */ });
/* harmony import */ var _Employee_Employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Employee/Employee */ "./src/Employee/Employee.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Agent = /** @class */ (function (_super) {
    __extends(Agent, _super);
    function Agent(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName, salary) || this;
        _this.amountOfEmployees = 0;
        return _this;
    }
    Agent.prototype.getSalary = function () {
        this.salary *= this.amountOfEmployees;
        return _super.prototype.getSalary.call(this);
    };
    return Agent;
}(_Employee_Employee__WEBPACK_IMPORTED_MODULE_0__.Employee));



/***/ }),

/***/ "./src/Employee/Employee.ts":
/*!**********************************!*\
  !*** ./src/Employee/Employee.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Employee": () => (/* binding */ Employee)
/* harmony export */ });
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.tax = 13;
    }
    Employee.prototype.getSalary = function () {
        return "$".concat(this.salary - (this.salary * this.tax) / 100);
    };
    return Employee;
}());



/***/ }),

/***/ "./src/Manager/Manager.ts":
/*!********************************!*\
  !*** ./src/Manager/Manager.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Manager": () => (/* binding */ Manager)
/* harmony export */ });
/* harmony import */ var _Employee_Employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Employee/Employee */ "./src/Employee/Employee.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName, salary) {
        return _super.call(this, firstName, lastName, salary) || this;
    }
    return Manager;
}(_Employee_Employee__WEBPACK_IMPORTED_MODULE_0__.Employee));



/***/ }),

/***/ "./src/Workman/Workman.ts":
/*!********************************!*\
  !*** ./src/Workman/Workman.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Workman": () => (/* binding */ Workman)
/* harmony export */ });
/* harmony import */ var _Employee_Employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Employee/Employee */ "./src/Employee/Employee.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Workman = /** @class */ (function (_super) {
    __extends(Workman, _super);
    function Workman(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName, salary) || this;
        _this.workingHours = 0;
        return _this;
    }
    Workman.prototype.getSalary = function () {
        this.salary *= this.workingHours;
        return _super.prototype.getSalary.call(this);
    };
    return Workman;
}(_Employee_Employee__WEBPACK_IMPORTED_MODULE_0__.Employee));



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manager_Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager/Manager */ "./src/Manager/Manager.ts");
/* harmony import */ var _Agent_Agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Agent/Agent */ "./src/Agent/Agent.ts");
/* harmony import */ var _Workman_Workman__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Workman/Workman */ "./src/Workman/Workman.ts");



var showSalary = function (employee) {
    console.log("".concat(employee.firstName, " ").concat(employee.lastName, " has salary ").concat(employee.getSalary()));
};
var sam = new _Manager_Manager__WEBPACK_IMPORTED_MODULE_0__.Manager('Sam', 'Winchester', 1600);
var din = new _Agent_Agent__WEBPACK_IMPORTED_MODULE_1__.Agent('Din', 'Winchester', 110);
var bob = new _Workman_Workman__WEBPACK_IMPORTED_MODULE_2__.Workman('Bob', 'Singer', 6);
din.amountOfEmployees = 8;
bob.workingHours = 174;
showSalary(sam);
showSalary(din);
showSalary(bob);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map