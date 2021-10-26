//dom elemnts
let guessAndPassButton = document.getElementsByClassName("button");
let counter = document.getElementById("gameTimer");
let counter2 = document.getElementById("questionTimer");
let playerTurn = document.getElementById("player turn");
let jeoSquare = document.getElementsByClassName("jeoSquare");
let grid = document.getElementById("grid");
let playerMove = document.querySelectorAll(".jeoClick");
let passButton = document.getElementById("passButton");
let playerInput = document.getElementById("inputBox");
let guessButton = document.getElementById("guessButton");
let form = document.getElementById("form");
let player1Score = document.getElementById("score1");
let player2Score = document.getElementById("score2");

//js var
let idTimer = null;
let idTimer2 = null;
let activeSquare;
count = 300;
count2 = 5;

//paige loads.. buttons disable, round timer starts and player one is set

//on the click disable the guess and pass buttons
guessAndPassButton[0].disabled = true;
guessAndPassButton[1].disabled = true;
//calling to timer function to start timer
roundTimer();

//letting the players know it players one turn
playerTurn.textContent = "It's player 1 turn!!";

// array of jeopardy squares

let questionArray = [
  //5 100 jeopardy squares
  {
    question: "Card question",
    answer: "answer",
    cardValue: 100,
  },
  {
    question: "Card question",
    answer: "answer",
    cardValue: 100,
  },
  {
    question: "Card question",
    answer: "answer",
    cardValue: 100,
  },

  {
    question: "Card question",
    answer: "answer",
    cardValue: 100,
  },

  {
    question: "Card question",
    answer: "answer",
    cardValue: 100,
  },
  //5 200 jeopardy squares
  {
    question: "Card question",
    answer: "answer",
    cardValue: 200,
  },
  {
    question: "Card question",
    answer: "answer",
    cardValue: 100,
  },
  {
    question: "Card question",
    answer: "answer",
    cardValue: 200,
  },

  {
    question: "Card question",
    answer: "answer",
    cardValue: 200,
  },

  {
    question: "Card question",
    answer: "answer",
    cardValue: 200,
  },
  //5 300 jeopardy squares
  {
    question: "Card question",
    answer: "answer",
    cardValue: 300,
  },
  {
    question: "Card question",
    answer: "answer",
    cardValue: 300,
  },
  {
    question: "Card question",
    answer: "answer",
    cardValue: 300,
  },

  {
    question: "Card question",
    answer: "answer",
    cardValue: 300,
  },

  {
    question: "Card question",
    answer: "answer",
    cardValue: 300,
  },
  //5 400 jeopardy squares
  {
    question: "Card question",
    answer: "answer",
    cardValue: 400,
  },
  {
    question: "Card question",
    answer: "answer",
    cardValue: 400,
  },
  {
    question: "Card question",
    answer: "answer",
    cardValue: 400,
  },

  {
    question: "Card question",
    answer: "answer",
    cardValue: 400,
  },

  {
    question: "Card question",
    answer: "answer",
    cardValue: 400,
  },
  //5 500 jeopardy squares
  {
    question: "Card question",
    answer: "answer",
    cardValue: 500,
  },
  {
    question: "Card question",
    answer: "answer",
    cardValue: 500,
  },
  {
    question: "Card question",
    answer: "answer",
    cardValue: 500,
  },

  {
    question: "Card question",
    answer: "answer",
    cardValue: 500,
  },

  {
    question: "Card question",
    answer: "answer",
    cardValue: 500,
  },
];

//event listeners

//make the HTML collection into an array to itarait over
playerMove.forEach((square, index) => {
  square.id = index;
  square.addEventListener("click", (evt) => {
    if (activeSquare) {
      return;
    }
    activeSquare = evt.target.id;
    //setting the question
    evt.target.textContent = questionArray[evt.target.id].question;
    //setting question font size to fit in square
    square.style.fontSize = "15px";
    // enabling the buttons
    guessAndPassButton[0].disabled = false;
    guessAndPassButton[1].disabled = false;
    //starting round timer
    questionTimer();
  });
});

//add event functions that deals with the guess button.

guessButton.addEventListener("submit", (evt) => {
  evt.preventDefault();
  //setting current square to nothing to clear card down below
  let currentSquare = document.getElementById(activeSquare);

  // check players turn
  if (
    playerTurn.textContent === "It's player 1 turn!!" &&
    playerInput.value === questionArray[activeSquare].answer
  ) {
    //gives playerscore the score on the card
    player1Score.value = questionArray[activeSquare].cardValue;
    //clears card
    currentSquare.textContent = "";
    //disables card
    activeSquare = false;
  } else if (
    playerTurn.textContent === "It's player 2 turn!!" &&
    playerInput.value === questionArray[activeSquare].answer
  ) {
    //gives playerscore the score on the card
    player2Score.value = questionArray[activeSquare].cardValue;
    //clears card
    currentSquare.textContent = "";
    //disables card
    activeSquare = false;
  }
});

// if the pass button is press run addevent function
passButton.addEventListener("click", () => {
  //if it is players one turn switch to player 2
  if (playerTurn.textContent === "It's player 1 turn!!") {
    playerTurn.textContent = "It's player 2 turn!!";
  } else {
    //if it is player 2 turn switch to player 1
    playerTurn.textContent = "It's player 1 turn!!";
  }
  //stops timer and resets to 5 seconds
  clearInterval(idTimer2);
  count2 = 5;
  questionTimer();
});

//FUNCTiONS

//function to start 5 second question timer
function questionTimer() {
  idTimer2 = setInterval(tick, 1000);

  function tick() {
    let minutes = Math.floor(count2 / 60);
    let seconds = count2 % 60;
    if (seconds < 10) {
      counter2.textContent = `${minutes}:0${seconds}`;
    } else {
      counter2.textContent = `${minutes}:${seconds}`;
    }
    count2 = count2 - 1;
    if (count2 <= 0) {
      // once timer hits 0 it will let them know time is up
      count2 = "Your time is up for this question!!";
      counter2.textContent = count2;
      clearInterval(idTimer2);
    }
  }
}

// function sets a 5 min round timer when the paige loads
function roundTimer() {
  idTimer = setInterval(tick, 100);

  function tick() {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    if (seconds < 10) {
      counter.textContent = `${minutes}:0${seconds}`;
    } else {
      counter.textContent = `${minutes}:${seconds}`;
    }
    count = count - 1;
    if (count <= 0) {
      // once timer is up it will let them know the round is over
      count = "Round is over!!";
      counter.textContent = count;
      clearInterval(idTimer);
    }
  }
}
