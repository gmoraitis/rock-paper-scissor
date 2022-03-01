const computerDisplay = document.getElementById('computer');
const userDisplay = document.getElementById('user');
const resultDisplay = document.getElementById('result');
let userChoise;
let computerChoise;
let result;

// bring all the possible choises (button clicks) in the js document 
// with query selector
const choises = document.querySelectorAll('button');

//grab each button and add an event listener
choises.forEach(choise => choise.addEventListener('click', (e) => {
    userChoise = e.target.id; // save each result of click event 
    userDisplay.innerHTML = userChoise; // print to userDisplay area whatever was clicked
    // for each click we fire up the generate function
    generateComputerChoise()
    // for each click we fire up the getresult function
    getResult()
    changeColor()
}))


// generate the computer choise 
// the idea is to generate a random number with mathrandom
function generateComputerChoise() {
    const randomNumber = Math.floor(Math.random() * 3 + 1)

    if (randomNumber === 1) {
        computerChoise = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoise = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoise = 'Scissors'
    }
    computerDisplay.innerHTML = computerChoise;
}

function getResult() {
    if (computerChoise === userChoise) {
        result = 'its a draw!'
    }
    if (computerChoise === 'Rock' && userChoise === 'Paper') {
        result = 'you win!'
    }
    if (computerChoise === 'Rock' && userChoise === 'Scissors') {
        result = 'you lost!'
    }
    if (computerChoise === 'Paper' && userChoise === 'Scissors') {
        result = 'you win!'
    }
    if (computerChoise === 'Paper' && userChoise === 'Rock') {
        result = 'you lost!'
    }
    if (computerChoise === 'Scissors' && userChoise === 'Rock') {
        result = 'you win!'
    }
    if (computerChoise === 'Scissors' && userChoise === 'Paper') {
        result = 'you lost!'
    }
    resultDisplay.innerHTML = result;

}

function changeColor() {
    if (result === 'you win!') {
        var element = document.getElementById("result");
        element.classList.add("win");
    }
    if (result === 'you lost!') {
        var element = document.getElementById("result");
        element.classList.add("lost");}
    
    if(result === 'its a draw!'){
        var element = document.getElementById("result");
        element.classList.add("draw");}
    
}


