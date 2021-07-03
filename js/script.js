// Computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);


if(randomNumber == 1){
	computerMove = 'kamień';
}
else if(randomNumber == 2){
	computerMove = 'papier';
}
else if (randomNumber == 3){
	computerMove = 'nozyce';
}

printMessage('Ruch komputera to: ' + computerMove);

// player move
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

// let playerMove = 'nieznany ruch';

if(playerInput == '1'){
	playerMove = 'kamień';
}
else if(playerInput == '2'){
	playerMove ='papier';
}
else if(playerInput == '3'){
	playerMove = 'nozyce'
}
//wrong playerInput
else if(playerInput>=4){
	printMessage('podales zla wartosc');
}

printMessage('Twój ruch to: ' + playerMove);

// score

if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
}
else if (computerMove == 'papier' && playerMove == 'kamien') {
	printMessage('Komputer wygrywa!');
}
else if (computerMove == 'nozyce' && playerMove == 'papier'){
	printMessage('Komputer wygrywa!');
}
else if (computerMove == 'papier' && playerMove == 'nozyce'){
	printMessage('Ty wygrywasz!');
}
else if (computerMove == 'kamien' && playerMove == 'nozyce'){
	printMessage('Komputer wygrywa!');
}
else if (computerMove == 'nozyce' && playerMove == 'kamien'){
	printMessage('Ty wygrywasz!');
}
else if (computerMove == 'kamien' && playerMove == 'kamien'|| computerMove == 'papier' && playerMove == 'papier' || computerMove == 'nozyce' && playerMove == 'nozyce')
{
	printMessage('Remis - zagrajcie jeszcze raz');
}
