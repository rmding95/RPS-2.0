'use strict';

var rockPaperScissorsApp = angular.module('RockPaperScissorsApp', [])
.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/home.html'
        })
})

.controller('HomeController', ['$scope', function($scope) {
    
}])