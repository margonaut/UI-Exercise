var Game = {
  players: []
}
var players = Game.players;

function rankPlayers() {
  for (var i = 0; i < players.length; i++) {
    var currentPlayer = players[i]
    debugger;
  }
}

function Player(name, score){
  this.name = name;
  this.score = score;
}

function nameMatch(value) {
  return value.name == this.name;
}

function playerExists(name) {
  return players.some(nameMatch, {name: name});
}

function increaseScore(name, score) {
  player = players.find(nameMatch, {name: name});
  player.score += score;
}

$('#add').on("click", function(event) {
  var name = $('input[name="name"]').val();
  var score = parseInt($('input[name="score"]').val());
  if (name) {
    if (playerExists(name)) {
      increaseScore(name, score);
    } else {
      newPlayer = new Player(name, score);
      Game.players.push(newPlayer)
    }
  } else {
    alert("Invalid input")
  }
  rankPlayers();
});
