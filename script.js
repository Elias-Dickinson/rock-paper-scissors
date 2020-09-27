const ComputerSelection = (validChoices) =>
  validChoices[Math.floor(Math.random() * validChoices.length)];

const PlayRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) return "draw";
  else if (playerSelection === "rock")
    if (computerSelection === "scissors") return "win";
    else if (computerSelection === "paper") return "lose";
    else if (playerSelection === "paper")
      if (computerSelection === "rock") return "win";
      else if (computerSelection === "scissors") return "lose";
      else if (playerSelection === "scissors")
        if (computerSelection === "paper") return "win";
        else if (computerSelection === "rock") return "lose";
};

const Game = (clickResult) => {
  const validChoices = ["rock", "paper", "scissors"];
  const result = PlayRound(clickResult, ComputerSelection(validChoices));

  if (result === "win") wins.push(wins.length);
  else if (result === "lose") losses.push(losses.length);
  else if (result === "draw") draws.push(draws.length);

  numWins.textContent = "Wins: " + wins.length;
  numLosses.textContent = "Losses: " + losses.length;
  numDraws.textContent = "Draws: " + draws.length;

  if (wins.length > 4 || losses.length > 4) {
    if (wins.length > 4) alert("YOU WIN");
    else if (losses.length > 4) alert("YOU LOSE");
    resetButton.disabled = false;
  }
};

//GLOBALS
const wins = [];
const losses = [];
const draws = [];
const rounds = [];

numWins.textContent = "Wins: " + wins.length;
numLosses.textContent = "Losses: " + losses.length;
numDraws.textContent = "Draws: " + draws.length;
resetButton.disabled = true; //True until player wins or loses

rock.addEventListener("click", () => Game(rock.id));
paper.addEventListener("click", () => Game(paper.id));
scissors.addEventListener("click", () => Game(scissors.id));
resetButton.addEventListener("click", () => window.location.reload());
