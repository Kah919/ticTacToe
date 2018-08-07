const box = document.querySelectorAll('.box');
const board = document.querySelector('#board');
const playerTurn = document.querySelector('h2');
const button = document.querySelector('button');

let round = 0; 

let winConditions = [
	[0, 1, 2],
	[3, 4, 5], 
	[6, 7, 8], 
	[0, 3, 6], 
	[1, 4, 7], 
	[2, 5, 8], 
	[0, 4, 8], 
	[2, 4, 6]
];

const didIWin = () => {
	for(let i = 0; i <= winConditions.length; i++) {
		if((box[winConditions[i][0]].innerHTML === 'O') && (box[winConditions[i][1]].innerHTML === 'O') && (box[winConditions[i][2]].innerHTML === 'O')) {			
			playerTurn.innerHTML = 'Player \'O\' Wins';
		}else if((box[winConditions[i][0]].innerHTML === 'X') && (box[winConditions[i][1]].innerHTML === 'X') && (box[winConditions[i][2]].innerHTML === 'X')) {
			playerTurn.innerHTML = 'Player \'X\' Wins';
		}
	}
}

const playerChoice = () => {
	for(let i = 0; i < box.length; i++) { // itterating through the box
		box[i].addEventListener('click', function() { // giving each box an eventlistener
			if(round === 8) {
				playerTurn.innerHTML = 'Draw!';
				box[i].innerHTML = 'X';
			}else if(round % 2 === 0) { // determine whos turn it is
				box[i].innerHTML = 'O'; // if it is even then it is player O
				playerTurn.innerHTML = "Player: \'X\'"; // shows whos turn it is right now
				round++; // increment the round so we know whos turn it is and what symbol
			}else{
				box[i].innerHTML = 'X';
				playerTurn.innerHTML = "Player: \'O\'";
				round++;
			}
		didIWin();
		});
	}
}

playerChoice();

button.addEventListener('click', function() {
	for(let i = 0; i <= box.length; i++) {
		box[i].innerHTML = "";
		round = 0;
		playerTurn.innerHTML = "Game Start";
	}
	
});



