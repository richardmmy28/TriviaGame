var totalSeconds = 25
var secondsPassed = 0
var currentSeconds = totalSeconds 

var triviaQuestions = [
    {
        question : "How many yards for a first down?",
        answerChoices : [ '8', '10', '12'],
        answer : '10'
    },

    {
        question : "How many points do you get per touchdown?",
        answerChoices : ['6', '7', '8'],
        answer : '6'
    },

    {
        question : "What is the accronym of a Middle Line Backer?",
        answerChoices : ['MDL', 'MBC', 'MLB'],
        answer : 'MLB'
    }
]


var totalQuestionsIndex = triviaQuestions.length 
var currentQuestionIndex = 0 


function nextQuestion() {
    return triviaQuestions[currentQuestionIndex]
}

var totalAnswerIndex = triviaQuestions.length 
var currentAnswerIndex = 0 


function nextAnswer() {
    return triviaQuestions[currentAnswerIndex]
}






function gameLoop(){
    // update seconds values 
    secondsPassed = secondsPassed + 1 
    currentSeconds = totalSeconds - secondsPassed
    // prints seconds values 
    console.log(currentSeconds)
    $('#timer').text(currentSeconds)

    // do stuff to the game
    // next question if less than 0 seconds 
    // next question if answerd 
    // --> correct answer 
    // --> incorrect answer 
    // after all quetsions have been answered, display result 

    if (secondsPassed == totalSeconds){
        // reset variables 
        secondsPassed = 0
        currentSeconds = totalSeconds 
        // increment next question index 
        currentQuestionIndex = currentQuestionIndex + 1
        // return the new question
        var newQuestion = nextQuestion()
        var newAnswer = nextAnswer()

        $('#question').text(newQuestion.question)
        $('#answerChoices').text(newAnswer.answerChoices)
        

    }


}

window.onload = function(){

    // start the game with the first values 
    var newQuestion = nextQuestion()
    console.log(newQuestion)
    $('#question').text(newQuestion.question)
    $('#answerChoices').text(newAnswer.answerChoices)
    
    


    // starts the game loop, and calls it every second 
    var interval = setInterval( gameLoop , 1000); 

}

