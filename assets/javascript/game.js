
// VARIABLES
// ==============================================

//all possible questions, answer choices, correct answers
var questions = [{
    question: "Monica once threw a plate while playing which of the following games?",
    answers: ["Pictionary", "Monopoly", "Yahtzee!", "Trivial Pursuit"],
    correctAnswer: "Pictionary"
}, {
    question: "Which two characters share an Oreo in the pilot episode?",
    answers: ["Rachel and Monica", "Chandler and Joey", "Ross and Rachel", "Joey and Pheobe"],
    correctAnswer: "Ross and Rachel"
}, {
    question: "Where is Chandler forced to work after falling asleep in a meeting?",
    answers: ["The mail room", "Tulsa", "Dallas", "Outside"],
    correctAnswer: "Tulsa"
}, {
    question: "Which cartoon character was on Phoebe’s thermos that Ursula threw under a bus?",
    answers: ["Judy Jetson", "Pebbles", "Scooby Doo", "Bugs Bunny"],
    correctAnswer: "Judy Jetson"
}, {
    question: "Joey appeared on all but which of the following TV shows?",
    answers: ["$100,000 Pyramid", "Days of Our Lives", "MAC AND CHEESE", "All My Children"],
    correctAnswer: "All My Children"
}, {
    question: "How long is the letter Rachel writes to Ross?",
    answers: [" 12 pages", "1 page", "18 pages", "28 pages"],
    correctAnswer: "18 pages",
}, {
    question: "How many roses does Ross send to Emily?",
    answers: ["72", "12 dozen", "100", "56"]
}, {
    question: "What is Chandler's middle name?",
    answers: ["Toby", "Muriel", "Edward", "Gene"],
    correctAnswer: "Muriel"
}, {
    question: "Who was the Holiday Armadillo?",
    answers: ["Pheobe", "Ross", "Chandler", "Joey"],
    correctAnswer: ["Ross"]
}, {
    question: "Which volume of a set of encyclopedias does Joey purchase?",
    answers: ["A", "J", "T", "V"],
    correctAnswer: "V"
}];

// variables of gameplay

var game = {
    questions:questions,
    currentQuestion:0,
    counter:20,
    correct:0,
    incorrect:0,
    countdown: function() {
        //counter property in variable game decreases by one, until it reaches 0, in which case, it will run the timeUp
        game.counter--;
        $("#timer").html(game.counter);
        if (game.counter === 0) {
            console.log("Your time is up."); //working
            game.timeUp();
        }
    },
    loadQuestion: function() {
        
        //set timer to start at 20, counts down by 1000 milliseconds
        timer = setInterval(game.countdown, 1000);
        
        //post questions to page
        $("#questions-text").html("<h3>" + questions[game.currentQuestion].question + "</h3>");
        console.log(questions[game.currentQuestion].question); //working
        
        //loop through answers (4 each question)
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#answer-buttons").append
            ('<button class = "btn btn-lg buttons text-center answer-button" id = "button" >'
            + i +
            ' " data-name = " ' + questions[game.currentQuestion].answers[i] + '" ' >
            + questions[game.currentQuestion].answers[i] + '</button>')
        }
        console.log(questions[game.currentQuestion].answers); //working
        console.log(questions[game.currentQuestion].correctAnswer); //working

    },
    nextQuestion: function() {

    },
    timeUp: function() {

    },
    results: function() {

    },
    clicked: function() {

    },
    answeredCorrectly: function() {

    },
    answeredIncorrectly: function() {

    },
    reset: function() {

    },
}




// FUNCTIONS
// ==============================================

//remove start button when start button is clicked

$("#start-button").on("click", function(){
    $("#start-button").remove();
    game.loadQuestion();
})






// CALL FUNCTIONS
// ==============================================

