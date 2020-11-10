let multiChoosenWord = "";
let multiLives = 0;
let multiGuessedWord = "";
let multiGuessedLength = 0;
let multiWordCategory = "";

function multiPlayer() {
  document.getElementById("rules").style.display = "none";
  document.getElementById("lives").innerHTML = "";
  document.getElementById("play-mode-buttons").style.display = "none";
  let multiPlayerUI = document.getElementById("multi-util");
  multiPlayerUI.style.display = "inline";
  document
    .getElementById("guess-text-submit-button")
    .addEventListener("click", handleGuessWordSubmitButton);
  document.getElementById("guess-text-submit-button");
}

function handleGuessWordSubmitButton() {
  if (document.getElementById("guess-input").value === "") {
    document.getElementById("input-error").innerHTML =
      "Phrase input should not be empty";
    return;
  }
  document.getElementById("multi-util").style.display = "none";

  multiChoosenWord = document.getElementById("guess-input").value;
  multiWordCategory = document.getElementById("category-hint").value;
  multiGuessedWord = `${multiChoosenWord.replace(/[^A-Za-z0-9]/g, "")}`;
  multiLives = Math.ceil(multiGuessedWord.length / 2);

  document.getElementById("alphabets").innerHTML = "";

  let livesHeader = document.createElement("div");
  livesHeader.id = "live-header";
  livesHeader.classList.add("info-header");
  livesHeader.innerHTML = "Lives: ";

  let liveData = document.createElement("div");
  liveData.id = "live-data";
  liveData.classList.add("info-data");
  multiLives = Math.max(Math.min(multiLives, 5), 5);
  liveData.innerHTML = `${multiLives}`;

  let livesDiv = document.getElementById("lives");
  livesDiv.appendChild(livesHeader);
  livesDiv.appendChild(liveData);

  let categoryHeading = document.createElement("div");
  categoryHeading.id = "category-header";
  categoryHeading.classList.add("info-header");
  categoryHeading.innerHTML = "Hint: ";

  let categoryData = document.createElement("div");
  categoryData.id = "category-data";
  categoryData.classList.add("info-data");
  categoryData.innerHTML = `${multiWordCategory}`;

  let wordCategoryDiv = document.getElementById("word-category");
  wordCategoryDiv.appendChild(categoryHeading);
  wordCategoryDiv.appendChild(categoryData);

  renderAlphabets(handleMutliAlphabetClick);
  renderMultiWord();
  let canvas = document.createElement("canvas");
  canvas.id = "hangman-canvas";
  canvas.width = "300";
  canvas.height = "400";
  document.getElementById("canvas").appendChild(canvas);
  renderInitialHangman();
}

function renderMultiWord() {
  let guessWord = document.getElementById("guess-word");
  guessWord.innerHTML = "";
  for (let i = 0; i < multiChoosenWord.length; i++) {
    let character = document.createElement("div");
    character.innerText = multiChoosenWord[i];
    character.id = `multiChhoosenWord${i}`;
    character.classList.add("character");
    if (!isLetter(multiChoosenWord[i])) {
      character.style.fontSize = "18px";
      character.style.borderBottom = "none";
    }
    guessWord.appendChild(character);
  }
  function isLetter(c) {
    return c.match(/[a-z]/i);
  }
}

function handleMutliAlphabetClick(event) {
  let letter = event.target.innerText;
  if (multiLives === 0 || multiGuessedLength === multiGuessedWord.length) {
    return;
  }
  document.getElementById(`letter${letter.toUpperCase()}`).style.visibility =
    "hidden";
  let found = false;
  for (let i = 0; i < multiChoosenWord.length; i++) {
    if (
      multiChoosenWord[i] === letter ||
      multiChoosenWord[i] === letter.toLowerCase()
    ) {
      document.getElementById(`multiChhoosenWord${i}`).style.fontSize = "18px";
      document.getElementById(
        `letter${letter.toUpperCase()}`
      ).style.visibility = "hidden";
      multiGuessedLength++;
      found = true;
    }
  }

  if (!found) {
    
    multiLives--;
    updateHangman(multiLives);
    document.getElementById("live-data").innerHTML = `${multiLives}`;
    if (multiLives === 0) {
      gameOver();
    }else{
      let audioWrongGuess = new Audio('src/audio/wrong-option.mp3');
      audioWrongGuess.play();
    }
  } else {
    
    if (multiGuessedLength === multiGuessedWord.length) {
      renderWinnerMessage();
    }else{
      let audioRightGuess = new Audio('src/audio/right-option.mp3');
      audioRightGuess.play();
    }
  }
}
