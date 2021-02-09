(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner>\r\n    <p style=\"font-size: 20px; margin-top: 40px;\">Loading...</p>\r\n</ngx-spinner>\r\n\r\n<app-nav-bar></app-nav-bar>\r\n<app-section-header></app-section-header>\r\n\r\n<div>\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/nav-bar/nav-bar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/nav-bar/nav-bar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm fixed-top\">\n    \n    <img src=\"assets/images/logo.png\" style=\"max-height: 70px;\" alt=\"logo\" routerLink=\"/\" class=\"logo\">\n    \n    <nav class=\"my-2 my-md-0 mr-md-3 text-uppercase\" style=\"font-size: larger;\">\n        <a class=\"p-2\"\n            [routerLink]=\"['/']\"\n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{exact: true}\">\n            Home\n        </a>\n        <a class=\"p-2\" routerLink=\"/shop\" routerLinkActive=\"active\">Shop</a>\n        <a class=\"p-2\" routerLink=\"/test-error\" routerLinkActive=\"active\">Errors</a>\n    </nav>\n    \n    <div class=\"d-flex align-items-center\">\n        <a routerLink=\"/basket\"\n            class=\"position-relative\">\n            <i class=\"fa fa-shopping-cart fa-2x mr-5 text-dark\"></i>\n            <div *ngIf=\"(basket$ | async) as basket\" class=\"cart-no\">{{ basket.items.length }}</div>\n        </a>\n\n        <ng-container *ngIf=\"(currentUser$ | async) === null\">\n            <a routerLink=\"/account/login\"\n                class=\"btn btn-outline-secondary mr-2\">\n                Login\n            </a>\n            <a routerLink=\"/account/register\"\n                class=\"btn btn-outline-secondary mr-3\">\n                Sign up\n            </a>\n        </ng-container>\n\n        <ng-container *ngIf=\"currentUser$ | async\">\n            <div class=\"dropdown ml-3 mr-5\" dropdown>\n                <a class=\"dropdown-toggle\" style=\"cursor: pointer;\" dropdownToggle>\n                    <strong>Welcome {{ (currentUser$ | async).displayName }}</strong>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\" style=\"cursor: pointer;\" *dropdownMenu>\n                    <a routerLink=\"/basket\" class=\"dropdown-item d-flex align-items-center py-2\">\n                        <i class=\"fa fa-shopping-cart mr-3\"></i> View Basket\n                    </a>\n                    <a routerLink=\"/orders\" class=\"dropdown-item d-flex align-items-center py-2\">\n                        <i class=\"fa fa-history mr-3\"></i> View Orders\n                    </a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a (click)=\"logout()\" class=\"dropdown-item d-flex align-items-center py-2\">\n                        <i class=\"fa fa-sign-out mr-3\"></i> Logout\n                    </a>\n                </div>\n            </div>\n        </ng-container>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/not-found/not-found.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/not-found/not-found.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n    <h1>Not Found</h1>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/section-header/section-header.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/section-header/section-header.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(breadcrumb$ | async) as breadcrumbs\">\n    <section *ngIf=\"breadcrumbs.length > 0 && breadcrumbs[breadcrumbs.length - 1].label !== 'Home'\" class=\"py-5\" style=\"margin-top: 105px; background-color: #f5f5f5;\">\n        <div class=\"container\">\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-8\">\n                    <h1>{{ breadcrumbs.length > 0 && breadcrumbs[breadcrumbs.length - 1].label | titlecase }}</h1>\n                </div>\n                <div class=\"col-4\">\n                    <xng-breadcrumb></xng-breadcrumb>\n                </div>\n            </div>\n        </div>\n    </section>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/server-error/server-error.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/server-error/server-error.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n    <h4>Internal Server Error - refreshing the page will make the exception disappear</h4>\n    <ng-container *ngIf=\"error\">\n        <h5 class=\"text-danger\">Error: {{ error.message }}</h5>\n        <p class=\"font-weight-bold\">Note: if you are seeing this then Angular is probably not responsible</p>\n        <p>What to to next?</p>\n        <ol>\n            <li>Open chrome dev tools</li>\n            <li>Inspect the network tab</li>\n            <li>Check the failing request</li>\n            <li>Examine this request URL - make sure this is correct</li>\n            <li>Reproduce the error in postman - if we the same response in Postman, then the issue is NOT with Angular</li>\n        </ol>\n        <p>Following is the stack trace - this is where your investigation should start!</p>\n        <code class=\"mt-5\" style=\"background-color: whitesmoke;\">\n            {{ error.details }}\n        </code>\n    </ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/test-error/test-error.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/test-error/test-error.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n\n    <button (click)=\"get500Error()\" class=\"btn btn-outline-primary mr-3\">Test 500 Error</button>\n\n    <button (click)=\"get404Error()\" class=\"btn btn-outline-primary mr-3\">Test 404 Error</button>\n\n    <button (click)=\"get400Error()\" class=\"btn btn-outline-primary mr-3\">Test 400 Error</button>\n\n    <button (click)=\"get400ValidationError()\" class=\"btn btn-outline-primary mr-3\">Test 400 Validation Error</button>\n\n    <div class=\"row mt-5\" *ngIf=\"validationErrors\">\n\n        <ul class=\"text-danger\">\n            <li *ngFor=\"let error of validationErrors\">{{ error }}</li>\n        </ul>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel>\n    <slide>\n        <img src=\"assets/images/hero1.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\n        <div class=\"carousel-caption d-none d-md-block\">\n            <h3>First slide label</h3>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </div>\n    </slide>\n    <slide>\n        <img src=\"assets/images/hero2.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n        <div class=\"carousel-caption d-none d-md-block\">\n            <h3>Second slide label</h3>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </div>\n    </slide>\n    <slide>\n        <img src=\"assets/images/hero3.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n        <div class=\"carousel-caption d-none d-md-block\">\n            <h3>Third slide label</h3>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </div>\n    </slide>\n</carousel>\n\n<section class=\"featured\">\n    <div class=\"d-flex justify-content-center pt-4\">\n        <h1>Welcome to the Shop!</h1>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/basket-summary/basket-summary.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/basket-summary/basket-summary.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"items.length > 0\">\n    <div class=\"table-responsive\">\n        <table class=\"table table-borderless\">\n            <thead [class.thead-light]=\"isBasket || isOrder\" class=\"border-0 py-2\">\n                <tr>\n                    <th scope=\"col\" [class.bg-light]=\"isBasket\">\n                        <div class=\"p-2 px-3 text-uppercase\">Product</div>\n                    </th>\n                    <th scope=\"col\" [class.bg-light]=\"isBasket\">\n                        <div class=\"py-2 text-uppercase\">Price</div>\n                    </th>\n                    <th scope=\"col\" [class.bg-light]=\"isBasket\">\n                        <div class=\"py-2 text-uppercase\">Quantity</div>\n                    </th>\n                    <th scope=\"col\" [class.bg-light]=\"isBasket\">\n                        <div class=\"py-2 text-uppercase\">Total</div>\n                    </th>\n                    <th *ngIf=\"isBasket\" class=\"border-0\" scope=\"col\">\n                        <div class=\"py-2 text-uppercase\">Remove</div>\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of items\" class=\"border-0\">\n                    <th scope=\"row\">\n                        <div class=\"p-0\">\n                            <img src=\"{{ item.pictureUrl }}\"\n                                alt=\"{{ item.productName }}\"\n                                class=\"img-fluid\"\n                                style=\"max-height: 50px;\">\n\n                            <div class=\"ml-3 d-inline-block align-middle\">\n                                <h5 class=\"mb-0\">\n                                    <a routerLink=\"/shop/{{ item.id || item.productId }}\" class=\"text-dark\">{{ item.productName }}</a>\n                                </h5>\n                                <span\n                                    *ngIf=\"item.type\"\n                                    class=\"text-muted font-weight-normal font-italic d-block\">\n                                    Type: {{ item.type }}\n                                </span>\n                            </div>\n                        </div>\n                    </th>\n                    <td class=\"align-middle\">\n                        <strong>{{ item.price | currency }}</strong>\n                    </td>\n                    <td class=\"align-middle\">\n                        <div class=\"d-flex align-items-center\" [class.justify-content-center]=\"!isBasket\">\n                            <i *ngIf=\"isBasket\"\n                                (click)=\"decrementItemQuantity(item)\"\n                                class=\"fa fa-minus-circle text-warning mr-2\"\n                                style=\"cursor: pointer; font-size: 2em;\">\n                            </i>\n                            <span class=\"font-weight-bold\" style=\"font-size: 1.5em;\">\n                                {{ item.quantity }}\n                            </span>\n                            <i *ngIf=\"isBasket\"\n                                (click)=\"incrementItemQuantity(item)\"\n                                class=\"fa fa-plus-circle text-warning mx-2\"\n                                style=\"cursor: pointer; font-size: 2em;\">\n                            </i>\n                        </div>\n                    </td>\n                    <td class=\"align-middle\">\n                        <strong>{{ item.price * item.quantity | currency }}</strong>\n                    </td>\n                    <td class=\"align-middle text-center\">\n                        <a class=\"text-danger\" *ngIf=\"isBasket\">\n                            <i (click)=\"removeBasketItem(item)\"\n                                class=\"fa fa-trash\"\n                                style=\"font-size: 2em; cursor: pointer;\">\n                            </i>\n                        </a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/order-totals/order-totals.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/order-totals/order-totals.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-light px-4 py-3 text-uppercase font-weight-bold\" style=\"padding: 1.20em;\">\n    Order Summary\n</div>\n<div class=\"py-4\">\n    <p class=\"font-italic mb-4\">Shipping costs will be added depending on choices made during checkout</p>\n    <ul class=\"list-unstyled mb-4\">\n        <li class=\"d-flex justify-content-between py-3 border-bottom\">\n            <strong class=\"text-muted\">Order subtotal</strong>\n            <strong class=\"text-muted\">{{ subtotal | currency }}</strong>\n        </li>\n\n        <li class=\"d-flex justify-content-between py-3 border-bottom\">\n            <strong class=\"text-muted\">Shipping and handling</strong>\n            <strong class=\"text-muted\">{{ shippingPrice | currency }}</strong>\n        </li>\n\n        <li class=\"d-flex justify-content-between py-3 border-bottom\">\n            <strong class=\"text-muted\">Total</strong>\n            <strong class=\"text-muted\">{{ total | currency }}</strong>\n        </li>\n    </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pager/pager.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pager/pager.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pagination [boundaryLinks]=\"true\"\n    [totalItems]=\"totalCount\"\n    (pageChanged)=\"onPagerChange($event)\"\n    [ngModel]=\"pageNumber\"\n    [itemsPerPage]=\"pageSize\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n</pagination>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paging-header/paging-header.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paging-header/paging-header.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <span *ngIf=\"totalCount && totalCount > 0\">\n        Showing \n        <strong>\n            {{ (pageNumber - 1) * pageSize + 1 }} - \n            {{\n                pageNumber * pageSize\n                > totalCount\n                ? totalCount\n                : pageNumber * pageSize\n            }}\n        </strong> of \n        <strong>{{ totalCount }}</strong> Results</span>\n    <span *ngIf=\"totalCount === 0\">\n        There are <strong>0</strong> results for this filter\n    </span>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/stepper/stepper.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/stepper/stepper.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <ul class=\"nav nav-pills nav-justified\">\n        <li class=\"nav-item\" *ngFor=\"let step of steps; let i = index\">\n            <button\n                (click)=\"onClick(i)\"\n                [disabled]=\"true\"\n                [class.active]=\"selectedIndex === i\"\n                class=\"nav-link text-uppercase font-weight-bold btn-block\" style=\"padding: 1.20em;\">\n                {{ step.label }}\n            </button>\n        </li>\n    </ul>\n    <div>\n        <ng-container [ngTemplateOutlet]=\"selected.content\"></ng-container>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-input/text-input.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-input/text-input.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-label-group\">\n    \n    <input\n        [ngClass]=\"\n            (controlDir && controlDir.control && controlDir.control.touched)\n            ? !controlDir.control.valid\n            ? 'is-invalid'\n            : 'is-valid'\n            : null\n        \"\n        [type]=\"type\"\n        (input)=\"onChange($event.target.value)\"\n        (blur)=\"onTouched()\"\n        id=\"{{label}}\"\n        #input\n        class=\"form-control\"\n        placeholder=\"{{label}}\"\n    >\n\n    <div *ngIf=\"controlDir && controlDir.control && controlDir.control.status === 'PENDING'\"\n        class=\"fa fa-spinner fa-spin loader\">\n\n    </div>\n\n    <label for=\"{{label}}\">{{label}}</label>\n\n    <div class=\"invalid-feedback\" *ngIf=\"(controlDir && controlDir.control && !controlDir.control.valid && controlDir.control.touched)\">\n        <span *ngIf=\"controlDir.control.errors?.required\">{{label}} is required</span>\n        <span *ngIf=\"controlDir.control.errors?.pattern\">Invalid {{label}}</span>\n    </div>\n\n    <div class=\"invalid-feedback d-block\" *ngIf=\"(controlDir && controlDir.control && !controlDir.control.valid && controlDir.control.dirty)\">\n        <span *ngIf=\"controlDir.control.errors?.emailExists\">Email address is in use</span>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/account/account.service.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let AccountService = class AccountService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.currentUser$ = this.currentUserSource.asObservable();
    }
    loadCurrentUser(token) {
        if (token === null) {
            this.currentUserSource.next(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Authorization', `Bearer ${token}`);
        return this.http.get(this.baseUrl + 'account', { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            if (user) {
                localStorage.setItem('token', user.token);
                this.currentUserSource.next(user);
            }
        }));
    }
    login(values) {
        return this.http.post(this.baseUrl + 'account/login', values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            if (user) {
                localStorage.setItem('token', user.token);
                this.currentUserSource.next(user);
            }
        }));
    }
    register(values) {
        return this.http.post(this.baseUrl + 'account/register', values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            if (user) {
                localStorage.setItem('token', user.token);
                this.currentUserSource.next(user);
            }
        }));
    }
    logout() {
        localStorage.removeItem('token');
        this.currentUserSource.next(null);
        this.router.navigateByUrl('/');
    }
    checkEmailExists(email) {
        return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
    }
    getUserAddress() {
        return this.http.get(this.baseUrl + 'account/address');
    }
    updateUserAddress(address) {
        return this.http.put(this.baseUrl + 'account/address', address);
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/not-found/not-found.component */ "./src/app/core/not-found/not-found.component.ts");
/* harmony import */ var _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/server-error/server-error.component */ "./src/app/core/server-error/server-error.component.ts");
/* harmony import */ var _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/test-error/test-error.component */ "./src/app/core/test-error/test-error.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], data: { breadcrumb: 'Home' } },
    { path: 'test-error', component: _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_6__["TestErrorComponent"], data: { breadcrumb: 'Test Errors' } },
    { path: 'server-error', component: _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_5__["ServerErrorComponent"], data: { breadcrumb: 'Server Error' } },
    { path: 'not-found', component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"], data: { breadcrumb: 'Not Found' } },
    {
        path: 'shop',
        loadChildren: () => __webpack_require__.e(/*! import() | shop-shop-module */ "shop-shop-module").then(__webpack_require__.bind(null, /*! ./shop/shop.module */ "./src/app/shop/shop.module.ts")).then(mode => mode.ShopModule),
        data: { breadcrumb: 'Shop' }
    },
    {
        path: 'basket',
        loadChildren: () => __webpack_require__.e(/*! import() | basket-basket-module */ "basket-basket-module").then(__webpack_require__.bind(null, /*! ./basket/basket.module */ "./src/app/basket/basket.module.ts")).then(mode => mode.BasketModule),
        data: { breadcrumb: 'Basket' }
    },
    {
        path: 'checkout',
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | checkout-checkout-module */ "checkout-checkout-module").then(__webpack_require__.bind(null, /*! ./checkout/checkout.module */ "./src/app/checkout/checkout.module.ts")).then(mode => mode.CheckoutModule),
        data: { breadcrumb: 'Checkout' }
    },
    {
        path: 'orders',
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "orders-orders-module").then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "./src/app/orders/orders.module.ts")).then(mode => mode.OrdersModule),
        data: { breadcrumb: 'Orders' }
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "./src/app/account/account.module.ts")).then(mode => mode.AccountModule),
        data: { breadcrumb: { skip: true } }
    },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _basket_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basket/basket.service */ "./src/app/basket/basket.service.ts");




let AppComponent = class AppComponent {
    constructor(basketService, accountService) {
        this.basketService = basketService;
        this.accountService = accountService;
        this.title = 'Skinet';
    }
    ngOnInit() {
        this.loadCurrentUser();
        this.loadBasket();
    }
    loadCurrentUser() {
        const token = localStorage.getItem('token');
        this.accountService.loadCurrentUser(token).subscribe(() => {
            console.log('loaded user');
        }, error => {
            console.log(error);
        });
    }
    loadBasket() {
        const basketId = localStorage.getItem('basket_id');
        if (basketId) {
            this.basketService.getBasket(basketId).subscribe(() => {
                // console.log('initialised basket');
            }, error => {
                console.log(error);
            });
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"] },
    { type: _account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/interceptors/error.interceptor */ "./src/app/core/interceptors/error.interceptor.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptors/loading.interceptor */ "./src/app/core/interceptors/loading.interceptor.ts");
/* harmony import */ var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptors/jwt.interceptor */ "./src/app/core/interceptors/jwt.interceptor.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_11__["LoadingInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/basket/basket.service.ts":
/*!******************************************!*\
  !*** ./src/app/basket/basket.service.ts ***!
  \******************************************/
/*! exports provided: BasketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketService", function() { return BasketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_models_basket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/models/basket */ "./src/app/shared/models/basket.ts");







let BasketService = class BasketService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.basketSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.basket$ = this.basketSource.asObservable();
        this.basketTotalSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.basketTotal$ = this.basketTotalSource.asObservable();
        this.shipping = 0;
    }
    createPaymentIntent() {
        return this.http.post(this.baseUrl + 'payments/' + this.getCurrentBasketValue().id, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((basket) => {
            this.basketSource.next(basket);
        }));
    }
    setShippingPrice(deliveryMethod) {
        this.shipping = deliveryMethod.price;
        const basket = this.getCurrentBasketValue();
        basket.deliveryMethodId = deliveryMethod.id;
        basket.shippingPrice = deliveryMethod.price;
        this.calculateTotals();
        this.setBasket(basket);
    }
    getBasket(id) {
        return this.http.get(this.baseUrl + 'basket?id=' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((basket) => {
            this.basketSource.next(basket);
            this.shipping = basket.shippingPrice;
            this.calculateTotals();
        }));
    }
    setBasket(basket) {
        return this.http.post(this.baseUrl + 'basket', basket).subscribe((response) => {
            this.basketSource.next(response);
            this.calculateTotals();
        }, error => {
            console.log(error);
        });
    }
    getCurrentBasketValue() {
        return this.basketSource.value;
    }
    addItemToBasket(item, quantity = 1) {
        const itemToAdd = this.mapProductItemToBasketItem(item, quantity);
        let basket = this.getCurrentBasketValue();
        if (basket === null) {
            basket = this.createBasket();
        }
        basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
        this.setBasket(basket);
    }
    addOrUpdateItem(items, itemToAdd, quantity) {
        const index = items.findIndex(i => i.id === itemToAdd.id);
        if (index === -1) {
            itemToAdd.quantity = quantity;
            items.push(itemToAdd);
        }
        else {
            items[index].quantity += quantity;
        }
        return items;
    }
    incrementItemQuantity(item) {
        const basket = this.getCurrentBasketValue();
        const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
        basket.items[foundItemIndex].quantity++;
        this.setBasket(basket);
    }
    decrementItemQuantity(item) {
        const basket = this.getCurrentBasketValue();
        const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
        if (basket.items[foundItemIndex].quantity > 1) {
            basket.items[foundItemIndex].quantity--;
            this.setBasket(basket);
        }
        else {
            this.removeItemFromBasket(item);
        }
    }
    removeItemFromBasket(item) {
        const basket = this.getCurrentBasketValue();
        if (basket.items.some(x => x.id === item.id)) {
            basket.items = basket.items.filter(i => i.id !== item.id);
            if (basket.items.length > 0) {
                this.setBasket(basket);
            }
            else {
                this.deleteBasket(basket);
            }
        }
    }
    deleteBasket(basket) {
        return this.http.delete(this.baseUrl + 'basket?id=' + basket.id).subscribe(() => {
            this.basketSource.next(null);
            this.basketTotalSource.next(null);
            localStorage.removeItem('basket_id');
        }, error => {
            console.log(error);
        });
    }
    deleteLocalBasket(id) {
        this.basketSource.next(null);
        this.basketTotalSource.next(null);
        localStorage.removeItem('basket_id');
    }
    calculateTotals() {
        const basket = this.getCurrentBasketValue();
        const shipping = this.shipping;
        const subtotal = basket.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
        const total = subtotal + shipping;
        this.basketTotalSource.next({ shipping, subtotal, total });
    }
    createBasket() {
        const basket = new _shared_models_basket__WEBPACK_IMPORTED_MODULE_6__["Basket"]();
        localStorage.setItem('basket_id', basket.id);
        return basket;
    }
    mapProductItemToBasketItem(item, quantity) {
        return {
            id: item.id,
            productName: item.name,
            price: item.price,
            pictureUrl: item.pictureUrl,
            quantity,
            brand: item.productBrand,
            type: item.productType
        };
    }
};
BasketService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BasketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], BasketService);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/core/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-error/test-error.component */ "./src/app/core/test-error/test-error.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/core/not-found/not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/core/server-error/server-error.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section-header/section-header.component */ "./src/app/core/section-header/section-header.component.ts");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xng-breadcrumb */ "./node_modules/xng-breadcrumb/fesm2015/xng-breadcrumb.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");












let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
            _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_5__["TestErrorComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
            _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_7__["ServerErrorComponent"],
            _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            xng_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                //timeOut: 10000,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true
            })
        ],
        exports: [
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
            _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/account/account.service */ "./src/app/account/account.service.ts");





let AuthGuard = class AuthGuard {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(auth => {
            if (auth) {
                return true;
            }
            this.router.navigate(['account/login'], { queryParams: { returnUrl: state.url } });
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: src_app_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/core/interceptors/error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ErrorInterceptor = class ErrorInterceptor {
    constructor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            if (error) {
                if (error.status === 400) {
                    if (error.error.errors) {
                        throw error.error;
                    }
                    else {
                        this.toastr.error(error.error.message, error.error.statusCode);
                    }
                }
                if (error.status === 401) {
                    this.toastr.error(error.error.message, error.error.statusCode);
                }
                if (error.status === 404) {
                    this.router.navigateByUrl('/not-found');
                }
                if (error.status === 500) {
                    const navigationExtras = { state: { error: error.error } };
                    this.router.navigateByUrl('/server-error', navigationExtras);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/jwt.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JwtInterceptor = class JwtInterceptor {
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
};
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/loading.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/loading.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/busy.service */ "./src/app/core/services/busy.service.ts");




let LoadingInterceptor = class LoadingInterceptor {
    constructor(busyService) {
        this.busyService = busyService;
    }
    intercept(req, next) {
        if (req.method === 'POST' && req.url.includes('orders')) {
            return next.handle(req);
        }
        if (req.method === 'DELETE') {
            return next.handle(req);
        }
        if (req.url.includes('emailexists')) {
            return next.handle(req);
        }
        this.busyService.busy();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.busyService.idle();
        }));
    }
};
LoadingInterceptor.ctorParameters = () => [
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_3__["BusyService"] }
];
LoadingInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoadingInterceptor);



/***/ }),

/***/ "./src/app/core/nav-bar/nav-bar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/nav-bar/nav-bar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cart-no {\n  position: absolute;\n  min-height: 25px;\n  min-width: 25px;\n  border-radius: 50%;\n  font-size: 1em;\n  background: blue;\n  color: white;\n  text-align: center;\n  top: -12px;\n  right: 32px;\n}\n\na {\n  text-decoration: none;\n  color: #343a40;\n}\n\na.active {\n  color: orange;\n}\n\n.logo {\n  cursor: pointer;\n}\n\n.logo:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXYtYmFyL0M6XFxVc2Vyc1xcU0UyXFxEZXNrdG9wXFxza2luZXRcXGNsaWVudC9zcmNcXGFwcFxcY29yZVxcbmF2LWJhclxcbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtBQ0NSOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREVJO0VBQ0ksYUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29yZS9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC1ubyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xyXG4gICAgbWluLXdpZHRoOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIHJpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMzQzYTQwO1xyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxufVxyXG4iLCIuY2FydC1ubyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLWhlaWdodDogMjVweDtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAtMTJweDtcbiAgcmlnaHQ6IDMycHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuYS5hY3RpdmUge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ubG9nbyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2dvOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/nav-bar/nav-bar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/nav-bar/nav-bar.component.ts ***!
  \***************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/account/account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basket/basket.service */ "./src/app/basket/basket.service.ts");




let NavBarComponent = class NavBarComponent {
    constructor(basketService, accountService) {
        this.basketService = basketService;
        this.accountService = accountService;
    }
    ngOnInit() {
        this.basket$ = this.basketService.basket$;
        this.currentUser$ = this.accountService.currentUser$;
    }
    logout() {
        this.accountService.logout();
    }
};
NavBarComponent.ctorParameters = () => [
    { type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"] },
    { type: src_app_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/core/nav-bar/nav-bar.component.scss")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/core/not-found/not-found.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/core/not-found/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/core/section-header/section-header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/section-header/section-header.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2VjdGlvbi1oZWFkZXIvc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/section-header/section-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/section-header/section-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: SectionHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeaderComponent", function() { return SectionHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xng-breadcrumb */ "./node_modules/xng-breadcrumb/fesm2015/xng-breadcrumb.js");



let SectionHeaderComponent = class SectionHeaderComponent {
    constructor(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
    }
    ngOnInit() {
        this.breadcrumb$ = this.breadcrumbService.breadcrumbs$;
    }
};
SectionHeaderComponent.ctorParameters = () => [
    { type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"] }
];
SectionHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/section-header/section-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section-header.component.scss */ "./src/app/core/section-header/section-header.component.scss")).default]
    })
], SectionHeaderComponent);



/***/ }),

/***/ "./src/app/core/server-error/server-error.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/server-error/server-error.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/server-error/server-error.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/server-error/server-error.component.ts ***!
  \*************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ServerErrorComponent = class ServerErrorComponent {
    constructor(router) {
        this.router = router;
        const navigation = this.router.getCurrentNavigation();
        this.error = navigation && navigation.extras && navigation.extras.state && navigation.extras.state.error;
    }
    ngOnInit() {
    }
};
ServerErrorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-server-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./server-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/server-error/server-error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./server-error.component.scss */ "./src/app/core/server-error/server-error.component.scss")).default]
    })
], ServerErrorComponent);



/***/ }),

/***/ "./src/app/core/services/busy.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/busy.service.ts ***!
  \***********************************************/
/*! exports provided: BusyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyService", function() { return BusyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");



let BusyService = class BusyService {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.busyRequestCount = 0;
    }
    busy() {
        this.busyRequestCount++;
        this.spinnerService.show(undefined, {
            type: 'timer',
            bdColor: 'rgba(255, 255, 255, 0.7)',
            color: '#333333'
        });
    }
    idle() {
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
        }
    }
};
BusyService.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
BusyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BusyService);



/***/ }),

/***/ "./src/app/core/test-error/test-error.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/test-error/test-error.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdGVzdC1lcnJvci90ZXN0LWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/test-error/test-error.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/test-error/test-error.component.ts ***!
  \*********************************************************/
/*! exports provided: TestErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestErrorComponent", function() { return TestErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let TestErrorComponent = class TestErrorComponent {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ngOnInit() {
    }
    get404Error() {
        this.http.get(this.baseUrl + 'product/42').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get500Error() {
        this.http.get(this.baseUrl + 'buggy/servererror').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get400Error() {
        this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get400ValidationError() {
        this.http.get(this.baseUrl + 'products/fortytwo').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
            this.validationErrors = error.errors;
        });
    }
};
TestErrorComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TestErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-test-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/test-error/test-error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-error.component.scss */ "./src/app/core/test-error/test-error.component.scss")).default]
    })
], TestErrorComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".featured {\n  height: 250px;\n}\n\nimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 600px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFNFMlxcRGVza3RvcFxcc2tpbmV0XFxjbGllbnQvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmVkIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi5mZWF0dXJlZCB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbmltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        exports: [
            _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/shared/components/basket-summary/basket-summary.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/basket-summary/basket-summary.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jhc2tldC1zdW1tYXJ5L2Jhc2tldC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/basket-summary/basket-summary.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/basket-summary/basket-summary.component.ts ***!
  \******************************************************************************/
/*! exports provided: BasketSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketSummaryComponent", function() { return BasketSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BasketSummaryComponent = class BasketSummaryComponent {
    constructor() {
        this.decrement = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.increment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isBasket = true;
        this.items = [];
        this.isOrder = false;
    }
    ngOnInit() {
    }
    decrementItemQuantity(item) {
        this.decrement.emit(item);
    }
    removeBasketItem(item) {
        this.remove.emit(item);
    }
    incrementItemQuantity(item) {
        this.increment.emit(item);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasketSummaryComponent.prototype, "decrement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasketSummaryComponent.prototype, "increment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BasketSummaryComponent.prototype, "remove", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BasketSummaryComponent.prototype, "isBasket", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BasketSummaryComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BasketSummaryComponent.prototype, "isOrder", void 0);
BasketSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basket-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basket-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/basket-summary/basket-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basket-summary.component.scss */ "./src/app/shared/components/basket-summary/basket-summary.component.scss")).default]
    })
], BasketSummaryComponent);



/***/ }),

/***/ "./src/app/shared/components/order-totals/order-totals.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/order-totals/order-totals.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL29yZGVyLXRvdGFscy9vcmRlci10b3RhbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/order-totals/order-totals.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/order-totals/order-totals.component.ts ***!
  \**************************************************************************/
/*! exports provided: OrderTotalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTotalsComponent", function() { return OrderTotalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderTotalsComponent = class OrderTotalsComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderTotalsComponent.prototype, "shippingPrice", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderTotalsComponent.prototype, "subtotal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderTotalsComponent.prototype, "total", void 0);
OrderTotalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-totals',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-totals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/order-totals/order-totals.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-totals.component.scss */ "./src/app/shared/components/order-totals/order-totals.component.scss")).default]
    })
], OrderTotalsComponent);



/***/ }),

/***/ "./src/app/shared/components/pager/pager.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/pager/pager.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/pager/pager.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/pager/pager.component.ts ***!
  \************************************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagerComponent = class PagerComponent {
    constructor() {
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onPagerChange(event) {
        this.pageChanged.emit(event.page);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "totalCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "pageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "pageNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PagerComponent.prototype, "pageChanged", void 0);
PagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pager/pager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pager.component.scss */ "./src/app/shared/components/pager/pager.component.scss")).default]
    })
], PagerComponent);



/***/ }),

/***/ "./src/app/shared/components/paging-header/paging-header.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/paging-header/paging-header.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2luZy1oZWFkZXIvcGFnaW5nLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/paging-header/paging-header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/paging-header/paging-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: PagingHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingHeaderComponent", function() { return PagingHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagingHeaderComponent = class PagingHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagingHeaderComponent.prototype, "pageNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagingHeaderComponent.prototype, "pageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagingHeaderComponent.prototype, "totalCount", void 0);
PagingHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paging-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paging-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paging-header/paging-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paging-header.component.scss */ "./src/app/shared/components/paging-header/paging-header.component.scss")).default]
    })
], PagingHeaderComponent);



/***/ }),

/***/ "./src/app/shared/components/stepper/stepper.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/stepper/stepper.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.nav-link {\n  background: #e9ecef;\n  border-radius: 0;\n  border: none;\n}\nbutton.nav-link:focus {\n  outline: none;\n}\nbutton.nav-link.active:hover {\n  color: white;\n}\nbutton.nav-link :active {\n  outline: none;\n}\nbutton.nav-link.active:focus {\n  outline: none;\n}\nbutton.nav-link:disabled:not(.active) {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RlcHBlci9DOlxcVXNlcnNcXFNFMlxcRGVza3RvcFxcc2tpbmV0XFxjbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcc3RlcHBlclxcc3RlcHBlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FEQ0k7RUFDSSxZQUFBO0FDQ1I7QURDSTtFQUNJLGFBQUE7QUNDUjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FEQ0k7RUFDSSxXQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ubmF2LWxpbmsge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgICYuYWN0aXZlOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxuICAgICYgOmFjdGl2ZSB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgICYuYWN0aXZlOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgJjpkaXNhYmxlZDpub3QoLmFjdGl2ZSkge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG59IiwiYnV0dG9uLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuYnV0dG9uLm5hdi1saW5rOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJ1dHRvbi5uYXYtbGluay5hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5idXR0b24ubmF2LWxpbmsgOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5idXR0b24ubmF2LWxpbmsuYWN0aXZlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJ1dHRvbi5uYXYtbGluazpkaXNhYmxlZDpub3QoLmFjdGl2ZSkge1xuICBjb2xvcjogIzMzMztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/stepper/stepper.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/stepper/stepper.component.ts ***!
  \****************************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var StepperComponent_1;



let StepperComponent = StepperComponent_1 = class StepperComponent extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"] {
    ngOnInit() {
        this.linear = this.linearModeSelected;
    }
    onClick(index) {
        this.selectedIndex = index;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], StepperComponent.prototype, "linearModeSelected", void 0);
StepperComponent = StepperComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-stepper',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stepper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/stepper/stepper.component.html")).default,
        providers: [{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"], useExisting: StepperComponent_1 }],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stepper.component.scss */ "./src/app/shared/components/stepper/stepper.component.scss")).default]
    })
], StepperComponent);



/***/ }),

/***/ "./src/app/shared/components/text-input/text-input.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/text-input/text-input.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: 0.75rem;\n}\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::placeholder {\n  color: transparent;\n}\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n/* Fallback for Edge\n    -------------------------------------------------- */\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n/* Fallback for IE\n    -------------------------------------------------- */\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input:-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n.loader {\n  position: absolute;\n  width: auto;\n  top: 15px;\n  right: 10px;\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1pbnB1dC9DOlxcVXNlcnNcXFNFMlxcRGVza3RvcFxcc2tpbmV0XFxjbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdGV4dC1pbnB1dFxcdGV4dC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBOztFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQWtCLHNDQUFBO0VBQ2xCLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUFjLG9DQUFBO0VBQ2QsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRElBO0VBQ0Usa0JBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQ0dGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEQUE7d0RBQUE7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUNHRjs7RUREQTtJQUNFLFdBQUE7RUNJRjtBQUNGOztBRERBO3dEQUFBOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0VDR0Y7O0VEREE7SUFDRSxXQUFBO0VDSUY7QUFDRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxyXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcclxuICBoZWlnaHQ6IDMuMTI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAwOyAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGN1cnNvcjogdGV4dDsgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xyXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuLyogRmFsbGJhY2sgZm9yIEVkZ2VcclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbn1cclxuXHJcbi8qIEZhbGxiYWNrIGZvciBJRVxyXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcclxuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogYXV0bztcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufSIsIi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IHRleHQ7XG4gIC8qIE1hdGNoIHRoZSBpbnB1dCB1bmRlciB0aGUgbGFiZWwgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLyogRmFsbGJhY2sgZm9yIEVkZ2VcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuLyogRmFsbGJhY2sgZm9yIElFXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59XG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogYXV0bztcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/text-input/text-input.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/text-input/text-input.component.ts ***!
  \**********************************************************************/
/*! exports provided: TextInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputComponent", function() { return TextInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let TextInputComponent = class TextInputComponent {
    constructor(controlDir) {
        this.controlDir = controlDir;
        this.type = 'text';
        this.controlDir.valueAccessor = this;
    }
    ngOnInit() {
        const control = this.controlDir.control;
        const validators = control.validator ? [control.validator] : [];
        const asyncValidators = control.asyncValidator ? [control.asyncValidator] : [];
        control.setValidators(validators);
        control.setAsyncValidators(asyncValidators);
        control.updateValueAndValidity();
    }
    onChange(event) {
    }
    onTouched() {
    }
    writeValue(obj) {
        this.input.nativeElement.value = obj || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
};
TextInputComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: true })
], TextInputComponent.prototype, "input", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextInputComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextInputComponent.prototype, "label", void 0);
TextInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/text-input/text-input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text-input.component.scss */ "./src/app/shared/components/text-input/text-input.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])())
], TextInputComponent);



/***/ }),

/***/ "./src/app/shared/models/basket.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/models/basket.ts ***!
  \*****************************************/
/*! exports provided: Basket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basket", function() { return Basket; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


class Basket {
    constructor() {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        this.items = [];
    }
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/paging-header/paging-header.component */ "./src/app/shared/components/paging-header/paging-header.component.ts");
/* harmony import */ var _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pager/pager.component */ "./src/app/shared/components/pager/pager.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/order-totals/order-totals.component */ "./src/app/shared/components/order-totals/order-totals.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/text-input/text-input.component */ "./src/app/shared/components/text-input/text-input.component.ts");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/stepper/stepper.component */ "./src/app/shared/components/stepper/stepper.component.ts");
/* harmony import */ var _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/basket-summary/basket-summary.component */ "./src/app/shared/components/basket-summary/basket-summary.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");















let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"],
            _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"],
            _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_7__["OrderTotalsComponent"],
            _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__["TextInputComponent"],
            _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__["StepperComponent"],
            _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_13__["BasketSummaryComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]
        ],
        exports: [
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"],
            _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"],
            _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
            _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_7__["OrderTotalsComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"],
            _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_10__["TextInputComponent"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"],
            _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_12__["StepperComponent"],
            _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_13__["BasketSummaryComponent"],
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'https://localhost:5001/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SE2\Desktop\skinet\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map