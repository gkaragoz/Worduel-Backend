function Room(name, id) {
    this.id = id;
    this.players = [];
    this.playerLimit = 2;
    this.status = "available";
  };
  
  Room.prototype.addPlayer = function(playerId) {
    if (this.status === "available") {
      this.players.push(playerId);
    }
  };
  
  Room.prototype.removePlayer = function(player) {
    let playerIndex = -1;
    for(let ii = 0; ii < this.players.length; ii++){
      if(this.players[ii].id === player.id){
        playerIndex = ii;
        break;
      }
    }
    this.players.remove(playerIndex);
  };
  
  Room.prototype.getPlayer = function(playerId) {
    let player = null;
    for(var ii = 0; ii < this.players.length; ii++) {
      if(this.players[ii].id == playerId) {
        player = this.players[ii];
        break;
      }
    }
    return player;
  };
  
  Room.prototype.isAvailable = function() {
    return this.available === "available";
  };
  
  module.exports = Room;