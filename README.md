# Trivia Game

**Ashley Allphin**

5: JavaScript Assignment 2

Boot Camp UTA-VIRT-FSF-PT-01-2020-U-LOL

[Playable Version](https://ashleyallphin.github.io/trivia-game/)

### How does the game work?

[Watch the demo](https://youtu.be/xhmmiRmxQ8Q)

#### Here's how the app works:

* This trivia game will show only one question until the player answers it or their time runs out.

* If the player selects the correct answer, the page will display "Correct!" After two seconds, the next question will appear, for a total of ten questions.

* The scenario is similar for wrong answers and time-outs.

  * If the player runs out of time, the answer will be counted as incorrect and the page will tell the player the correct answer.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* The final screen shows the number of correct answers, incorrect answers -- *calculated by total number of questions (10) minus correct answers* -- and gives the player an option to restart the game without reloading the page.

##### Game design notes

* The game is deisgned to ask questions in random order.
* Answer choices display in random orders from game to game.
* The player is allowed 20 seconds to answer a question.  I chose not to distinguish between incorrect and unanswered questions.  As far as I'm concerned, an unanswered question resulting for timer run out is the same as an inocrrect question.  I didn't want to call out the number of incorrect answers on my results page, so I chose to display the correct number of anwers out of the total questions only.  Incorrect answers can be determined by the difference.
* Result GIF is based on 1-5, 6-9, and 10 wins. A different image is offered for each correct threshold.
* Initial page design created with Bootstrap.


### What is the goal of this project?

The goal of this assignment is to demonstrate working knowledge of HTML, CSS, javaScript, jQuery (namely the use of  timers as a main app feature), and to prove that FRIENDS is the greatest show ever.


### Resources & Credits

Styling and question and answer content by Ashley Allphin; images taken from various web resources.





