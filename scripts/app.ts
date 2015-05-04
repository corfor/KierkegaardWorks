/// <reference path="angular.d.ts" />
module Kierkegaard {
    'use strict';
    var module = angular.module('Kierkegaard', []);

    interface IPublication {
        Id:number;
        Title:string;
        Date;
        Author:string;
        Type:string;
        PublishedIn:string;
    }

    export class PublicationsController {
        public items:IPublication[];
        public filtered:IPublication[];
        public showBooks:boolean;
        public showArticles:boolean;
        public searchCriteria:string;

        constructor($http:ng.IHttpService) {
            this.showBooks=true;
            this.showArticles=true;
            $http.get("scripts/Publications.json").success((data:IPublication[]) => this.items = data);
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

        public itemFilter = (item:IPublication) => {
            var t = this;
            var qualifies = false;
            switch (item.Type) {
                case 'Article':
                case 'Pamphlet':
                    qualifies = t.showArticles;
                    break;
                default :
                    qualifies = t.showBooks;
                    break;
            }

            if (qualifies && this.searchCriteria)
            {
                var searchCriteria = t.searchCriteria.toLowerCase();
                qualifies = item.Title.toLowerCase().indexOf(searchCriteria) !== -1
                    || item.Author.toLowerCase().indexOf(searchCriteria) !== -1
                    || (item.PublishedIn && item.PublishedIn.toLowerCase().indexOf(searchCriteria) !== -1)
                    || item.Date.toString().indexOf(searchCriteria) !== -1;
            }

            return qualifies;
        };
    }
    module.controller("PublicationsController", PublicationsController)

}