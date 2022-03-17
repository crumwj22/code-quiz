/*
 1. Design UI
    - Draw a picture
    - Determine where you will display feedback
    - Determine what is clickable, what will recieve keytinput, change input
      timers, scroll events, etc
    - rough in the elements in HTML, style is less important
*/

/*
 

      

      theElement.addeventListener([EVENT TYPE], function(event){
        // do stuff here...
      })

    ...where [EVENT TYPE] is "click" or "change" or "keydown" or whatver

    - Identify the things that should happen in the click handlers
    - there is always a page load event. Usually have a function for anything
      that needs setting up at the beginning, before people interact with the 
      page. Start the execution of this setup function at the bottom of page
*/

/*
 3. Declare variables
    - Global state variables emerge while working on event handlers (i.e., it
      becomes clearer what needs to be tracked across the application)
    - state variables:
      "State describes the status of the entire program or an individual
       object. It could be text, a number, a boolean, or another data type.

       It’s a common tool for coordinating code. For example, once you update state, a bunch of different functions can instantly react to that change."
       https://www.freecodecamp.org/news/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee/
    - Does the state variable need to be global (i.e., used by all the event handlers) or does it only need to be local
      to the event handler?
*/

/*
 3. Refactor
    - identify tasks that can be broken into their own functions, outside the event handlers
    - Are there tasks that more than one event handler share?
*/



// 2. Identify events
// - Identify HTML elements that generate events, create variables at the top of the page.
//var theElement = document.querySelector([CSS Selector for your element]);
    //- Create event handlers
var timeEl = document.querySelector("#time")
var timerLength = 60;
var questionIndex = 0;
var highScoreEl = document.querySelector("#high-scores");
var timerEl = document.querySelector("#timer");
var titleEl = document.querySelector("#title");
var quizEl = document.querySelector("#quiz");
var startEl = document.querySelector("#start");
timeEl.textContent = timerLength;


var questionsAnswers =  {
      question: ["Comomonly used data types DO NOT iclude:", "The condition in an if/else statement is enclosed within _______.", "Arrays in JavaScript can be used to store _______.", "String values must be enclosed within _______ when being assigned to variables."],
      choices: [["strings", "booleans", "arr", "character"], ["quotes", "curly brackets", "parentheses", "square bracket"], ["numbers and strings", "other arrays", "booleans", "all of the above"], ["commas", "curly brackets", "quotes", "parentheses"]],
      correctAnswers: [2, 2, 3, 3]
};

function clearScreen() {
    titleEl.innerHTML = "";
    quizEl.textcontent = "";
    titleEl.textcontent = "";
    if (startEl) {
        quizEl.innerHTML = ''
        startEl.remove();
    }
}
function startTimer() {
        // Sets timer
    timer = setInterval(function() {
    timerLength--;
    timeEl.textContent = timerLength;
    // Increment question index and re render question div with next question
    // questionIndex++;
    // renderQuestion();
    // console.log(questionsAnswers.question[questionIndex])
    // questionIndex ++;
    // console.log(questionsAnswers.question[questionIndex])

    }, 1000);
}

function renderQuestion() {
    quizEl.innerHTML = ''
    var questionTitle = questionsAnswers.question[questionIndex];
    var titleEl = document.createElement('h4');
    titleEl.textContent = questionTitle;
    quizEl.appendChild(titleEl);
}

startEl.addEventListener('click', function() {
    clearScreen();
    startTimer();
    renderQuestion();
    console.log(questionsAnswers.choices)
})

function startGame() {
    var secondsLeft = timerLength;
    var currentQuestion = 0;
}

// if

// if

// for 

//     if 
    
//     else
//     else endgame
// /
// startButton.addEventListener('click', showResults);
// document




// resetButton.addEventListener("click", resetGame);













