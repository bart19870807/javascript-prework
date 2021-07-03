function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
let ComputerMove = 'kamien'
printMessage('Zagrałem ' + ComputerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
