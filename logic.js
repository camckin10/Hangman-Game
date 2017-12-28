// <h1>Question Game!</h1>

//     <p id="score"></p>
//     <p id="question"></p>
    
    //issues with game as of 12-26-17:
    //key function not working
    //cannot press any key to start the game '

    //still need functions for:
    //function for # of guesses
    //function that pulls letters from an array that has the 
    //alphabet 
    

      // VARIABLES
      // ==========================================================================
      //window.onload so browser will download all content 
      window.onload = function () {

      alert ("Welcome to the Hangman Game!");
      console.log("hi");
     //first attempyt at coding hangman game
     //create array of chosen words for game
     var candyWords=["starburst", "nerds","jollyrancher","hershey","twizzlers","skittles"];


      // The object questions for our quiz game.
      var clues = {
        c1: ["Featured in Willy Wonka's Chocolate Factory.", "nerds"],
        c2: ["Comes in clear packaging.", "jollyrancher"],
        c3: ["A taste of the rainbow.", "skittles"],
        c4: ["Square candies.", "starburst"],
        c5: ["Also known as red vines.", "twizzlers"],
        c6: ["reese's, m&m's, all come from this chocolate company", "hershey"]
      };

      // We start the game with a score of 0.
      var score = 0;
      // Variable to hold the index of current question.
      var clueIndex = 0;
      // Array of questions.
      var cluesArray = [clues.c1, clues.c2, clues.c3, clues.c4, clues.c5, clues.c6];

      // FUNCTIONS
      // ==============================================================================

      // Function to render questions.
      function askQuestion() {
        // If there are still more clues, render the next one.
        if (clueIndex <= (cluesArray.length - 1)) {
          document.querySelector("#clue").innerHTML = cluesArray[clueIndex][0];
        }
        // If there aren't, render the end game screen.
        else {
          document.getElementById("#question").innerHTML = "Game Over!";
          document.getElementsById("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        }
      }

      // Function that updates the score...
      function updateScore() {
        document.querySelector("#score").innerHTML = "Score: " + score;
      }


      // MAIN PROCESS
      // ==============================================================================

      // Calling functions to start the game.
      askQuestion();
      updateScore();

      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

        // If there are no more questions, stop the function.
        if (clueIndex === cluesArray.length) {
          return;
        }

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();

        // Only run this code if random keys were pressed to make a word.
        if (userInput === "" || userInput === "") {

          // If they guess the correct answer, increase and update score, alert them they got it right.
          if (userInput === cluesArray[clueIndex][1]) {
            alert("Correct!");
            score++;
            updateScore();
          }
          // If wrong, alert them they are wrong.
          else {
            alert("Wrong!");
          }

          // Increment the questionIndex variable and call the renderQuestion function.
          clueIndex++;
          askQuestion();

        }

      };

    }
    
  

