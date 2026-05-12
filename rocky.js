function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter rock, paper, or scissors:");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
let humanScore =0;
let computerScore =0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
       
        console.log("It's a tie!");
    } else if (

        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
        console.log("Current Score - You: " + humanScore + " Computer: " + computerScore);




}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


