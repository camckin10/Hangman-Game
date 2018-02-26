//What works
//user can enter letters
//counts score 

//What does not work:
//wins not being counted or shown
//number of guesses not counted or shown
//letters already guessed not counted or shown 
//start over game not working

window.onload = function () {

  var candyWords=["nerds", "jollyrancher", "skittles", "starburst", "twizzlers", "hershey"];

  var clues = [
    "Featured in Willy Wonka's Chocolate Factory.",
    "Comes in clear packaging.",
    "A taste of the rainbow.",
    "Square candies.",
    "Also known as red vines.",
    "reese's, m&m's, all come from this chocolate company"
  ];

  var score = 0;
  //variable for letters already guessed
  //var letters = '';
  var clueIndex = 0;
  var randomWord = '';
  var randomWordArray = [];
  var blanksAndSuccesses = [];
  var incorrectLetters = [];

  // Function to render questions.
  function askQuestion(index) {
    document.querySelector("#clue").innerHTML = "<h3 id=''>" + clues[index] + "</h3>";
  }

  //var alphabet = ['a', 'b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','x','z'];
  //function for remaining letters
  // function iterateAlphabet()
  // {
  //    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //    for(var i=0; i<str.length; i++)
  //    {
  //       //var nextChar
  //       document.querySelector("#lettersGuessed").innerHTML = str.charAt(i);
  //       //(nextChar);
  //    }
  // }



  //calling function to test
  //iterateAlphabet();
  
var count = 0;
  //functions for remaining guesses
  //use function for updating score to solve count function
  function remainingGuesses () {
      if (count < 10 ) {
        count+= 1;
        console.log("testing guesses");
        } else if (count === 10 ) {
          console.log("no more guesses");
        } else {
          console.log("2nd test");
        }         

  }

  // Function that updates the score...
  function updateScore() {
    score += 1;
    document.querySelector("#score").innerHTML = "Score: " + score;
  }

  //for images to appear when user wins
  //use an array of images 
  //add .innerHTML to testLetter function

  //var winImages = []

  //function that allows user to enter letters
  function testLetter(input) {
    // iterate through the word array and test the input to each letter of the word
    console.log(input);
    // console.log(randomWordArray);
    // ["j", "o", "l", "l", "y"]
    // ["_", "_", "_"]
    //var displayString = blanksAndSuccesses.join(' '); // "_ _ _ _ _ _"
    for(var i = 0; i < randomWordArray.length; i++) {
      if(randomWordArray[i] === input) {
        console.log('you found it!');
        
        // Replace the blanksAndSuccesses to what ever the letter is.
        blanksAndSuccesses[i] = input;
        console.log(blanksAndSuccesses);
        document.querySelector("#currentWord").innerHTML = "<p id=''>" + blanksAndSuccesses.join(' ') + "</p>";
        updateScore();
        //remainingGuesses();
        //iterateAlphabet();
      } else {
        // incorrectLetters[i].indexOf(input)!= randomWordArray {
          console.log('pink elephants');
          //check if incorrect letters contain the input
          if(incorrectLetters.indexOf(input) === -1) {
            incorrectLetters.push(input);

          }
          document.querySelector("#lettersGuessed").innerHTML = incorrectLetters;
          //console.log()
        }
        
      }
    }
  // }
  

  // MAIN PROCESS
  // ====================================================================

  function startGame() {
    
    clueIndex = Math.floor(Math.random() * candyWords.length); // 0
    
    randomWord = candyWords[clueIndex];                        // "starburts"
    // console.log(randomWord);
    askQuestion(clueIndex);                                    // "Featured in 
    
 
    console.log('randomword is : ' + randomWord);            // nerds
    console.log(typeof(randomWord));    // string
    randomWordArray = randomWord.split(''); // transforms a string into an array
    console.log(randomWordArray);               // ['n','e','r','d','s']
    console.log(typeof(randomWordArray));       // object
    // randomWordArray.join(' ')  // n e r d s

    for (var i = 0; i < randomWordArray.length; i++) {
      blanksAndSuccesses.push("_");
    }
    console.log(blanksAndSuccesses);
    
    document.querySelector("#currentWord").innerHTML = blanksAndSuccesses.join(' ');

    //function that records keys on keyboard being pressed
    document.onkeyup = function(event) {
      // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
      var userInput = String.fromCharCode(event.keyCode).toLowerCase();
      // console.log(userInput);
      testLetter(userInput);
      //checkwinningcondition();
    };

  }
  startGame();

  // When the user presses a key, it will run the following function...


}
    
//checkwinningcondition function 
  

