// function playGame(playerInput) {
// 	clearMessages();
// let randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log(randomNumber);
// let argComputerMove = getMoveName(randomNumber);
// let argPlayerMove = getMoveName(playerInput);
// function getMoveName(argMoveId) {
// if (argMoveId == 1) {
// 		return "kamień";
// } else if (argMoveId == 2) {
// 		return "papier";
// } else if (argMoveId == 3) {
// 		return 'nozyce';
// } else {
// 	printMessage("Nie znam ruchu o id " + argMoveId + ".");
// 	return "nieznany ruch";
// 	}
// }
// }
// function displayResult(argComputerMove, argPlayerMove) {
// 	printMessage("Zagrałem " + argComputerMove + ', a Ty ' + argPlayerMove);

// 	if( argComputerMove == "kamień" && argPlayerMove == "papier") {
// 		printMessage("Ty wygrywasz!");
// 	} else if ( argComputerMove == "papier" && argPlayerMove == "kamień") {
// 		printMessage("Komputer wygrywa!");
// 	} else if ( argComputerMove == "nozyce" && argPlayerMove == "papier") {
// 		printMessage("Komputer wygrywa!");
// 	} else if ( argComputerMove == "papier" && argPlayerMove == "nozyce") {
// 		printMessage("Ty wygrywasz!");
// 	} else if ( argComputerMove == 'kamień' && argPlayerMove == 'nozyce') {
// 		printMessage('Komputer wygrywa');
// 	} else if ( argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
// 		printMessage('Ty wygrywasz!');
// 	}else {
//         printMessage("Tym razem przegrywasz :(");
//     }
// }
// 	displayResult(argComputerMove, argPlayerMove);




// document.getElementById('play-rock').addEventListener('click', function(){
// 	playGame(1);
// });
// document.getElementById('play-paper').addEventListener('click', function(){
// 	playGame(2);
// });
// document.getElementById('play-paper').addEventListener('click', function(){
// 	playGame(3);
// });
// funkcja print wypisuje w div id wiadomość
function printMessage(msg) {
	let div = document.createElement("div");
	// let div zmienna odpowiedzialna za utworzenie elementu div
	div.innerHTML = msg;
	// element div w którym bedzie wstawiony text z funkcji msg
	document.getElementById("messages").appendChild(div);
	//wybiera element o id message (div) 
  }
//   funkcja czyszczaca
  function clearMessages() {
	document.getElementById("messages").innerHTML = "";
	// wybiera div o id message i wstawia tam text -pustu,bez znakow
  }
  
  function playGame(playerInput) {
// funkcja losujaca kamien papier lub nozyce
	clearMessages();
// po wylosowaniu i rozpoczeciu nowej gry funkcja clear wymazuje poprzedni wynik
	let randomNumber = Math.floor(Math.random() * 3 + 1);
// losowanie numeru z przedziału 1-3
	let argComputerMove = getMoveName(randomNumber);
// zmienna a zarazem funkcja która po wylosowaniu numeru przypisuje mu wartość papier kamien nozyce
	let argPlayerMove = getMoveName(playerInput);
// zmienna- funkcja która przypisuje wartość po wylosowaniu numeru (ale nie widzę w kodzie warunków dla argPlayer)
	function getMoveName(argMoveId) {
	  if (argMoveId == 1) {
		return "kamień";
	  } else if (argMoveId == 2) {
		return "papier";
	  } else if (argMoveId == 3) {
		return "nozyce";
	  } else {
		printMessage("Nie znam ruchu o id " + argMoveId + ".");
		return "nieznany ruch";
		// po wylosowaniu numeru w funkcji getMoveNae dla danej wartości liczbowej przypisujemy wartość papier kamien nozyce
	  }
	}
  
	function displayResult(argComputerMove, argPlayerMove) 
	// funkcja wyswietlająca rezultat starcia
	{
	  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
// wyswietla info na temat jaki ruch wykonał komp a jaki player
  
	  if (argComputerMove == "kamień" && argPlayerMove == "papier") {
		printMessage("Ty wygrywasz!");
	  } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
		printMessage("Komputer wygrywa!");
	  } else if (argComputerMove == "nozyce" && argPlayerMove == "papier") {
		printMessage("Komputer wygrywa!");
	  } else if (argComputerMove == "papier" && argPlayerMove == "nozyce") {
		printMessage("Ty wygrywasz!");
	  } else if (argComputerMove == "kamień" && argPlayerMove == "nozyce") {
		printMessage("Komputer wygrywa");
	  } else if (argComputerMove == "nozyce" && argPlayerMove == "kamień") {
		printMessage("Ty wygrywasz!");
	  } else {
		printMessage("Tym razem przegrywasz :(");
		// założenia co się dziej gdy zostanie wylosowana dana liczba a co za tym idzie jaka zostanie jej przypisana wartość 
		// np let rundomNumber zostanie wylosowane 1 funkcja getMoveName przypisze jej wartość kamien
	  }
	}
  
	displayResult(argComputerMove, argPlayerMove);
// wywołanie funkcji dla argumentow argComputerMove oraz argPlayerMove
  }
  document.getElementById("play-rock").addEventListener("click", function () {
	playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function () {
	playGame(2);
  });
  document.getElementById("play-scissor").addEventListener("click", function () {
	playGame(3);
  });
//   wywołanie elementu od dowolnym id  player rock player-paper player-scissor i nadanie mu zachowania po kliknieciu
// mam na mysli przypisalismy wartość 1 2 3 dla konkretnego zdazenia np 1=kamien przycisk kamien wywoła wartość jeden czyli kamien (ruch playera)
  