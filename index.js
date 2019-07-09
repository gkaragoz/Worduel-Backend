// Import Socket.io
const server = require('http').createServer();
const io = require('socket.io')(server);

// Import UUID.
const uuidv4 = require('uuid/v4');

// Import Player class.
const Player = require('./account/player.js') 

// Import Room class.
const RoomManager = require('./room/roomManager.js');

// Import Db helper.
const Db = require('./utils/db.js')

// Import dateTime helper
DateTime = require('./utils/dateTime.js');

// Connected player list.
let players = [];

const roomManager = new RoomManager();

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
            let id = uuidv4();
            let socketId = socket.id;
            let username = "gkaragoz";
            let firstName = "gökhan";
            let lastName = "karagöz";
            let gender = 0;
            player = new Player(id, socketId, username, firstName, lastName, gender);
            players.push(player);
        }
        console.log(DateTime.getCurrentDateTimeFormatted() + "Player is successfuly authenticated!")
        socket.emit("OnAuthenticated", player)
    });

    socket.on("OnMatchmake", function() {
        const player = getPlayerBySocketId(socket.id);

        player.talk();
    });

    socket.on("disconnect", function () {
        const player = getPlayerBySocketId(socket.id);
        console.log(DateTime.getCurrentDateTimeFormatted() + "Player disconnected: " + player.username + "(" + player.socketId + ")");
        
        // Remove player.
        players.splice(players.indexOf(player), 1);
    });
});

function getPlayerBySocketId(socketId) {
    for (let ii = 0; ii < players.length; ii++) {
        const player = players[ii];
        if (player.socketId === socketId) {
            return player;
        }
    }
}

server.listen(3000, function (err) {
    if (err) throw err
    console.log(DateTime.getCurrentDateTimeFormatted() + "listening on port 3000");
});