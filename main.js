var firstBody = document.querySelector("#start-zone");
var gameInput = document.querySelector("#input-name");
var startBtn = document.querySelector("#startBtn");
var score = document.querySelector("#score");
var playerName = document.querySelector("#player-name");
var secondBody = document.querySelector("#game-zone");
var winPlayer = document.querySelector("#win-player");
var winBot = document.querySelector("#win-bot");
var consol = document.querySelector(".consol1");
var rockBtn = document.querySelector("#rock-icon");
var paperBtn = document.querySelector("#paper-icon");
var scissorsBtn = document.querySelector("#scissors-icon");
var rockBot = document.querySelector(".icon1");
var paperBot = document.querySelector(".icon2");
var scissorsBot = document.querySelector(".icon3");
var movePlayer = document.querySelector("#movePlayer");
var moveBot = document.querySelector("#moveBot");



startBtn.addEventListener("click",getInfo);
consol.addEventListener("click",choices);


function getInfo(){
    if (gameInput.value.trim()){
        showName();
        playerId();
    }
    else{
        alert("Fill the gap please")
    }
}

function showName(){
    firstBody.style.display = "none";
    secondBody.style.display = "block";
}
function playerId(){
    playerName.innerHTML = gameInput.value.trim();
}



function randomSelector(){
    var arr = ["r","p","s"];
    var index = Math.floor(Math.random()*3);
    return arr[index];
}

var playerScore = 0;
var botScore = 0;
var playerChoice;
var victoryPlayer = "DRAFT";
var victoryBot = "DRAFT";
function choices(e){
    botChoice = randomSelector();
    if (e.target.id === "rock-icon"){
        playerChoice = "r";
    }
    else if(e.target.id === "paper-icon"){
        playerChoice = "p";
    }
    else if(e.target.id === "scissors-icon"){
        playerChoice = "s";
    }

console.log(playerChoice);
console.log(botChoice);
showChoices();
}

function showChoices(){
    if ((playerChoice==="r" && botChoice==="s")||
        (playerChoice==="p" && botChoice==="r")||
        (playerChoice==="s" && botChoice==="p")){
            victoryPlayer = "WIN"
            victoryBot = "LOSE"
            playerScore +=1;

    }
    else if (playerChoice===botChoice){
        victoryPlayer = "DRAFT";
        victoryBot = "DRAFT";

    }
    else {
        botScore +=1;
        victoryPlayer = "LOSE"
        victoryBot = "WIN"
    }
    console.log("Oyuncu: ", playerScore);
    console.log("Bot: ", botScore);
    showUI();
}
function showUI(){
    movePlayer.src = `Assets/${playerChoice}.png`;
    moveBot.src = `Assets/${botChoice}.png`;
    moveBot.style.scale = "0.8";
    movePlayer.style.scale = "0.8";
    score.innerHTML = `${playerScore}:${botScore}`
    winPlayer.innerHTML = victoryPlayer;
    winBot.innerHTML = victoryBot;
    if(victoryPlayer==="LOSE" && victoryBot==="WIN"){

        winPlayer.style.color = "red";
        winBot.style.color = "green";
    }
    else if (victoryPlayer==="WIN" && victoryBot==="LOSE"){

        winPlayer.style.color = "green";
        winBot.style.color = "red";
    }
    else{
        
        winPlayer.style.color = "black";
        winBot.style.color = "black";
    }
    
}

