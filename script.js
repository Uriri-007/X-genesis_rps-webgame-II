const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const playerSpanScore = document.getElementById("player-score");
const computerSpanScore = document.getElementById("computer-score");
const commentOutput = document.querySelector(".instructions")
const controlDiv = document.querySelector(".controls");
const resetDiv = document.querySelector(".reset");
const resetBtn = document.getElementById("reset-btn");
const userNameInput = document.querySelector(".name");
const nameBtn = document.querySelector(".check");
const showScore = document.querySelector(".display-scores");
const programText = document.querySelector(".program");

function startGame() {
    const userName = userNameInput.value.trim();
    if(userName !== "") {
  
    commentOutput.innerText = `That is one nice name. It is nice knowing you ${userName}.\nLet's begin...`;
    userNameInput.value = "";
    controlDiv.style.transform = "rotateY(360deg)";  controlDiv.style.transition = "transform 4s linear 0s";
   
    rockBtn.style.display = "block";
    paperBtn.style.display = "block";
    scissorsBtn.style.display = "block";
    nameBtn.style.display = "none";
    userNameInput.style.display = "none";
    }else {
        userNameInput.value = "";        commentOutput.innerText = "Please input a valid name to start the game!"
    };
};
nameBtn.addEventListener("click", startGame);


function getComputerChoice() {
    const game = ["Rock", "Paper", "Scissors"];
    const numberChosen = Math.floor(Math.random() * 3);
    return game[numberChosen];
};

function playerWins(player, computer) {
  return (
  (player === 'Rock' && computer === 'Scissors') 
  || (player === 'Paper' && computer === 'Rock') 
  || (player === 'Scissors' && computer === 'Paper')
  );
 };
 
let computerScore = 0;
let playerScore = 0;

function gamePlay(playerChoice) {
    const playerWinText = ["You've got the groove!", "What am I even playing???", "Why do I always have a bad choice?", "Please take it easy on me", "I just gave you that one, don't expect a next time...", "Damn it!", "I feel like I'm losing my grip on this game", "There's still hope for me", "What's your cheat code?", "Error! Program is failing", "What else could go wrong?", "I will choose wisely this time"];
    const computerWinText = ["Eat that!!!", "Have you heard about Uri_AI? I beat all my opponents", "You tried but I won!", "I am Uri_AI!", "Try harder!", "I'm a genius AI", "I can read your mind", "That's a plus 1 on my side", "Don't get corky", "Where to next?", "Oh, wow! Things just keep getting cooler", "It's AI vs U, right? My...beats your..."];
    let  playerRndmNum = Math.floor(Math.random() * 12);
     let computerChoice = getComputerChoice();
     
    if(playerWins(playerChoice, computerChoice) == true) {
      playerScore++;
      commentOutput.innerText = `${playerWinText[playerRndmNum]}\n ${playerChoice} beats ${computerChoice}.`;
      showScore.innerText = `You: ${playerScore}`;
      programText.innerText = `Uri_AI choosed ${computerChoice}`;
    }else if(playerChoice == computerChoice) {
      commentOutput.innerText = `It's a tie. We both choosed ${computerChoice}.`;
      programText.innerText = `Uri_AI choosed ${computerChoice}`;
    }else {
        computerScore++;
        commentOutput.innerText = `${computerChoice} beats ${playerChoice}.\n ${computerWinText[playerRndmNum]}`
        showScore.innerText = `Uri_AI: ${computerScore}`;
        programText.innerText = `Uri_AI choosed ${computerChoice}` 
};
    
    const colorHexArray = [];
    while(colorHexArray.length < 8){
      let rndmNum = Math.floor(Math.random() * 10);
      colorHexArray.push(rndmNum);
    };
let colorCode = "#";
for(const num of colorHexArray){
    colorCode += num;
};
showScore.style.background = colorCode;
return computerChoice;
};

function displayGame(playerChoice) {
       gamePlay(playerChoice);
       if(playerScore === 20 || computerScore === 20) {
        commentOutput.innerText = `${playerScore === 20? "You": "Uri_AI"} won the game!`;
        programText.innerText = `${computerScore === 20? "Uri_AI the Einstein": "You're not crossing next round\nTo be continued..."}`;        controlDiv.style.display = "none";
resetDiv.style.display = "flex";
resetBtn.style.display = "block";
        };
};

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    controlDiv.style.display = "flex";
    resetDiv.style.display = "none";
    showScore.innerText = "";
    commentOutput.innerText = "A probability duel between a polymath and an algorithm using a game.\nLet's go on, I am challenged. . .";
    programText.innerText = "";
    showScore.style.background = "inherit";
}

resetBtn.addEventListener("click", resetGame);
rockBtn.addEventListener("click", function () {
    displayGame("Rock");
});
paperBtn.addEventListener("click", function () {
    displayGame("Paper");
});
scissorsBtn.addEventListener("click", function () {
    displayGame("Scissors");
});