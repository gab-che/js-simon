const startGame = document.getElementById("start_game");
const numberList = document.getElementById("number_list");

startGame.addEventListener("click", function(){
    numberList.innerText = generateNumArray();
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
 * @return {Array} bombList
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

