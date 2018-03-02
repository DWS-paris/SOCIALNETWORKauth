webpackJsonp(["module"],{

/***/ "../../../../../src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"submitFacebookConnect()\" >Facebbook Connect</button>"

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
var ngx_facebook_1 = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
// Import des modules
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
// Définition du composant
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(userService, facebookService) {
        var _this = this;
        this.userService = userService;
        this.facebookService = facebookService;
        // Initialisation de l'objet utilisateur
        this.userObject = {
            name: null,
            email: null,
            password: null,
            gender: null,
            type: null,
            facebook: {
                token: null,
                id: null
            }
        };
        // Connecter l'utilisateur à Facebook
        this.submitFacebookConnect = function () {
            // Connecter l'utilisateur à Facebook
            _this.facebookService.login()
                .catch(function (error) {
                console.error(error);
            })
                .then(function (response) {
                // Définition des données Facebook utilisateur
                _this.userObject.facebook.token = response.authResponse.accessToken;
                _this.userObject.facebook.id = response.authResponse.userID;
                // Récupérer les information utilisateur 
                _this.facebookService.api('me?fields=id,name,birthday,email, gender')
                    .catch(function (error) {
                    console.error(error);
                })
                    .then(function (response) {
                    // Définition des données Personnelles utilisateur
                    _this.userObject.name = response.name;
                    _this.userObject.email = response.email;
                    _this.userObject.gender = response.gender;
                    _this.userObject.password = _this.userObject.facebook.id;
                    _this.userObject.type = "userFB";
                })
                    .then(function () {
                    console.log(_this.userObject);
                    _this.userService.userRegister(_this.userObject)
                        .catch(function (err) {
                        console.error(err);
                    })
                        .then(function (data) {
                        console.log(data);
                    });
                });
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
    HomepageComponent.prototype.ngOnInit = function () { };
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
            ngx_facebook_1.FacebookService])
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


/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
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
Import des composants du service
*/
// Import des interfaces
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var http_2 = __webpack_require__("../../../http/esm5/http.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
// 
/*
Définition et export du service
*/
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = '/user';
    }
    ;
    // Créer une fonction pour connecter l'utilistateur
    UserService.prototype.userRegister = function (userData) {
        // Définition du header de la requête
        var myHeader = new http_2.Headers();
        myHeader.append('Content-Type', 'application/json');
        console.log(userData);
        return this.http.post(this.apiUrl + "/connect", userData, { headers: myHeader }).toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    /*
    Fonctions de traitement de Promises
    */
    // Traiter le retour de l'API
    UserService.prototype.getData = function (res) {
        return res.json() || {};
    };
    ;
    // Traiter les erreurs de requête
    UserService.prototype.handleError = function (err) {
        return Promise.reject(err);
    };
    ;
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
;
//  


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/toPromise.js":
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map 


/***/ })

});
//# sourceMappingURL=module.chunk.js.map