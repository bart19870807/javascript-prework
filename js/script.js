function playGame(playerInput) {
	clearMessages();
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log(randomNumber);
let argComputerMove = getMoveName(randomNumber);
let argPlayerMove = getMoveName(playerInput);
function getMoveName(argMoveId) {
if (argMoveId == 1) {
		return "kamień";
} else if (argMoveId == 2) {
		return "papier";
} else if (argMoveId == 3) {
		return 'nozyce';
} else {
	printMessage("Nie znam ruchu o id " + argMoveId + ".");
	return "nieznany ruch";
	}
}
}
function displayResult(argComputerMove, argPlayerMove) {
	printMessage("Zagrałem " + argComputerMove + ', a Ty ' + argPlayerMove);

	if( argComputerMove == "kamień" && argPlayerMove == "papier") {
		printMessage("Ty wygrywasz!");
	} else if ( argComputerMove == "papier" && argPlayerMove == "kamień") {
		printMessage("Komputer wygrywa!");
	} else if ( argComputerMove == "nozyce" && argPlayerMove == "papier") {
		printMessage("Komputer wygrywa!");
	} else if ( argComputerMove == "papier" && argPlayerMove == "nozyce") {
		printMessage("Ty wygrywasz!");
	} else if ( argComputerMove == 'kamień' && argPlayerMove == 'nozyce') {
		printMessage('Komputer wygrywa');
	} else if ( argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
		printMessage('Ty wygrywasz!');
	}else {
        printMessage("Tym razem przegrywasz :(");
    }
}
	displayResult(argComputerMove, argPlayerMove);




document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
});
document.getElementById('play-paper').addEventListener('click', function(){
	playGame(3);
});
