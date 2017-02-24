'use strict';

module.exports = function(io) {

    //dictionary of current users where key=socket.id, value=username
    var users = {};

    io.on('connection', function(socket) {
        console.log('a user connected');

        socket.on('sendChat', function(message, name) {
            sendGlobalChat(io, message, name);
        })

        users[socket.id] = "Anon";
        socket.emit('sendUserId', socket.id);

        updateGlobalUserDisplays(io, users);
    });

    function updateGlobalUserDisplays(io, users) {
        io.emit('updatePlayerCount', Object.keys(users).length);
        io.emit('updateChatUsernames', users);
    }

    function sendGlobalChat(io, message, name) {
        io.emit('broadcastChat', message, name);
    }
}