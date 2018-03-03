webpackJsonp(["module.1"],{

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
var feed_service_1 = __webpack_require__("../../../../../src/app/services/feed/feed.service.ts");
// Définition du composant
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService, feedService) {
        var _this = this;
        this.userService = userService;
        this.feedService = feedService;
        // Loader
        this.loaderState = { path: "/dashboard", isClose: true };
        this.activeView = "/dashboard";
        // Fonction Change View
        this.changeView = function (evt) {
            _this.loaderState = evt;
        };
        // Fonction User Info
        this.getUserInfos = function () {
            _this.userService.getUserInfo(localStorage.getItem('MEANSOCIALtoken'))
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
        // Fonction User Feed
        this.getUserFeed = function () {
            _this.feedService.getFeeds(localStorage.getItem('MEANSOCIALtoken'))
                .then(function (data) {
                console.log(data);
            })
                .catch(function (err) {
                console.error(err);
            });
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // Récupérer les informations utilisateur
        this.getUserInfos();
        // Récupérer la liste des feeds
        this.getUserFeed();
    };
    ;
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            providers: [user_service_1.UserService, feed_service_1.FeedService],
        })
        // 
        /*
        Export du composant
        */
        ,
        __metadata("design:paramtypes", [user_service_1.UserService,
            feed_service_1.FeedService])
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


/***/ }),

/***/ "../../../../../src/app/services/feed/feed.service.ts":
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
var FeedService = /** @class */ (function () {
    function FeedService(http) {
        this.http = http;
        this.apiUrl = '/feed';
    }
    ;
    // Fonction User Me
    FeedService.prototype.getFeeds = function (token) {
        // Définition du header de la requête
        var myHeader = new http_2.Headers();
        myHeader.append('x-access-token', token);
        return this.http.get(this.apiUrl + "/all", { headers: myHeader }).toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    /*
    Fonctions de traitement de Promises
    */
    // Traiter le retour de l'API
    FeedService.prototype.getData = function (res) {
        return res.json() || {};
    };
    ;
    // Traiter les erreurs de requête
    FeedService.prototype.handleError = function (err) {
        return Promise.reject(err);
    };
    ;
    FeedService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FeedService);
    return FeedService;
}());
exports.FeedService = FeedService;
;
//  


/***/ })

});
//# sourceMappingURL=module.1.chunk.js.map