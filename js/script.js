// Computer move

// let randomNumber = Math.floor(Math.random() * 3 + 1);

// console.log('Wylosowana liczba to: ' + randomNumber);

// let argComputerMove = getMoveName(randomNumber);
// let argPlayerMove = getMoveName(randomNumber);
// function getMoveName(argMoveId){
// 	if(argMoveId == 1){
// 		return 'kamień';
// 	}
// 	else if (argMoveId == 2){
// 		return 'papier';
// 	}
// 	else if (argMoveId == 3){
// 		return 'nozyce';
// 	}
// 	else {
// 	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
// 	return 'nieznany ruch';
// 	}
//   }
  
//   function displayResult(argComputerMove, argPlayerMove){
// 	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
// 	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
// 		printMessage('Ty wygrywasz!');
// 	} 
// 	else if( argComputerMove == 'papier' && argPlayerMove == 'kamien'){
// 		printMessage('Komputer wygrywa!');
// 	}
// 	else if( argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
// 		printMessage('Komputer wygrywa!');
// 	}
// 	else if( argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
// 		printMessage('Ty wygrywasz!');
// 	}
// 	else if( argComputerMove == 'kamien' && argPlayerMove == 'nozyce'){
// 		printMessage('Komputer wygrywa');
// 	}
// 	else if( argComputerMove == 'nozyce' && argPlayerMove == 'kamien'){
// 		printMessage('Ty wygrywasz!');
// 	}
// 	// else {
// 	//   printMessage('Tym razem przegrywasz :(');
// 	// }
// 	}


// if(randomNumber == 1){
// 	computerMove = 'kamień';
// }
// else if(randomNumber == 2){
// 	computerMove = 'papier';
// }
// else if (randomNumber == 3){
// 	computerMove = 'nozyce';
// }

// printMessage('Ruch komputera to: ' + computerMove);

// player move
// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

// console.log('Gracz wpisał: ' + playerInput);



// if(playerInput == '1'){
// 	playerMove = 'kamień';
// }
// else if(playerInput == '2'){
// 	playerMove ='papier';
// }
// else if(playerInput == '3'){
// 	playerMove = 'nozyce'
// }
//wrong playerInput
// else if(playerInput>=4){
// 	printMessage('podales zla wartosc');
// }

// printMessage('Twój ruch to: ' + playerMove);

// score

// if( computerMove == 'kamień' && playerMove == 'papier'){
// 	printMessage('Ty wygrywasz!');
// }
// else if (computerMove == 'papier' && playerMove == 'kamien') {
// 	printMessage('Komputer wygrywa!');
// }
// else if (computerMove == 'nozyce' && playerMove == 'papier'){
// 	printMessage('Komputer wygrywa!');
// }
// else if (computerMove == 'papier' && playerMove == 'nozyce'){
// 	printMessage('Ty wygrywasz!');
// }
// else if (computerMove == 'kamien' && playerMove == 'nozyce'){
// 	printMessage('Komputer wygrywa!');
// }
// else if (computerMove == 'nozyce' && playerMove == 'kamien'){
// 	printMessage('Ty wygrywasz!');
// }
// else if (computerMove == 'kamien' && playerMove == 'kamien'|| computerMove == 'papier' && playerMove == 'papier' || computerMove == 'nozyce' && playerMove == 'nozyce')
// {
// 	printMessage('Remis - zagrajcie jeszcze raz');
// }
