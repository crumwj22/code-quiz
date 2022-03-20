
// variables for events
var timerLength = 60;
var timeEl = document.querySelector("#time")
var timerEl = document.querySelector("#timer");
var titleEl = document.querySelector("#title-section"); 
var questionEl = document.querySelector("#question-section");
var startEl = document.querySelector("#start");




timeEl.textContent = timerLength;

var questionIndex = 0;
var choicesIndex = 0;
var correctAnswersIndex = 0;


// variable questions and answers 
var question = [
          "Comomonly used data types DO NOT include:", 
          "The condition in an if/else statement is enclosed within _______.", 
          "Arrays in JavaScript can be used to store _______.", 
          "String values must be enclosed within _______ when being assigned to variables.",
        ];
    
var choices = [
          ["strings", "booleans", "arr", "character",],
          ["quotes", "curly brackets", "parentheses", "square bracket"], 
          ["numbers and strings", "other arrays", "booleans", "all of the above"], 
          ["commas", "curly brackets", "quotes", "parentheses"]
        ];
      
var answers = [2, 1, 3, 2];



// start quiz and clear innerHTML
function startQuiz() {
    titleEl.innerHTML = "";
    questionEl.textcontent = "";
    titleEl.textcontent = "";
}


// starts timer for the questions
function startTimer() {
       var timer = setInterval(function() {
        timerLength--; 
        timeEl.textContent = timerLength;   
        
        if (timerLength === 0) {
         clearInterval(timer);
        
        return;
        }
    }, 1000);

   }
 // shows each question with a loop   
function renderQuestion() {
    var questionTitle = question[questionIndex];
    var titleEl = document.createElement('h4');
    titleEl.textContent = questionTitle;
    questionEl.textContent = questionTitle;
    
    
    questionIndex++;
    
    for (let i = 0; i < question.length; i++) {
          
        
    }
      return questionIndex;
}  
// shows each choice with a loop
function renderChoices() {
    var choicesTitles = choices[choicesIndex];
    choicesIndex++;
    
    for (let i = 0; i < choicesTitles.length; i++) {
    var choiceTitle = choicesTitles[i];  
        var startEl = document.createElement('button');
        startEl.textContent = choiceTitle;
        questionEl.appendChild(startEl); 
      
     
    }
      return choicesIndex;
}
// event handlers
startEl.addEventListener('click', function() {
    startQuiz();
    startTimer();
    renderQuestion();
    renderChoices();
    endQuiz();
})

questionEl.addEventListener('click', function() { 
    renderQuestion();
    renderChoices();
 
})

