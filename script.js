"use strict"

const htmlRockButton = document.querySelector(".js-rock-button")
const htmlPaperButton = document.querySelector(".js-paper-button")
const htmlscissorsButton = document.querySelector(".js-scissors-button")
const htmlComputerChoice = document.querySelector(".js-display-computer-choice")
const htmlGameResult = document.querySelector(".js-game-result")
const htmlScoreBoard = document.querySelector(".js-score-board")
const htmlPlayGround = document.querySelector(".js-play-ground")

let humanScore = 0;
let computerScore = 0;


function playGame(){
    function getComputerChoice(){
        const num = Math.random();

        if (num >= 0 && num < 1/3){
            return "rock";
        }else if (num >= 1/3 && num <= 2/3){
            return "paper";
        } else{
            return "scissors";
        }
    }

    function getHumanChoice(){
        const value = prompt("what's your choice?(eg: rock, paper, scissors)","paper");
        return value.toLowerCase();
    }

    function playRound(humanChoice, computerChoice){
        if (computerChoice == "rock"){
            htmlComputerChoice.innerText = `computer choose:${computerChoice}`
            if (humanChoice == "rock"){
                htmlGameResult.innerText = "tie!"
            }else if (humanChoice == "scissors"){
                htmlGameResult.innerText = "you loose! rock beats scissors"
                computerScore++;
            }else {
                htmlGameResult.innerText = "you win! paper beats rock"
                humanScore++;
            }
        
        } else if (computerChoice == "paper"){
            htmlComputerChoice.innerText = `computer choose:${computerChoice}`
            if (humanChoice == "rock"){
                htmlGameResult.innerText = "you loose! paper beats rock"
                computerScore++;
            }else if (humanChoice == "scissors"){
                htmlGameResult.innerText = "you win! scissors beat paper"
                humanScore++;
            }else {
                htmlGameResult.innerText = "tie!"
            }
        
        }else if (computerChoice == "scissors"){
            htmlComputerChoice.innerText = `computer choose:${computerChoice}`
            if (humanChoice == "rock"){
                htmlGameResult.innerText = "you win! rock beats scissors"
                humanScore++;
            }else if (humanChoice == "scissors"){
                htmlGameResult.innerText = "tie!"
            }else {
                htmlGameResult.innerText = "you loose! scissors beat paper"
                computerScore++;
            }
        }

        
        if (humanScore == 5){
            htmlPlayGround.innerHTML = "<b>Congrats! You won</b>"
        }else if(computerScore == 5){
            htmlPlayGround.innerHTML = "<b>Very Bad! You Lost This Time</b>"
        }

        htmlScoreBoard.innerText = `Total Wins: ${humanScore}  Total Loses: ${computerScore}`
    }
    
    htmlRockButton.addEventListener('click', () => {
        playRound("rock",getComputerChoice())
    })
    htmlPaperButton.addEventListener('click', () => {
        playRound("paper",getComputerChoice())
    })
    htmlscissorsButton.addEventListener('click', () => {
        playRound("scissors",getComputerChoice())
    })

}


playGame();