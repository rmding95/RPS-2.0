'use strict';

module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log('a user connected');

        socket.on('test', function(data) {
            socket.emit('test1', socket.id);
        });
    });
}