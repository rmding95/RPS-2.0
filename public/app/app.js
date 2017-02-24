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
    $scope.chatMessages = [];
    socket.on('sendUserId', function(id) {
        $scope.id = id;
    });
    socket.on('updatePlayerCount', function(count){
        $scope.playerCount = count;
    });
    socket.on('updateChatUsernames', function(users) {
        $scope.users = users;
    });
    socket.on('broadcastChat', function(message, name) {
        $scope.chatMessages.push(name + ": " + message);
    });

    $scope.sendChat = function(event) {
        // check if key pressed was enter
        if (event.which === 13) {
            socket.emit('sendChat', $scope.chatInput, $scope.users[$scope.id]);
        }
    }
}])

