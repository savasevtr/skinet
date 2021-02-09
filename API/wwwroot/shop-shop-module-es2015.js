(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-details/product-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-details/product-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n    <div class=\"row\" *ngIf=\"product\">\n        \n        <div class=\"col-6\">\n            <img src=\"{{ product.pictureUrl }}\" alt=\"{{ product.name }}\" class=\"img-fluid w-100\">\n        </div>\n\n        <div class=\"col-6\">\n            <h3>{{ product.name }}</h3>\n            <p style=\"font-size: 2em;\">{{ product.price | currency }}</p>\n\n            <div class=\"d-flex justify-content-start align-items-center\">\n                <i (click)=\"decrementQuantity()\" class=\"fa fa-minus-circle text-warning mr-2\" style=\"cursor: pointer; font-size: 2em;\"></i>\n                <span class=\"font-weight-bold\" style=\"font-size: 1.5em;\">{{ quantity }}</span>\n                <i (click)=\"incrementQuantity()\" class=\"fa fa-plus-circle text-warning mx-2\" style=\"cursor: pointer; font-size: 2em;\"></i>\n                <button (click)=\"addItemToBasket()\" class=\"btn btn-outline-primary ml-4\">Add to Cart</button>\n            </div>\n        </div>\n\n        <div class=\"row mt-5\">\n            <div class=\"col-12 ml-3\">\n                <h4>Description</h4>\n                <p>{{ product.description }}</p>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-item/product-item.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-item/product-item.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card h-100 shadow-sm\">\n\n    <div class=\"image position-relative\" style=\"cursor: pointer;\">\n        <img src=\"{{ product.pictureUrl }}\" alt=\"{{ product.name }}\" class=\"img-fluid bg-info\"/>\n        <div class=\"d-flex align-items-center justify-content-center hover-overlay\">\n            <button (click)=\"addItemToBasket()\" type=\"button\" class=\"btn btn-sm btn-primary fa fa-shopping-cart mr-2\"></button>\n            <button routerLink=\"/shop/{{ product.id }}\" type=\"button\" class=\"btn btn-sm btn-primary\">View</button>\n        </div>\n    </div>\n\n    <div class=\"card-body d-flex flex-column\">\n        <a routerLink=\"/shop/{{ product.id }}\">\n            <h6 class=\"text-uppercase\">{{ product.name }}</h6>\n        </a>\n        <span class=\"mb-2\">{{ product.price | currency }}</span>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n    <div class=\"row\">\n        <section class=\"col-3\">\n            <ng-container *ngIf=\"types && brands\">\n                <h5 class=\"text-warning ml-1 mt-3 mb-4\">Sort</h5>\n                <select class=\"custom-select mb-4\" (change)=\"onSortSelected($event.target.value)\">\n                    <option *ngFor=\"let sort of sortOptions\"\n                        [selected]=\"shopParams.sort === sort.value\"\n                        [value]=\"sort.value\">\n                        {{ sort.name }}\n                    </option>\n                </select>\n    \n                <h5 class=\"text-warning ml-1\">Brands</h5>\n                <ul class=\"list-group my-4\">\n                    <li class=\"list-group-item\"\n                        *ngFor=\"let brand of brands\"\n                        [class.active]=\"brand.id === this.shopParams.brandId\"\n                        (click)=\"onBrandSelected(brand.id)\"\n                    >\n                        {{ brand.name }}\n                    </li>\n                </ul>\n    \n                <h5 class=\"text-warning ml-1\">Types</h5>\n                <ul class=\"list-group my-4\">\n                    <li class=\"list-group-item\"\n                        *ngFor=\"let type of types\"\n                        [class.active]=\"type.id === this.shopParams.typeId\"\n                        (click)=\"onTypeSelected(type.id)\">\n                        {{ type.name }}\n                    </li>\n                </ul>\n            </ng-container>\n        </section>\n\n        <section class=\"col-9\" *ngIf=\"products\">\n            <div class=\"d-flex justify-content-between align-items-center pb-2\">\n                <app-paging-header\n                    [totalCount]=\"totalCount\"\n                    [pageSize]=\"shopParams.pageSize\"\n                    [pageNumber]=\"shopParams.pageNumber\">\n                </app-paging-header>\n\n                <div class=\"form-inline\">\n                    <input (keyup.enter)=\"onSearch()\" type=\"text\" class=\"form-control mr-2\" #search style=\"width: 300px\" placeholder=\"Search\" />\n                    <button (click)=\"onSearch()\" class=\"btn btn-outline-primary my-2\">Search</button>\n                    <button (click)=\"onReset()\" class=\"btn btn-outline-success ml-2 my-2\">Reset</button>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-4 mb-4\" *ngFor=\"let item of products\">\n                    <app-product-item [product]=\"item\"></app-product-item>\n                </div>\n            </div>\n\n            <div class=\"d-flex justify-content-center\" *ngIf=\"totalCount > 0\">\n                <app-pager\n                    [pageSize]=\"shopParams.pageSize\"\n                    [totalCount]=\"totalCount\"\n                    [pageNumber]=\"shopParams.pageNumber\"\n                    (pageChanged)=\"onPageChanged($event)\">\n                </app-pager>\n            </div>\n        </section>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/shared/models/pagination.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/pagination.ts ***!
  \*********************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Pagination {
    constructor() {
        this.data = [];
    }
}


/***/ }),

/***/ "./src/app/shared/models/shopParams.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/shopParams.ts ***!
  \*********************************************/
/*! exports provided: ShopParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopParams", function() { return ShopParams; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ShopParams {
    constructor() {
        this.brandId = 0;
        this.typeId = 0;
        this.sort = 'name';
        this.pageNumber = 1;
        this.pageSize = 6;
    }
}


/***/ }),

/***/ "./src/app/shop/product-details/product-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shop/product-details/product-details.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shop/product-details/product-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shop/product-details/product-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basket/basket.service */ "./src/app/basket/basket.service.ts");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xng-breadcrumb */ "./node_modules/xng-breadcrumb/fesm2015/xng-breadcrumb.js");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shop.service */ "./src/app/shop/shop.service.ts");






let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(shopService, activateRoute, breadcrumbService, basketService) {
        this.shopService = shopService;
        this.activateRoute = activateRoute;
        this.breadcrumbService = breadcrumbService;
        this.basketService = basketService;
        this.quantity = 1;
        this.breadcrumbService.set('@productDetails', '');
    }
    ngOnInit() {
        this.loadProduct();
    }
    addItemToBasket() {
        this.basketService.addItemToBasket(this.product, this.quantity);
    }
    incrementQuantity() {
        this.quantity++;
    }
    decrementQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
    loadProduct() {
        this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product => {
            this.product = product;
            this.breadcrumbService.set('@productDetails', product.name);
        }, error => {
            console.log(error);
        });
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"] },
    { type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"] }
];
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-details/product-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-details.component.scss */ "./src/app/shop/product-details/product-details.component.scss")).default]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/shop/product-item/product-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shop/product-item/product-item.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  width: 30%;\n  height: 40px;\n}\n\n.image :hover {\n  opacity: 1;\n}\n\n.image :hover button {\n  transform: none;\n  opacity: 1;\n}\n\n.hover-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.5);\n  opacity: 0;\n  transition: all 0.5s;\n}\n\n.hover-overlay button {\n  z-index: 1000;\n  transition: all 0.5s;\n}\n\n.hover-overlay button:first-of-type {\n  transform: translateX(-20px);\n}\n\n.hover-overlay button:last-of-type {\n  transform: translateX(20px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9wcm9kdWN0LWl0ZW0vQzpcXFVzZXJzXFxTRTJcXERlc2t0b3BcXHNraW5ldFxcY2xpZW50L3NyY1xcYXBwXFxzaG9wXFxwcm9kdWN0LWl0ZW1cXHByb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hvcC9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURBSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FDRVI7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0FDQ1I7O0FEQ0k7RUFDSSw0QkFBQTtBQ0NSOztBRENJO0VBQ0ksMkJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmltYWdlIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgJiBidXR0b24ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaG92ZXItb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gICAgJiBidXR0b24ge1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICB9XHJcbiAgICAmIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gICAgfVxyXG4gICAgJiBidXR0b246bGFzdC1vZi10eXBlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICB9XHJcbn0iLCIuYnRuIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uaW1hZ2UgOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5pbWFnZSA6aG92ZXIgYnV0dG9uIHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaG92ZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmhvdmVyLW92ZXJsYXkgYnV0dG9uIHtcbiAgei1pbmRleDogMTAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uaG92ZXItb3ZlcmxheSBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG59XG4uaG92ZXItb3ZlcmxheSBidXR0b246bGFzdC1vZi10eXBlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shop/product-item/product-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shop/product-item/product-item.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basket/basket.service */ "./src/app/basket/basket.service.ts");



let ProductItemComponent = class ProductItemComponent {
    constructor(basketService) {
        this.basketService = basketService;
    }
    ngOnInit() {
    }
    addItemToBasket() {
        this.basketService.addItemToBasket(this.product);
    }
};
ProductItemComponent.ctorParameters = () => [
    { type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemComponent.prototype, "product", void 0);
ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-item/product-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-item.component.scss */ "./src/app/shop/product-item/product-item.component.scss")).default]
    })
], ProductItemComponent);



/***/ }),

/***/ "./src/app/shop/shop-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shop/shop-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/shop/product-details/product-details.component.ts");






const routes = [
    { path: '', component: _shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"] },
    { path: ':id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"], data: { breadcrumb: { alias: 'productDetails' } } },
];
let ShopRoutingModule = class ShopRoutingModule {
};
ShopRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]
    })
], ShopRoutingModule);



/***/ }),

/***/ "./src/app/shop/shop.component.scss":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-group-item {\n  cursor: pointer;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1.1em;\n}\n.list-group-item:focus {\n  outline: none;\n}\n.list-group-item.active {\n  border-radius: 10px;\n}\n.list-group-item:not(.active):hover {\n  color: white;\n  background-color: rgba(233, 86, 32, 0.705);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9DOlxcVXNlcnNcXFNFMlxcRGVza3RvcFxcc2tpbmV0XFxjbGllbnQvc3JjXFxhcHBcXHNob3BcXHNob3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nob3Avc2hvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0FDQ1I7QURFSTtFQUNJLG1CQUFBO0FDQVI7QURHSTtFQUNJLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9zaG9wL3Nob3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCguYWN0aXZlKTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCA4NiwgMzIsIDAuNzA1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59IiwiLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG4ubGlzdC1ncm91cC1pdGVtOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5saXN0LWdyb3VwLWl0ZW06bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgODYsIDMyLCAwLjcwNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/shopParams */ "./src/app/shared/models/shopParams.ts");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop.service */ "./src/app/shop/shop.service.ts");




let ShopComponent = class ShopComponent {
    constructor(shopService) {
        this.shopService = shopService;
        this.sortOptions = [
            { name: 'Alphabetical', value: 'name' },
            { name: 'Price: Low to High', value: 'priceAsc' },
            { name: 'Price: High to Low', value: 'priceDesc' }
        ];
        this.shopParams = this.shopService.getShopParams();
    }
    ngOnInit() {
        this.getProducts(true);
        this.getBrands();
        this.getTypes();
    }
    getProducts(useCache = false) {
        this.shopService.getProducts(useCache).subscribe(response => {
            this.products = response.data;
            this.totalCount = response.count;
        }, error => {
            console.log(error);
        });
    }
    getBrands() {
        this.shopService.getBrands().subscribe(response => {
            this.brands = [{ id: 0, name: 'All' }, ...response];
        }, error => {
            console.log(error);
        });
    }
    getTypes() {
        this.shopService.getTypes().subscribe(response => {
            this.types = [{ id: 0, name: 'All' }, ...response];
        }, error => {
            console.log(error);
        });
    }
    onBrandSelected(brandId) {
        const params = this.shopService.getShopParams();
        params.brandId = brandId;
        params.pageNumber = 1;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onTypeSelected(typeId) {
        const params = this.shopService.getShopParams();
        params.typeId = typeId;
        params.pageNumber = 1;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onSortSelected(sort) {
        const params = this.shopService.getShopParams();
        params.sort = sort;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onPageChanged(event) {
        const params = this.shopService.getShopParams();
        if (params.pageNumber !== event) {
            params.pageNumber = event;
            this.shopService.setShopParams(params);
            this.getProducts(true);
        }
    }
    onSearch() {
        const params = this.shopService.getShopParams();
        params.search = this.searchTerm.nativeElement.value;
        params.pageNumber = 1;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onReset() {
        this.searchTerm.nativeElement.value = '';
        this.shopParams = new _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_2__["ShopParams"]();
        this.shopService.setShopParams(this.shopParams);
        this.getProducts();
    }
};
ShopComponent.ctorParameters = () => [
    { type: _shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: false })
], ShopComponent.prototype, "searchTerm", void 0);
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.component.scss */ "./src/app/shop/shop.component.scss")).default]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/shop/shop.module.ts":
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-item/product-item.component */ "./src/app/shop/product-item/product-item.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/shop/product-details/product-details.component.ts");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop-routing.module */ "./src/app/shop/shop-routing.module.ts");








let ShopModule = class ShopModule {
};
ShopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"],
            _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__["ProductItemComponent"],
            _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_7__["ShopRoutingModule"]
        ]
    })
], ShopModule);



/***/ }),

/***/ "./src/app/shop/shop.service.ts":
/*!**************************************!*\
  !*** ./src/app/shop/shop.service.ts ***!
  \**************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/pagination */ "./src/app/shared/models/pagination.ts");
/* harmony import */ var _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/shopParams */ "./src/app/shared/models/shopParams.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let ShopService = class ShopService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.products = [];
        this.brands = [];
        this.types = [];
        this.pagination = new _shared_models_pagination__WEBPACK_IMPORTED_MODULE_4__["Pagination"]();
        this.shopParams = new _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_5__["ShopParams"]();
    }
    getProducts(useCache) {
        if (useCache === false) {
            this.products = [];
        }
        if (this.products.length > 0 && useCache === true) {
            const pagesReceived = Math.ceil(this.products.length / this.shopParams.pageSize);
            if (this.shopParams.pageNumber <= pagesReceived) {
                this.pagination.data = this.products.slice((this.shopParams.pageNumber - 1) * this.shopParams.pageSize, this.shopParams.pageNumber * this.shopParams.pageSize);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.pagination);
            }
        }
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (this.shopParams.brandId !== 0) {
            params = params.append('brandId', this.shopParams.brandId.toString());
        }
        if (this.shopParams.typeId !== 0) {
            params = params.append('typeId', this.shopParams.typeId.toString());
        }
        if (this.shopParams.search) {
            params = params.append('search', this.shopParams.search);
        }
        params = params.append('sort', this.shopParams.sort);
        params = params.append('pageIndex', this.shopParams.pageNumber.toString());
        params = params.append('pageSize', this.shopParams.pageSize.toString());
        return this.http.get(this.baseUrl + 'products', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            this.products = [...this.products, ...response.body.data];
            this.pagination = response.body;
            return this.pagination;
        }));
    }
    setShopParams(params) {
        this.shopParams = params;
    }
    getShopParams() {
        return this.shopParams;
    }
    getProduct(id) {
        const product = this.products.find(p => p.id == id);
        if (product) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(product);
        }
        return this.http.get(this.baseUrl + 'products/' + id);
    }
    getBrands() {
        if (this.brands.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.brands);
        }
        return this.http.get(this.baseUrl + 'products/brands').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            this.brands = response;
            return response;
        }));
    }
    getTypes() {
        if (this.types.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.types);
        }
        return this.http.get(this.baseUrl + 'products/types').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            this.types = response;
            return response;
        }));
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShopService);



/***/ })

}]);
//# sourceMappingURL=shop-shop-module-es2015.js.map