const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const paperBtn = document.querySelector("#paper");
const resultContainer = document.querySelector(".results");
const scoreContainer = document.querySelector(".score-container");
const main_container = document.querySelector(".container");
const body = document.querySelector("body");

let player_score = 0;
let computer_score = 0;

const playerScoreDiv = document.createElement("div");
const computerScoreDiv = document.createElement("div");
playerScoreDiv.textContent = "You: " + player_score;
computerScoreDiv.textContent = "Computer: " + computer_score;
scoreContainer.appendChild(playerScoreDiv);
scoreContainer.appendChild(computerScoreDiv);

const updateScore = (winner)  => {
	if (winner == 'computer') {
		computer_score++;
		computerScoreDiv.textContent = "Computer: " + computer_score;
	} else if (winner == 'player') {
		player_score++;
		playerScoreDiv.textContent = "You: " + player_score;
	}
}

let getComputerChoice = () => 
{	
	let number = Math.floor(Math.random() * 3);

	if (number === 0)
	{
		return "rock";
	}
	else if (number === 1) 
	{
		return "paper";
	}
	else if (number === 2) 
	{
		return "scissors";
	}
}

let playRound = (playerSelection, computerSelection) => 
{
	if (playerSelection == "rock")
	{
		if (computerSelection === "rock")
		{
			return "It's a tie!";
		}
		else if (computerSelection === "paper")
		{
			updateScore('computer');
			return "The computer wins!";
		}
		else if (computerSelection === "scissors")
		{
			updateScore('player')
			return "You win!";
		}
	}
	else if (playerSelection === "paper") 
	{
		if (computerSelection === "rock")
		{
			updateScore('player');
			return "You win!";
		}
		else if (computerSelection === "paper")
		{
			return "It's a tie!";
		}
		else if (computerSelection === "scissors")
		{
			updateScore('computer');
			return "The computer wins!";
		}
	}
	else if (playerSelection === "scissors")
	{
		if (computerSelection === "rock")
		{
			updateScore('computer');
			return "The computer wins!";
		}
		else if (computerSelection === "paper")
		{
			updateScore('player');
			return "You win!";
		}
		else if (computerSelection === "scissors")
		{
			return "It's a tie!";
		}
	}
}

const displayResult = (playerSelection, computerChoice) => {
	const result = playRound(playerSelection, computerChoice);

	const div = document.createElement("div");
	div.textContent = result;
	resultContainer.appendChild(div);

	alert(result);

	if (player_score == 5) {
		displayFinalResult("You win!");
	}

	if (computer_score == 5) {
		displayFinalResult("You lose!");
	}
}

const displayFinalResult = (string) => {
	main_container.style.display = "none";
	const container = document.createElement("main");
	const result = document.createElement("div");
	const resetBtn = document.createElement("button");
	resetBtn.textContent = "Reset";
	result.textContent = string;
	container.classList.add("final-result");
	body.appendChild(container);
	container.appendChild(result);
	container.appendChild(resetBtn);

	resetBtn.addEventListener("click", function() {
		container.style.display = "none";
		main_container.style.display = "flex";
		computer_score = 0;
		computerScoreDiv.textContent = "Computer: " + computer_score;	
		player_score = 0;
		playerScoreDiv.textContent = "You: " + player_score;

		while (resultContainer.firstChild) { 
			resultContainer.removeChild(resultContainer.firstChild); 
		}
	})
}

let playerSelection = "";
let computerChoice = getComputerChoice();

rockBtn.addEventListener("click", function() {
	playerSelection = "rock";
	displayResult(playerSelection, computerChoice);
	// reset the computer's choice to reset the entire game
	computerChoice = getComputerChoice();
});

scissorsBtn.addEventListener("click", function() {
	playerSelection = 'scissors';
	displayResult(playerSelection, computerChoice);
	computerChoice = getComputerChoice();
});

paperBtn.addEventListener("click", function() {
	playerSelection = 'paper';
	displayResult(playerSelection, computerChoice);
	computerChoice = getComputerChoice();
});



