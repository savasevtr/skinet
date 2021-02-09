function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-center mt-5\">\n    <div class=\"col-4\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div class=\"text-center mb-4\">\n                <h1 class=\"h3 mb-3 font-weight-normal\">Login</h1>\n            </div>\n\n            <app-text-input formControlName=\"email\" [label]=\"'Email Address'\"></app-text-input>\n            <app-text-input formControlName=\"password\" [label]=\"'Password'\" [type]=\"'password'\"></app-text-input>\n\n            <!-- <div class=\"form-label-group\">\n                <input formControlName=\"email\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required=\"\"\n                    autofocus=\"\">\n                <label for=\"inputEmail\">Email address</label>\n                <span class=\"text-danger\"\n                    *ngIf=\"loginForm.get('email').invalid\n                    && loginForm.get('email').touched\n                    && loginForm.get('email').errors['required']\">\n                    Email address is required\n                </span>\n                <span class=\"text-danger\"\n                    *ngIf=\"loginForm.get('email').invalid\n                    && loginForm.get('email').touched\n                    && loginForm.get('email').errors['pattern']\">\n                    Email address is not valid\n                </span>\n            </div>\n\n            <div class=\"form-label-group\">\n                <input formControlName=\"password\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n                <label for=\"inputPassword\">Password</label>\n                <span class=\"text-danger\"\n                    *ngIf=\"loginForm.get('password').invalid\n                    && loginForm.get('password').touched\n                    && loginForm.get('password').errors['required']\">\n                    Password is required\n                </span>\n            </div> -->\n\n            <button [disabled]=\"loginForm.invalid\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-center mt-5\">\n    <div class=\"col-4\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n            <div class=\"text-center mb-4\">\n                <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\n            </div>\n\n            <app-text-input formControlName=\"displayName\" [label]=\"'Display Name'\"></app-text-input>\n            <app-text-input formControlName=\"email\" [label]=\"'Email Address'\"></app-text-input>\n            <app-text-input formControlName=\"password\" [label]=\"'Password'\" [type]=\"'password'\"></app-text-input>\n\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"errors\">\n                <li *ngFor=\"let error of errors\">\n                    {{ error }}\n                </li>\n            </ul>\n\n            <button [disabled]=\"registerForm.invalid\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Register</button>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/account/account-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/account/account-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AccountRoutingModule */

  /***/
  function srcAppAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () {
      return AccountRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/account/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/account/register/register.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }];

    var AccountRoutingModule = function AccountRoutingModule() {
      _classCallCheck(this, AccountRoutingModule);
    };

    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccountRoutingModule);
    /***/
  },

  /***/
  "./src/app/account/account.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/account/account.module.ts ***!
    \*******************************************/

  /*! exports provided: AccountModule */

  /***/
  function srcAppAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
      return AccountModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/account/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/account/register/register.component.ts");
    /* harmony import */


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/account/account-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AccountModule = function AccountModule() {
      _classCallCheck(this, AccountModule);
    };

    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
    })], AccountModule);
    /***/
  },

  /***/
  "./src/app/account/login/login.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/account/login/login.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/account/login/login.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/account/login/login.component.ts ***!
    \**************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAccountLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../account.service */
    "./src/app/account/account.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(accountService, router, activatedRoute) {
        _classCallCheck(this, LoginComponent);

        this.accountService = accountService;
        this.router = router;
        this.activatedRoute = activatedRoute;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
          this.createLoginForm();
        }
      }, {
        key: "createLoginForm",
        value: function createLoginForm() {
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.accountService.login(this.loginForm.value).subscribe(function () {
            _this.router.navigateByUrl(_this.returnUrl);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/account/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/account/register/register.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/account/register/register.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/account/register/register.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/account/register/register.component.ts ***!
    \********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAccountRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../account.service */
    "./src/app/account/account.service.ts");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(formBuilder, accountService, router) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.router = router;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createRegisterForm();
        }
      }, {
        key: "createRegisterForm",
        value: function createRegisterForm() {
          this.registerForm = this.formBuilder.group({
            displayName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')], [this.validateEmailNotTaken()]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.accountService.register(this.registerForm.value).subscribe(function (response) {
            _this2.router.navigateByUrl('/shop');
          }, function (error) {
            _this2.errors = error.errors;
          });
        }
      }, {
        key: "validateEmailNotTaken",
        value: function validateEmailNotTaken() {
          var _this3 = this;

          return function (control) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
              if (!control.value) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
              }

              return _this3.accountService.checkEmailExists(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                return res ? {
                  emailExists: true
                } : null;
              }));
            }));
          };
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/account/register/register.component.scss"))["default"]]
    })], RegisterComponent);
    /***/
  }
}]);
//# sourceMappingURL=account-account-module-es5.js.map