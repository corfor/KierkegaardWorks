/// <reference path="angular.d.ts" />
var Kierkegaard;
(function (Kierkegaard) {
    'use strict';
    var module = angular.module('Kierkegaard', []);
    var PublicationsController = (function () {
        function PublicationsController($http) {
            var _this = this;
            this.itemFilter = function (item) {
                var t = _this;
                var qualifies = false;
                switch (item.Type) {
                    case 'Article':
                    case 'Pamphlet':
                        qualifies = t.showArticles;
                        break;
                    default:
                        qualifies = t.showBooks;
                        break;
                }
                if (qualifies && _this.searchCriteria) {
                    var searchCriteria = t.searchCriteria.toLowerCase();
                    qualifies = item.Title.toLowerCase().indexOf(searchCriteria) !== -1 || item.Author.toLowerCase().indexOf(searchCriteria) !== -1 || (item.PublishedIn && item.PublishedIn.toLowerCase().indexOf(searchCriteria) !== -1) || item.Date.toString().indexOf(searchCriteria) !== -1;
                }
                return qualifies;
            };
            this.showBooks = true;
            this.showArticles = true;
            $http.get("scripts/Publications.json").success(function (data) { return _this.items = data; });
        }
        PublicationsController.prototype.getClass = function (pub) {
            //console.log('checking ' + pub.Title);
            if (pub.Type)
                return null;
            if (pub.Date > '1846-03-28')
                return 'second-authorship';
            if (pub.Date > '1841-09-29') {
                if (pub.Author === 'S. Kierkegaard')
                    return 'first-authorship parallel-authorship-religious';
                return 'first-authorship parallel-authorship-aesthetic';
            }
            return null;
        };
        PublicationsController.prototype.getIcon = function (pub) {
            switch (pub.Type) {
                case 'Article': return 'fa fa-file-o article';
                case 'Pamphlet': return 'fa fa-file-o pamphlet';
                default: return 'fa fa-book';
            }
        };
        return PublicationsController;
    })();
    Kierkegaard.PublicationsController = PublicationsController;
    module.controller("PublicationsController", PublicationsController);
})(Kierkegaard || (Kierkegaard = {}));
//# sourceMappingURL=app.js.map