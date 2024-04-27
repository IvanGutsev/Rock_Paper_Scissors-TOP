const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const paperBtn = document.querySelector("#paper");

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

let rpcRound = (playerSelection, computerSelection) => 
{
	if (playerSelection == "rock")
	{
		if (computerSelection === "rock")
		{
			return "It's a tie!";
		}
		else if (computerSelection === "paper")
		{
			return "The computer wins!";
		}
		else if (computerSelection === "scissors")
		{
			return "You win!";
		}
	}
	else if (playerSelection === "paper") 
	{
		if (computerSelection === "rock")
		{
			return "You win!";
		}
		else if (computerSelection === "paper")
		{
			return "It's a tie!";
		}
		else if (computerSelection === "scissors")
		{
			return "The computer wins!";
		}
	}
	else if (playerSelection === "scissors")
	{
		if (computerSelection === "rock")
		{
			return "The computer wins!";
		}
		else if (computerSelection === "paper")
		{
			return "You win!";
		}
		else if (computerSelection === "scissors")
		{
			return "It's a tie!";
		}
	}
}

const displayResult = (playerSelection, computerChoice) => {
	const result = rpcRound(playerSelection, computerChoice);
	alert(result);
}

let playerSelection = "";
let computerChoice = getComputerChoice();

rockBtn.addEventListener("click", function() {
	playerSelection = "rock";
	displayResult(playerSelection, computerChoice);
	computerChoice = getComputerChoice();
});

scissorsBtn.addEventListener("click", function() {
	playerSelection = 'scissors';
	displayResult(playerSelection, computerChoice);
});

paperBtn.addEventListener("click", function() {
	playerSelection = 'paper';
	displayResult(playerSelection, computerChoice);
});



