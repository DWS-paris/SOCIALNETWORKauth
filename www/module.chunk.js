webpackJsonp(["module"],{

/***/ "../../../../../src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"loginSection\">\n    <h1>HeyU <span>MEAN social App for fun</span></h1>\n    <button (click)=\"submitFacebookConnect()\" >Facebook connect</button>\n    <p><em>Cliquez vous connecter au créer un compte</em></p>\n</section>\n<aside id=\"loader\" [ngClass]=\"{  open: loaderIsClose, right: loaderIsRight }\"></aside>"

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ngx_facebook_1 = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
// Import des modules
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
// Définition du composant
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(userService, facebookService, router) {
        var _this = this;
        this.userService = userService;
        this.facebookService = facebookService;
        this.router = router;
        // Loader
        this.loaderIsClose = true;
        this.loaderIsRight = false;
        // Initialisation de l'objet utilisateur
        this.userObject = {
            name: null,
            email: null,
            password: null,
            gender: null,
            type: null,
            facebook: {
                token: null,
                id: null,
                avatar: null
            }
        };
        // Connecter l'utilisateur à Facebook
        this.submitFacebookConnect = function () {
            // Connecter l'utilisateur sur Facebook
            _this.facebookService.login()
                .then(function (response) {
                // Définition des données Facebook utilisateur
                _this.userObject.facebook.token = response.authResponse.accessToken;
                _this.userObject.facebook.id = response.authResponse.userID;
                // Récupérer les informations utilisateur sur Facebook
                _this.facebookService.api('me?fields=id,name,birthday,email, gender, picture')
                    .then(function (response) {
                    // Définition des données Personnelles utilisateur
                    _this.userObject.facebook.avatar = response.picture.data.url;
                    _this.userObject.name = response.name;
                    _this.userObject.email = response.email;
                    _this.userObject.gender = response.gender;
                    _this.userObject.password = _this.userObject.facebook.id;
                    _this.userObject.type = "userFB";
                    // Afficher le loader
                    _this.loaderIsClose = true;
                    // Appeler la fonction du service pour connecter l'utilisateur
                    _this.userService.userFacebooConnect(_this.userObject)
                        .then(function (data) {
                        // Enregistrement du token
                        localStorage.setItem('MEANSOCIALtoken', data.content.token);
                        // Navigation
                        window.setTimeout(function () {
                            _this.router.navigateByUrl("/dashboard");
                        }, 300);
                    })
                        .catch(function (err) {
                        console.error(err);
                    });
                })
                    .catch(function (error) {
                    console.error(error);
                });
            })
                .catch(function (error) {
                console.error(error);
            });
        };
        // Configuration du module Facebook
        var initParams = {
            appId: '183483015710927',
            xfbml: true,
            version: 'v2.8'
        };
        // Initialisation du module Facebook
        facebookService.init(initParams);
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Introduction
        window.setTimeout(function () {
            _this.loaderIsRight = true;
            window.setTimeout(function () {
                _this.loaderIsClose = false;
                _this.loaderIsRight = false;
            }, 300);
        }, 1000);
    };
    HomepageComponent = __decorate([
        core_1.Component({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/components/homepage/homepage.component.html"),
            providers: [user_service_1.UserService]
        })
        //
        /*
        Export du composant
        */
        ,
        __metadata("design:paramtypes", [user_service_1.UserService, ngx_facebook_1.FacebookService, router_1.Router])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
// 


/***/ }),

/***/ "../../../../../src/app/components/homepage/module.ts":
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
var homepage_component_1 = __webpack_require__("../../../../../src/app/components/homepage/homepage.component.ts");
var route_1 = __webpack_require__("../../../../../src/app/components/homepage/route.ts");
// 
/*
Définition et export du module
*/
// Définition
var HomepageModule = /** @class */ (function () {
    // Export
    function HomepageModule() {
    }
    HomepageModule = __decorate([
        core_1.NgModule({
            declarations: [homepage_component_1.HomepageComponent],
            imports: [route_1.Routing, common_1.CommonModule, forms_1.FormsModule]
        })
        // Export
    ], HomepageModule);
    return HomepageModule;
}());
exports.HomepageModule = HomepageModule;
;
//  


/***/ }),

/***/ "../../../../../src/app/components/homepage/route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// Importer les composants à utiliser dans les routes
var homepage_component_1 = __webpack_require__("../../../../../src/app/components/homepage/homepage.component.ts");
// Créer une constante pour définir le comportement des routes
var appRoutes = [
    {
        path: '',
        component: homepage_component_1.HomepageComponent
    }
];
// Exporter une autre constante pour utiliser les routes
exports.Routing = router_1.RouterModule.forChild(appRoutes);


/***/ })

});
//# sourceMappingURL=module.chunk.js.map