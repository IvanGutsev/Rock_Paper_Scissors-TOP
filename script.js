let getComputerChoice = () => 
{	
	let computer_choice = "not_decided_yet";
	let number = Math.floor(Math.random() * 3);

	if (number === 0)
	{
		computer_choice = "Rock";
	}
	else if (number === 1) 
	{
		computer_choice = "Paper";
	}
	else if (number === 2) 
	{
		computer_choice = "Scissors";
	}
	
	return computer_choice;
}

let rpcRound = (playerSelection, computerSelection) => 
{
	if (playerSelection === "rock")
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

let playGame = () =>
{
	for (let i = 0; i < 5; i++)
	{
		console.log("round " + i);


		let comp_choice = getComputerChoice().toLowerCase();
		let user_choice = prompt("Please choose between rock paper or scissors: ").toLowerCase();

		let result = rpcRound(user_choice, comp_choice);
		alert(result);
		console.log(" ");
	}
}

playGame();
