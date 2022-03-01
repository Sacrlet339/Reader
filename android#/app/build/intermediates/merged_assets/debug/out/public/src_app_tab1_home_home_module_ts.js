"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_home_home_module_ts"],{

/***/ 697:
/*!******************************************************************!*\
  !*** ./src/app/tab1/home/home-history/home-history.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeHistoryComponent": () => (/* binding */ HomeHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_acer_Documents_ionicApps_reader_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home-history.component.html */ 8860);
/* harmony import */ var _home_history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-history.component.scss */ 702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let HomeHistoryComponent = class HomeHistoryComponent {
    constructor() { }
    ngOnInit() { }
};
HomeHistoryComponent.ctorParameters = () => [];
HomeHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-history',
        template: _C_Users_acer_Documents_ionicApps_reader_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_history_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_history_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeHistoryComponent);



/***/ }),

/***/ 5847:
/*!************************************************************!*\
  !*** ./src/app/tab1/home/home-menu/home-menu.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeMenuComponent": () => (/* binding */ HomeMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_acer_Documents_ionicApps_reader_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home-menu.component.html */ 6234);
/* harmony import */ var _home_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-menu.component.scss */ 6035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/books.service */ 1117);





let HomeMenuComponent = class HomeMenuComponent {
    constructor(bs) {
        this.bs = bs;
        this.selectedHistoryItem = false;
        this.historyValue = {};
        this.queryHistory = []; //and array of previous queries
        this.myCallBackFunction = () => {
            //this is the call back function that will then stop displaying the query view page
            this.selectedHistoryItem = false;
        };
    }
    ngOnInit() {
        this.getBookDetails();
        this.bookList = this.bs.getbooks();
    }
    getBookDetails() {
        //get the details that would be on the cover and back of the book
        console.log(this.bookList);
    }
    openBook(id) {
        console.log('book Id', id);
    }
    getInfoId(id) {
        this.historyValue = this.bookList[id];
        this.selectedHistoryItem = true;
        console.log('historyValue ', this.historyValue);
    }
};
HomeMenuComponent.ctorParameters = () => [
    { type: _services_books_service__WEBPACK_IMPORTED_MODULE_2__.BooksService }
];
HomeMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home-menu',
        template: _C_Users_acer_Documents_ionicApps_reader_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeMenuComponent);



/***/ }),

/***/ 7971:
/*!******************************************************************************!*\
  !*** ./src/app/tab1/home/home-menu/view-synopsis/view-synopsis.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSynopsisComponent": () => (/* binding */ ViewSynopsisComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_acer_Documents_ionicApps_reader_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_synopsis_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./view-synopsis.component.html */ 4472);
/* harmony import */ var _view_synopsis_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-synopsis.component.scss */ 8833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let ViewSynopsisComponent = class ViewSynopsisComponent {
    constructor() {
        this.info = {};
    }
    ngOnInit() { }
    addToLibrary(x) { }
    openBook(x) { }
};
ViewSynopsisComponent.ctorParameters = () => [];
ViewSynopsisComponent.propDecorators = {
    GoBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ViewSynopsisComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-view-synopsis',
        template: _C_Users_acer_Documents_ionicApps_reader_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_synopsis_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_synopsis_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewSynopsisComponent);



/***/ }),

/***/ 3836:
/*!**************************************************!*\
  !*** ./src/app/tab1/home/home-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_history_home_history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-history/home-history.component */ 697);
/* harmony import */ var _home_menu_home_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-menu/home-menu.component */ 5847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 9786);






const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage,
        children: [
            {
                path: '',
                component: _home_menu_home_menu_component__WEBPACK_IMPORTED_MODULE_1__.HomeMenuComponent
            },
            {
                path: 'two',
                component: _home_history_home_history_component__WEBPACK_IMPORTED_MODULE_0__.HomeHistoryComponent
            }
        ]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 661:
/*!******************************************!*\
  !*** ./src/app/tab1/home/home.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_menu_view_synopsis_view_synopsis_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-menu/view-synopsis/view-synopsis.component */ 7971);
/* harmony import */ var _home_menu_home_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-menu/home-menu.component */ 5847);
/* harmony import */ var _home_history_home_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-history/home-history.component */ 697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ 3836);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ 9786);










let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__.HomePage, _home_history_home_history_component__WEBPACK_IMPORTED_MODULE_2__.HomeHistoryComponent, _home_menu_home_menu_component__WEBPACK_IMPORTED_MODULE_1__.HomeMenuComponent, _home_menu_view_synopsis_view_synopsis_component__WEBPACK_IMPORTED_MODULE_0__.ViewSynopsisComponent]
    })
], HomePageModule);



/***/ }),

/***/ 9786:
/*!****************************************!*\
  !*** ./src/app/tab1/home/home.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_acer_Documents_ionicApps_reader_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 8249);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 3658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _C_Users_acer_Documents_ionicApps_reader_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1117:
/*!************************************************!*\
  !*** ./src/app/tab1/services/books.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksService": () => (/* binding */ BooksService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */

let BooksService = class BooksService {
    constructor() {
        this.bookList = [{
                "bookTitle": "Britney Spears",
                "bookAuthor": "Britney Spears",
                "blob": "a brief summary or general survey of something.a brief summary or general survey of something.a brief summary or general survey of something.",
                "bookGenre": "['Musical','Short stories','life lessons','splice of life']",
            },
            {
                "bookTitle": "Beyonce Cater",
                "bookAuthor": "Beyonce Cater",
                "blob": "a brief summary or general survey of something.a brief summary or general survey of something.a brief summary or general survey of something.",
                "bookGenre": "['Musical','Short stories','life lessons','splice of life']"
            },
            {
                "bookTitle": "Nicki Manaj",
                "bookAuthor": "Nicki Manaj",
                "blob": "a brief summary or general survey of something.a brief summary or general survey of something.a brief summary or general survey of something.",
                "bookGenre": "['Musical','Short stories','life lessons','splice of life']"
            },
            {
                "bookTitle": "Ciara",
                "bookAuthor": "Ciara",
                "blob": "a brief summary or general survey of something.a brief summary or general survey of something.a brief summary or general survey of something.",
                "bookGenre": "['Musical','Short stories','life lessons','splice of life']"
            }];
    }
    getbooks() {
        return this.bookList;
    }
};
BooksService.ctorParameters = () => [];
BooksService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], BooksService);



/***/ }),

/***/ 8860:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/home/home-history/home-history.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  home-history works!\n</p>\n");

/***/ }),

/***/ 6234:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/home/home-menu/home-menu.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <div class=\"book\" (click)=\"getInfoId(i)\" *ngFor=\"let book of bookList; let i = index\">\n    <div class=\"ImgContainer\"><ion-img src=\"../../../../assets/img/download.jpg\"></ion-img></div>\n    <div class=\"bookTitle\">{{book.bookTitle}}</div>\n    <!-- <div class=\"bookAuthor\">{{book.bookAuthor}}</div>\n    <div class=\"bookGenre\">{{book.bookGenre}}</div> -->\n  </div>\n</div>\n<app-view-synopsis [GoBack]=\"myCallBackFunction\" [info]=\"historyValue\" [hidden]=\"!selectedHistoryItem\"></app-view-synopsis>\n");

/***/ }),

/***/ 4472:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/home/home-menu/view-synopsis/view-synopsis.component.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <div class=\"top\">\n    <img src=\"../../../../../assets/img/download.jpg\">\n  </div>\n  <div class=\"bottom\"></div>\n  <div class=\"wrapper\">\n    <img src=\"../../../../../assets/img/download.jpg\">\n\n    <p>\n   {{info.bookTitle}}\n  </p>\n  <p>\n    {{info.bookAuthor}}\n   </p>\n   <p>\n    {{info.bookGenre}}\n   </p>\n   <p>\n    {{info.blob}}\n   </p>\n   <button (click)=\"openBook(info)\">Read</button>\n   <button (click)=\"addToLibrary(info)\">+</button>\n  <h1 (click)=\"this.GoBack()\">\n    click me to go back\n  </h1>\n  </div>\n</div>\n\n");

/***/ }),

/***/ 8249:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/home/home.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <router-outlet></router-outlet>\n</ion-content>\n");

/***/ }),

/***/ 702:
/*!********************************************************************!*\
  !*** ./src/app/tab1/home/home-history/home-history.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6035:
/*!**************************************************************!*\
  !*** ./src/app/tab1/home/home-menu/home-menu.component.scss ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: \"medium\";\n  src: url('Roboto-Medium.ttf');\n}\n@font-face {\n  font-family: \"reg\";\n  src: url('Roboto-Regular.ttf');\n}\n@font-face {\n  font-family: \"bold\";\n  src: url('Roboto-Bold.ttf');\n}\n@font-face {\n  font-family: \"blk\";\n  src: url('Roboto-Black.ttf');\n}\n.container {\n  font-family: reg;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n  align-content: baseline;\n  padding: 4% 5%;\n  color: white;\n}\n.container .book {\n  width: 45%;\n  margin-bottom: 1.5rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 2.5%;\n  border-radius: 10px;\n  padding: 3%;\n}\n.container .book .bookTitle {\n  font-family: bold;\n  font-size: 15px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 0.4rem;\n  padding: 5%;\n  background-color: #0D0D0D;\n}\n.container .book .bookAuthor {\n  font-family: reg;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.container .book .bookGenre {\n  font-family: reg;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.container .book:hover {\n  background-color: #2b2a2a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7QUFDRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7QUFDRjtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7RUFDQSxZQUFBO0FBQUY7QUFDRTtFQUVFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUo7QUFDSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ047QUFDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNOO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDTjtBQUVFO0VBQ0UseUJBQUE7QUFBSiIsImZpbGUiOiJob21lLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJtZWRpdW1cIjsgLy9UaGlzIGlzIHdoYXQgd2UgYXJlIGdvaW5nIHRvIGNhbGxcclxuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZlwiKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJyZWdcIjtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIik7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZlwiKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJibGtcIjtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tQmxhY2sudHRmXCIpO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgZm9udC1mYW1pbHk6IHJlZztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYWxpZ24tY29udGVudDogYmFzZWxpbmU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzNmM2UzZTtcclxuICBwYWRkaW5nOiA0JSA1JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLmJvb2t7XHJcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCBsaW1lO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDIuNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICAuYm9va1RpdGxle1xyXG4gICAgICBmb250LWZhbWlseTogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgbWFyZ2luLXRvcDogMC40cmVtO1xyXG4gICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMEQwRDtcclxuICAgIH1cclxuICAgIC5ib29rQXV0aG9ye1xyXG4gICAgICBmb250LWZhbWlseTogcmVnO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG4gICAgLmJvb2tHZW5yZXtcclxuICAgICAgZm9udC1mYW1pbHk6IHJlZztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuICB9XHJcbiAgLmJvb2s6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYTJhO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 8833:
/*!********************************************************************************!*\
  !*** ./src/app/tab1/home/home-menu/view-synopsis/view-synopsis.component.scss ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  padding: 10%;\n  color: black;\n  font-weight: bold;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n  align-items: flex-start;\n}\n.container .top {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 45%;\n  z-index: 1;\n}\n.container .top img {\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  background-color: rgba(200, 100, 0, 0.5);\n  /* Tint color */\n  background-blend-mode: multiply;\n  height: 120%;\n  width: 100%;\n}\n.container .bottom {\n  width: 100%;\n  position: absolute;\n  top: 43%;\n  left: 0;\n  height: 58%;\n  z-index: 2;\n}\n.container .wrapper {\n  position: fixed;\n  overflow-y: auto;\n  z-index: 3;\n  border: 2px solid red;\n  top: 15%;\n  left: 0%;\n  height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctc3lub3BzaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFBRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQUk7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQTBCLHdDQUFBO0VBQXNDLGVBQUE7RUFDaEUsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUlOO0FBREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFHQSxVQUFBO0FBQ0o7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InZpZXctc3lub3BzaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxMCU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzNmM2UzZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgLnRvcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogNDUlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGltZ3tcclxuICAgICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsMTAwLDAsLjUpOyAvKiBUaW50IGNvbG9yICovXHJcbiAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XHJcbiAgICAgIGhlaWdodDogMTIwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ib3R0b217XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo0MyU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA1OCU7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzNmM2UzZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIC53cmFwcGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICB0b3A6MTUlO1xyXG4gICAgbGVmdDowJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3658:
/*!******************************************!*\
  !*** ./src/app/tab1/home/home.page.scss ***!
  \******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_home_home_module_ts.js.map