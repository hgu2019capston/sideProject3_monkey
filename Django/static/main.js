(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");





var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'omok', component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#digitalClock{\n    font-size: 150px;\n    color:      rgb(0, 19, 26);\n    text-align: center;\n    font-family: 'Istok Web', sans-serif;\n}\n#clock{\n     border:1px solid rgb(200,200,200);\n     border-radius: 5px;\n}\n#board {\n   margin: 0 auto;\n   background-image: url(\"/static/images/board.jpg\");\n   background-repeat: no-repeat;\n   background-position: center-top;\n   width: 768px;\n   height: 768px;\n   background-size: contain;\n   position: relative;\n}\n\n        \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7QUFDQTtLQUNLLGlDQUFpQztLQUNqQyxrQkFBa0I7QUFDdkI7QUFFQTtHQUNHLGNBQWM7R0FDZCxpREFBaUQ7R0FDakQsNEJBQTRCO0dBQzVCLCtCQUErQjtHQUMvQixZQUFZO0dBQ1osYUFBYTtHQUNiLHdCQUF3QjtHQUN4QixrQkFBa0I7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaWdpdGFsQ2xvY2t7XG4gICAgZm9udC1zaXplOiAxNTBweDtcbiAgICBjb2xvcjogICAgICByZ2IoMCwgMTksIDI2KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdJc3RvayBXZWInLCBzYW5zLXNlcmlmO1xufVxuI2Nsb2Nre1xuICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigyMDAsMjAwLDIwMCk7XG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2JvYXJkIHtcbiAgIG1hcmdpbjogMCBhdXRvO1xuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWFnZXMvYm9hcmQuanBnXCIpO1xuICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlci10b3A7XG4gICB3aWR0aDogNzY4cHg7XG4gICBoZWlnaHQ6IDc2OHB4O1xuICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4gICAgICAgIFxuIl19 */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 \" id=\"clock\">\n                <div id=\"digitalClock\">{{currentTime}}</div>\n        </div>\n    </div>\n</div>\n\n<div style=\"text-align:center\">\n  <h1>\n    Connect 6\n  </h1>\n  <button (click)=\"click1()\" > START </button>\n  <h2> Turn: {{ turn }} 회 </h2>\n</div>\n\n<br/>\n<body>\n    <canvas id = \"board\" width=768px height=768px></canvas>\n</body>\n        \n\n\n  \n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent, Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var GameComponent = /** @class */ (function () {
    function GameComponent(http) {
        this.http = http;
        this.currentTime = 0;
        this.chk = 0;
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000, 1000);
        this.turn = 0;
        this.old_turn = 0;
        this.products = [];
        this.c1 = new Result();
        this.turn = 0;
        this.c1.result = "playing...";
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent.prototype.click1 = function () {
        var _this = this;
        if (this.chk == 0) {
            this.showDigitalClock();
            this.chk += 1;
        }
        else {
            alert("NO");
        }
        this.sub = this.source.subscribe(function (t) { return _this.onTimeOut(); });
    };
    GameComponent.prototype.showDigitalClock = function () {
        var _this = this;
        this.currentTime += 1;
        this.intervalId = setTimeout(function () {
            _this.showDigitalClock();
        }, 1000);
    };
    GameComponent.prototype.onTimeOut = function () {
        var _this = this;
        this.getAllData().subscribe(function (data) {
            _this.products = data;
            _this.old_turn = _this.turn;
            _this.turn = _this.products.length;
            if (_this.currentTime < 10 && _this.old_turn < _this.turn) {
                _this.currentTime = 0;
            }
            if (_this.currentTime > 9 && _this.old_turn == _this.turn) {
                alert("Game over");
                _this.sub.unsubscribe();
                clearTimeout(_this.intervalId);
            }
            if (_this.c1.result != "playing...") {
                alert(_this.c1.result);
                _this.sub.unsubscribe();
                clearTimeout(_this.intervalId);
            }
        });
        var canvas = document.getElementById('board');
        if (canvas.getContext) {
            for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                var entry = _a[_i];
                var color = entry.color;
                var coor_X1 = entry.x1;
                var coor_Y1 = entry.y1;
                var coor_X2 = entry.x2;
                var coor_Y2 = entry.y2;
                var ctx = canvas.getContext('2d');
                var y1;
                var y2;
                switch (coor_X1) {
                    case 'A':
                        y1 = 18 * 40;
                        break;
                    case 'B':
                        y1 = 17 * 40;
                        break;
                    case 'C':
                        y1 = 16 * 40;
                        break;
                    case 'D':
                        y1 = 15 * 40;
                        break;
                    case 'E':
                        y1 = 14 * 40;
                        break;
                    case 'F':
                        y1 = 13 * 40;
                        break;
                    case 'G':
                        y1 = 12 * 40;
                        break;
                    case 'H':
                        y1 = 11 * 40;
                        break;
                    case 'I':
                        y1 = 10 * 40;
                        break;
                    case 'J':
                        y1 = 9 * 40;
                        break;
                    case 'K':
                        y1 = 8 * 40;
                        break;
                    case 'L':
                        y1 = 7 * 40;
                        break;
                    case 'M':
                        y1 = 6 * 40;
                        break;
                    case 'N':
                        y1 = 5 * 40;
                        break;
                    case 'O':
                        y1 = 4 * 40;
                        break;
                    case 'P':
                        y1 = 3 * 40;
                        break;
                    case 'Q':
                        y1 = 2 * 40;
                        break;
                    case 'R':
                        y1 = 1 * 40;
                        break;
                    case 'S':
                        y1 = 0 * 40;
                        break;
                }
                switch (coor_X2) {
                    case 'A':
                        y2 = 18 * 40;
                        break;
                    case 'B':
                        y2 = 17 * 40;
                        break;
                    case 'C':
                        y2 = 16 * 40;
                        break;
                    case 'D':
                        y2 = 15 * 40;
                        break;
                    case 'E':
                        y2 = 14 * 40;
                        break;
                    case 'F':
                        y2 = 13 * 40;
                        break;
                    case 'G':
                        y2 = 12 * 40;
                        break;
                    case 'H':
                        y2 = 11 * 40;
                        break;
                    case 'I':
                        y2 = 10 * 40;
                        break;
                    case 'J':
                        y2 = 9 * 40;
                        break;
                    case 'K':
                        y2 = 8 * 40;
                        break;
                    case 'L':
                        y2 = 7 * 40;
                        break;
                    case 'M':
                        y2 = 6 * 40;
                        break;
                    case 'N':
                        y2 = 5 * 40;
                        break;
                    case 'O':
                        y2 = 4 * 40;
                        break;
                    case 'P':
                        y2 = 3 * 40;
                        break;
                    case 'Q':
                        y2 = 2 * 40;
                        break;
                    case 'R':
                        y2 = 1 * 40;
                        break;
                    case 'S':
                        y2 = 0 * 40;
                        break;
                }
                var x1 = (coor_Y1 - 1) * 40;
                var x2 = (coor_Y2 - 1) * 40;
                ctx.beginPath();
                ctx.arc(x1 + 24, y1 + 24, 20, 0, 2 * Math.PI, false);
                ctx.fillStyle = color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.strokeSytle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x2 + 24, y2 + 24, 20, 0, 2 * Math.PI, false);
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();
                this.resultData().subscribe(function (m) { return _this.c1.result = m.toString(); });
            }
        }
    };
    GameComponent.prototype.resultData = function () {
        return this.http.get("./resultdata/");
    };
    GameComponent.prototype.getAllData = function () {
        return this.http
            .get("./stone/");
    };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GameComponent);
    return GameComponent;
}());

var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div style = 'text-align:center'>\n  <form action=\"/omok/\" method=\"post\" novalidate>\n    <button> Game Start </button>\n  </form>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ggaggo/connect6_monkey/Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map