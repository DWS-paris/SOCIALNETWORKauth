webpackJsonp(["module.0"],{

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
ProfileModule
*/
// Imports des Interfaces
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
// Importer les composants
var profile_component_1 = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
var module_1 = __webpack_require__("../../../../../src/app/partials/loader/module.ts");
var module_2 = __webpack_require__("../../../../../src/app/partials/header/module.ts");
var route_1 = __webpack_require__("../../../../../src/app/components/profile/route.ts");
// Configuration du ProfileModule
var ProfileModule = /** @class */ (function () {
    // 
    /*
    Export de ProfileModule
    */
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            declarations: [profile_component_1.ProfileComponent],
            imports: [route_1.Routing, common_1.CommonModule, forms_1.FormsModule, module_1.LoaderModule, module_2.HeaderModule]
        })
        // 
        /*
        Export de ProfileModule
        */
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;
;
//  


/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader [loaderState]=\"loaderState\"></app-loader>\n\n<header>\n    <app-header \n        [activeView]=\"activeView\" \n        (changeView)=\"changeView($event)\"\n    ></app-header>\n</header>\n\n<main class=\"container\">\n    <section *ngIf=\"singleUser\" id=\"userHeader\">\n        <p><strong><a href=\"\"><i class=\"fas fa-tachometer-alt\"></i></a> ></strong> Profil <strong>{{singleUser.name}}</strong></p>\n    </section>\n\n    <section *ngIf=\"singleUser\">\n        <h2>Modifier vos informations</h2>\n\n        <form (submit)=\"userUpdate()\" id=\"editUserForm\">\n            <label for=\"pseudo\">Pseudo</label>\n            <input type=\"text\" name=\"pseudo\" [(ngModel)]=\"singleUser.name\">\n\n            <label for=\"email\">Email</label>\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"singleUser.email\">\n\n            <label for=\"password\">Password</label>\n            <input type=\"text\" name=\"password\" disabled [(ngModel)]=\"singleUser.facebook.id\">\n\n            <button type=\"submit\">Modifier</button>\n        </form>\n    </section>\n</main>"

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
/*
Configuration du composants
*/
// Import des interfaces
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
// Définition du composant
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService) {
        var _this = this;
        this.userService = userService;
        // Variables
        this.loaderState = { path: "/profile", isClose: true };
        this.activeView = "/profile";
        this.userToken = localStorage.getItem('MEANSOCIALtoken');
        // Fonction Change View
        this.changeView = function (evt) {
            _this.loaderState = evt;
        };
        // Fonction User Update
        this.userUpdate = function () {
            _this.userService.updateUserInfo(_this.singleUser, _this.userToken)
                .then(function (data) {
                // Redéfinition de l'objet singleUser
                _this.singleUser = data.content;
                console.log(_this.singleUser);
            })
                .catch(function (err) {
                console.error(err);
            });
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Récupération des données utilisateur
        this.userService.getUserInfo(this.userToken)
            .then(function (data) {
            // Masquer le loader
            _this.loaderState.isClose = true;
            // Définition de l'objet singleUser
            _this.singleUser = data;
            console.log(_this.singleUser);
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            providers: [user_service_1.UserService]
        })
        // 
        /*
        Export du composant
        */
        ,
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//  


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
//# sourceMappingURL=module.0.chunk.js.map