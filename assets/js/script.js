
// variables for events
var timerLength = 60;
var timeEl = document.querySelector("#time")
var timerEl = document.querySelector("#timer");
var titleEl = document.querySelector("#title-section"); 
var questionEl = document.querySelector("#question-section");
var startEl = document.querySelector("#start");

var count = 0;



timeEl.textContent = timerLength;

var questionIndex = 0;
var choicesIndex = 0;
var correctAnswersIndex = 0;


// variable questions, choices and answers 
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
            displayMessage();
        
            return;
        }
    }, 1000);

   }
 // shows each question with a loop   
function renderQuestion() {
    var questionTitleDiv = document.querySelector('#question-title')
    var questionTitle = question[questionIndex];
    var questionH4 = document.createElement('h4');
    questionTitleDiv.innerHTML = "";
    questionH4.textContent = questionTitle;
    questionTitleDiv.appendChild(questionH4)
    // for (let i = 0; i < question.length; i++) {
    
    // }
    //   return questionIndex;
    var choicesTitles = choices[choicesIndex];
    var choicesList = document.querySelector('#choices-list')
    choicesList.innerHTML = "";
    
    for (let i = 0; i < choicesTitles.length; i++) {
        var choiceTitle = choicesTitles[i];  
        var choiceButton = document.createElement('button');
        var listItem = document.createElement('li');
        choiceButton.textContent = choiceTitle;
        listItem.appendChild(choiceButton)
        choicesList.appendChild(listItem); 
      
}
}  
// // shows each choice with a loop
// function renderChoices() {
//     var choicesTitles = choices[choicesIndex];
//     var choicesList = document.querySelector('#choices-list')
//     choicesList.innerHTML = "";
//     choicesIndex++;
    
//     for (let i = 0; i < choicesTitles.length; i++) {
//         var choiceTitle = choicesTitles[i];  
//         var startEl = document.createElement('button');
//         var listItem = document.createElement('li');
//         startEl.textContent = choiceTitle;
//         listItem.appendChild(startEl)
//         choicesList.appendChild(listItem); 
      
// }

//     // if (choices.child2 == true) {
//     //     return "correct"
//     //  } else if (!choices.child2 == false) {
//     //     return "incorrect"
//     //  }

//     //  if (choices.child1 == true) {
//     //      return "correct"
//         //  } else if (!choices.child1 == false) {

//     //  }  
    

// return choicesIndex;
// }

function displayMessage()   {
    titleEl.textcontent = "Quiz Over"
}

function setCounterText(){
    timeEl.textcontent = count;
}

timeEl.addEventListener("click", function(){
    count--
    setCounterText();
})

// event handlers
startEl.addEventListener('click', function() {
    startQuiz();
    startTimer();
    renderQuestion();
    // renderChoices();
    
})

questionEl.addEventListener('click', function(event) { 
    var target = event.target.textContent;
    var currentChoices = choices[choicesIndex];
    var answerIndex = answers[correctAnswersIndex]
    var correctAnswer = currentChoices[answerIndex]

    if(target !== correctAnswer) {
        console.log('incorrect')
    } else {
        console.log('correct')
    }

    choicesIndex++;
    questionIndex++;
    correctAnswersIndex++;
    
    renderQuestion();
    // renderChoices();
 
})

function resetGame() {
    // high score 
    correctAnswersIndex
    }

var resetButton = document.querySelector(".reset-button");
// resetButton.addEventListener("click", resetGame);