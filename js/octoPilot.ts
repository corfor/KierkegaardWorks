/**
 * Created by cford on 4/30/2015.
 */
module OctoPilot {
    'use strict';
    var octoPilot = angular.module("octoPilot", ["ngRoute"]);

    interface ICarrier {
        id: string;
        abbreviation: string;
        fullName: string;
        platform: string;
    }

    interface ICarrierList {
        resourceList: ICarrier[];
    }

    class CarriersController {
        public count;
        public carriers: ICarrier[];

        constructor($scope, $http) {
            $http.get("//mn1web15t:8000/api/carriers").success((data:ICarrierList) => {
                var d = data.resourceList;
                this.carriers = d;
            });
        }
    }

    octoPilot.controller("CarriersController", CarriersController);
}