let randomNumber = Math.floor(Math.random() * 3 + 1);
let argComputerMove = getMoveName(randomNumber);
let argPlayerMove = getMoveName(randomNumber);

console.log('Wylosowana liczba to: ' + randomNumber);
console.log(argComputerMove);
console.log(argPlayerMove);
function getMoveName(argMoveId){
    if(argMoveId == 1){
        return'kamien';
    }
    else if(argMoveId == 2){
        return'papier';
    }
    else if(argMoveId == 3){
        return'nozyce';
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
    else {
        printMessage('Tym razem przegrywasz :(');
    }
}