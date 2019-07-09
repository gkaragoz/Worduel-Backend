class Player {
    constructor(id, socketId, username, firstName, lastName, gender) {
        this.id = id;
        this.socketId = socketId;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }

    talk() {
        console.log("Talking...");
        console.log("id: " + this.id);
        console.log("socketId: " + this.socketId);
        console.log("username: " + this.username);
        console.log("firstName: " + this.firstName);
        console.log("lastName: " + this.lastName);
        console.log("gender: " + this.gender);
    }
}

module.exports = Player;