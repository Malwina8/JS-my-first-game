{
let playerScore = 0;
let compScore = 0;
let playerRound = 0;
let compRound = 0;
let roundNumber = 1;
const playerScore_h3 = document.getElementById('player-score');
const compScore_h3 = document.getElementById('comp-score');
const playerRound_h2 = document.getElementById('player-round');
const compRound_h2 = document.getElementById('comp-round');
const userMove = document.getElementById('user-move');
const pcMove = document.getElementById('comp-move');
const roundNumber_span = document.getElementById('round-number');

// PLAY GAME

const playGame = function (playerInput){
  clearMessages();
  const getMoveName = function (argMoveId) {
    console.log('move:', argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }
  }


let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);


let computerMove = getMoveName(randomNumber);
console.log(computerMove);
pcMove.innerHTML = computerMove;


console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);
console.log(playerMove);
userMove.innerHTML = playerMove;

//RESULT

function
displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
  if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage('Ty wygrywasz!');
      ++playerScore;
      playerScore_h3.innerHTML = playerScore;
      if (playerScore == 3) {
        playerScore = 0;
        compScore = 0;
        ++playerRound;
        ++roundNumber;
        playerRound_h2.innerHTML = playerRound;
        messages.innerHTML = `Gracz wygrywa rundę!!`;
        roundNumber_span.innerHTML = roundNumber;
      }
    } else {
      printMessage('Komputer wygrywa!');
      ++compScore;
      compScore_h3.innerHTML = compScore;
      if (compScore == 3) {
        compScore = 0;
        playerScore = 0;
        ++compRound;
        ++roundNumber;
        compRound_h2.innerHTML = compRound;
        messages.innerHTML = `Komputer wygrywa rundę!!`;
        roundNumber_span.innerHTML = roundNumber;
        console.log('roundnumber ' + roundNumber);
      }
    }
    score(playerScore, compScore);
  }
    displayResult(computerMove, playerMove);
}


document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

// RESET

document.getElementById('reset').addEventListener('click', function(){
  playerScore = 0;
  compScore = 0;
  playerRound = 0;
  compRound = 0;
  userMove.innerHTML = '';
  pcMove.innerHTML = '';
  roundNumber = 1;
  resetAll(playerRound, compRound, roundNumber);
});
}
