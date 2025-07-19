const computerOption = Math.floor(Math.random() * 3) + 1;

let humanChoice = prompt("Choose a number: 1, 2, or 3");
humanChoice = Number(humanChoice);

let numberOfGuessing = 1;

while (computerOption !== humanChoice) {
  console.log("Wrong guess, try again!");

  humanChoice = prompt("Try again: Choose a number 1 to 3");

  if (humanChoice === null) {
    console.log("You cancelled the game.");
    break;
  }

  humanChoice = Number(humanChoice);
  numberOfGuessing++;
}

if (computerOption === humanChoice) {
  console.log("You win!");
  console.log("You made " + numberOfGuessing + " tries.");
}
