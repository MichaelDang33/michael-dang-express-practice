const games = [
    {game: "Tic Tac Toe", done: true},
    {game: "Battleship", done: false},
    {game: "Memory Guesser", done: false}
];

module.exports = {
    getAll: function () {
        return games;
    }
};