var Game = {
  players: []
}
var players = Game.players;

// function rankPlayers() {
//   players.sort(function(a, b) {
//     if (a.score > b.score) {
//       return 1;
//     } else if (a.score < b.score) {
//       return -1;
//     } else if (a.score == b.score) {
//       return 0;
//     }
//   }
// });
// }

function rankPlayers() {

}

function writePlayers(rankPlayers()) {
  $("#rankings").remove();
  debugger;
}

function Player(name, score){
  this.name = name;
  this.score = score;
  this.rank = 1;
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
