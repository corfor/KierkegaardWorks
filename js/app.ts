module skViewer {
    'use strict';
    var module = angular.module('skViewer', ['ngRoute', 'ngLodash']);

    interface IPublication {
        Id:number;
        Title:string;
        Date;
        Author:string;
        Type:string;
        PublishedIn:string;
    }

    class PublicationsController {
        public Count;
        public items:IPublication[];
        public filtered:IPublication[];
        public showBooks:boolean;
        public showArticles:boolean;

        constructor($scope:ng.IScope, $http:ng.IHttpService) {
            this.showBooks=true;
            this.showArticles=true;
            $http.get("js/Publications.json").success(data => {
                this.items = data;
            });

        }

        public getClass(pub:IPublication):string {
            //console.log('checking ' + pub.Title);
            if (pub.Type) return null;
            if (pub.Date > '1846-03-28') return 'second-authorship';
            if (pub.Date > '1841-09-29') {
                if (pub.Author === 'S. Kierkegaard')
                    return 'first-authorship parallel-authorship-religious';
                return 'first-authorship parallel-authorship-aesthetic';
            }

            return null;
        }

        public getIcon(pub:IPublication):string
        {
            switch (pub.Type){
                case 'Article': return 'fa fa-file-o article';
                case 'Pamphlet': return 'fa fa-file-o pamphlet';
                default: return 'fa fa-book';
            }
        }

        public itemFilter = item => {
            var p:IPublication = item;
            switch (p.Type) {
                case 'Article':
                case 'Pamphlet':
                    return this.showArticles;
                default :
                    return this.showBooks;
            }
        };
    }
    module.controller("PublicationsController", PublicationsController)

}