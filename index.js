// Import Socket.io

const server = require('http').createServer();
const io = require('socket.io')(server);

// Import UUID.
const uuidv4 = require('uuid/v4');

// Import Player class.
const Player = require('./account/player.js') 

// Import Db helper.
const Db = require('./utils/db.js')

// Import dateTime helper
DateTime = require('./utils/dateTime.js');

// Connected player list.
let players = [];

io.on("connection", function (socket) {
    console.log(DateTime.getCurrentDateTimeFormatted() + "Client connected: " + socket.id);

    socket.emit("OnServerConnected");

    socket.on("OnAuthenticate", function(authData) {
        let player;

        console.log(DateTime.getCurrentDateTimeFormatted() + "Player is trying to authenticating...")
        if (Db.isExistsInDatabase(authData) === true) {

        } else {
            console.log(DateTime.getCurrentDateTimeFormatted() + "Player doesn't exist in database.");
            console.log(DateTime.getCurrentDateTimeFormatted() + "Creating new player.")

            // Create new player.
            player = new Player(uuidv4(), socket.id, "gkaragoz", "gökhan", "karagöz", 0)
            players.push(player);
        }
        console.log(DateTime.getCurrentDateTimeFormatted() + "Player is successfuly authenticated!")
        socket.emit("OnAuthenticated", player)
    });

    socket.on("disconnect", function () {
        for (let ii = 0; ii < players.length; ii++) {
            const player = players[ii];
            if (player.socketId === socket.id) {
                console.log(DateTime.getCurrentDateTimeFormatted() + "Player disconnected: " + players[ii].username + "(" + players[ii].socketId + ")");
                
                // Remove player.
                players.splice(ii, 1);
                break;
            }
        }
    });
});

server.listen(3000, function (err) {
    if (err) throw err
    console.log(DateTime.getCurrentDateTimeFormatted() + "listening on port 3000");
});