//hang-man game javsript
//javascript file will also have psuedocoding under each step or steps.

//general idea trying to convey:
//1.user will use any key to click, thereby guessing the word
//2.once user clicks, wins will either go up or down
//3.after a certain # of guesses, user will either win/lose.
//4.if user wins/loses still want to have image appear of candy


//currently as of 12-6-17 @ 5:00 pm, my code does the following:
//a.prints all of the alerts in my code
//b.does not count wins
//c.onclick function is not activated
//d.pictures not link
//e.the user automatically wins

//window.onload so browser will download all content 
window.onload = function () {

//first attempyt at coding hangman game
//create array of chosen words for game
var candyWords=["starburst", "nerds","jollyrancher","hershey","twizzlers","skittles"];
//create user answer array with empty string
//creating empty array 
var userAnswer = [];
//create for loop so computer will run through candyWords array when 
//user enters an answer 
for (var i = 0; i < candyWords.length; i++) {
	userAnswer[i]="_";
}
var leftoverLetters = candyWords.length;
//creating game loop below
if (leftoverLetters >  0 ) {
	alert ("");
} 
//run through proper bracket closings
var userGuess = prompt("It's your turn to guess a letter!");
if (userGuess === null) {

} else if (userGuess.length !== 1) {
	alert("enter a single letter");
} else {
	//game updates with correct answer
	//using j in for loop because already used i in previous for loop
	for (var j=0; j<candyWords.length; j ++ ) {

	if  (candyWords[j] === userGuess ) {
		answerArray[j] = userGuess; 
		//leftoverLetters  
}
		//add onclick function here?
		check = function () {
			list.onclick = function () {
				var userGuess = (this.innerHTML);
				this.setAttribute ("id","active");
				this.onclick= null;
				for (var i = 0; i <candyWords.length; i ++ ) {
					if (candyWords[i]===guess) {
						guesses[i].innerHTML=guess;
						counter += 1;
					}
				}
			}
		}

 }

}



var answerArray = [];
//alert answer for user
alert (answerArray.join(""));
alert("good job! The answer was" + candyWords);

//code taken from Stack Overflow to test if images appear
//UPDATE:Code does not work in console. There are no error 
//messages, but no images appear

// function show_image(src, width, height, alt) {
//   var img = document.createElement("../images/hersheys.jpg");
//   img.src = src;
//   img.width = width;
//   img.height = height;
//   img.alt = alt;

//   // This next line will just add it to the <body> tag
//   document.body.appendChild(img); 
// }

}

//create onclick function for user to use
//where to put in game code? 



// //add dialog function to make picture appear? 
// //found dialog function through stack overflow and W3schools
// //in any case, want to make picture of answer appear even if user guesses correctly or not

// $(function() {
// 	$("#dialog").dialog(); 
// });


//second attempt at coding hangman game 
// var userGuesses = 6; 

// var getItem = function () { 
//   var candyWords = ['starburst','nerds', 'jollyrancher', 'hershey', 'twizzlers', 'skittles'];

//   var maybeWord=candyWords[Math.floor(Math.random() * maybeWord.length)];

//   document.getElementById("wordGuess").innerHTML= maybeWord;


//    }

//    var emptySpaces = "";


//    //when run in browser, console log error: maybeWord is not defined
//    var wordLength= maybeWord.length;

//    for (var i =0; i <wordLength; i ++){
//    	var x =maybeWord.charAt(i);

//    	if (x === "" ) {
//    		emptySpaces = x;
//    	} else {
//    		emptySpaces = "_";
//    	}
//    }


// document.getElementById("emptySpaces").innerHTML=emptySpaces;

// ;

// document.onkeypress= function(keyPressed) {
// 	var keyPressed=keyPressed || charCode;
// }




// document.getElementById("lettersGuessed").innerHTML = lettersGuessed; 

// document.getElementById("guessesRemaining").innerHTML = guessesLeft;

// if (guessesLeft===1) {
// 	alert("You win! You get all the candy");
// } if (guessesLeft === -1) {
// 	alert("you lose!your sweet tooth got the best of you");
// }



// getItem();

// ;
