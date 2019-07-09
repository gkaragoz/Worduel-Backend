// Import Room class.
const Room = require('./room.js');

// Import UUID.
const uuidv4 = require('uuid/v4');

class RoomManager {
    constructor() {
        // Opened room list.
        this.rooms = [];
    }

    createRoom() {
        const room = new Room(uuidv4(), 2);

        this.rooms.push(room);
    }

    deleteRoom(roomId) {
        const room = this.getRoomById(roomId);
        console.log(DateTime.getCurrentDateTimeFormatted() + "Room deleted: " + room.id);
        
        // Delete room.
        this.rooms.splice(this.rooms.indexOf(room), 1);
    }

    getRoomById(roomId) {
        for (let ii = 0; ii < this.rooms.length; ii++) {
            if (this.rooms[ii].id === roomId) {
                return this.rooms[ii];
            }
        }
    }

    getRooms() {
        return this.rooms;
    }
    
    showRooms() {
        console.log(">>Room list:\n");
        if (this.rooms.length <= 0) {
            console.log("NO ROOMS");
            return;
        }

        for (let ii = 0; ii < this.rooms.length; ii++) {
            const room = this.rooms[ii];
            console.log("Room id: " + room.id);
            console.log("Room capacity: " + room.capacity);
            console.log("Room players: " + room.players);
            console.log("Room isFull: " + room.isFull);
        }
    }

    addPlayerToRoom(roomId) {
        const room = getRoomById(roomId);
    }

    removePlayerFromRoom(roomId) {
        const room = getRoomById(roomId);
    }
}


module.exports = RoomManager;