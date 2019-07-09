class Room {
    constructor(id, capacity) {
        this.id = id;
        this.capacity = capacity;
        this.players = [];
        this.isFull = true;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    removePlayerById(playerId) {
        const player = this.getPlayerById(playerId);
        console.log(DateTime.getCurrentDateTimeFormatted() + "Player " + player.username + " removed from room: " + this.id);
        
        // Remove player.
        this.players.splice(this.players.indexOf(player), 1);
    }

    getPlayerById(playerId) {
        for (let ii = 0; ii < players.length; ii++) {
            const player = players[ii];
            if (player.id === playerId) {
                return player;
            }
        }
    }
}

module.exports = Room;