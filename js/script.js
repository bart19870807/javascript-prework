// function playGame(playerInput){
// let computerMove =  Math.floor(Math.random() * 3 + 1);
// let playerMove = Math.floor(Math.random() * 3 + 1);

// console.log('computerMove:'+ computerMove);
// console.log('playerMove'+ playerMove);

// let argComputerMove = getMoveName(computerMove);
// console.log(argComputerMove);

// let argPlayerMove = getMoveName(playerMove);
// console.log(argPlayerMove);

// function getMoveName(argMoveId){
//     if(argMoveId == 1){
//         return'kamien';
//     }
//     else if(argMoveId == 2){
//         return'papier';
//     }
//     else (argMoveId == 3)
//     {
//         return'nozyce';
//     }
// }

// function displayResult(argComputerMove, argPlayerMove){
// 	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
// 	if( argComputerMove == 'kamien' && argPlayerMove == 'papier'){
// 		printMessage('Ty wygrywasz!');
//     } 
//     else if( argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
//         printMessage('Ty wygrywasz!');
//     } 
//     else if( argComputerMove == 'nozyce' && argPlayerMove == 'kamien'){
//         printMessage('Ty wygrywasz!');
//     } 
//     else if( argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
//         printMessage('Jest remis!');
//     }
//     else if( argComputerMove == 'kamien' && argPlayerMove == 'kamien'){
//         printMessage('Jest remis!');
//     }
//     else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
//         printMessage('Jest remis!');
//     }
//     else {
//         printMessage('Tym razem przegrywasz :(');
//     }
// }
// displayResult(argComputerMove, argPlayerMove)
// }
// playGame(3)

// Computer move

function playGame(playerInput){
	clearMessages()
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
let argPlayerMove = getMoveName(randomNumber);
function getMoveName(argMoveId){
	if(argMoveId == 1){
		return 'kamień';
	}
	else if (argMoveId == 2){
		return 'papier';
	}
	else if (argMoveId == 3){
		return 'nozyce';
	}
	else {
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
	}
}

function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz!');
	} 
	else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Komputer wygrywa!');
	}
	else if( argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
		printMessage('Komputer wygrywa!');
	}
	else if( argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
		printMessage('Ty wygrywasz!');
	}
	else if( argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
		printMessage('Komputer wygrywa');
	}
	else( argComputerMove == 'nozyce' && argPlayerMove == 'kamień')
	{
		printMessage('Ty wygrywasz!');
	}
	// else {
	//   printMessage('Tym razem przegrywasz :(');
	// }
	}


if(randomNumber == 1){
	computerMove = 'kamień';
}
else if(randomNumber == 2){
	computerMove = 'papier';
}
else(randomNumber == 3)
{
	computerMove = 'nozyce';
}

printMessage('Ruch komputera to: ' + computerMove);

// player move
// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

// console.log('Gracz wpisał: ' + playerInput);



if(playerInput == '1'){
	playerMove = 'kamień';
}
else if(playerInput == '2'){
	playerMove ='papier';
}
else if(playerInput == '3'){
	playerMove = 'nozyce'
}
// wrong playerInput

// else(playerInput>=4)
// {
// 	printMessage('podales zla wartosc');
// }

printMessage('Twój ruch to: ' + playerMove);

// score

if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
}
else if (computerMove == 'papier' && playerMove == 'kamień') {
	printMessage('Komputer wygrywa!');
}
else if (computerMove == 'nozyce' && playerMove == 'papier'){
	printMessage('Komputer wygrywa!');
}
else if (computerMove == 'papier' && playerMove == 'nozyce'){
	printMessage('Ty wygrywasz!');
}
else if (computerMove == 'kamień' && playerMove == 'nozyce'){
	printMessage('Komputer wygrywa!');
}
else if (computerMove == 'nozyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
}
else((computerMove == 'kamień' && playerMove == 'kamień')|| (computerMove == 'papier' && playerMove == 'papier') || (computerMove == 'nozyce' && playerMove == 'nozyce'))
{
	printMessage('Remis - zagrajcie jeszcze raz');
}
}
document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
});
document.getElementById('play-scissor').addEventListener('click', function(){
	playGame(3);
});
