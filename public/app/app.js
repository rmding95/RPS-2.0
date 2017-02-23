'use strict';

var rockPaperScissorsApp = angular.module('RockPaperScissorsApp', ['ui.router', 'ui.bootstrap', 'btford.socket-io'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
			url: '/',
			templateUrl: 'partials/home.html',
            controller: 'HomeController'
		})
})

.factory('socket', function(socketFactory) {
    var mySocket = socketFactory();
    mySocket.forward('error');
    return mySocket;
})

.controller('HomeController', ['$scope', 'socket', function($scope, socket) {
    socket.emit('test', 'fuck');
    socket.on('test1', function(data){
        console.log(data);
    });
}])

