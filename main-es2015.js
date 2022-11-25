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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clock/clock.component */ "./src/app/clock/clock.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AppComponent {
    constructor() {
        this.title = 'vrijmibo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-clock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } }, directives: [_background_background_component__WEBPACK_IMPORTED_MODULE_1__["BackgroundComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _clock_clock_component__WEBPACK_IMPORTED_MODULE_3__["ClockComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n}\n\napp-clock[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JkaGFtZXIvcHJvamVjdHMvdnJpam1pYm8tZGlvbi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0NEOztBRENBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNFRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIFxuXHRkaXNwbGF5OiBmbGV4XG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoXG5cdGp1c3RpZnktY29udGVudDogc3RyZXRjaFxuXHR3aWR0aDogMTAwJVxuXHRoZWlnaHQ6IDEwMCVcblx0cG9zaXRpb246IGFic29sdXRlXG5cdHRvcDogMHB4XG5cbmFwcC1jbG9jayBcblx0d2lkdGg6IDEwMCVcblx0aGVpZ2h0OiAxMDAlIiwiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xufVxuXG5hcHAtY2xvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer/timer.component.ts");
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clock/clock.component */ "./src/app/clock/clock.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _services_day_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/day.service */ "./src/app/services/day.service.ts");
/* harmony import */ var _services_heartbeat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/heartbeat.service */ "./src/app/services/heartbeat.service.ts");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/options.service */ "./src/app/services/options.service.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_day_service__WEBPACK_IMPORTED_MODULE_9__["DayService"],
        _services_heartbeat_service__WEBPACK_IMPORTED_MODULE_10__["HeartbeatService"],
        _services_options_service__WEBPACK_IMPORTED_MODULE_11__["OptionsService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
        _clock_clock_component__WEBPACK_IMPORTED_MODULE_6__["ClockComponent"],
        _title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
        _background_background_component__WEBPACK_IMPORTED_MODULE_12__["BackgroundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
                    _clock_clock_component__WEBPACK_IMPORTED_MODULE_6__["ClockComponent"],
                    _title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                    _background_background_component__WEBPACK_IMPORTED_MODULE_12__["BackgroundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [
                    _services_day_service__WEBPACK_IMPORTED_MODULE_9__["DayService"],
                    _services_heartbeat_service__WEBPACK_IMPORTED_MODULE_10__["HeartbeatService"],
                    _services_options_service__WEBPACK_IMPORTED_MODULE_11__["OptionsService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/background/background.component.ts":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_gif_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/gif.service */ "./src/app/services/gif.service.ts");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/options.service */ "./src/app/services/options.service.ts");




const _c0 = ["gif"];
class BackgroundComponent {
    constructor(gifService, optionsService) {
        this.gifService = gifService;
        this.optionsService = optionsService;
        this.gifContext = 'cheers';
        this.interval = 2 * 60 * 1000;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.updateGif(this.gifContext);
        this.optionsService.currentGifContext.subscribe(newGifContext => {
            this.gifContext = newGifContext;
            this.updateGif(this.gifContext);
        });
        this.runner = setInterval(() => this.updateGif(this.gifContext), this.interval);
    }
    ngOnDestroy() {
        clearInterval(this.runner);
    }
    updateGif(gifContext) {
        this.gifService.getNext(gifContext, data => {
            this.gif.nativeElement.style.backgroundImage = 'URL("' + data.images.original.url + '")';
        });
    }
}
BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gif_service__WEBPACK_IMPORTED_MODULE_1__["GifService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_options_service__WEBPACK_IMPORTED_MODULE_2__["OptionsService"])); };
BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackgroundComponent, selectors: [["app-background"]], viewQuery: function BackgroundComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gif = _t.first);
    } }, decls: 3, vars: 0, consts: [[1, "gif"], ["gif", ""], [1, "overlay"]], template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".gif[_ngcontent-%COMP%] {\n  background-image: url(\"https://media.giphy.com/media/fGUji1k2D8Umk4U8Eu/giphy.gif\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: rgba(44, 62, 80, 0.1);\n  background-image: url('pattern.png');\n  background-position: center;\n  background-repeat: repeat;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JkaGFtZXIvcHJvamVjdHMvdnJpam1pYm8tZGlvbi9zcmMvYXBwL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUZBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdpZlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvZkdVamkxazJEOFVtazRVOEV1L2dpcGh5LmdpZicpXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcblxuLm92ZXJsYXlcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LDYyLDgwICwgMC4xKVxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3BhdHRlcm4ucG5nJylcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0XG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCUiLCIuZ2lmIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvZkdVamkxazJEOFVtazRVOEV1L2dpcGh5LmdpZlwiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LCA2MiwgODAsIDAuMSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9wYXR0ZXJuLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-background',
                templateUrl: './background.component.html',
                styleUrls: ['./background.component.sass']
            }]
    }], function () { return [{ type: _services_gif_service__WEBPACK_IMPORTED_MODULE_1__["GifService"] }, { type: _services_options_service__WEBPACK_IMPORTED_MODULE_2__["OptionsService"] }]; }, { gif: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gif', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/clock/clock.component.ts":
/*!******************************************!*\
  !*** ./src/app/clock/clock.component.ts ***!
  \******************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timer/timer.component */ "./src/app/timer/timer.component.ts");
/* harmony import */ var _services_heartbeat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/heartbeat.service */ "./src/app/services/heartbeat.service.ts");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/options.service */ "./src/app/services/options.service.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ClockComponent_app_timer_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-timer", 5);
} if (rf & 2) {
    const timer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timer", timer_r2);
} }
class ClockComponent {
    constructor(heartbeatService, optionsService) {
        this.heartbeatService = heartbeatService;
        this.optionsService = optionsService;
        this.clock = { name: 'Vrijmibo', target: { weekday: 5, hour: 16, minute: 0, second: 0 }, active: true };
        this.timers = [
            { title: 'dagen', max: 7, color: '#d86b6b', heartbeat: this.heartbeatService.dayHeartbeat },
            { title: 'uren', max: 24, color: '#ecefcb', heartbeat: this.heartbeatService.hourHeartbeat },
            { title: 'minuten', max: 60, color: '#acc742', heartbeat: this.heartbeatService.minHeartbeat },
            { title: 'seconden', max: 60, color: '#7895d5', heartbeat: this.heartbeatService.secHeartbeat }
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.startClock();
    }
    ngOnDestroy() {
        this.done.unsubscribe();
    }
    finished() {
        this.stopClock();
        this.soundAlarm();
    }
    soundAlarm() {
        const audio = new Audio();
        audio.src = '/assets/sound/Air-Horn-Sound-Effect.mp3';
        audio.load();
        audio.play();
    }
    startClock() {
        this.done = this.heartbeatService.doneEvent.subscribe(() => this.finished());
        this.heartbeatService.start(this.clock.target);
        this.optionsService.currentClock.subscribe(clock => {
            this.heartbeatService.start(clock.target);
            this.timerComponents.forEach(timer => timer.run());
        });
    }
    stopClock() {
        this.timerComponents.forEach(timer => timer.stop());
    }
}
ClockComponent.ɵfac = function ClockComponent_Factory(t) { return new (t || ClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_heartbeat_service__WEBPACK_IMPORTED_MODULE_2__["HeartbeatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_options_service__WEBPACK_IMPORTED_MODULE_3__["OptionsService"])); };
ClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClockComponent, selectors: [["app-clock"]], viewQuery: function ClockComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__["TimerComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.timerComponents = _t);
    } }, decls: 5, vars: 2, consts: [[1, "countdown", "container"], [1, "row"], [3, "clock"], [1, "clock", "row"], ["class", "col-sm-6 col-md-3", 3, "timer", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-3", 3, "timer"]], template: function ClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClockComponent_app_timer_4_Template, 1, 1, "app-timer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clock", ctx.clock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timers);
    } }, directives: [_title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_1__["TimerComponent"]], styles: ["app-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JkaGFtZXIvcHJvamVjdHMvdnJpam1pYm8tZGlvbi9zcmMvYXBwL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jbG9jay9jbG9jay5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jbG9jay9jbG9jay5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC10aXRsZVxuICAgIHdpZHRoOiAxMDAlXG4gICAgbWFyZ2luLXRvcDogMTUlIiwiYXBwLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE1JTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clock',
                templateUrl: './clock.component.html',
                styleUrls: ['./clock.component.sass']
            }]
    }], function () { return [{ type: _services_heartbeat_service__WEBPACK_IMPORTED_MODULE_2__["HeartbeatService"] }, { type: _services_options_service__WEBPACK_IMPORTED_MODULE_3__["OptionsService"] }]; }, { timerComponents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__["TimerComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_day_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/day.service */ "./src/app/services/day.service.ts");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/options.service */ "./src/app/services/options.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["sidenav"];
function MenuComponent_li_12_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clock_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](clock_r6.name);
} }
function MenuComponent_li_12_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clock_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](clock_r6.name);
} }
function MenuComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_12_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const clock_r6 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.selectClock(clock_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_li_12_a_1_Template, 2, 1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_li_12_ng_template_2_Template, 3, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clock_r6 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", clock_r6.active)("ngIfElse", _r8);
} }
class MenuComponent {
    constructor(dayService, optionsService) {
        this.dayService = dayService;
        this.optionsService = optionsService;
        this.clocks = [
            { name: 'Vrijmibo', target: { weekday: 5, hour: 16, minute: 0, second: 0 }, active: true },
            { name: 'Partytime', target: { weekday: this.dayService.getCurrentDayIndex(), hour: 16, minute: 0, second: 0 }, active: false },
        ];
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.sidenav.nativeElement.classList.toggle('active');
    }
    selectClock(clock) {
        this.clocks.forEach(c => c.active = false);
        clock.active = true;
        this.optionsService.currentClock.next(clock);
    }
    updateGifContext(gifContext) {
        this.optionsService.currentGifContext.next(gifContext);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_day_service__WEBPACK_IMPORTED_MODULE_1__["DayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_options_service__WEBPACK_IMPORTED_MODULE_2__["OptionsService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], viewQuery: function MenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 28, vars: 1, consts: [["id", "sidebar", 1, "active"], ["sidenav", ""], [1, "sidebar-header"], [1, "list-unstyled", "components"], [1, "active"], ["href", "#klokSubmenu", "data-toggle", "collapse", "aria-expanded", "false", 1, "dropdown-toggle"], ["id", "klokSubmenu", 1, "collapse", "list-unstyled"], [3, "click", 4, "ngFor", "ngForOf"], ["href", "#gifSubmenu", "data-toggle", "collapse", "aria-expanded", "false", 1, "dropdown-toggle"], ["id", "gifSubmenu", 1, "collapse", "list-unstyled"], ["href", "#"], ["type", "text", 3, "keyup.enter", "blur"], ["gifSearch", ""], [1, "poweredBy"], ["id", "content"], [1, "navbar", "navbar-dark", "bg-transparent"], [1, "container-fluid"], ["type", "button", "id", "sidebarCollapse", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [3, "click"], ["href", "#", "class", "active", 4, "ngIf", "ngIfElse"], ["notactive", ""], ["href", "#", 1, "active"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Opties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "klokken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MenuComponent_li_12_Template, 4, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Gifs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function MenuComponent_Template_input_keyup_enter_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.updateGifContext(_r5.value); })("blur", function MenuComponent_Template_input_blur_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.updateGifContext(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nav", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_26_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clocks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#sidebar[_ngcontent-%COMP%] {\n  min-width: 250px;\n  max-width: 250px;\n  height: 100vh;\n}\n#sidebar.active[_ngcontent-%COMP%] {\n  margin-left: -250px;\n}\na[data-toggle=collapse][_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n}\n@media (max-width: 768px) {\n  #sidebar[_ngcontent-%COMP%] {\n    margin-left: -250px;\n  }\n\n  #sidebar.active[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\np[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.1em;\n  font-weight: 300;\n  line-height: 1.7em;\n  color: #999;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n#content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n#sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  background: #303135;\n  color: #fff;\n  transition: all 0.3s;\n}\n#sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #1e2027;\n}\n#sidebar[_ngcontent-%COMP%]   ul.components[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  border-bottom: 1px solid #2a2d2e;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 10px;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #222530;\n  background: #fff;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #820224;\n}\n#sidebar[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], #sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[aria-expanded=true][_ngcontent-%COMP%] {\n  color: #fff;\n  background: #262831;\n}\nul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #4d4e52;\n}\n.poweredBy[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 45px;\n  background-image: url('PoweredBy.gif');\n  background-repeat: no-repeat;\n  background-size: cover;\n  bottom: 0px;\n  left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JkaGFtZXIvcHJvamVjdHMvdnJpam1pYm8tZGlvbi9zcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNBSjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBRENBO0VBQ0ksa0JBQUE7QUNFSjtBRENBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0VKO0FEQUE7RUFDSTtJQUNJLG1CQUFBO0VDR047O0VEREU7SUFDSSxjQUFBO0VDSU47QUFDRjtBREhBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDS0o7QURGQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDS0o7QURIQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNNSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ0VKO0FEREk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNHUjtBRERRO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0FDR1o7QURGUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDSVo7QURGWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJaEI7QURIZ0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNLcEI7QURKZ0I7RUFDSSx5QkFBQTtBQ01wQjtBREpRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDTVo7QURGUTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0taO0FESEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3NpZGViYXIgXG4gICAgbWluLXdpZHRoOiAyNTBweFxuICAgIG1heC13aWR0aDogMjUwcHhcbiAgICBoZWlnaHQ6IDEwMHZoXG4gICAgJi5hY3RpdmUgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHhcblxuYVtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuXG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIFxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgdG9wOiA1MCVcbiAgICByaWdodDogMjBweFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIFxuICAgICNzaWRlYmFyIFxuICAgICAgICBtYXJnaW4tbGVmdDogLTI1MHB4XG4gICAgXG4gICAgI3NpZGViYXIuYWN0aXZlIFxuICAgICAgICBtYXJnaW4tbGVmdDogMFxuICAgIFxucCBcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmXG4gICAgZm9udC1zaXplOiAxLjFlbVxuICAgIGZvbnQtd2VpZ2h0OiAzMDBcbiAgICBsaW5lLWhlaWdodDogMS43ZW1cbiAgICBjb2xvcjogIzk5OVxuXG5cbmEsIGE6aG92ZXIsIGE6Zm9jdXMgXG4gICAgY29sb3I6IGluaGVyaXRcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zc1xuXG4jY29udGVudFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIHRvcDogMHB4XG4gICAgbGVmdDogMHB4XG5cblxuXG4gICAgIFxuXG5cbiNzaWRlYmFyIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIGJhY2tncm91bmQ6ICMzMDMxMzVcbiAgICBjb2xvcjogI2ZmZlxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzXG4gICAgLnNpZGViYXItaGVhZGVyIFxuICAgICAgICBwYWRkaW5nOiAyMHB4XG4gICAgICAgIGJhY2tncm91bmQ6ICMxZTIwMjdcbiAgICB1bFxuICAgICAgICAmLmNvbXBvbmVudHMgXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmEyZDJlXG4gICAgICAgIHAgXG4gICAgICAgICAgICBjb2xvcjogI2ZmZlxuICAgICAgICAgICAgcGFkZGluZzogMTBweFxuICAgICAgICBsaSBcbiAgICAgICAgICAgIGEgXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW1cbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICAgICAgICAgICY6aG92ZXIgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyNTMwXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODIwMjI0XG4gXG4gICAgICAgICYuYWN0aXZlID4gYSwgYVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSBcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjYyODMxXG5cbnVsIFxuICAgIHVsIFxuICAgICAgICBhIFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGU1MlxuXG4ucG93ZXJlZEJ5XG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDQ1cHhcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9Qb3dlcmVkQnkuZ2lmJylcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxuICAgIGJvdHRvbTogMHB4XG4gICAgbGVmdDogMHB4XG4iLCIjc2lkZWJhciB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTAwdmg7XG59XG4jc2lkZWJhci5hY3RpdmUge1xuICBtYXJnaW4tbGVmdDogLTI1MHB4O1xufVxuXG5hW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNzaWRlYmFyIHtcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xuICB9XG5cbiAgI3NpZGViYXIuYWN0aXZlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xuICBjb2xvcjogIzk5OTtcbn1cblxuYSwgYTpob3ZlciwgYTpmb2N1cyB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4jY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuI3NpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMzMDMxMzU7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMxZTIwMjc7XG59XG4jc2lkZWJhciB1bC5jb21wb25lbnRzIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJhMmQyZTtcbn1cbiNzaWRlYmFyIHVsIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbn1cbiNzaWRlYmFyIHVsIGxpIGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEuMWVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNzaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzIyMjUzMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiNzaWRlYmFyIHVsIGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyMDIyNDtcbn1cbiNzaWRlYmFyIHVsLmFjdGl2ZSA+IGEsICNzaWRlYmFyIHVsIGFbYXJpYS1leHBhbmRlZD10cnVlXSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMjYyODMxO1xufVxuXG51bCB1bCBhIHtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzRkNGU1Mjtcbn1cblxuLnBvd2VyZWRCeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL1Bvd2VyZWRCeS5naWZcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.sass']
            }]
    }], function () { return [{ type: _services_day_service__WEBPACK_IMPORTED_MODULE_1__["DayService"] }, { type: _services_options_service__WEBPACK_IMPORTED_MODULE_2__["OptionsService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/services/day.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/day.service.ts ***!
  \*****************************************/
/*! exports provided: DayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayService", function() { return DayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DayService {
    constructor() {
    }
    getMiboDay(clock) {
        if (clock.specialName) {
            return clock.specialName;
        }
        switch (clock.target.weekday) {
            case 1:
                return 'MAMIBO';
            case 2:
                return 'DIMIBO';
            case 3:
                return 'WOMIBO';
            case 4:
                return 'DOMIBO';
            case 5:
                return 'VRIJMIBO';
            case 6:
                return 'ZAMIBO';
            case 7:
                return 'ZOMIBO';
        }
    }
    getCurrentDayIndex() {
        return new Date().getDay();
    }
}
DayService.ɵfac = function DayService_Factory(t) { return new (t || DayService)(); };
DayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DayService, factory: DayService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/gif.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/gif.service.ts ***!
  \*****************************************/
/*! exports provided: GifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifService", function() { return GifService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class GifService {
    constructor(http) {
        this.http = http;
        this.giffOffset = 25;
        this.apiKey = '9tX8qZHZBaZJiJ5AsymKYJl0iYa3uBZX';
    }
    getNext(giffSearchContext, callback) {
        const offset = Math.trunc(Math.random() * this.giffOffset);
        this.getGifFromGiphy(giffSearchContext, offset).subscribe(response => callback(response.data[0]));
    }
    getGifFromGiphy(giffSearchContext, offset) {
        const query = 'https://api.giphy.com/v1/gifs/search?api_key=' + this.apiKey
            + '&q=' + giffSearchContext + '&limit=1&offset=' + offset + '&rating=G';
        return this.http.get(query);
    }
}
GifService.ɵfac = function GifService_Factory(t) { return new (t || GifService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GifService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GifService, factory: GifService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GifService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/heartbeat.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/heartbeat.service.ts ***!
  \***********************************************/
/*! exports provided: HeartbeatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartbeatService", function() { return HeartbeatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeartbeatService {
    constructor() {
        this.interval = 999;
        this.secHeartbeat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.minHeartbeat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hourHeartbeat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dayHeartbeat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doneEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    start(target) {
        this.target = target;
        this.target.date = this.computeTargetDate();
        this.emitHeartbeat(true);
        this.runner = setInterval(() => this.emitHeartbeat(false), this.interval);
    }
    emitHeartbeat(eager) {
        const millis = this.computeMillisRemaining();
        const secs = this.inSecs(millis);
        const mins = this.inMins(millis);
        const hours = this.inHours(millis);
        const days = this.inDays(millis);
        if (secs <= 0 && mins <= 0 && hours <= 0 && days <= 0) {
            this.doneEvent.emit();
            clearInterval(this.runner);
        }
        else {
            this.secHeartbeat.emit(secs);
            if (secs === 59 || eager) {
                this.minHeartbeat.emit(mins);
                if (mins === 59 || eager) {
                    this.hourHeartbeat.emit(hours);
                    if (hours === 23 || eager) {
                        this.dayHeartbeat.emit(days);
                    }
                }
            }
        }
    }
    computeMillisRemaining() {
        const now = new Date();
        const diff = this.target.date.getTime() - now.getTime();
        return Math.trunc(diff);
    }
    computeTargetDate() {
        const date = new Date();
        date.setDate(date.getDate() + (this.target.weekday + 7 - date.getDay()) % 7);
        date.setHours(this.target.hour);
        date.setMinutes(this.target.minute);
        date.setSeconds(this.target.second);
        return date;
    }
    inSecs(millis) {
        return Math.floor(millis / 1000 % 60);
    }
    inMins(millis) {
        return Math.floor(millis / 1000 / 60 % 60);
    }
    inHours(millis) {
        return Math.floor(millis / 1000 / 60 / 60 % 24);
    }
    inDays(millis) {
        return Math.floor(millis / 1000 / 60 / 60 / 24 % 7);
    }
}
HeartbeatService.ɵfac = function HeartbeatService_Factory(t) { return new (t || HeartbeatService)(); };
HeartbeatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeartbeatService, factory: HeartbeatService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeartbeatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/options.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/options.service.ts ***!
  \*********************************************/
/*! exports provided: OptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsService", function() { return OptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class OptionsService {
    constructor() {
        this.currentClock = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentGifContext = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
OptionsService.ɵfac = function OptionsService_Factory(t) { return new (t || OptionsService)(); };
OptionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OptionsService, factory: OptionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/timer/timer.component.ts":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["circle"];
class TimerComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
    }
    ngOnInit() {
        this.run();
    }
    ngOnDestroy() {
        this.stop();
    }
    ngAfterViewInit() {
        this.circle.nativeElement.style.stroke = this.timer.color;
    }
    ngAfterViewChecked() {
        const percent = this.remap(this.state, 0, this.timer.max, 0, 100);
        this.renderCircle(percent);
    }
    run() {
        this.subscription = this.timer.heartbeat.subscribe(x => {
            this.state = x;
            this.changeDetectorRef.detectChanges();
            return this.state;
        });
    }
    stop() {
        this.subscription.unsubscribe();
        this.state = 0;
    }
    renderCircle(percent) {
        const radius = this.circle.nativeElement.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - percent / 100 * circumference;
        this.circle.nativeElement.style.strokeDasharray = circumference + ' ' + circumference;
        this.circle.nativeElement.style.strokeDashoffset = offset;
    }
    remap(value, inFrom, inTo, outFrom, outTo) {
        return (value - inFrom) / (inTo - inFrom) * (outTo - outFrom) + outFrom;
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], viewQuery: function TimerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.circle = _t.first);
    } }, inputs: { timer: "timer" }, decls: 12, vars: 2, consts: [[1, "clock-item", "clock-hours", "countdown-time-value"], [1, "wrap"], [1, "inner"], ["id", "canvas-hours", 1, "clock-canvas"], [1, "text"], [1, "val"], [1, "type-time"], [1, "progress-ring"], ["stroke-width", "8", "fill", "transparent", "r", "48%", "cx", "50%", "cy", "50%", 1, "progress-ring__circle"], ["circle", ""]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "circle", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timer.title);
    } }, styles: [".clock-item[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-bottom: 100%;\n  position: relative;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: -50px;\n  position: absolute;\n  top: 50%;\n  text-align: center;\n  text-shadow: 1px 1px 1px black;\n  width: 100%;\n}\n\n.text[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n.text[_ngcontent-%COMP%]   .type-time[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.progress-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.progress-ring[_ngcontent-%COMP%]   .progress-ring__circle[_ngcontent-%COMP%] {\n  transition: stroke-dashoffset 0.25s;\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JkaGFtZXIvcHJvamVjdHMvdnJpam1pYm8tZGlvbi9zcmMvYXBwL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC90aW1lci90aW1lci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURXQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDUko7O0FEVUk7RUFDSSxlQUFBO0FDUlI7O0FEVUk7RUFDSSxlQUFBO0FDUlI7O0FEV0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNSSjs7QURTSTtFQUNJLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ1BSIiwiZmlsZSI6InNyYy9hcHAvdGltZXIvdGltZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvY2staXRlbSBcbiAgICAuaW5uZXIgXG4gICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJVxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSlcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlXG5cbi8vIC5jbG9jay1jYW52YXMgXG4gICAgXG4vLyAgICAgLy8gYm9yZGVyOiA1cHggc29saWQgcmVkXG4vLyAgICAgaGVpZ2h0OiAwcHhcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJVxuXG5cbiAgICAgICAgXG5cbi50ZXh0IFxuICAgIGNvbG9yOiAjZmZmXG4gICAgZm9udC1zaXplOiAzMHB4XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICBtYXJnaW4tdG9wOiAtNTBweFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIHRvcDogNTAlXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMSlcbiAgICB3aWR0aDogMTAwJVxuXG4gICAgLnZhbCBcbiAgICAgICAgZm9udC1zaXplOiA1MHB4XG5cbiAgICAudHlwZS10aW1lIFxuICAgICAgICBmb250LXNpemU6IDIwcHhcblxuXG4ucHJvZ3Jlc3MtcmluZ1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIHRvcDogMFxuICAgIGxlZnQ6IDBcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICB3aWR0aDogMTAwJVxuICAgIC5wcm9ncmVzcy1yaW5nX19jaXJjbGVcbiAgICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMC4yNXNcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKVxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlXG4iLCIuY2xvY2staXRlbSAuaW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRleHQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0IC52YWwge1xuICBmb250LXNpemU6IDUwcHg7XG59XG4udGV4dCAudHlwZS10aW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHJvZ3Jlc3MtcmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2dyZXNzLXJpbmcgLnByb2dyZXNzLXJpbmdfX2NpcmNsZSB7XG4gIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDAuMjVzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.sass']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { timer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['timer']
        }], circle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['circle', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_day_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/day.service */ "./src/app/services/day.service.ts");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/options.service */ "./src/app/services/options.service.ts");




class TitleComponent {
    constructor(dayService, optionsService) {
        this.dayService = dayService;
        this.optionsService = optionsService;
    }
    ngOnInit() {
        this.title = this.dayService.getMiboDay(this.clock);
        this.optionsService.currentClock.subscribe(clock => this.title = this.dayService.getMiboDay(clock));
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_day_service__WEBPACK_IMPORTED_MODULE_1__["DayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_options_service__WEBPACK_IMPORTED_MODULE_2__["OptionsService"])); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], inputs: { clock: "clock" }, decls: 7, vars: 1, consts: [[1, "title"], ["id", "title", 1, "font-effect-anaglyph"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Het is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "over:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: [".title[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  width: 100%;\n}\n.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 7em;\n  font-family: \"Pacifico\";\n  width: 100%;\n}\n.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 3em;\n  font-style: italic;\n  font-family: \"Dancing Script\", cursive;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JkaGFtZXIvcHJvamVjdHMvdnJpam1pYm8tZGlvbi9zcmMvYXBwL3RpdGxlL3RpdGxlLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC90aXRsZS90aXRsZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjtBRENJO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEQ0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3RpdGxlL3RpdGxlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgY29sb3I6IHdoaXRlXG4gICAgd2lkdGg6IDEwMCVcbiAgICBcbiAgICBoMSBcbiAgICAgICAgZm9udC1zaXplOiA3ZW1cbiAgICAgICAgZm9udC1mYW1pbHk6ICdQYWNpZmljbydcbiAgICAgICAgd2lkdGg6IDEwMCVcblxuICAgIHNwYW4gXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xuICAgICAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZVxuICAgICAgICB3aWR0aDogMTAwJSIsIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn1cbi50aXRsZSBoMSB7XG4gIGZvbnQtc2l6ZTogN2VtO1xuICBmb250LWZhbWlseTogXCJQYWNpZmljb1wiO1xuICB3aWR0aDogMTAwJTtcbn1cbi50aXRsZSBzcGFuIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1mYW1pbHk6IFwiRGFuY2luZyBTY3JpcHRcIiwgY3Vyc2l2ZTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title',
                templateUrl: './title.component.html',
                styleUrls: ['./title.component.sass']
            }]
    }], function () { return [{ type: _services_day_service__WEBPACK_IMPORTED_MODULE_1__["DayService"] }, { type: _services_options_service__WEBPACK_IMPORTED_MODULE_2__["OptionsService"] }]; }, { clock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bdhamer/projects/vrijmibo-dion/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map