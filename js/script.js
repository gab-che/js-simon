let timerSeconds = 10;
let timerId;
let numArrayRandom = [];
const htmlSeconds = document.getElementById("seconds");
const startGame = document.getElementById("start_game");
const numberList = document.getElementById("number_list");

startGame.addEventListener("click", () => {
    numberList.innerText = generateNumArray();
    startTimer();
    setTimeout(fetchNumbers, timerSeconds * 1000);
    setTimeout(emptyHtml, (timerSeconds * 1000) - 500);
})

/**
 * Genera un numero random compreso tra un minimo e un massimo
 * @param {number} min
 * @param {number} max
 */
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Genera un array con cinque numeri unici
 * @return {Array}
 */
function generateNumArray(){
    while (numArrayRandom.length < 5){
        const numRandom = randomNumber(1, 100);

        if (!numArrayRandom.includes(numRandom)){
            numArrayRandom.push(numRandom);
        }
    }
    return numArrayRandom;
}

/**
 * Empty Html
 */
function emptyHtml(){
    numberList.innerText = "";
}


/**
 * Fa partire un timer
 */
function startTimer(){

    timerId = setInterval(() => {
        timerSeconds--;
        htmlSeconds.innerText = timerSeconds.toString().padStart( 2, '0' );
        if(timerSeconds <= 0){
            stopTimer();
            return;
        }
    }, 1000);
}

/**
 * Ferma il timer
 */
function stopTimer(){
    clearInterval(timerId);
}

/**
 * Chiede cinque numeri all'utente
 */
function fetchNumbers(){
    const numArrayUser = [];
    
    for (i = 0; i < 5; i++){
        numUser = parseInt(prompt("Inserisci un numero"));
        if(numArrayRandom.includes(numUser)){
            numArrayUser.push(numUser);
        }
    }

    if(numArrayUser.length === numArrayRandom.length){
        alert("hai indovinato");
    } else{
        alert("hai perso");
    }
    
    console.log(numArrayUser);
    return numArrayUser;
}