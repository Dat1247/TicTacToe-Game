let game = new Game();
let gameView = new GameView();

const btnNewGame = document.getElementById("btnNewGame");
const btnClose = document.getElementById("btnClose");

let squares = document.querySelectorAll(".square");
squares.forEach((square) => {
	square.addEventListener("click", (e) => {
		onSquareClick(square.dataset.index);
		// console.log(square.dataset.index);
	});
});

const onSquareClick = (i) => {
	game.makeMove(i);
	gameView.updateBoard(game);
};

btnNewGame.addEventListener("click", () => {
	game = new Game();
	gameView.updateBoard(game);
});

btnClose.addEventListener("click", () => {
	document.querySelector(".overlay").style.display = "none";
});
