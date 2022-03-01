"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_library_library_module_ts"],{

/***/ 2968:
/*!***************************************************!*\
  !*** ./src/app/library/library-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPageRoutingModule": () => (/* binding */ LibraryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _library_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.page */ 5579);




const routes = [
    {
        path: '',
        component: _library_page__WEBPACK_IMPORTED_MODULE_0__.LibraryPage
    }
];
let LibraryPageRoutingModule = class LibraryPageRoutingModule {
};
LibraryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LibraryPageRoutingModule);



/***/ }),

/***/ 474:
/*!*******************************************!*\
  !*** ./src/app/library/library.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPageModule": () => (/* binding */ LibraryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _library_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library-routing.module */ 2968);
/* harmony import */ var _library_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library.page */ 5579);







let LibraryPageModule = class LibraryPageModule {
};
LibraryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _library_routing_module__WEBPACK_IMPORTED_MODULE_0__.LibraryPageRoutingModule
        ],
        declarations: [_library_page__WEBPACK_IMPORTED_MODULE_1__.LibraryPage]
    })
], LibraryPageModule);



/***/ }),

/***/ 5579:
/*!*****************************************!*\
  !*** ./src/app/library/library.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPage": () => (/* binding */ LibraryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_acer_Documents_ionicApps_reader_node_modules_ngtools_webpack_src_loaders_direct_resource_js_library_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./library.page.html */ 992);
/* harmony import */ var _library_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library.page.scss */ 1262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let LibraryPage = class LibraryPage {
    constructor() { }
    ngOnInit() {
    }
};
LibraryPage.ctorParameters = () => [];
LibraryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-library',
        template: _C_Users_acer_Documents_ionicApps_reader_node_modules_ngtools_webpack_src_loaders_direct_resource_js_library_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_library_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LibraryPage);



/***/ }),

/***/ 992:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/library/library.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>library</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 1262:
/*!*******************************************!*\
  !*** ./src/app/library/library.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJyYXJ5LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_library_library_module_ts.js.map