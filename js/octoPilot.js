/**
 * Created by cford on 4/30/2015.
 */
var OctoPilot;
(function (OctoPilot) {
    'use strict';
    var octoPilot = angular.module("octoPilot", ["ngRoute"]);
    var CarriersController = (function () {
        function CarriersController($scope, $http) {
            var _this = this;
            $http.get("//mn1web15t:8000/api/carriers").success(function (data) {
                var d = data.resourceList;
                _this.carriers = d;
            });
        }
        return CarriersController;
    })();
    octoPilot.controller("CarriersController", CarriersController);
})(OctoPilot || (OctoPilot = {}));
//# sourceMappingURL=octoPilot.js.map