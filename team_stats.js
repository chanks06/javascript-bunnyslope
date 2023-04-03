// Objects exercise : team stats 

const team = {
  _players: [
    { firstName: "chuck", lastName: "barry", age: 23 },
    { firstName: "bart", lastName: "simpson", age: 14 },
    { firstName: "lisa", lastName: "simpson", age: 12 },
  ],
  _games: [
    { opponent: "martians", teamPoints: 46, opponentPoints: 57 },
    { opponent: "dodgers", teamPoints: 40, opponentPoints: 50 },
    { opponent: "yankees", teamPoints: 34, opponentPoints: 42 },
  ],
  get players() {
    return _players;
  },
  get games() {
    return _games;
  },
  addPlayer: function (newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };

    return this._players.push(player);
  },

  addGame: function (newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teampoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };

    return this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);

console.log(team._players);
console.log(team._games);