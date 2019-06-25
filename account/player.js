function Player(id, socketId, username, firstName, lastName, gender) {
    this.id = id;
    this.socketId = socketId;
    this.username = username;
    this.name = {
        first: firstName,
        last: lastName
    };
    this.gender = gender;
}

module.exports = Player;