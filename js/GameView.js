class GameView {
	constructor() {}

	updateBoard(game) {
		this.updateTurn(game);
		const winingCombination = game.findWinner();

		let text;
		for (let i = 0; i < game.board.length; i++) {
			const square = document.querySelector(`.square[data-index = '${i}']`);
			square.classList.remove("winner");
			let tileType = game.board[i] == "X" ? "playerX" : "playerO";

			square.innerHTML = `<span class='${tileType}'>${
				game.board[i] ? game.board[i] : ""
			}</span>`;

			if (winingCombination && winingCombination.includes(i)) {
				square.classList.add("winner");
				text = game.board[i] === "X" ? "Player X Win!" : "Player O Win";
			}
		}

		if (winingCombination) {
			document.querySelector(".result").innerText = text;
			document.querySelector(".overlay").style.display = "flex";
		}

		if (!game.board.includes(null) && !winingCombination) {
			document.querySelector(".result").innerText = "Draw";
			document.querySelector(".overlay").style.display = "flex";
		}
	}

	updateTurn(game) {
		let playerX = document.querySelector(".player_left");
		let playerO = document.querySelector(".player_right");

		if (game.turn == "X") {
			playerO.classList.remove("active");
			playerX.classList.add("active");
		} else {
			playerX.classList.remove("active");
			playerO.classList.add("active");
		}
	}
}
