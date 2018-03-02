webpackJsonp(["module"],{

/***/ "../../../../../src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader [loaderState]=\"loaderState\"></app-loader>\n\n<section id=\"loginSection\">\n    <h1>HeyU <span>MEAN social App for fun</span></h1>\n    <form id=\"loginForm\" action=\"#\" (submit)=\"submitLogUser()\">\n\n        <fieldset>\n            <label for=\"userEmail\">Email <em><span [ngClass]=\"{'open': errorMsg.email}\">Champ obligatoire</span></em></label>\n            <input type=\"text\" id=\"userEmail\" (focus)=\"errorMsg.email = false; errorMsg.invalidUser = false\" [(ngModel)]=\"userLoginObject.email\" name=\"email\">\n        \n            <label for=\"userPassword\">Mot de passe <em><span [ngClass]=\"{'open': errorMsg.password}\">Champ obligatoire</span><span [ngClass]=\"{'open': errorMsg.invalidPassword}\">Mot de passe non valide</span></em></label>\n            <input type=\"password\" id=\"userPassword\" (focus)=\"errorMsg.password = false; errorMsg.invalidPassword = false\" [(ngModel)]=\"userLoginObject.password\" name=\"password\">\n        \n            <button type=\"submit\">Connexion</button>\n            <button (click)=\"submitFacebookConnect()\" >Facebook connect</button>\n        </fieldset>\n    \n    </form>\n</section>"

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
        // Variables : Loader
        this.loaderState = { path: "/", isClose: false };
        this.loaderIsClose = true;
        this.loaderIsRight = false;
        // Variables : Login
        this.userLoginObject = {
            email: null,
            password: null
        };
        this.errorMsg = {
            errors: 0,
            email: false,
            password: false,
            invalidUser: false,
            invalidPassword: false
        };
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
                    _this.loaderState = { path: "/facebook-connect", isClose: false };
                    // Appeler la fonction du service pour connecter l'utilisateur
                    _this.userService.userFacebooConnect(_this.userObject)
                        .then(function (data) {
                        // Enregistrement du token
                        localStorage.setItem('MEANSOCIALtoken', data.content.token);
                        _this.loaderState = { path: "/dashboard", isClose: false };
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
        // Function User Login
        this.submitLogUser = function () {
            // Vider les erreurs
            _this.errorMsg.errors = 0;
            // Vérification des informations saisies
            if (_this.userLoginObject.email == null || _this.userLoginObject.email.length == 0) {
                // Email manquant
                _this.errorMsg.email = true;
                _this.errorMsg.errors++;
            }
            if (_this.userLoginObject.password == null || _this.userLoginObject.password.length == 0) {
                // Password manquant
                _this.errorMsg.password = true;
                _this.errorMsg.errors++;
            }
            if (_this.errorMsg.errors === 0) {
                // => Formulaire validé
                // Afficher le loader
                _this.loaderState.isClose = false;
                _this.userService.userLogin(_this.userLoginObject).then(function (user) {
                    // Enregistrement du token
                    localStorage.setItem('MEANSOCIALtoken', user.token);
                    _this.loaderState = { path: "/dashboard", isClose: false };
                }).catch(function (error) {
                    if (error.status === 404) {
                        // Utilisateur inconnu
                        _this.errorMsg.invalidUser = true;
                    }
                    else if (error.status === 401) {
                        // Mot de passe invalide
                        _this.errorMsg.invalidPassword = true;
                    }
                });
            }
        };
        // Fonction User Me
        this.checkUser = function () {
            _this.userService.getUserInfo(localStorage.getItem('MEANSOCIALtoken'))
                .then(function (data) {
                // Afficher le loader
                _this.loaderState = { path: "/dashboard", isClose: true };
                // window.setTimeout(()=>{
                //   // Rédiriger l'utilisateur
                //   this.router.navigateByUrl(`/dashboard`);
                // }, 300);
            })
                .catch(function (err) {
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
        // Masquer le loader
        window.setTimeout(function () {
            window.setTimeout(function () {
                _this.checkUser();
            }, 600);
        }, 600);
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
        __metadata("design:paramtypes", [user_service_1.UserService,
            ngx_facebook_1.FacebookService,
            router_1.Router])
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
var module_1 = __webpack_require__("../../../../../src/app/partials/loader/module.ts");
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
            imports: [route_1.Routing, common_1.CommonModule, forms_1.FormsModule, module_1.LoaderModule]
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