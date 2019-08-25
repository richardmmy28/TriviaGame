const quizQuestions = [
    {
        question: "How many yards for a first down?",
        choices: [ "8", "10", "12"],
        corrrectAnswer: "10"
    },

    {
    question: "How many points for a touchdown?",
    choices: [ "6", "7", "8"],
    correctAnswer: "6"
    },

    {
    question: "What does the accronym WR stand for?",
    choices: [ "Wide Right", "Wide Reciever", "Whiskey & Rye"],
    correctAnswer: 'Wide Reviever'
    },
];

//Initial Values
let counter = 5;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;



    function nextQuestion() {
        const isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
        if (isQuestionOver) {
            
            console.log("Game is over!!!");
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
    counter = 5;
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

loadQuestion();
   


