window.onload = function () {

  var candyWords=["starburst", "nerds", "jollyrancher", "hershey", "twizzlers", "skittles"];

  var clues = [
    "Featured in Willy Wonka's Chocolate Factory.",
    "Comes in clear packaging.",
    "A taste of the rainbow.",
    "Square candies.",
    "Also known as red vines.",
    "reese's, m&m's, all come from this chocolate company"
  ];

  var score = 0;
  var clueIndex = 0;
  var randomWord = '';
  var randomWordArray = [];
  var blanksAndSuccesses = [];

  // Function to render questions.
  function askQuestion(index) {
    document.querySelector("#clue").innerHTML = "<h3 id=''>" + clues[index] + "</h3>";
  }

  // Function that updates the score...
  function updateScore() {
    score += 1;
    document.querySelector("#score").innerHTML = "Score: " + score;
  }

  function testLetter(input) {
    // iterate through the word array and test the input to each letter of the word
    console.log(input);
    // console.log(randomWordArray);
    // ["j", "o", "l", "l", "y"]
    // ["_", "_", "_"]
    blanksAndSuccesses.join(' '); // "_ _ _ _ _ _"
    for(let i = 0; i < randomWordArray.length; i++) {
      if(randomWordArray[i] === input) {
        console.log('you found it!');
        // Replace the blanksAndSuccesses to what ever the letter is.
        blanksAndSuccesses[i] = input;
        console.log(blanksAndSuccesses);
        document.querySelector("#currentWord").innerHTML = "<p id=''>" + blanksAndSuccesses.join(' ') + "</p>";
        updateScore();
      }
    }
  }
  

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


    document.onkeyup = function(event) {
      // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
      var userInput = String.fromCharCode(event.keyCode).toLowerCase();
      // console.log(userInput);
      testLetter(userInput);
      checkwinningcondition();
    };

  }
  startGame();

  // When the user presses a key, it will run the following function...


}
    
  

