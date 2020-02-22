
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
    answers: ["72", "12 dozen", "100", "56"],
    correctAnswer: "72"
}, {
    question: "What is Chandler's middle name?",
    answers: ["Toby", "Muriel", "Edward", "Gene"],
    correctAnswer: "Muriel"
}, {
    question: "Who was the Holiday Armadillo?",
    answers: ["Pheobe", "Ross", "Chandler", "Joey"],
    correctAnswer: "Ross"
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
        $("#timer").html(
            ('<div class="text-center" id="timer">'
            + game.counter +
            '</div>'
            )
            );
            if (game.counter === 0) {
            console.log("Your time is up."); //working
            game.timeUp();
        }
    },
    
    loadQuestion: function() {
        
        //set timer to start at 20, counts down by 1000 milliseconds
        timer = setInterval(game.countdown, 1000);
        
        /* pick a random question
        var randomQuestion = 
        (i = questions[Math.floor(Math.random() * questions.length)]);
        console.log("working");
        console.log(randomQuestion);
        */
        

        //post questions to page
        $("#questions-text").html(
            "<h3>" + questions[game.currentQuestion].question + "</h3>");
            console.log(questions[game.currentQuestion].question); //working
        
        //loop through answers (4 each question) and append to page
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            //append answers to page
            $('#answer-buttons').append(
            '<button class="btn" id="answer-buttons" id="answer-buttons-'+i+'" data-name="' + questions[game.currentQuestion].answers[i] + '" > ' + questions[game.currentQuestion].answers[i] + ' </button>');
            

        console.log(questions[game.currentQuestion].answers[i]);
            }

    },
    nextQuestion: function() {

    },
    timeUp: function() {

    },
    results: function() {

    },
    clicked: function(e) {
        //reset timer
        clearInterval(timer);
        //if answer clicked equals correct answer, run answeredCorrectly()
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        //if not, run answeredIncorrectly();    
        } else {
            game.answeredIncorrectly();
        }

    },
    answeredCorrectly: function() {
        console.log("correct!");
        clearInterval(timer);
        game.correct++; 
        console.log("correct :" + correct)
        $("#answer-buttons").replaceWith("<h3> 'Correct!' </h3>");

    },
    answeredIncorrectly: function() {
        clearInterval(timer); //stopping timer
        console.log("nope!"); //logging
        game.incorrect++;  //incorrect logging as 'undefined'
        console.log("incorrect :" + incorrect)
        $("#answer-buttons").remove;
    },
    reset: function() {

    },
}




// FUNCTIONS
// ==============================================

//remove start button when start button is clicked

$("#start-button").on("click", function(){
    $("#start-button").replaceWith(('<div class="text-center" id="timer">'
    + game.counter +
    '</div>'
    ));
    game.loadQuestion();
})

//event handling function
// https://stackoverflow.com/questions/10323392/in-javascript-jquery-what-does-e-mean
$(document).on('click', '#answer-buttons', function(e) {
    game.clicked(e);
})






// CALL FUNCTIONS
// ==============================================

