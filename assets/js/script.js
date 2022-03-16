const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const startButton = document.getElementById('start');


function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
startButton.addEventListener('click', showResults);

const myQuestions = [
    {
      question: "Comomonly used data types DO NOT iclude:",
      answers: {
        1.: "strings",
        2.: "booleans",
        3.: "arr",
        4.: "character"
      },
      correctAnswer: "3"
    },
    {
      question: "The condition in an if/else statement is enclosed within _______.",
      answers: {
        1.: "quotes",
        2.: "curly brackets",
        3.: "parentheses",
        4.: "square brackets"
      },
      correctAnswer: "3"
    },
    {
      question: "Arrays in JavaScript can be used to store _______.",
      answers: {
        1.: "numbers and strings",
        2.: "other arrays",
        3.: "booleans",
        4.: "all of the above"
      },
      correctAnswer: "4"
    },
     {
      question: "String values must be enclosed within _______ when being assigned to variables.",
      answers: {
        1.: "commas",
        2.: "curly brackets",
        3.: "quotes",
        4.: "parentheses"
      },
      correctAnswer: "3"
    }
  ];














/*
 1. Design UI
    - Draw a picture
    - Determine where you will display feedback
    - Determine what is clickable, what will recieve keytinput, change input
      timers, scroll events, etc
    - rough in the elements in HTML, style is less important
*/

/*
 2. Identify events
    - Identify HTML elements that generate events, create variables at the top of 
      the page.

      var theElement = document.querySelector([CSS Selector for your element]);
    - Create event handlers

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
