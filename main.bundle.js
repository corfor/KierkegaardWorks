webpackJsonp([1,4],{

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateBadgeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateBadgeComponent = (function () {
    function DateBadgeComponent() {
    }
    DateBadgeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], DateBadgeComponent.prototype, "date", void 0);
    DateBadgeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-date-badge',
            template: __webpack_require__(795),
            styles: [__webpack_require__(789)]
        }), 
        __metadata('design:paramtypes', [])
    ], DateBadgeComponent);
    return DateBadgeComponent;
}());
//# sourceMappingURL=/home/corey/Git/KierkegaardWorks/src/date-badge.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__publications__ = __webpack_require__(632);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getPublications = function () {
        for (var _i = 0, PUBLICATIONS_1 = __WEBPACK_IMPORTED_MODULE_1__publications__["a" /* PUBLICATIONS */]; _i < PUBLICATIONS_1.length; _i++) {
            var publication = PUBLICATIONS_1[_i];
            if (!publication.type) {
                publication.type = "Book";
            }
        }
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__publications__["a" /* PUBLICATIONS */]);
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
//# sourceMappingURL=/home/corey/Git/KierkegaardWorks/src/data.service.js.map

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 461;


/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(628);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/corey/Git/KierkegaardWorks/src/main.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(794),
            styles: [__webpack_require__(790)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/corey/Git/KierkegaardWorks/src/app.component.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_service__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__publication_list_publication_list_component__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__publication_detail_publication_detail_component__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__date_badge_date_badge_component__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__publication_list_publication_list_component__["a" /* PublicationListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__publication_detail_publication_detail_component__["a" /* PublicationDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__date_badge_date_badge_component__["a" /* DateBadgeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */].forRoot()
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/corey/Git/KierkegaardWorks/src/app.module.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_publication__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_publication___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_publication__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_badge_date_badge_component__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicationDetailComponent = (function () {
    function PublicationDetailComponent() {
    }
    PublicationDetailComponent.prototype.ngOnInit = function () {
    };
    PublicationDetailComponent.prototype.getAuthorship = function () {
        if (this.publication.type)
            return [];
        if (this.publication.date > PublicationDetailComponent.startOfSecondAuthorship)
            return ['second-authorship'];
        if (this.publication.date > PublicationDetailComponent.startOfFirstAuthorship) {
            if (this.publication.author === 'S. Kierkegaard')
                return ['first-authorship', 'parallel-authorship-religious'];
            return ['first-authorship', 'parallel-authorship-aesthetic'];
        }
        return [];
    };
    PublicationDetailComponent.prototype.getAuthorshipClass = function () {
        return this.getAuthorship().join(' ');
    };
    PublicationDetailComponent.prototype.getIconClass = function () {
        return null;
        //   if (this.publication.Type)
    };
    PublicationDetailComponent.startOfSecondAuthorship = new Date('1846-03-28');
    PublicationDetailComponent.startOfFirstAuthorship = new Date('1841-09-29');
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_publication__["Publication"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_publication__["Publication"]) === 'function' && _a) || Object)
    ], PublicationDetailComponent.prototype, "publication", void 0);
    PublicationDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-publication-detail',
            template: __webpack_require__(796),
            styles: [__webpack_require__(791)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__date_badge_date_badge_component__["a" /* DateBadgeComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], PublicationDetailComponent);
    return PublicationDetailComponent;
    var _a;
}());
//# sourceMappingURL=/home/corey/Git/KierkegaardWorks/src/publication-detail.component.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicationListComponent = (function () {
    function PublicationListComponent(dataService) {
        this.dataService = dataService;
        this.all = [];
        this.books = [];
        this.articles = [];
        this.pamphlets = [];
    }
    PublicationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPublications().then(function (data) {
            _this.all = data;
            _this.books = data.filter(function (p) { return p.type != 'Article' && p.type != 'Pamphlet'; });
            _this.articles = data.filter(function (p) { return p.type == 'Article'; });
            _this.pamphlets = data.filter(function (p) { return p.type == 'Pamphlet'; });
        });
    };
    PublicationListComponent.prototype.getIcon = function (pub) {
        switch (pub.type) {
            case 'Article':
                return 'fa fa-file-o article';
            case 'Pamphlet':
                return 'fa fa-file-o pamphlet';
            default:
                return 'fa fa-book';
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Array)
    ], PublicationListComponent.prototype, "publications", void 0);
    PublicationListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-publication-list',
            template: __webpack_require__(797),
            styles: [__webpack_require__(792)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], PublicationListComponent);
    return PublicationListComponent;
    var _a;
}());
//# sourceMappingURL=/home/corey/Git/KierkegaardWorks/src/publication-list.component.js.map

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

//# sourceMappingURL=/home/corey/Git/KierkegaardWorks/src/publication.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PUBLICATIONS; });
var PUBLICATIONS = [
    {
        id: 1,
        title: "From The Papers Of One Still Living",
        subtitle: "Published against his will.",
        date: new Date("1838-09-07"),
        author: "S. Kierkegaard",
        type: "Article"
    },
    {
        id: 2,
        title: "On the Concept of Irony with Continual Reference to Socrates",
        date: new Date("1841-09-29"),
        author: "S. Kierkegaard"
    },
    {
        id: 3,
        title: "An Open Confession",
        date: new Date("1842-06-12"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 904"
    },
    {
        id: 4,
        title: "Either/Or",
        subtitle: "A fragment of life.",
        date: new Date("1843-02-20"),
        author: "Victor Eremita"
    },
    {
        id: 5,
        title: "Who is the Author of Either/Or?",
        date: new Date("1843-02-27"),
        author: "A.F. ...",
        type: "Article",
        publishedIn: "The Fatherland, No. 1162"
    },
    {
        id: 6,
        title: "Thanks to Professor Heiberg",
        date: new Date("1843-03-05"),
        author: "Victor Eremita",
        type: "Article",
        publishedIn: "The Fatherland, No. 1168"
    },
    {
        id: 7,
        title: "Two Upbuilding Discourses",
        date: new Date("1843-05-16"),
        author: "S. Kierkegaard"
    },
    {
        id: 8,
        title: "A Brief Explanation",
        date: new Date("1843-05-16"),
        author: "Anonymous",
        type: "Article",
        publishedIn: "The Fatherland, No. 1236"
    },
    {
        id: 9,
        title: "Fear and Trembling",
        subtitle: "Dialectical Lyric.",
        date: new Date("1843-10-16"),
        author: "Johannes de Silentio"
    },
    {
        id: 10,
        title: "Repetition",
        subtitle: "A Venture in Experimenting Psychology.",
        date: new Date("1843-10-16"),
        author: "Constantin Constantius"
    },
    {
        id: 11,
        title: "Three Upbuilding Discourses",
        date: new Date("1843-10-16"),
        author: "S. Kierkegaard"
    },
    {
        id: 12,
        title: "Four Upbuilding Discourses",
        date: new Date("1843-12-06"),
        author: "S. Kierkegaard"
    },
    {
        id: 13,
        title: "Two Upbuilding Discourses",
        date: new Date("1844-03-05"),
        author: "S. Kierkegaard"
    },
    {
        id: 14,
        title: "Three Upbuilding Discourses",
        date: new Date("1844-06-08"),
        author: "S. Kierkegaard"
    },
    {
        id: 15,
        title: "Philosophical Fragments or a Fragment of Philosophy",
        date: new Date("1844-06-13"),
        author: "Johannes Climacus"
    },
    {
        id: 16,
        title: "The Concept of Anxiety",
        subtitle: "Psychologically Orienting Deliberation on the Dogmatic Issue of Hereditary Sin.",
        date: new Date("1844-06-17"),
        author: "Vigilius Haufniensis"
    },
    {
        id: 17,
        title: "Prefaces",
        subtitle: "Light reading for the different classes at their time and leisure.",
        date: new Date("1844-06-17"),
        author: "Nicolas Notabene"
    },
    {
        id: 18,
        title: "Four Upbuilding Discourses",
        date: new Date("1844-08-31"),
        author: "S. Kierkegaard"
    },
    {
        id: 19,
        title: "Three Discourses on Imagined Occasions",
        date: new Date("1845-04-29"),
        author: "S. Kierkegaard"
    },
    {
        id: 20,
        title: "Stages on Life's Way",
        subtitle: "Studies by sundry persons.",
        date: new Date("1845-04-30"),
        author: "Hilarius Bookbinder"
    },
    {
        id: 21,
        title: "A declaration and a slight addition",
        date: new Date("1845-05-09"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 1883"
    },
    {
        id: 22,
        title: "A passing comment on a detail in Don Juan. Part 1",
        subtitle: "Part 1",
        date: new Date("1845-05-19"),
        author: "A.",
        type: "Article",
        publishedIn: "The Fatherland, No. 1890"
    },
    {
        id: 22,
        title: "A passing comment on a detail in Don Juan. Part 2",
        subtitle: "Part 2",
        date: new Date("1845-05-20"),
        author: "A.",
        type: "Article",
        publishedIn: "The Fatherland, No. 1891"
    },
    {
        id: 24,
        title: "The dialectical outcome of a literary-political business concern",
        date: new Date("1846-01-10"),
        author: "Frater Taciturnus",
        type: "Article",
        publishedIn: "The Fatherland, No. 9"
    },
    {
        id: 25,
        title: "Concluding Unscientific Postscript to the Philosophical Fragments",
        subtitle: "A mimic-pathetic-dialectical composition, an existential contribution.",
        date: new Date("1846-02-28"),
        author: "Johannes Climacus"
    },
    {
        id: 26,
        title: "Two Ages: A Literary Review",
        subtitle: "Two Ages, a Novel by the Author of \"A Story of Everyday Life,\" edited by J.L. Heiberg. Copenhagen. Reitzel. 1845.",
        date: new Date("1846-03-30"),
        author: "S. Kierkegaard"
    },
    {
        id: 23,
        title: "The activity of an itinerant aesthete and how he paid for the banquet",
        date: new Date("1846-12-27"),
        author: "Frater Taciturnus",
        type: "Article",
        publishedIn: "The Fatherland, No. 2078"
    },
    {
        id: 27,
        title: "Upbuilding Discourses in Various Spirits",
        date: new Date("1847-03-13"),
        author: "S. Kierkegaard"
    },
    {
        id: 28,
        title: "Works of Love",
        date: new Date("1847-09-29"),
        author: "S. Kierkegaard"
    },
    {
        id: 29,
        title: "Christian Discourses",
        date: new Date("1848-04-26"),
        author: "S. Kierkegaard"
    },
    {
        id: 30,
        title: "The crisis and a crisis in the life of an actress, Part 1",
        date: new Date("1848-07-24"),
        author: "Inter et inter",
        type: "Article",
        publishedIn: "The Fatherland, No. 188"
    },
    {
        id: 30,
        title: "The crisis and a crisis in the life of an actress, Part 2",
        date: new Date("1848-07-25"),
        author: "Inter et inter",
        type: "Article",
        publishedIn: "The Fatherland, No. 189"
    },
    {
        id: 30,
        title: "The crisis and a crisis in the life of an actress, Part 3",
        date: new Date("1848-07-26"),
        author: "Inter et inter",
        type: "Article",
        publishedIn: "The Fatherland, No. 190"
    },
    {
        id: 30,
        title: "The crisis and a crisis in the life of an actress, Part 4",
        date: new Date("1848-07-27"),
        author: "Inter et inter",
        type: "Article",
        publishedIn: "The Fatherland, No. 191"
    },
    {
        id: 31,
        title: "The Lily in the Field and the Bird of the Air",
        subtitle: "Three Devotional Discourses.",
        date: new Date("1849-05-14"),
        author: "S. Kierkegaard"
    },
    {
        id: 32,
        title: "Two Ethical-Religious Essays",
        date: new Date("1849-05-19"),
        author: "H.H."
    },
    {
        id: 33,
        title: "The Sickness unto Death",
        subtitle: "A Christian Psychological Exposition for Upbuilding and Awakening.",
        date: new Date("1849-07-30"),
        author: "Anti-Climacus"
    },
    {
        id: 34,
        title: "Three Discourses at the Communion on Fridays",
        subtitle: "The High Priest-The Tax Collector-The Woman Who Was a Sinner.",
        date: new Date("1849-11-13"),
        author: "S. Kierkegaard"
    },
    {
        id: 35,
        title: "Practice in Christianity",
        subtitle: "No. I, II, III",
        date: new Date("1850-09-25"),
        author: "Anti-Climacus"
    },
    {
        id: 36,
        title: "An Upbuilding Discourse",
        subtitle: "The Woman Who Was a Sinner. Luke 7:37ff.",
        date: new Date("1850-12-20"),
        author: "S. Kierkegaard"
    },
    {
        id: 37,
        title: "An open letter on the occasion of a statement about me by Dr. Rudelback",
        date: new Date("1851-01-31"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 26"
    },
    {
        id: 38,
        title: "The Point of View of My Work as an Author. A Direct Communication, Report to History.",
        date: new Date("1851-08-07"),
        author: "S. Kierkegaard"
    },
    {
        id: 39,
        title: "Two Discourses at the Communion on Fridays",
        date: new Date("1851-08-07"),
        author: "S. Kierkegaard"
    },
    {
        id: 40,
        title: "For Self-Examination Recommended to the Present Age",
        date: new Date("1851-09-10"),
        author: "S. Kierkegaard"
    },
    {
        id: 41,
        title: "Was Bishop Mynster a \"Truth-Witness\"?",
        date: new Date("1854-12-18"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 295"
    },
    {
        id: 42,
        title: "There the case rests!",
        date: new Date("1854-12-30"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 304"
    },
    {
        id: 43,
        title: "A challenge to me by Pastor Paludan-M?ller",
        date: new Date("1855-01-12"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 10"
    },
    {
        id: 44,
        title: "The point at issue with Bishop Martensen..",
        date: new Date("1855-01-29"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 24"
    },
    {
        id: 45,
        title: "Two new witnesses to the Truth",
        date: new Date("1855-01-29"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 24"
    },
    {
        id: 46,
        title: "With regard to Bishop Mynster",
        date: new Date("1855-03-20"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 67"
    },
    {
        id: 47,
        title: "Is this Christian worship, or is it treating God as a fool?",
        date: new Date("1855-03-21"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 68"
    },
    {
        id: 48,
        title: "What must be done",
        date: new Date("1855-03-22"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 69"
    },
    {
        id: 49,
        title: "The religious situation",
        date: new Date("1855-03-26"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 72"
    },
    {
        id: 50,
        title: "A thesis",
        date: new Date("1855-03-28"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 74"
    },
    {
        id: 51,
        title: "\"Salt\"",
        date: new Date("1855-03-30"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 76"
    },
    {
        id: 52,
        title: "What do I want?",
        date: new Date("1855-03-31"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 77"
    },
    {
        id: 53,
        title: "With reference to an anonymous proposal made to me in No. 79 of this newspaper",
        date: new Date("1855-04-07"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 81"
    },
    {
        id: 54,
        title: "Would it be best now to \"stop ringing the fire alarm\"?",
        date: new Date("1855-04-11"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 83"
    },
    {
        id: 55,
        title: "Christianity with a government commission or Christianity without a government commission",
        date: new Date("1855-04-11"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 83"
    },
    {
        id: 56,
        title: "What cruel punishment!",
        date: new Date("1855-04-27"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 97"
    },
    {
        id: 57,
        title: "A result",
        date: new Date("1855-05-10"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 107"
    },
    {
        id: 58,
        title: "A monologue",
        date: new Date("1855-05-10"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 107"
    },
    {
        id: 59,
        title: "About a silly assumption of the importance over against me and the view of Christianity I stand for",
        date: new Date("1855-05-15"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 111"
    },
    {
        id: 60,
        title: "With regard to the new edition of \"Training in Christianity\" ",
        date: new Date("1855-05-16"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 112"
    },
    {
        id: 61,
        title: "This has to be said; so let it now be said",
        date: new Date("1855-05-24"),
        author: "S. Kierkegaard",
        type: "Pamphlet"
    },
    {
        id: 62,
        title: "The Moment, No. 1",
        date: new Date("1855-05-24"),
        author: "S. Kierkegaard",
        type: "Article"
    },
    {
        id: 63,
        title: "That Bishop Martensen",
        date: new Date("1855-05-26"),
        author: "S. Kierkegaard",
        type: "Article",
        publishedIn: "The Fatherland, No. 120"
    },
    {
        id: 64,
        title: "The Moment, No. 2",
        date: new Date("1855-06-04"),
        author: "S. Kierkegaard",
        type: "Article"
    },
    {
        id: 65,
        title: "What Christ's judgement is about official Christianity",
        date: new Date("1855-06-16"),
        author: "S. Kierkegaard",
        type: "Pamphlet"
    },
    {
        id: 66,
        title: "The Moment, No. 3",
        date: new Date("1855-06-27"),
        author: "S. Kierkegaard",
        type: "Article"
    },
    {
        id: 67,
        title: "The Moment, No. 4",
        date: new Date("1855-07-07"),
        author: "S. Kierkegaard",
        type: "Article"
    },
    {
        id: 68,
        title: "The Moment, No. 5",
        date: new Date("1855-07-27"),
        author: "S. Kierkegaard",
        type: "Article"
    },
    {
        id: 69,
        title: "The Moment, No. 6",
        date: new Date("1855-08-23"),
        author: "S. Kierkegaard",
        type: "Article"
    },
    {
        id: 70,
        title: "The Moment, No. 7",
        date: new Date("1855-08-30"),
        author: "S. Kierkegaard",
        type: "Article"
    },
    {
        id: 71,
        title: "The Unchangeableness of God",
        subtitle: "A discourse.",
        date: new Date("1855-08-31"),
        author: "S. Kierkegaard",
        type: "Pamphlet"
    },
    {
        id: 72,
        title: "The Moment, No. 8",
        date: new Date("1855-09-11"),
        author: "S. Kierkegaard",
        type: "Article"
    }
];
//# sourceMappingURL=/home/corey/Git/KierkegaardWorks/src/publications.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__(798),
            styles: [__webpack_require__(793)]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
//# sourceMappingURL=/home/corey/Git/KierkegaardWorks/src/toolbar.component.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/corey/Git/KierkegaardWorks/src/environment.js.map

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "h2 {\n  display:inline-block;\n}\napp-date-badge {\n  background-color: darkgray;\n  display: inline-block;\n  color: white;\n  padding: 5px 15px;\n  border-radius: 10px;\n}\n\napp-date-badge.first-authorship\n{\n  background-color: darkgreen !important;\n}\n\napp-date-badge.second-authorship\n{\n  background-color: darkblue;\n}\n\napp-date-badge.parallel-authorship-aesthetic\n{\n  font-style: italic;\n}\n\n.title {\n  font-weight: bold;\n  font-size: larger;\n}\n\n.subtitle {\n  font-weight: bold;\n  font-style: italic;\n}\n\n.publicationType {\n  text-align: center;\n  font-size: small;\n}\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<app-publication-list></app-publication-list>\n"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = "<div color=\"primary\"  md-tooltip=\"{{date | date:'longDate'}}\" >{{date.getFullYear()}}</div>\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = "<md-card-content fxLayout=\"row\" fxLayoutGap=\"5%\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n    <app-date-badge [date]=\"publication.date\" [class]=\"getAuthorshipClass()\"></app-date-badge>\n    <div class=\"publicationType\">{{publication.type}}</div>\n  </div>\n  <div fxLayout=\"column\">\n    <div class=\"title\">{{publication.title}}</div>\n    <span class=\"subtitle\" *ngIf=\"publication.subtitle\">{{publication.subtitle}}</span>\n    <span *ngIf=\"publication.author\">by {{publication.author}}</span>\n    <span *ngIf=\"publication.publishedIn\">published in: {{publication.publishedIn}}</span>\n  </div>\n</md-card-content>\n"

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n  <md-tab label=\"Books ({{books.length}})\">\n    <md-card *ngFor=\"let pub of books; let i = index;\">\n        <app-publication-detail [publication]=\"pub\" ></app-publication-detail>\n    </md-card>\n\n  </md-tab>\n  <md-tab label=\"Articles ({{articles.length}})\">\n    <md-card *ngFor=\"let pub of articles; let i = index;\">\n      <app-publication-detail [publication]=\"pub\" ></app-publication-detail>\n    </md-card>\n  </md-tab>\n  <md-tab label=\"Pamphlets ({{pamphlets.length}})\">\n    <md-card *ngFor=\"let pub of pamphlets; let i = index;\">\n      <app-publication-detail [publication]=\"pub\" ></app-publication-detail>\n    </md-card>\n  </md-tab>\n  <md-tab label=\"All ({{all.length}})\">\n    <md-card *ngFor=\"let pub of all; let i = index;\">\n      <app-publication-detail [publication]=\"pub\" ></app-publication-detail>\n    </md-card>\n  </md-tab>\n\n</md-tab-group>\n"

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <h1>Works of Kierkegaard</h1>\n  <span class=\"spacer\"></span>\n  <md-menu></md-menu>\n</md-toolbar>\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(462);


/***/ })

},[833]);
//# sourceMappingURL=main.bundle.map