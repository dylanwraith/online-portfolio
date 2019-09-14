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
/* harmony default export */ __webpack_exports__["default"] = ("<app-test-grid style=\"user-select: none\"></app-test-grid>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-me/about-me.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-me/about-me.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 100%; width: 100%; background-color: #f9f9f9; margin-top: 90px\">\n    <div fxLayoutAlign=\"center center\"><img src=\"../../../assets/face.PNG\" class=\"face\"></div>\n    <div fxLayout=\"column\" style=\"padding-top: 20px;\">\n        <div style=\"padding-left: 15%; padding-right: 15%;\">\n            <mat-divider></mat-divider>\n        </div>\n        <div style=\"background-color: #f9f9f9; width: 100%\">\n            <p class=\"mat-h1\" style=\"margin-bottom: 0px; margin-top: 8px; padding-left: 15%; padding-right: 15%;\">\n                About Me\n            </p>\n            <p class=\"mat-body\" style=\"padding-left: 15%; padding-right: 15%;\">\n                Hey there, my name is Dylan Wraith. I am an aspiring software engineer, and right now am\n                working part-time as a software engineer at Hologic Inc.\n                Currently I am finishing up my last year of undergrad at San Diego State University,\n                with a bachelor's degree in Computer Engineering. I am passionate in all things software and hardware,\n                but I am most fascinated by ground-breaking technologies. For my last year as an undergrad,\n                I am part of a team both designing and building a small-scale autonomous vehicle, a perfect\n                example of what I find interesting software-wise.\n            </p>\n            <div style=\"padding-left: 15%; padding-right: 15%;\">\n                <mat-divider></mat-divider>\n            </div>\n            <p class=\"mat-h1\" style=\"margin-bottom: 0px; margin-top: 8px; padding-left: 15%; padding-right: 15%;\">\n                Career Goals\n            </p>\n            <p class=\"mat-body\" style=\"padding-left: 15%; padding-right: 15%;\">\n                Currently I am looking for job opportunities post-graduation May 2020.\n                My dream job entails being part of a team working towards an end-goal that\n                will make a difference in society. After having worked in a software team at Hologic, I have found that\n                I prefer back-end over front-end, as I enjoy working with data structures and complex algorithms.\n                Ideally, I want a job that will constantly give me difficult problems that I must find solutions to,\n                because there is nothing I love more than solving problems.\n            </p>\n            <div style=\"padding-left: 15%; padding-right: 15%;\">\n                <mat-divider></mat-divider>\n            </div>\n            <p class=\"mat-h1\" style=\"margin-bottom: 0px; margin-top: 8px; padding-left: 15%; padding-right: 15%;\">\n                Extra Curricular\n            </p>\n            <p class=\"mat-body\" style=\"padding-left: 15%; padding-right: 15%;\">\n                Balance between work life and person life is a huge priority for me. Whether it\n                be playing video games (if you did not know, this UI is Pokemon 2nd Gen Themed),\n                surfing, or going out to socialize with coworkers and friends, I need to work at a company\n                that allows sufficient time for me to enjoy my life outside of work.\n            </p>\n        </div>\n    </div>\n</div>\n<div style=\"height: 100%; width: 100%; background-color: #f9f9f9; position: fixed\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"(screenWidth > 760 && screenHeight > 400); else smallScreen\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\n    style=\"height: 100%; background-color: #f9f9f9\">\n    <div fxFlex=\"10\" fxLayoutAlign=\"center center\">\n        <button mat-fab style=\"background-color: grey;\" (click)=\"swipeLeft()\">\n            <mat-icon style=\"margin-left: 8px;\">arrow_back_ios</mat-icon>\n        </button>\n    </div>\n    <div fxFlex=\"80\" style=\"height: 100%; position: relative;\" fxLayoutAlign=\"center center\">\n        <div fxFlex=\"22\" style=\"position: absolute;\" [@fade]=projectStatuses[0]>\n            <mat-card class=\"center_card\">\n                <mat-card-header style=\"padding: 0px 10px;\">\n                    <mat-card-title>Pokemon</mat-card-title>\n                    <mat-card-subtitle>{{projects[1]}}</mat-card-subtitle>\n                </mat-card-header>\n                <img *ngIf=\"screenHeight > 560\" src=\"../../../assets/online-portfolio.PNG\"\n                    alt=\"Photo of a Shiba Inu\" style=\"width: 100%; margin: 0px; max-height: 200px\">\n                <mat-card-content style=\"padding: 0px 10px;\">\n                    <p>\n                        <strong>Technologies:</strong> {{technologies[1]}}\n                        <br />\n                        <strong>Laguages:</strong> {{languages[1]}}\n                    </p>\n                </mat-card-content>\n                <mat-card-actions style=\"padding-bottom: 10px;\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                    <button mat-raised-button color=\"accent\" style=\"width: 80%; margin: 0\"\n                        (click)=\"goToGithub(1)\">SOURCE CODE</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n        <div fxFlex=\"22\" style=\"position: absolute\" [@fade]=projectStatuses[1]>\n            <mat-card class=\"center_card\">\n                <mat-card-header style=\"padding: 0px 10px;\">\n                    <mat-card-title>EMS</mat-card-title>\n                    <mat-card-subtitle>{{projects[2]}}</mat-card-subtitle>\n                </mat-card-header>\n                <img *ngIf=\"screenHeight > 560\" src=\"../../../assets/ems.png\" alt=\"Photo of a Shiba Inu\"\n                    style=\"width: 100%; margin: 0px; max-height: 200px\">\n                <mat-card-content style=\"padding: 0px 10px;\">\n                    <p>\n                        <strong>Technologies:</strong> {{technologies[2]}}\n                        <br />\n                        <strong>Laguages:</strong> {{languages[2]}}\n                    </p>\n                </mat-card-content>\n                <mat-card-actions style=\"padding-bottom: 10px;\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                    <button mat-raised-button color=\"accent\" style=\"width: 80%; margin: 0\"\n                        (click)=\"goToGithub(2)\">SOURCE CODE</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n        <div fxFlex=\"22\" style=\"position: absolute\" [@fade]=projectStatuses[2]>\n            <mat-card class=\"center_card\">\n                <mat-card-header style=\"padding: 0px 10px;\">\n                    <mat-card-title>Kymera</mat-card-title>\n                    <mat-card-subtitle>{{projects[0]}}</mat-card-subtitle>\n                </mat-card-header>\n                <img *ngIf=\"screenHeight > 560\" src=\"../../../assets/kymera.png\"\n                    style=\"width: 100%; margin: 0px; max-height: 200px\">\n                <mat-card-content style=\"padding: 0px 10px;\">\n                    <p>\n                        <strong>Technologies:</strong> {{technologies[0]}}\n                        <br />\n                        <strong>Laguages:</strong> {{languages[0]}}\n                    </p>\n                </mat-card-content>\n                <mat-card-actions style=\"padding-bottom: 10px;\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                </mat-card-actions>\n            </mat-card>\n        </div>\n        <div fxFlex=\"22\" style=\"position: absolute\" [@fade]=projectStatuses[3]>\n            <mat-card class=\"center_card\">\n                <mat-card-header style=\"padding: 0px 10px;\">\n                    <mat-card-title>Poker</mat-card-title>\n                    <mat-card-subtitle>{{projects[3]}}</mat-card-subtitle>\n                </mat-card-header>\n                <img *ngIf=\"screenHeight > 560\" src=\"../../../assets/poker.png\" alt=\"Photo of a Shiba Inu\"\n                    style=\"width: 100%; margin: 0px; max-height: 200px\">\n                <mat-card-content style=\"padding: 0px 10px;\">\n                    <p>\n                        <strong>Technologies:</strong> {{technologies[3]}}\n                        <br />\n                        <strong>Laguages:</strong> {{languages[3]}}\n                    </p>\n                </mat-card-content>\n                <mat-card-actions style=\"padding-bottom: 10px;\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                    <button mat-raised-button color=\"accent\" style=\"width: 80%; margin: 0\"\n                        (click)=\"goToGithub(3)\">SOURCE CODE</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n        <div fxFlex=\"22\" style=\"position: absolute\" [@fade]=projectStatuses[4]>\n            <mat-card class=\"center_card\">\n                <mat-card-header style=\"padding: 0px 10px;\">\n                    <mat-card-title>BST</mat-card-title>\n                    <mat-card-subtitle>{{projects[4]}}</mat-card-subtitle>\n                </mat-card-header>\n                <img *ngIf=\"screenHeight > 560\" src=\"../../../assets/bst.png\" alt=\"Photo of a Shiba Inu\"\n                    style=\"width: 100%; margin: 0px; max-height: 200px\">\n                <mat-card-content style=\"padding: 0px 10px;\">\n                    <p>\n                        <strong>Software Stuff:</strong> {{technologies[4]}}\n                        <br />\n                        <strong>Laguages:</strong> {{languages[4]}}\n                    </p>\n                </mat-card-content>\n                <mat-card-actions style=\"padding-bottom: 10px;\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                    <button mat-raised-button color=\"accent\" style=\"width: 80%; margin: 0\"\n                        (click)=\"goToGithub(4)\">SOURCE CODE</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n    <div fxFlex=\"10\" fxLayoutAlign=\"center center\">\n        <button mat-fab style=\"background-color: grey;\" (click)=\"swipeRight()\">\n            <mat-icon>arrow_forward_ios</mat-icon>\n        </button>\n    </div>\n</div>\n<ng-template #smallScreen>\n    <div style=\"height: 100%; background-color: #f9f9f9\" fxLayoutAlign=\"space-between center\">\n        <div fxFlex=\"20\" fxLayoutAlign=\"center center\">\n            <button mat-fab style=\"background-color: grey;\" (click)=\"previous()\">\n                <mat-icon style=\"margin-left: 8px;\">arrow_back_ios</mat-icon>\n            </button>\n        </div>\n        <div fxFlex=\"60\" fxLayoutAlign=\"center center\" [@fade]=singleStatus>\n            <mat-card class=\"center_card\">\n                <mat-card-header style=\"padding: 0px 10px;\">\n                    <mat-card-title>{{projects[index]}}</mat-card-title>\n                </mat-card-header>\n                <img *ngIf=\"screenHeight > 560\" [src]=\"images[index]\"\n                    style=\"width: 100%; margin: 0px; max-height: 200px\">\n                <mat-card-content style=\"padding: 0px 10px;\">\n                    <p>\n                        <strong>Technologies:</strong> {{technologies[index]}}\n                        <br />\n                        <strong>Laguages:</strong> {{languages[index]}}\n                    </p>\n                </mat-card-content>\n                <mat-card-actions style=\"padding-bottom: 10px;\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                    <button *ngIf=\"index !== 0\" mat-raised-button color=\"accent\" style=\"width: 80%; margin: 0\"\n                        (click)=\"goToGithub(index)\">SOURCE CODE</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n        <div fxFlex=\"20\" fxLayoutAlign=\"center center\">\n            <button mat-fab style=\"background-color: grey;\" (click)=\"next()\">\n                <mat-icon>arrow_forward_ios</mat-icon>\n            </button>\n        </div>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start-up/start-up.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start-up/start-up.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p style=\"font-size: 100px; font-smoothing: antialiased; -webkit-font-smoothing: none; font-family: 'pokemon-font', monospace;\">\n    pokemon font\n</p>\n<div style=\"height: 100%; width: 100%;\" fxLayout=\"column\">\n    <div style=\"background-color: rgb(88, 172, 175); width: 100%; height: 50px;\" fxLayout=\"row\"\n        fxLayoutAlign=\"end center\">\n        <mat-tab-group [selectedIndex]=\"selected.value\" (selectedIndexChange)=\"selected.setValue($event)\"\n            [@fade]=navigationStatus style=\"width: 100%; height: 50px;\" color=\"accent\"\n            backgroundColor=\"rgb(88,172,175)\">\n            <mat-tab label=\"projects\">\n                <ng-template mat-tab-label fxLayout=\"row\">\n                    <mat-icon class=\"custom_menu_icon\">create</mat-icon>\n                    <div class=\"custom_menu_text\" style=\"margin-left: 10px;\">projects</div>\n                </ng-template>\n                <div>hello</div>\n            </mat-tab>\n            <mat-tab label=\"aboutme\">\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"custom_menu_icon\">sports_esports</mat-icon>\n                    <div class=\"custom_menu_text\">about me</div>\n                </ng-template>\n            </mat-tab>\n            <mat-tab label=\"resume\">\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"custom_menu_icon\">description</mat-icon>\n                    <div class=\"custom_menu_text\">resume</div>\n                </ng-template>\n            </mat-tab>\n            <mat-tab label=\"contactme\">\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"custom_menu_icon\">email</mat-icon>\n                    <div class=\"custom_menu_text\">contact me</div>\n                </ng-template>\n            </mat-tab>\n        </mat-tab-group>\n    </div>\n    <div [@fade]=closeStatus style=\"background-color: rgb(88, 172, 175); width: 100%; height: calc(10%-50px);\"></div>\n    <div [@fade]=closeStatus style=\"background-color: rgb(88, 172, 175); width: 100%; height: 50%;\" fxLayout=\"row\">\n        <img [@fade]=imageStatus src=\"../assets/my_face.png\" style=\"height: 100%; width: auto; padding-left: 5%;\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"space-between none\" style=\"width: 100%;\">\n            <div [@fade]=textStatus class=\"mat-h2\"\n                style=\"margin-left: 5%; width: 80%; position: relative; height: inherit;\">\n                <div style=\"z-index: 2; position: absolute; top: 0; left: 0;\">\n                    {{ this.message }}\n                </div>\n                <div\n                    style=\"padding-right: 50px; z-index: 1; position: absolute; top: 0; left: 0; color: transparent; background-color: whitesmoke; padding-top: 6%; margin-top: -3%; margin-left: -3%; margin-right: -3%; border-radius: 20px; border-bottom-left-radius: 0px; border-color: black; border-width: 5px; border-style: solid\">\n                    {{ this.tempMessage }}\n                </div>\n            </div>\n            <div [@fade]=buttonStatus fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                    <button mat-fab class=\"custom_button\" (click)=\"buttonClick()\">\n                        <mat-icon class=\"custom_icon\">create</mat-icon>\n                    </button>\n                    <div class=\"mat-small button_description\">projects</div>\n                </div>\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                    <button mat-fab class=\"custom_button\">\n                        <mat-icon class=\"custom_icon\">sports_esports</mat-icon>\n                    </button>\n                    <div class=\"mat-small button_description\">about me</div>\n                </div>\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                    <button mat-fab class=\"custom_button\">\n                        <mat-icon class=\"custom_icon\">description</mat-icon>\n                    </button>\n                    <div class=\"mat-small button_description\">resume</div>\n                </div>\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                    <button mat-fab class=\"custom_button\">\n                        <mat-icon class=\"custom_icon\">email</mat-icon>\n                    </button>\n                    <div class=\"mat-small button_description\">contact me</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div [@fade]=closeStatus style=\"background-color: rgb(88, 172, 175); width: 100%; height: 10%;\"></div>\n    <div [@fade]=bottomStatus style=\"background-color: rgb(27, 79, 95); width: 100%;\" fxFlex>\n        <div *ngIf=\"selected.value === 0\" fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%\">\n            <div fxFlex=\"10\" fxLayoutAlign=\"center center\">\n                <button mat-fab style=\"background-color: grey;\" (click)=\"swipeLeft()\">\n                    <mat-icon style=\"margin-left: 8px;\">arrow_back_ios</mat-icon>\n                </button>\n            </div>\n            <div fxFlex=\"80\" style=\"height: 100%;\" fxLayoutAlign=\"center center\"></div>\n            <!--  -->\n\n            <div fxFlex=\"22\" style=\"position: absolute\" [@fade]=projectStatuses[0]>\n                <mat-card class=\"center_card\">\n                    <mat-card-header style=\"padding: 0px 10px;\">\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Kymera</mat-card-title>\n                        <mat-card-subtitle>Software Management Tool</mat-card-subtitle>\n                    </mat-card-header>\n                    <img src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                        alt=\"Photo of a Shiba Inu\" style=\"width: 100%; margin: 0px;\">\n                    <mat-card-content style=\"padding: 0px 10px;\">\n                        <p>\n                            <strong>Technologies:</strong> Angular 8, Angular Material, ASP.NET Core, Entity\n                            Framework\n                            <br />\n                            <strong>Laguages:</strong> HTML, SCSS, Typescript, C#\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions style=\"padding-bottom: 10px; padding-left: 20px;\">\n                        <button mat-raised-button color=\"accent\">LIKE</button>\n                        <button mat-raised-button color=\"accent\">SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n\n            <!--  -->\n\n            <div fxFlex=\"22\" style=\"position: absolute\" [@fade]=projectStatuses[1]>\n                <mat-card class=\"center_card\">\n                    <mat-card-header style=\"padding: 0px 10px;\">\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Kymera</mat-card-title>\n                        <mat-card-subtitle>Software Management Tool</mat-card-subtitle>\n                    </mat-card-header>\n                    <img src=\"../../../assets/ems.png\"\n                        alt=\"Photo of a Shiba Inu\" style=\"width: 100%; margin: 0px;\">\n                    <mat-card-content style=\"padding: 0px 10px;\">\n                        <p>\n                            <strong>Technologies:</strong> Angular 8, Angular Material, ASP.NET Core, Entity\n                            Framework\n                            <br />\n                            <strong>Laguages:</strong> HTML, SCSS, Typescript, C#\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions style=\"padding-bottom: 10px; padding-left: 20px;\">\n                        <button mat-raised-button color=\"accent\">LIKE</button>\n                        <button mat-raised-button color=\"accent\">SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n\n            <!--  -->\n\n            <div fxFlex=\"22\" style=\"position: absolute\" [@fade]=projectStatuses[2]>\n                <mat-card class=\"center_card\">\n                    <mat-card-header style=\"padding: 0px 10px;\">\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Kymera</mat-card-title>\n                        <mat-card-subtitle>Software Management Tool</mat-card-subtitle>\n                    </mat-card-header>\n                    <img src=\"../../../assets/kymera.png\" style=\"width: 100%; margin: 0px;\">\n                    <mat-card-content style=\"padding: 0px 10px;\">\n                        <p>\n                            <strong>Technologies:</strong> Angular 8, Angular Material, ASP.NET Core, Entity\n                            Framework\n                            <br />\n                            <strong>Laguages:</strong> HTML, SCSS, Typescript, C#\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions style=\"padding-bottom: 10px; padding-left: 20px;\">\n                        <button mat-raised-button color=\"accent\">SOURCE CODE</button>\n                        <button mat-raised-button color=\"accent\">VIDEO DEMO</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n\n            <!--  -->\n\n            <div fxFlex=\"22\" style=\"position: absolute\" [@fade]=projectStatuses[3]>\n                <mat-card class=\"center_card\">\n                    <mat-card-header style=\"padding: 0px 10px;\">\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Kymera</mat-card-title>\n                        <mat-card-subtitle>Software Management Tool</mat-card-subtitle>\n                    </mat-card-header>\n                    <img src=\"../../../assets/poker.png\"\n                        alt=\"Photo of a Shiba Inu\" style=\"width: 100%; margin: 0px;\">\n                    <mat-card-content style=\"padding: 0px 10px;\">\n                        <p>\n                            <strong>Technologies:</strong> Angular 8, Angular Material, ASP.NET Core, Entity\n                            Framework\n                            <br />\n                            <strong>Laguages:</strong> HTML, SCSS, Typescript, C#\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions style=\"padding-bottom: 10px; padding-left: 20px;\">\n                        <button mat-raised-button color=\"accent\">LIKE</button>\n                        <button mat-raised-button color=\"accent\">SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n\n            <!--  -->\n\n            <div fxFlex=\"22\" style=\"position: absolute\" [@fade]=projectStatuses[4]>\n                <mat-card class=\"center_card\">\n                    <mat-card-header style=\"padding: 0px 10px;\">\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <mat-card-title>Kymera</mat-card-title>\n                        <mat-card-subtitle>Software Management Tool</mat-card-subtitle>\n                    </mat-card-header>\n                    <img src=\"../../../assets/bst.png\"\n                        alt=\"Photo of a Shiba Inu\" style=\"width: 100%; margin: 0px;\">\n                    <mat-card-content style=\"padding: 0px 10px;\">\n                        <p>\n                            <strong>Technologies:</strong> Angular 8, Angular Material, ASP.NET Core, Entity\n                            Framework\n                            <br />\n                            <strong>Laguages:</strong> HTML, SCSS, Typescript, C#\n                        </p>\n                    </mat-card-content>\n                    <mat-card-actions style=\"padding-bottom: 10px; padding-left: 20px;\">\n                        <button mat-raised-button color=\"accent\">LIKE</button>\n                        <button mat-raised-button color=\"accent\">SHARE</button>\n                    </mat-card-actions>\n                </mat-card>\n            </div>\n            <!--  -->\n            <div fxFlex=\"10\" fxLayoutAlign=\"center center\">\n                <button mat-fab style=\"background-color: grey;\" (click)=\"swipeRight()\">\n                    <mat-icon>arrow_forward_ios</mat-icon>\n                </button>\n            </div>\n        </div>\n        <div *ngIf=\"selected.value === 1\">\n            TAB 2\n        </div>\n        <div *ngIf=\"selected.value === 2\" style=\"width: 100%; background-color: rgb(27, 79, 95); padding-top: 10px\">\n            <pdf-viewer [src]=\"'../../../assets/ResumeWraithDylan.pdf'\" [render-text]=\"true\" style=\"display: block;\">\n            </pdf-viewer>\n        </div>\n        <div *ngIf=\"selected.value === 3\">\n            TAB 4\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-grid/test-grid.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-grid/test-grid.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"resume\" style=\"width: 100%; z-index: 10; position: fixed;  top: 0; left: 0;\">\n    <button mat-raised-button\n        style=\"font-size: 50px; background-color: red; margin-left: 20px; margin-top: 20px; margin-bottom: 20px;\"\n        (click)=\"leaveResume()\">\n        <mat-icon style=\"font-size: 50px; height: 50px; width: 60px; color: white\">meeting_room</mat-icon>\n        <img src=\"../../../assets/walk_left_sprite.PNG\" style=\"height: 50px\">\n    </button>\n</div>\n<div *ngIf=\"projects\" style=\"width: 100%; background-color: #f9f9f9; position: fixed;  top: 0; left: 0;\">\n    <button mat-raised-button\n        style=\"font-size: 50px; background-color: red; margin-left: 20px; margin-top: 20px; margin-bottom: 20px; position: absolute; top: 0; left: 0;\"\n        (click)=\"leaveProjects()\">\n        <mat-icon style=\"font-size: 50px; height: 50px; width: 60px; color: white\">meeting_room</mat-icon>\n        <img src=\"../../../assets/walk_left_sprite.PNG\" style=\"height: 50px\">\n    </button>\n</div>\n<div *ngIf=\"contact\" style=\"width: 100%; position: fixed;  top: 0; left: 0;\">\n    <button mat-raised-button\n        style=\"font-size: 50px; background-color: red; margin-left: 20px; margin-top: 20px; margin-bottom: 20px;\"\n        (click)=\"leaveContact()\">\n        <mat-icon style=\"font-size: 50px; height: 50px; width: 60px; color: white\">meeting_room</mat-icon>\n        <img src=\"../../../assets/walk_left_sprite.PNG\" style=\"height: 50px\">\n    </button>\n</div>\n<div *ngIf=\"about\" style=\"width: 100%; background-color: #f9f9f9; position: fixed;  top: 0; left: 0;\">\n    <button mat-raised-button\n        style=\"font-size: 50px; background-color: red; margin-left: 20px; margin-top: 20px; margin-bottom: 20px;\"\n        (click)=\"leaveAbout()\">\n        <mat-icon style=\"font-size: 50px; height: 50px; width: 60px; color: white\">meeting_room</mat-icon>\n        <img src=\"../../../assets/walk_left_sprite.PNG\" style=\"height: 50px\">\n    </button>\n</div>\n<div *ngIf=\"home\" ng-keydown=\"arrowPressed($event)\" style=\"height: 100%; width: 100%; background-color: black\"\n    fxLayoutAlign=\"center center\">\n    <div\n        style=\"height: 95vmin; width: 95vmin; background-image: url('../../../assets/town.PNG'); background-size: cover\">\n        <img [@coordinates]=\"{value: spriteStatus, params: {x: xCoordinate * 100, y: yCoordinate * 100}}\"\n            src={{spriteUrl}} style=\"height: calc(95vmin/14); width: calc(95vmin/14);\">\n    </div>\n</div>\n<div *ngIf=\"resume\" style=\"height: 100%; overflow: auto; background-color: #f9f9f9;\">\n    <pdf-viewer [src]=\"'../../../assets/ResumeWraithDylan.pdf'\" [render-text]=\"true\">\n    </pdf-viewer>\n</div>\n<div *ngIf=\"projects\" style=\"height: 100%; width: 100%;\">\n    <app-projects></app-projects>\n</div>\n<div *ngIf=\"contact\" style=\"height: 100%; width: 100%; background-color: #f9f9f9\">\n    <div fxLayoutAlign=\"center center\" style=\"height: 100%; width: 100%;\">\n        <div *ngIf=\"(screenWidth > 700) && (screenHeight > 620); else smallScreen\"\n            style=\"height: 70%; width: 90%; border: 1px solid #d8dee2; border-radius: 15px; overflow: auto; background-color: white\"\n            class=\"mat-display-3\">\n            <div style=\"margin-left: 10%; margin-top: 50px\">Tell me what you think! :)</div>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                style=\"width: 100%; padding-left: 10%; padding-right: 10%; padding-top: 50px\" class=\"mat-h2\">\n                <mat-form-field style=\"width: 45%;\">\n                    <input id=\"name\" required matInput placeholder=\"Enter name here\" [(ngModel)]=\"name\">\n                </mat-form-field>\n                <mat-form-field style=\"width: 45%; padding-left: 10%\">\n                    <input id=\"email\" required email matInput placeholder=\"Enter email here\" [(ngModel)]=\"email\">\n                </mat-form-field>\n            </div>\n            <div style=\"width: 80%; padding-left: 10%; padding-right: 10%;\" class=\"mat-h2\">\n                <mat-form-field style=\"width: 100%\">\n                    <textarea id=\"message\" required style=\"max-height: 150px\" matInput placeholder=\"Enter message here\"\n                        [(ngModel)]=\"message\"></textarea>\n                </mat-form-field>\n            </div>\n            <div fxLayoutAlign=\" center\">\n                <button mat-raised-button style=\"margin-left: 10%; margin-right: 20px; background-color: lightgray;\"\n                    class=\"mat-h2\" (click)=\"sendEmail()\" [disabled]=loading>Submit</button>\n                <mat-spinner *ngIf=\"loading\" diameter=\"30\"></mat-spinner>\n            </div>\n        </div>\n        <ng-template #smallScreen>\n            <div fxLayout=\"column\" fxLayoutAlign=\"space-evenly center\"\n                style=\"height: 90%; width: 100%; margin-top: 8%; background-color: #f9f9f9\">\n                <mat-form-field style=\"width: 80%;\">\n                    <input required matInput placeholder=\"Enter name here\" [(ngModel)]=\"name\">\n                </mat-form-field>\n                <mat-form-field style=\"width: 80%;\">\n                    <input required email matInput placeholder=\"Enter email here\" [(ngModel)]=\"email\">\n                </mat-form-field>\n                <div style=\"width: 80%;\" class=\"mat-h2\">\n                    <mat-form-field style=\"width: 100%\">\n                        <textarea required style=\"max-height: 150px\" matInput placeholder=\"Enter message here\"\n                            [(ngModel)]=\"message\"></textarea>\n                    </mat-form-field>\n                </div>\n                <div fxLayoutAlign=\" center\">\n                    <button mat-raised-button style=\"margin-left: 10%; background-color: lightgray;\" class=\"mat-h2\"\n                        (click)=\"sendEmail()\" [disabled]=loading>Submit</button>\n                    <mat-spinner *ngIf=\"loading\" diameter=\"30\"></mat-spinner>\n                </div>\n            </div>\n        </ng-template>\n    </div>\n</div>\n<div *ngIf=\"about\" style=\"height: 100%; width: 100%\">\n    <app-about-me></app-about-me>\n</div>\n<div *ngIf=\"interacted\">\n    <audio id=\"player\" autoplay controls style=\"display: none\">\n        <source src=\"../../../assets/song.mp3\" type=\"audio/mp3\"></audio>\n</div>\n<div *ngIf=\"home\" style=\"bottom: 0; right: 0; width: 50vmin; opacity: 0.6; position: absolute;\">\n    <img src=\"../../../assets/dpad.png\" style=\"width: 100%\">\n    <div style=\"position: absolute; height: 100%; width: 100%; top: 0\" fxLayout=\"column\">\n        <div style=\"height: 33%; width: 100%;\" fxLayoutAlign=\"center center\">\n            <div id=\"up\" style=\"height: 100%; width: 33%;\" (mousedown)=\"goUpClick()\" (mouseup)=\"stop()\"\n                (touchstart)=\"goUpClick()\" (touchend)=\"stop()\"></div>\n        </div>\n        <div style=\"height: 34%; width: 100%;\" fxLayoutAlign=\"space-between center\">\n            <div id=\"left\" style=\"height: 100%; width: 33%;\" (mousedown)=\"goLeftClick()\" (mouseup)=\"stop()\"\n                (touchstart)=\"goLeftClick()\" (touchend)=\"stop()\"></div>\n            <div id=\"right\" style=\"height: 100%; width: 33%;\" (mousedown)=\"goRightClick()\" (mouseup)=\"stop()\"\n                (touchstart)=\"goRightClick()\" (touchend)=\"stop()\"></div>\n        </div>\n        <div style=\"height: 33%; width: 100%;\" fxLayoutAlign=\"center center\">\n            <div id=\"down\" style=\"height: 100%; width: 33%;\" (mousedown)=\"goDownClick()\" (mouseup)=\"stop()\"\n                (touchstart)=\"goDownClick()\" (touchend)=\"stop()\"></div>\n        </div>\n    </div>\n</div>\n<button mat-icon-button style=\"height: 75px; width: 75px; position: fixed; bottom: 0; left: 0\">\n    <mat-icon *ngIf=\"interacted; else soundOff\" (click)=\"audioClick()\" style=\"height: 75px; width: 75px; line-height: 75px; font-size: 75px; color: #686868\">volume_up</mat-icon>\n    <ng-template #soundOff>\n        <mat-icon (click)=\"audioClick()\" style=\"height: 75px; width: 75px; line-height: 75px; font-size: 75px; color: #686868\">volume_off</mat-icon>\n    </ng-template>\n</button>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _services_endpoint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/endpoint.service */ "./src/app/services/endpoint.service.ts");



let AppComponent = class AppComponent {
    constructor(endpointService) {
        this.endpointService = endpointService;
    }
    ngOnInit() {
        // this.endpointService.getAllCats().subscribe(
        //   data => {
        //     console.log('data received = ' + data.name);
        //   }
        // );
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_endpoint_service__WEBPACK_IMPORTED_MODULE_2__["EndpointService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _components_start_up_start_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/start-up/start-up.component */ "./src/app/components/start-up/start-up.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _components_test_grid_test_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/test-grid/test-grid.component */ "./src/app/components/test-grid/test-grid.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_start_up_start_up_component__WEBPACK_IMPORTED_MODULE_7__["StartUpComponent"],
            _components_test_grid_test_grid_component__WEBPACK_IMPORTED_MODULE_13__["TestGridComponent"],
            _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
            _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_19__["AboutMeComponent"]
        ],
        imports: [
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__["PdfViewerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about-me/about-me.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".face {\r\n    height: 10vmin;\r\n    width: 10vmin;\r\n    min-width: 200px;\r\n    min-height: 200px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border: solid 10px;\r\n    border-radius: 180px;\r\n    margin-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFjZSB7XHJcbiAgICBoZWlnaHQ6IDEwdm1pbjtcclxuICAgIHdpZHRoOiAxMHZtaW47XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlcjogc29saWQgMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/about-me/about-me.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutMeComponent = class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-me',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-me/about-me.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-me.component.css */ "./src/app/components/about-me/about-me.component.css")).default]
    })
], AboutMeComponent);



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.center_card {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 10px 0px;\r\n}\r\n\r\n::ng-deep .mat-h2 {\r\n  font: 500 20px/20px Roboto,\"Helvetica Neue\",sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2VudGVyX2NhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaDIge1xyXG4gIGZvbnQ6IDUwMCAyMHB4LzIwcHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let ProjectsComponent = class ProjectsComponent {
    constructor() {
        this.stages = [
            'stage1',
            'stage2',
            'stage3',
            'stage4',
            'stage5',
            'stage6',
            'stage7'
        ];
        this.projectStatuses = [
            this.stages[0],
            this.stages[2],
            this.stages[3],
            this.stages[4],
            this.stages[6]
        ];
        this.singleStatus = 'final';
        this.githubs = [
            'asdf',
            'https://github.com/dylanwraith/online-portfolio',
            'https://github.com/dylanwraith/employee-management-system',
            'https://github.com/dylanwraith/poker-game',
            'https://github.com/dylanwraith/binary-search-tree'
        ];
        this.projects = [
            'Software Management Tool',
            'Online User Portfolio',
            'Employee Management System',
            'Poker Simuation',
            'Binary Search Tree'
        ];
        this.images = [
            '../../../assets/kymera.png',
            '../../../assets/online-portfolio.PNG',
            '../../../assets/ems.png',
            '../../../assets/poker.png',
            '../../../assets/bst.png'
        ];
        this.technologies = [
            'Angular 8, Angular Material, ASP.NET Core, Entity Framework',
            'Node.js, Express.js, AWS, Angular 8, Angular Annimations, Angular Material, GIMP',
            'ASP.NET, Universal Windows Program, JSON, Google Login API',
            'Stack, Object Oriented Programming',
            'Data Structures, Object Oriented Programming'
        ];
        this.languages = [
            'Typescript, C#, JavaScript, HTML, SCSS',
            'Typescript, JavaScript, HTML, SCSS',
            'C#, XAML',
            'C++',
            'C++'
        ];
        this.index = 0;
        this.getScreenSize();
    }
    ngOnInit() { }
    swipeLeft() {
        let i = 0;
        this.projectStatuses.forEach(status => {
            console.log('initial status: ' + status);
            if (status === this.stages[6]) {
                status = this.stages[4];
            }
            else if (status === this.stages[4]) {
                status = this.stages[3];
            }
            else if (status === this.stages[3]) {
                status = this.stages[2];
            }
            else if (status === this.stages[2]) {
                status = this.stages[1];
            }
            else {
                status = this.stages[6];
            }
            console.log('end status: ' + status);
            this.projectStatuses[i] = status;
            i++;
        });
        let j = 0;
        setTimeout(() => {
            this.projectStatuses.forEach(status => {
                if (status === this.stages[1]) {
                    status = this.stages[0];
                    this.projectStatuses[j] = this.stages[0];
                }
                j++;
            });
        }, 110);
    }
    swipeRight() {
        let i = 0;
        this.projectStatuses.forEach(status => {
            console.log('initial status: ' + status);
            if (status === this.stages[0]) {
                status = this.stages[2];
            }
            else if (status === this.stages[2]) {
                status = this.stages[3];
            }
            else if (status === this.stages[3]) {
                status = this.stages[4];
            }
            else if (status === this.stages[4]) {
                status = this.stages[5];
            }
            else {
                status = this.stages[0];
            }
            console.log('end status: ' + status);
            this.projectStatuses[i] = status;
            i++;
        });
        let j = 0;
        setTimeout(() => {
            this.projectStatuses.forEach(status => {
                if (status === this.stages[5]) {
                    status = this.stages[6];
                    this.projectStatuses[j] = this.stages[6];
                }
                j++;
            });
        }, 110);
    }
    getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    }
    bigScreen() {
        if (this.screenWidth > 760) {
            return true;
        }
        else {
            return false;
        }
    }
    next() {
        this.singleStatus = 'hide';
        setTimeout(() => {
            if (this.index < 4) {
                this.index++;
            }
            else {
                this.index = 0;
            }
            this.singleStatus = 'final';
        }, 250);
    }
    previous() {
        this.singleStatus = 'hide';
        setTimeout(() => {
            if (this.index > 0) {
                this.index--;
            }
            else {
                this.index = 4;
            }
            this.singleStatus = 'final';
        }, 250);
    }
    goToGithub(index) {
        window.open(this.githubs[index]);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], ProjectsComponent.prototype, "getScreenSize", null);
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-120%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translate(-120%,10%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-120%)',
                    opacity: 0.6
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'scale(1.25)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage5', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(120%)',
                    opacity: 0.6
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage6', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translate(120%,10%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage7', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(120%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateY(10%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-100%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(10%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expand', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    height: '100%'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('shrink', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    height: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 100
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({})),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage1=>stage3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage7=>stage5', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage3=>stage4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage4=>stage5', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage5=>stage4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage4=>stage3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage3=>stage2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage2=>stage1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage5=>stage6', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage6=>stage7', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage7=>stage1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage1=>stage7', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>moveleft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>moveright', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('down=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>shrink', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>expand', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide=>show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/components/start-up/start-up.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/start-up/start-up.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-tab-header {\r\n  height: 100% !important;\r\n}\r\n\r\n::ng-deep .mat-ink-bar {\r\n  height: 4px !important;\r\n}\r\n\r\n::ng-deep .mat-tab-label {\r\n  opacity: 100 !important;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.center_card {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 10px 0px;\r\n}\r\n\r\n.custom_button {\r\n  width: 85px; \r\n  height: 85px;\r\n}\r\n\r\n.custom_icon {\r\n  height: 35px; \r\n  width: 35px; \r\n  font-size: 35px;\r\n}\r\n\r\n.custom_menu_icon {\r\n  color: white;\r\n  opacity: 100% !important;\r\n}\r\n\r\n.custom_menu_text {\r\n  margin-left: 10px;\r\n  color: white;\r\n  opacity: 100% !important;\r\n}\r\n\r\n.button_description {\r\n  color: white;\r\n  padding-top: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.fade_up {\r\n  -webkit-animation-name: animate_buttons;\r\n          animation-name: animate_buttons;\r\n  -webkit-animation-duration: 2s;\r\n          animation-duration: 2s;\r\n}\r\n\r\n@-webkit-keyframes animate_buttons {\r\n  from {\r\n    background-color: black;\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    background-color: white;\r\n    opacity: 100;\r\n  }\r\n}\r\n\r\n@keyframes animate_buttons {\r\n  from {\r\n    background-color: black;\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    background-color: white;\r\n    opacity: 100;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFydC11cC9zdGFydC11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQiw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixVQUFVO0VBQ1o7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQtdXAvc3RhcnQtdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIge1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbmstYmFyIHtcclxuICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xyXG4gIG9wYWNpdHk6IDEwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJfY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tX2J1dHRvbiB7XHJcbiAgd2lkdGg6IDg1cHg7IFxyXG4gIGhlaWdodDogODVweDtcclxufVxyXG5cclxuLmN1c3RvbV9pY29uIHtcclxuICBoZWlnaHQ6IDM1cHg7IFxyXG4gIHdpZHRoOiAzNXB4OyBcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5jdXN0b21fbWVudV9pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tX21lbnVfdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHRvbl9kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mYWRlX3VwIHtcclxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZV9idXR0b25zO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZV9idXR0b25zIHtcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAxMDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/start-up/start-up.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/start-up/start-up.component.ts ***!
  \***********************************************************/
/*! exports provided: StartUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartUpComponent", function() { return StartUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let StartUpComponent = class StartUpComponent {
    constructor() {
        this.stages = [
            'stage1',
            'stage2',
            'stage3',
            'stage4',
            'stage5',
            'stage6',
            'stage7'
        ];
        this.message = '';
        this.i = 0;
        this.showButtons = false;
        this.buttonStatus = 'down';
        this.imageStatus = 'final';
        this.textStatus = 'final';
        this.closeStatus = 'final';
        this.bottomStatus = 'final';
        this.navigationStatus = 'hide';
        this.projectStatuses = [
            this.stages[0],
            this.stages[2],
            this.stages[3],
            this.stages[4],
            this.stages[6]
        ];
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0);
        this.tempMessage = 'Hey there stranger, thanks for stopping by my portfolio! I am Dylan Wraith, the aspiring software engineer. ' +
            'While I have lots to say, I doubt you came here to listen to me talk all day, ' +
            'so go ahead and use these handy dandy buttons to get where you want to be!';
    }
    ngOnInit() {
        this.createMessage();
    }
    buttonClick() {
        this.textStatus = 'right';
        this.imageStatus = 'left';
        this.buttonStatus = 'down';
        setTimeout(() => {
            this.closeStatus = 'shrink';
            this.bottomStatus = 'expand';
            this.navigationStatus = 'show';
        }, 500);
    }
    createMessage() {
        if (this.message !== this.tempMessage) {
            setTimeout(() => {
                if (this.i === 240) {
                    this.buttonStatus = 'final';
                }
                this.message += this.tempMessage[this.i];
                console.log(this.tempMessage.length);
                this.i++;
                this.createMessage();
            }, 25);
        }
    }
    swipeLeft() {
        let i = 0;
        this.projectStatuses.forEach(status => {
            console.log('initial status: ' + status);
            if (status === this.stages[6]) {
                status = this.stages[4];
            }
            else if (status === this.stages[4]) {
                status = this.stages[3];
            }
            else if (status === this.stages[3]) {
                status = this.stages[2];
            }
            else if (status === this.stages[2]) {
                status = this.stages[1];
            }
            else {
                status = this.stages[6];
            }
            console.log('end status: ' + status);
            this.projectStatuses[i] = status;
            i++;
        });
        let j = 0;
        setTimeout(() => {
            this.projectStatuses.forEach(status => {
                if (status === this.stages[1]) {
                    status = this.stages[0];
                    this.projectStatuses[j] = this.stages[0];
                }
                j++;
            });
        }, 110);
    }
    swipeRight() {
        let i = 0;
        this.projectStatuses.forEach(status => {
            console.log('initial status: ' + status);
            if (status === this.stages[0]) {
                status = this.stages[2];
            }
            else if (status === this.stages[2]) {
                status = this.stages[3];
            }
            else if (status === this.stages[3]) {
                status = this.stages[4];
            }
            else if (status === this.stages[4]) {
                status = this.stages[5];
            }
            else {
                status = this.stages[0];
            }
            console.log('end status: ' + status);
            this.projectStatuses[i] = status;
            i++;
        });
        let j = 0;
        setTimeout(() => {
            this.projectStatuses.forEach(status => {
                if (status === this.stages[5]) {
                    status = this.stages[6];
                    this.projectStatuses[j] = this.stages[6];
                }
                j++;
            });
        }, 110);
    }
};
StartUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start-up/start-up.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-120%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translate(-120%,10%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-120%)',
                    opacity: 0.6
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'scale(1.25)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage5', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(120%)',
                    opacity: 0.6
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage6', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translate(120%,10%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stage7', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(120%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateY(10%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-100%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(10%)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expand', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    height: '100%'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('shrink', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    height: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 100
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({})),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage1=>stage3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage7=>stage5', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage3=>stage4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage4=>stage5', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage5=>stage4', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage4=>stage3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage3=>stage2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage2=>stage1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage5=>stage6', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage6=>stage7', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage7=>stage1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stage1=>stage7', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>moveleft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>moveright', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('down=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>shrink', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>expand', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide=>show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start-up.component.css */ "./src/app/components/start-up/start-up.component.css")).default]
    })
], StartUpComponent);



/***/ }),

/***/ "./src/app/components/test-grid/test-grid.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/test-grid/test-grid.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .snackbarclass {\r\n    background-color: rgb(19, 199, 19);\r\n    font-weight: bold\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0LWdyaWQvdGVzdC1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1ncmlkL3Rlc3QtZ3JpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5zbmFja2JhcmNsYXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTk5LCAxOSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/test-grid/test-grid.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/test-grid/test-grid.component.ts ***!
  \*************************************************************/
/*! exports provided: TestGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGridComponent", function() { return TestGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_services_endpoint_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/endpoint.service */ "./src/app/services/endpoint.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");






let TestGridComponent = class TestGridComponent {
    constructor(endpoint, snackBar) {
        this.endpoint = endpoint;
        this.snackBar = snackBar;
        this.xCoordinate = 0;
        this.yCoordinate = 0;
        this.spriteStatus = '1';
        this.spriteUrl = '../../../assets/forward_sprite.PNG';
        this.animating = false;
        this.stage = false;
        this.home = true;
        this.projects = false;
        this.resume = false;
        this.about = false;
        this.contact = false;
        this.audio = new Audio();
        this.interacted = false;
        this.moving = null;
        this.loading = false;
        this.getScreenSize();
    }
    ngOnInit() { }
    audioClick() {
        this.interacted = !this.interacted;
    }
    // Check for arrow keys being pressed
    handleKeyboardEvent(event) {
        if (!this.animating) {
            if (event.key === 'ArrowUp') {
                this.arrowUp();
            }
            else if (event.key === 'ArrowLeft') {
                this.arrowLeft();
            }
            else if (event.key === 'ArrowDown') {
                this.arrowDown();
            }
            else if (event.key === 'ArrowRight') {
                this.arrowRight();
            }
        }
    }
    // Events for arrow keys pressed
    arrowRight() {
        if (this.xCoordinate !== 13 &&
            !(this.xCoordinate === 7 &&
                ((this.yCoordinate > 1 && this.yCoordinate < 6) ||
                    (this.yCoordinate > 7 && this.yCoordinate < 12)))) {
            this.xCoordinate++;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkRight();
        }
        else {
            this.spriteUrl = '../../../assets/right_sprite.PNG';
            console.log('invalid right');
        }
    }
    arrowDown() {
        if (this.yCoordinate !== 13 &&
            !(this.yCoordinate === 7 &&
                (this.xCoordinate !== 6 && this.xCoordinate !== 7)) &&
            !(this.yCoordinate === 1 &&
                (this.xCoordinate !== 6 && this.xCoordinate !== 7))) {
            this.yCoordinate++;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkDown();
        }
        else {
            this.spriteUrl = '../../../assets/forward_sprite.PNG';
            console.log('invalid down');
        }
    }
    arrowLeft() {
        if (this.xCoordinate !== 0 &&
            !(this.xCoordinate === 6 &&
                ((this.yCoordinate > 1 && this.yCoordinate < 6) ||
                    (this.yCoordinate > 7 && this.yCoordinate < 12)))) {
            this.xCoordinate--;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkLeft();
        }
        else {
            this.spriteUrl = '../../../assets/left_sprite.PNG';
            console.log('invalid left');
        }
    }
    arrowUp() {
        if (this.yCoordinate !== 0 &&
            !(this.yCoordinate === 6 &&
                (this.xCoordinate < 6 || this.xCoordinate > 7)) &&
            !(this.yCoordinate === 12 &&
                (this.xCoordinate < 6 || this.xCoordinate > 7))) {
            this.yCoordinate--;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkUp();
        }
        else if (this.yCoordinate === 6 && this.xCoordinate === 2) {
            // Enter projects page
            this.stop();
            this.yCoordinate--;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkUp();
            setTimeout(() => {
                this.home = false;
                this.projects = true;
            }, 400);
        }
        else if (this.yCoordinate === 6 && this.xCoordinate === 10) {
            // Enter resume page
            this.stop();
            this.yCoordinate--;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkUp();
            setTimeout(() => {
                this.home = false;
                this.resume = true;
            }, 400);
        }
        else if (this.yCoordinate === 12 && this.xCoordinate === 2) {
            // Enter about me page
            this.stop();
            this.yCoordinate--;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkUp();
            setTimeout(() => {
                this.home = false;
                this.about = true;
            }, 400);
        }
        else if (this.yCoordinate === 12 && this.xCoordinate === 10) {
            // Enter contact page
            this.stop();
            this.yCoordinate--;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkUp();
            setTimeout(() => {
                this.home = false;
                this.contact = true;
            }, 400);
        }
        else {
            this.spriteUrl = '../../../assets/backward_sprite.PNG';
            console.log('invalid up');
        }
    }
    // Update walking animation for sprite
    walkRight() {
        this.animating = true;
        this.spriteUrl = '../../../assets/walk_right_sprite.PNG';
        setTimeout(() => {
            this.spriteUrl = '../../../assets/right_sprite.PNG';
            setTimeout(() => {
                this.animating = false;
            }, 100);
        }, 250);
    }
    walkDown() {
        this.animating = true;
        this.stage
            ? (this.spriteUrl = '../../../assets/walk_forward_1_sprite.PNG')
            : (this.spriteUrl = '../../../assets/walk_forward_2_sprite.PNG');
        this.stage = !this.stage;
        setTimeout(() => {
            this.spriteUrl = '../../../assets/forward_sprite.PNG';
            setTimeout(() => {
                this.animating = false;
            }, 100);
        }, 250);
    }
    walkLeft() {
        this.animating = true;
        this.spriteUrl = '../../../assets/walk_left_sprite.PNG';
        setTimeout(() => {
            this.spriteUrl = '../../../assets/left_sprite.PNG';
            setTimeout(() => {
                this.animating = false;
            }, 100);
        }, 250);
    }
    walkUp() {
        this.animating = true;
        this.stage
            ? (this.spriteUrl = '../../../assets/walk_backward_1_sprite.PNG')
            : (this.spriteUrl = '../../../assets/walk_backward_2_sprite.PNG');
        this.stage = !this.stage;
        setTimeout(() => {
            this.spriteUrl = '../../../assets/backward_sprite.PNG';
            setTimeout(() => {
                this.animating = false;
            }, 100);
        }, 250);
    }
    leaveResume() {
        this.resume = !this.resume;
        this.home = !this.home;
        setTimeout(() => {
            this.yCoordinate++;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkDown();
        }, 100);
    }
    leaveProjects() {
        this.projects = !this.projects;
        this.home = !this.home;
        setTimeout(() => {
            this.yCoordinate++;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkDown();
        }, 100);
    }
    leaveContact() {
        this.contact = !this.contact;
        this.home = !this.home;
        setTimeout(() => {
            this.yCoordinate++;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkDown();
        }, 100);
    }
    leaveAbout() {
        this.about = !this.about;
        this.home = !this.home;
        setTimeout(() => {
            this.yCoordinate++;
            this.spriteStatus === '1'
                ? (this.spriteStatus = '2')
                : (this.spriteStatus = '1');
            this.walkDown();
        }, 100);
    }
    sendEmail() {
        this.loading = true;
        const body = new Map();
        body
            .set('from', this.email)
            .set('subject', 'Online Portfolio: Email from ' + this.email + ' - ' + this.name)
            .set('text', this.message);
        this.endpoint.sendEmail(body).subscribe(data => {
            console.log(data);
            this.openSnackBar();
        });
    }
    openSnackBar() {
        this.snackBar.open('Success! Redirecting...', '', {
            duration: 2000,
            panelClass: ['snackbarclass']
        });
        setTimeout(() => {
            this.leaveContact();
            this.loading = false;
        }, 2000);
    }
    goUpClick() {
        if (this.moving === null) {
            this.moving = setInterval(() => {
                if (!this.animating) {
                    this.arrowUp();
                    console.log('going up');
                }
            }, 100);
        }
    }
    goRightClick() {
        if (this.moving === null) {
            this.moving = setInterval(() => {
                if (!this.animating) {
                    this.arrowRight();
                    console.log('going right');
                }
            }, 100);
        }
    }
    goLeftClick() {
        if (this.moving === null) {
            this.moving = setInterval(() => {
                if (!this.animating) {
                    this.arrowLeft();
                    console.log('going left');
                }
            }, 100);
        }
    }
    goDownClick() {
        if (this.moving === null) {
            this.moving = setInterval(() => {
                if (!this.animating) {
                    this.arrowDown();
                    console.log('going down');
                }
            }, 100);
        }
    }
    stop() {
        clearInterval(this.moving);
        this.moving = null;
    }
    getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    }
};
TestGridComponent.ctorParameters = () => [
    { type: src_app_services_endpoint_service__WEBPACK_IMPORTED_MODULE_3__["EndpointService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], TestGridComponent.prototype, "handleKeyboardEvent", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], TestGridComponent.prototype, "getScreenSize", null);
TestGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-grid/test-grid.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('coordinates', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translate({{x}}%,{{y}}%)'
                }), { params: { x: 0, y: 0 } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translate({{x}}%,{{y}}%)'
                }), { params: { x: 0, y: 0 } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1=>2', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('2=>1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-grid.component.css */ "./src/app/components/test-grid/test-grid.component.css")).default]
    })
], TestGridComponent);



/***/ }),

/***/ "./src/app/services/endpoint.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/endpoint.service.ts ***!
  \**********************************************/
/*! exports provided: EndpointService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointService", function() { return EndpointService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EndpointService = class EndpointService {
    constructor(http) {
        this.http = http;
    }
    sendEmail(body) {
        console.log('sending email');
        console.log(JSON.parse(this.formatJsonString(body)));
        return this.http.post('http://localhost:8000/api/email', JSON.parse(this.formatJsonString(body)));
    }
    getAllCats() {
        return this.http.get('http://localhost:8000/api/catss');
    }
    getCat(name) {
        return this.http.get('http://localhost:8000/api/cats/' + name);
    }
    insertCat(cat) {
        return this.http.post('http://localhost:8000/api/cats/', cat);
    }
    updateCat(cat) {
        return this.http.put('http://localhost:8000/api/cats/' + cat.name, cat);
    }
    deleteCat(name) {
        return this.http.delete('http://localhost:8000/api/cats/' + name);
    }
    formatJsonString(map) {
        const jsonString = {};
        map.forEach((value, key) => {
            jsonString[key] = value;
        });
        return JSON.stringify(jsonString);
    }
};
EndpointService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EndpointService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EndpointService);



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

module.exports = __webpack_require__(/*! C:\Users\dw0519\Desktop\dylanwraith\source\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map