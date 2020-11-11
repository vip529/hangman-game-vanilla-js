let choosenWord = "";
let lives = 0;
let guessedWord = "";
let guessedLength = 0;
let wordCategory = "";


/**
 * function called when you choose single player mode.
 * 
 */

function singlePlayer() {
  
  document.getElementById("rules").style.display = "none";
  document.getElementById("play-mode-buttons").style.display = "none";
  document.getElementById("categories").style.display = "grid";
  addCategories();
}

/**
 * function to add click handler to guess categories available.
 * 
 */

function addCategories() {
  document
    .getElementById("categories")
    .addEventListener("click", handleCategoryClick);
}


/**
 * function called when you choose a guess category.
 * 
 */

function handleCategoryClick(event) {
  document.getElementById("categories").style.display = "none";

  let categoryHeading = document.createElement("div");
  categoryHeading.id = "category-header";
  categoryHeading.classList.add("info-header");

  let categoryData = document.createElement("div");
  categoryData.id = "ctegory-data";
  categoryData.classList.add("info-data");

  if (event.target.id === "movie") {
    let randomIndex = Math.floor(Math.random() * data.movies.length);
    choosenWord = data.movies[randomIndex];

    let str = choosenWord.replace(/[^A-Za-z0-9]/g, "");
    guessedWord = `${str}`;

    lives = Math.ceil(guessedWord.length / 2);

    categoryHeading.innerHTML = "Category : ";
    categoryData.innerHTML = "Movie";
  } else if (event.target.id === "tvShow") {
    let randomIndex = Math.floor(Math.random() * data.tvShows.length);
    choosenWord = data.tvShows[randomIndex];

    let str = choosenWord.replace(/[^A-Za-z]/g, "");
    guessedWord = `${str}`;

    lives = Math.ceil(guessedWord.length / 2);

    categoryHeading.innerHTML = "Category : ";
    categoryData.innerHTML = "TV Show";

  } else if (event.target.id === "famous-person") {
    let randomIndex = Math.floor(Math.random() * data.famousPeoples.length);
    choosenWord = data.famousPeoples[randomIndex];

    let str = choosenWord.replace(/[^A-Za-z]/g, "");
    guessedWord = `${str}`;

    lives = Math.ceil(guessedWord.length / 2);

    categoryHeading.innerHTML = "Category : ";
    categoryData.innerHTML = "Famous Person";

  } else if (event.target.id === "famous-sportsman") {
    let randomIndex = Math.floor(
      Math.random() * data.famousSportsPerson.length
    );
    choosenWord = data.famousSportsPerson[randomIndex].name;

    let str = choosenWord.replace(/[^A-Za-z]/g, "");
    guessedWord = `${str}`;

    lives = Math.ceil(guessedWord.length / 2);

    categoryHeading.innerHTML = "Category : ";
    categoryData.innerHTML = `SportsPerson (${data.famousSportsPerson[randomIndex].sport}, ${data.famousSportsPerson[randomIndex].country})`;

    // wordCategory = `Category : SportsPerson ${data.famousSportsPerson[randomIndex].sport} from ${data.famousSportsPerson[randomIndex].country}`;
  } else if (event.target.id === "dictionary-word") {
    let randomIndex = Math.floor(Math.random() * data.dictionaryWords.length);
    choosenWord = data.dictionaryWords[randomIndex].word;

    let str = choosenWord.replace(/[^A-Za-z]/g, "");
    guessedWord = `${str}`;

    lives = Math.ceil(guessedWord.length / 2);

    categoryHeading.innerHTML = "Category : ";
    categoryData.innerHTML = `Dictionary Word (${data.dictionaryWords[randomIndex].meaning})`;
  } else if (event.target.id === "challenge") {
    let randomNumber = Math.floor(Math.random() * 26);
    choosenWord = String.fromCharCode(randomNumber + 97);
    guessedWord = `${choosenWord}`;

    lives = 5;
    categoryHeading.innerHTML = "Category : ";
    categoryData.innerHTML = "Challenge (guess the letter)";
  }

  let livesHeader = document.createElement("div");
  livesHeader.id = "live-header";
  livesHeader.classList.add("info-header");
  livesHeader.innerHTML = "Lives: ";

  let liveData = document.createElement("div");
  liveData.id = "live-data";
  liveData.classList.add("info-data");
  lives = Math.max(Math.min(lives, 5), 5);
  liveData.innerHTML = `${lives}`;

  let livesDiv = document.getElementById("lives");
  livesDiv.appendChild(livesHeader);
  livesDiv.appendChild(liveData);

  let wordCategoryDiv = document.getElementById("word-category");
  wordCategoryDiv.appendChild(categoryHeading);
  wordCategoryDiv.appendChild(categoryData);
  renderAlphabets(handleAlphabetClick);
  renderWord();
  let canvas = document.createElement("canvas");
  canvas.id = "hangman-canvas";
  canvas.width = "300";
  canvas.height = "400";
  document.getElementById("canvas").appendChild(canvas);
  renderInitialHangman();
}


/**
 * function to render blank spaces on place of word to guess.
 * 
 */

function renderWord() {
  let guessWord = document.getElementById("guess-word");
  for (let i = 0; i < choosenWord.length; i++) {
    let character = document.createElement("div");
    character.innerText = choosenWord[i];
    character.id = `chhoosenWord${i}`;
    character.classList.add("character");
    if (!isLetter(choosenWord[i])) {
      character.style.fontSize = "18px";
      character.style.borderBottom = "none";
    }
    guessWord.appendChild(character);
  }
  function isLetter(c) {
    return c.match(/[a-z]/i);
  }
}


/**
 * function to handle an alphabet button click for guessing.
 * 
 */

function handleAlphabetClick(event) {
  let letter = event.target.innerText;
  if (lives === 0 || guessedLength === guessedWord.length) {
    return;
  }
  document.getElementById(`letter${letter.toUpperCase()}`).style.visibility =
    "hidden";
  let found = false;
  for (let i = 0; i < choosenWord.length; i++) {
    if (choosenWord[i] === letter || choosenWord[i] === letter.toLowerCase()) {
      document.getElementById(`chhoosenWord${i}`).style.fontSize = "18px";
      guessedLength++;
      found = true;
    }
  }

  if (!found) {
    
    lives--;
    updateHangman(lives);
    document.getElementById("live-data").innerHTML = `${lives}`;
    console.log(lives);
    if (lives === 0) {
      gameOver();
    }else{
      let audioWrongGuess = new Audio('src/audio/wrong-option.mp3');
      audioWrongGuess.play();
    }
  } else {
    
    if (guessedLength === guessedWord.length) {
      renderWinnerMessage();
    }else{
      let audioRightGuess = new Audio('src/audio/right-option.mp3');
      audioRightGuess.play();
    }
  }
}
