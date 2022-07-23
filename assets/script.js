//Use objects to define the questions for the coding quiz.

let questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    },

];

//Set variables for selecting on header
let timer = document.querySelector("#timer");

//Set variables for selecting on homepage
let homepage = document.querySelector("#homepage");
let welcome = document.querySelector("#welcome");
let start = document.querySelector("#start");

//Set variables for selecting on question page
let question = document.querySelector("#question");
let newQuestion = document.querySelector("#new_question");
let anyAnswer = document.querySelectorAll(".any_answer");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let checkAnswer = document.querySelector("#check_answer");

//Set variables for selecting on final score page
let FinalScorePage = document.querySelector("#final_score_page");
let finalScore = document.querySelector("#final_score");
let initials = document.querySelector("#initials");
let submitScore = document.querySelector("#submit_score");

//Set variables for selecting on high score page
let highscore = document.querySelector("#highscore");


//Select variables for resetting high scores
let back = document.querySelector("#back");
let reset = document.querySelector("#reset");

let secondsLeft = 75;

// Start countdown timer for quiz play
function quizTimer() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timer.innerText = `Time left: ${secondsLeft}`

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timer.innerText = "Time is up!";

        }
    }, 1000);
}

quizTimer();