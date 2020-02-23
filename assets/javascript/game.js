
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
    


    shuffleQuestions() {
        //shuffle items in array so questions are asked randomly without repeating
        for (var j, x, i = questions.length; i; j = parseInt(Math.random() * i), x = questions[--i], questions[i] = questions[j], questions[j] = x);

        console.log (questions) //working
    },

    loadQuestion: function() {
        
        //this.shuffleQuestions(); -- this will radomize on every question

        //set timer to start at 20, counts down by 1000 milliseconds
        timer = setInterval(game.countdown, 1000);
        
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
        //reset counter to 30
        game.counter=20;
        //set HTML back at 30 too
        
        $("#timer").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();



    },
    timeUp: function() {
        //clear the interval
        clearInterval(timer);
        //take the buttons away
        $("#answer-buttons").empty();
        //tell the user time is up
        $("#questions-text").html("<h3 style='color: #FABC16'>You ran out of time!</h3>");
        //tell the user the correct answer
        $("#questions-text").append("<h4 style='color: #fff'><br>The correct answer is " + questions[game.currentQuestion].correctAnswer + ".</h4>");
        //if it's the last question, take the user to the results
        if (game.currentQuestion==questions.length-1){
            setTimeout(game.results,2*1000);
        //if it's not, take them to the next question
        }   else {
            setTimeout(game.nextQuestion,2*1000);
        
        }    


    },
    results: function() {
     //reset timer
     $("#timer").remove();
     $("#questions-text").html("<h3 style='color: #02B2E7'><br>You answered " + game.correct + " of 10 questions correctly.</h3>");
     //$("#questions-text").append("<h4 style='color: #fff'><br>Correct: " + game.correct + " </h4>");
     //$("#questions-text").append("<h4 style='color: #fff'>Incorrect: " + game.incorrect + " </h4>");
     if (game.correct === 10) {
        $("#questions-text").append("<h4 style='color: #fff'></h4>");
        $("#questions-text").append('<img = src="assets/images/group-clap.gif">');

     }
     else if (game.correct  < 10 && game.correct > 6) {
        $("#questions-text").append('<img = src="assets/images/ross-clap.gif">');

     }
     else {
        $("#questions-text").append('<img = src="assets/images/loser.gif">');

     }

     $("#questions-text").append('<div class="btn text-center start-button" style="width:200px" id="reset-button"><h3>PLAY AGAIN</h3></div>');

    },

     //$("#questions-text").append("<h4 style='color: #fff'>Play again?</h4>")
       
    

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
        $("#answer-buttons").empty();

        console.log("correct!");
        $("#questions-text").html("<h3 style='color: #02B2E7'>Correct!</h3>");
        game.correct++; 
        console.log("correct :" + game.correct);
        //if it's the last question, take the user to the results
        if (game.currentQuestion==questions.length-1){
            setTimeout(game.results,2*1000);
        //if it's not, take them to the next question
        } else {
            setTimeout(game.nextQuestion,2*1000);
        }

    },
    answeredIncorrectly: function() {
        $("#answer-buttons").empty();
        $("#questions-text").html("<h3 style='color: #E91E23'>Wrong!</h3>");
        $("#questions-text").append("<h4 style='color: #fff'><br>The correct answer is " + questions[game.currentQuestion].correctAnswer + ".</h4>");
        console.log("nope!"); //logging
        game.incorrect++;  //incorrect logging as 'undefined'
        console.log("incorrect :" + game.incorrect);
        //if it's the last question, take the user to the results page
        if (game.currentQuestion==questions.length-1){
            setTimeout(game.results,2*1000);
        
        //if it's not, take them to the next question
        } else {
            setTimeout(game.nextQuestion,2*1000);
        }
    },
    reset: function() {
        //reset everything to original values
        game.currentQuestion = 0;
        game.countdown = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.counter = 0;
        //load first question
        game.shuffleQuestions();
        game.loadQuestion();
    },
}




// FUNCTIONS
// ==============================================

//replace start button with timer on click
$("#start-button").on("click", function(){
    $("#start-button").replaceWith(('<div class="text-center" id="timer">'
        + game.counter +
        '</div>'
    ));
    $("#friends-trivia").remove();
    game.shuffleQuestions();
    game.loadQuestion();
})

//event handling function
// https://stackoverflow.com/questions/10323392/in-javascript-jquery-what-does-e-mean
// document here made the code fire twice $(document).on('click', '#answer-buttons', function(e) {

$("#answer-buttons").on('click', function(e) {
    game.clicked(e);
})

$(document).on('click', '#reset-button', function(){
    game.reset();
})





// CALL FUNCTIONS
// ==============================================

