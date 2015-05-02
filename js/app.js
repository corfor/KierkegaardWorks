var skViewer;
(function (skViewer) {
    'use strict';
    var module = angular.module('skViewer', ['ngRoute', 'ngLodash']);
    var PublicationsController = (function () {
        function PublicationsController($scope, $http) {
            var _this = this;
            this.itemFilter = function (item) {
                var p = item;
                switch (p.Type) {
                    case 'Article':
                    case 'Pamphlet':
                        return _this.showArticles;
                    default:
                        return _this.showBooks;
                }
            };
            this.showBooks = true;
            this.showArticles = true;
            $http.get("js/Publications.json").success(function (data) {
                _this.items = data;
            });
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
    module.controller("PublicationsController", PublicationsController);
})(skViewer || (skViewer = {}));
//# sourceMappingURL=app.js.map