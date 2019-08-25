const quizQuestions = [
    {
        question: "How many yards for a first down?",
        choices: [ "8", "10", "12"],
        correctAnswer: "10"
    },

    {
    question: "How many points for a touchdown?",
    choices: [ "6", "7", "8"],
    correctAnswer: "6"
    },

    {
    question: "What does the accronym WR stand for?",
    choices: [ "Wide Right", "Wide Reciever", "Whiskey & Rye"],
    correctAnswer: "Wide Reciever"
    },
];

//Initial Values
let counter = 10;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;


//If timer is over go to "next question" or "Game Over" result.
    function nextQuestion() {
        const isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
        if (isQuestionOver) {
            console.log("Game is over!!!");
            displayResult();
        } else {
            currentQuestion++;
            loadQuestion();
        }
    }



//30 second timer function

function timeUp() {
    clearInterval(timer);

    lost++;

    nextQuestion();
}

function countDown() {
    counter--;

    $("#time").html("Timer: " + counter);

    if (counter === 0) {
        timeUp();
    }
}

//Display the question and the choices to the browser
function loadQuestion() {
    counter = 10;
    timer = setInterval(countDown, 1000);

    const question = quizQuestions[currentQuestion].question;
    const choices = quizQuestions[currentQuestion].choices;

    $("#time").html("Timer: " + counter);
    $("#game").html(`
        <h4>${question}</h4>
        ${loadChoices(choices)}
    `);

    
}

function loadChoices(choices) {
    let result = "";

    for (let i = 0; i < choices.length; i++) {
        result+= `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;

    }

    return result;
}

$(document).on("click", ".choice", function() {
    clearInterval(timer);
    const selectedAnswer = $(this).attr("data-answer");
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer) {
        score++;
        console.log("Wins");
        nextQuestion();
    } else {
        lost++;
        console.log("loss");
        nextQuestion();
    }
});

function displayResult() {
    const result = `
    <p>You got ${score} question(s) right</p>
    <p>You got ${lost} question(s) wrong</p>
    <p>Out of a total of ${quizQuestions.length} questions</p>
    <button class="btn btn-primary" id="reset">Reset Game</button>
    `;

    $("#game").html(result);
}


$(document).on("click", "#reset", function() {
    counter = 10;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;

    loadQuestion();
    
});


loadQuestion();
   


