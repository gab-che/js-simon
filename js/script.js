let timerSeconds = 10;
let timerId;
const htmlSeconds = document.getElementById("seconds");
const startGame = document.getElementById("start_game");
const numberList = document.getElementById("number_list");

startGame.addEventListener("click", () => {
    numberList.innerText = generateNumArray();
    startTimer();
    setTimeout(fetchNumbers, timerSeconds * 1000);
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
    const numArrayRandom = []

    while (numArrayRandom.length < 5){
        const numRandom = randomNumber(1, 100);

        if (!numArrayRandom.includes(numRandom)){
            numArrayRandom.push(numRandom);
        }
    }
    console.log(numArrayRandom);
    return numArrayRandom;
}

/**
 * Fa partire un timer
 */
function startTimer(){

    timerId = setInterval(() => {
        timerSeconds--;
        htmlSeconds.innerText = timerSeconds.toString().padStart( 2, '0' );
        if(timerSeconds <= 0){
            numberList.innerText = "";
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
    
    while (numArrayUser.length < 5){
        numUser = prompt("Inserisci un numero");
        if(!isNaN(numUser)){
            numArrayUser.push(numUser);
        } else{
            alert("Inserisci un numero valido");
        }
    }
    console.log(numArrayUser);
    return numArrayUser;
}