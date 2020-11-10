function gameOver() {
  let audioGameLost = new Audio("src/audio/lost.mp3");
  audioGameLost.play();
  document.getElementById("word-category").innerHTML = "";
  document.getElementById("guess-word").innerHTML = "";
  document.getElementById("lives").innerHTML = "";
  document.getElementById("alphabets").innerHTML = "";
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Sorry! You Lost";
  resultDiv.style.color = "red";
  document.getElementById("reset-game").style.visibility = "visible";
  let myCanvas = document.getElementById("hangman-canvas");
  document.getElementById("hangman-ui").style.flexDirection = "column";
  let ctx = myCanvas.getContext("2d");
  drawFace(ctx, 148, 152);
}

function renderWinnerMessage() {
  let audioGameWin = new Audio("src/audio/won.mp3");
  audioGameWin.play();
  document.getElementById("word-category").innerHTML = "";
  document.getElementById("guess-word").innerHTML = "";
  document.getElementById("lives").innerHTML = "";
  document.getElementById("alphabets").innerHTML = "";
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "You Win!";
  resultDiv.style.color = "yellow";
  document.getElementById("reset-game").style.visibility = "visible";
  let myCanvas = document.getElementById("hangman-canvas");
  document.getElementById("hangman-ui").style.flexDirection = "column";
  let ctx = myCanvas.getContext("2d");
  // ctx.clearRect(110,41,100,250);
  ctx.clearRect(14, 14, 270, 352);
  drawHeart(150, 120);
}

function renderAlphabets(handleAlphabetClick) {
  let alphabets = Array.apply(null, { length: 26 }).map((_, i) =>
    String.fromCharCode(i + 97)
  );
  let alphabetDiv = document.getElementById("alphabets");
  alphabetDiv.addEventListener("click", handleAlphabetClick);
  for (let i = 0; i < 26; i++) {
    let letter = document.createElement("div");
    letter.id = `letter${alphabets[i].toUpperCase()}`;
    letter.classList.add("letter");
    letter.innerHTML = alphabets[i].toUpperCase();
    alphabetDiv.appendChild(letter);
  }
}

function isValidInput() {
  if (document.getElementById("guess-input").value === "") {
    document.getElementById("guess-text-submit-button").disabled = true;
    document.getElementById("input-error").innerHTML =
      "Phrase input should not be empty";
  } else {
    document.getElementById("guess-text-submit-button").disabled = false;
    document.getElementById("input-error").innerHTML = "";
  }
}
function restartGame() {
  document.getElementById("reset-game").style.visibility = "hidden";
  document.getElementById("rules").style.display = "flex";
  document.getElementById("result").innerHTML = "";
  document.getElementById("play-mode-buttons").style.display = "flex";
  document.getElementById("canvas").innerHTML = "";
  document.getElementById("hangman-ui").style.flexDirection = "row";
  document.getElementById("guess-input").value = "";
  document.getElementById("category-hint").value = "";

  multiChoosenWord = "";
  multiLives = 0;
  multiGuessedWord = "";
  multiGuessedLength = 0;
  multiWordCategory = "";
  choosenWord = "";
  lives = 0;
  guessedWord = "";
  guessedLength = 0;
  wordCategory = "";
}

function renderInitialHangman() {
  let myCanvas = document.getElementById("hangman-canvas");
  let ctx = myCanvas.getContext("2d");

  ctx.lineWidth = 16;
  ctx.strokeStyle = "#caa472";
  roundedRect(ctx, 0, 0, 300, 400, 25);

  ctx.beginPath();
  ctx.lineWidth = 22;
  ctx.fill();
  ctx.moveTo(30, 30);
  ctx.lineTo(30, 380); //vertical rod
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 30;
  ctx.fill();
  ctx.moveTo(0, 380);
  ctx.lineTo(300, 380); //lower horizontal rod
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 22;
  ctx.fill();
  ctx.moveTo(19, 30);
  ctx.lineTo(250, 30); //upper horizontal rod.
  ctx.stroke();
}

function updateHangman(live) {
  let myCanvas = document.getElementById("hangman-canvas");
  let ctx = myCanvas.getContext("2d");
  if (live === 4) {
    drawMan(150, 214);
  }
  if (live === 3) {
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#fff";
    ctx.fill();
    ctx.moveTo(150, 41);
    ctx.lineTo(150, 91);
    ctx.stroke();
  }
  if (live === 2) {
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.ellipse(150, 118, 15, 25, 0, Math.PI * 2, false);
    ctx.stroke();
  }
  if (live === 1) {
    ctx.clearRect(115, 185, 100, 180);
    drawMan(150, 111.5);
  }
}

function drawMan(x, y) {
  //height 50+75+30
  let myCanvas = document.getElementById("hangman-canvas");
  let ctx = myCanvas.getContext("2d");
  ctx.beginPath();

  ctx.fillStyle = "#fff";

  ctx.arc(x, y, 25, 0, Math.PI * 2, true);
  // (x,y) center, radius, start angle, end angle, anticlockwise.
  ctx.fill();

  // eyes
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x - 10, y - 5, 3, 0, Math.PI * 2, true); // draw left eye
  ctx.fill();
  ctx.arc(x + 10, y - 5, 3, 0, Math.PI * 2, true); // draw right eye
  ctx.fill();

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "red";
  ctx.arc(x, y, 15, Math.PI + 10, 2 * Math.PI - 10, false); // draw semicircle for smiling
  ctx.stroke();

  // body
  ctx.lineWidth = 4.5;
  ctx.strokeStyle = "#fff";
  ctx.beginPath();
  ctx.moveTo(x, y + 25);
  ctx.lineTo(x, y + 100);
  ctx.stroke();

  // arms
  ctx.beginPath();
  ctx.moveTo(x, y + 60);
  ctx.lineTo(x - 30, y + 30);
  ctx.moveTo(x, y + 60);
  ctx.lineTo(x + 30, y + 30);
  ctx.stroke();

  // legs
  ctx.beginPath();
  ctx.moveTo(x, y + 100);
  ctx.lineTo(x - 30, y + 150);
  ctx.moveTo(x, y + 100);
  ctx.lineTo(x + 30, y + 150);
  ctx.stroke();
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

function drawHeart(x, y) {
  let myCanvas = document.getElementById("hangman-canvas");
  let ctx = myCanvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - 3, x - 5, y - 15, x - 25, y - 15);
  ctx.bezierCurveTo(y - 20, y - 15, y - 20, x - 12.5, y - 20, x - 12.5);
  ctx.bezierCurveTo(y - 20, x + 5, y, x + 27, x, x + 45);
  ctx.bezierCurveTo(x + 35, x + 27, x + 55, x + 5, x + 55, x - 12.5);
  ctx.bezierCurveTo(x + 55, x - 12.5, x + 55, y - 15, x + 25, y - 15);
  ctx.bezierCurveTo(x + 10, y - 15, x, y - 3, x, y);
  ctx.fill();
}
function drawFace(ctx, x, y) {
  ctx.beginPath();
  ctx.lineWidth = 5;

  ctx.strokeStyle = "#e25822";
  ctx.arc(x, y, 50, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();

  // eyes

  ctx.beginPath();
  ctx.fillStyle = "#e25822";
  ctx.arc(x - 25, y - 15, 3, 0, Math.PI * 2, true); // draw left eye
  ctx.fill();
  ctx.arc(x + 25, y - 15, 3, 0, Math.PI * 2, true); // draw right eye
  ctx.fill();

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#e25822";
  ctx.arc(x, y + 20, 15, 9.5, 0, false); // draw semicircle
  ctx.stroke();
}
