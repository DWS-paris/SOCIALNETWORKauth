webpackJsonp(["module"],{

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader [loaderState]=\"loaderState\"></app-loader>\n<header>\n    <app-header [activeView]=\"activeView\" (changeView)=\"changeView($event)\"></app-header>\n</header>\n<main class=\"container\">\n    <section *ngIf=\"singleUser\" id=\"userHeader\">\n        <p>Bienvenue sur votre tableau de bord <strong>{{singleUser.name}}</strong></p>\n    </section>\n</main>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
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
/*
Configuration du composants
*/
// Import des interfaces
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// Modules
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
// Définition du composant
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService) {
        var _this = this;
        this.userService = userService;
        // Loader
        this.loaderState = { path: "/dashboard", isClose: true };
        this.activeView = "/dashboard";
        // Fonction Change View
        this.changeView = function (evt) {
            _this.loaderState = evt;
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Récupération du token utilisateur
        var userToken = localStorage.getItem('MEANSOCIALtoken');
        // Récupération des données utilisateur
        this.userService.getUserInfo(userToken)
            .then(function (data) {
            // Masquer le loader
            _this.loaderState.isClose = true;
            // Définition de l'objet singleUser
            _this.singleUser = data;
        })
            .catch(function (err) {
            // Introduction
            _this.loaderState.isClose = false;
            console.error(err);
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            providers: [user_service_1.UserService],
        })
        // 
        /*
        Export du composant
        */
        ,
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//  


/***/ }),

/***/ "../../../../../src/app/components/dashboard/module.ts":
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
var dashboard_component_1 = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
var module_1 = __webpack_require__("../../../../../src/app/partials/header/module.ts");
var module_2 = __webpack_require__("../../../../../src/app/partials/loader/module.ts");
var route_1 = __webpack_require__("../../../../../src/app/components/dashboard/route.ts");
// 
/*
Définition et export du module
*/
// Définition
var DashboardModule = /** @class */ (function () {
    // Export
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            declarations: [dashboard_component_1.DashboardComponent],
            imports: [route_1.Routing, common_1.CommonModule, forms_1.FormsModule, module_1.HeaderModule, module_2.LoaderModule]
        })
        // Export
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
;
//  


/***/ }),

/***/ "../../../../../src/app/components/dashboard/route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// Importer les composants à utiliser dans les routes
var dashboard_component_1 = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
// Créer une constante pour définir le comportement des routes
var appRoutes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent
    }
];
// Exporter une autre constante pour utiliser les routes
exports.Routing = router_1.RouterModule.forChild(appRoutes);


/***/ })

});
//# sourceMappingURL=module.chunk.js.map