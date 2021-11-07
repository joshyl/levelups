const myVariable = "Mathematics";
const myArray = [1,2,3];
const myNumber = 42;
const myFloat = 42.0;

// console.log(myVariable.length);

// console.log(myVariable[0]);
// console.log(myVariable.charAt(0));
// console.log(myArray.lastIndexOf(2));
// console.log(myArray.slice(0,1));

// console.log("Thisisnew".split(" "));

// console.log(Math.trunc(4.78312));
// console.log(Math.round(4.6));

// console.log(Math.pow(4,5));

// console.log(Math.floor(Math.random() * 10) + 1);

// input: string (my name)
// output: string (random letter)
// generate a random number that is between 0 and the length of my name
// return the character at that index

// const randomLetter = function(name) {
//   const randomNumber = Math.floor(Math.random() * (name.length));
//   return name[randomNumber];
// }

// // const myName = 'Josh'
// randomLetter('Josh');
// alert('hello');

// let booger = confirm('yo');
// console.log(booger);

// let name = prompt('Please enter your name.');

let playGame = confirm("shall we play rock, paper, or scissors?");

if (playGame) {
  //play
  let playerChoice = prompt("Enter rock, paper, or scissors");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {
      let choicesArray = ['rock', 'paper', 'scissors'];
      let computerChoice = Math.floor(Math.random() * choicesArray.length);
      let computer = choicesArray[computerChoice];

      let result =
      playerOne === computer
        ? "Tie game!"
        : playerOne === 'rock' && computer === 'paper'
        ? `playerOne: ${playerOne} \ncomputer: ${computer} \nComputer wins!`
        : playerOne === 'paper' && computer === 'scissors'
        ? `playerOne: ${playerOne} \ncomputer: ${computer} \nComputer wins!`
        : playerOne === 'scissors' && computer === 'rock'
        ? `playerOne: ${playerOne} \ncomputer: ${computer} \nComputer wins!`
        : `playerOne: ${playerOne} \ncomputer: ${computer} \nPlayerOne wins!`
      alert(result);
      let playAgain = confirm("play again?");
      playAgain ? location.reload() : alert('Okay, thanks for playing!');
    }
  } else {
    alert("I guess you changed your mind!");
  }
} else {
  alert("Ok, maybe next time!");
}