webpackJsonp(["module.1"],{

/***/ "../../../../../src/app/components/profile/module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
Configuration du composants
*/
// Import des interfaces
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
// Importer les composants
var profile_component_1 = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
var module_1 = __webpack_require__("../../../../../src/app/partials/loader/module.ts");
var module_2 = __webpack_require__("../../../../../src/app/partials/header/module.ts");
var route_1 = __webpack_require__("../../../../../src/app/components/profile/route.ts");
//
/*
Définition et export du module
*/
// Définition
var ProfileModule = /** @class */ (function () {
    // Export
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            declarations: [profile_component_1.ProfileComponent],
            imports: [route_1.Routing, common_1.CommonModule, forms_1.FormsModule, module_1.LoaderModule, module_2.HeaderModule]
        })
        // Export
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;
;
//  


/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader [loaderState]=\"loaderState\"></app-loader>\n<header>\n    <app-header [activeView]=\"activeView\" (changeView)=\"changeView($event)\"></app-header>\n</header>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        var _this = this;
        // Loader
        this.loaderState = { path: "/profile", isClose: true };
        this.activeView = "/profile";
        // Fonction Change View
        this.changeView = function (evt) {
            console.log('changeView', evt);
            _this.loaderState = evt;
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // Introduction
        // this.loaderState.isClose = false;
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "../../../../../src/app/components/profile/route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// Importer les composants à utiliser dans les routes
var profile_component_1 = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
// Créer une constante pour définir le comportement des routes
var appRoutes = [
    {
        path: '',
        component: profile_component_1.ProfileComponent
    }
];
// Exporter une autre constante pour utiliser les routes
exports.Routing = router_1.RouterModule.forChild(appRoutes);


/***/ })

});
//# sourceMappingURL=module.1.chunk.js.map