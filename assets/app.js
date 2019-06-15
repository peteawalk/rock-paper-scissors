let userScore = 0; // -- const = constant var -- var would have also worked here --
let computerScore = 0;
let drawScore = 0;
const userScore_span = document.getElementById("user-score");
const drawScore_span = document.getElementById("draw-score");
const computerScore_span = document.getElementById("computer-score");
// -- The underscore for DOM variables. HTML variables that store DOM elements. --

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
// HTML id values are just in quotes.
// HTML classes have a . (period) in the quotes.

// rock_div.addEventListener('click', function () {
//     console.log("Hey you clicked on The Rock!") 
// }) -- USE THIS TO TEST functionality --

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3); // -- Generates random WHOLE number (math.floor) between 1 - 3 --
    return choices[randomNumber]; // Uses random index number to get value from array.
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. you win!`; // -- JS6 syntax --
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("green-glow")
    }, 300); // -- removes green-glow class from winning choice

}



function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. you lost...`; // -- JS6 syntax --
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("red-glow")
    }, 300); // -- removes red-glow class from winning choice
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    drawScore++;
    drawScore_span.innerHTML = drawScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} TIED ${convertToWord(computerChoice)}${smallCompWord}. you TIED!`; // -- JS6 syntax --
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("gray-glow")
    }, 300); // -- removes gray-glow class from winning choice
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) { // -- An alternative to an if, else if, if statement --
        case "rs": // -- User Win Scenarios --
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
game();

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}
main();