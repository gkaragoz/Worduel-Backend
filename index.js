const server = require('http').createServer();
const io = require('socket.io')(server);
const uuidv4 = require('uuid/v4');
const Player = require('./account/player.js') 

// Connected player list.
let players = [];

io.on('connection', function (socket) {
    // Create new player.
    let player = new Player(uuidv4(), socket.id, "gkaragoz", "gökhan", "karagöz", 0)
    players.push(player);
    console.log('Player connected: ' + player.username + "(" + player.socketId + ")");

    socket.emit("OnConnected");

    socket.on('message', function (msg) {
        console.log('message: ' + msg);
    });

    socket.on('disconnect', function () {
        for (let ii = 0; ii < players.length; ii++) {
            const player = players[ii];
            if (player.socketId === socket.id) {
                console.log('Player disconnected: ' + players[ii].username + "(" + players[ii].socketId + ")");
                
                // Remove player.
                players.splice(ii, 1);
            }
        }
    });
});

server.listen(3000, function (err) {
    if (err) throw err
    console.log('listening on port 3000')
});