// ROCK PAPER SCISSORS

const choices = ["Stone", "Parchment", "Cutter"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
	const computerChoice = choices[Math.floor(Math.random() * 3)];
	let result = "";

	if (playerChoice === computerChoice) {
		result = "It's a tie. 😐";
	} else {
		switch (playerChoice) {
			case "Stone":
				result = computerChoice === "Cutter" ? "Winner 🎉" : "Loser 😢";
				break;
			case "Parchment":
				result = computerChoice === "Stone" ? "Winner 🎉" : "Loser 😢";
				break;
			case "Cutter":
				result = computerChoice === "Parchment" ? "Winner 🎉" : "Loser 😢";
				break;
		}
	}

	playerDisplay.textContent = `You Chose: ${playerChoice}`;
	computerDisplay.textContent = `Computer Chose: ${computerChoice}`;
	resultDisplay.textContent = result;

	resultDisplay.classList.remove("greenText", "redText");

	switch (result) {
		case "Winner 🎉":
			resultDisplay.classList.add("greenText");
			playerScore++;
			playerScoreDisplay.textContent = playerScore;
			break;
		case "Loser 😢":
			resultDisplay.classList.add("redText");
			computerScore++;
			computerScoreDisplay.textContent = computerScore;
			break;
	}
}
