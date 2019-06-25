const io = require("socket.io");
const server = io.listen(3000, function () {
    console.log('listening on *:3000');
});

server.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('message', function (msg) {
        console.log('message: ' + msg);
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});