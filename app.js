"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let displayMessage = document.querySelector(".message")

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent
      displayMessage.textContent =
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else
      (document.querySelector(".message").textContent = "💥 You Lose!"),
        (document.querySelector(".score").textContent = 0);
  }

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈 Too High!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else
  //       (document.querySelector(".message").textContent = "💥 You Lose!"),
  //         (document.querySelector(".score").textContent = 0);
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").innerHTML = "📉 Too Low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else
  //       (document.querySelector(".message").textContent = "💥 You Lose!"),
  //         (document.querySelector(".score").innerHTML = 0);
  //   }
});

// document.querySelector(".again").addEventListener("click", function () {
//   location.reload();
// });

// Another method to reset the  game

// Function to reset the game state

function resetGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // Reset UI elements

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}

// Add event listener for the "again" button to reset the game

document.querySelector(".again").addEventListener("click", resetGame);
