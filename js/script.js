let heartCounter = 5;

const sentences = [
  "I am a programmer",
  "I am a developer",
  "I am a web developer",
  "I am a web designer",
];

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function createKeyboard(alphabet) {
  const keyboard = document.getElementsByClassName("keyboard")[0];

  keyboard.classList.add("keyboard");
  for (let i = 0; i < alphabet.length; i++) {
    const button = document.createElement("button");
    button.classList.add("keyboard-btn");
    button.textContent = alphabet[i];
    keyboard.appendChild(button);
  }
  return keyboard;
}

function getRandomSentence(sentences) {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
}

function createSentence(sentence) {
  const paragraph = document.createElement("p");
  const spaceOnPassword = document.getElementsByClassName("password")[0];

  spaceOnPassword.appendChild(paragraph);
  paragraph.classList.add("sentence");
  for (let i = 0; i < sentence.length; i++) {
    const letter = document.createElement("span");
    letter.classList.add("letter");
    if (sentence[i] === " ") {
      letter.textContent = " ";
    } else {
      letter.textContent = "_";
    }

    paragraph.appendChild(letter);
  }
  return paragraph;
}

function checkLetter() {
  const keyboardBtn = document.getElementsByClassName("keyboard-btn");
  for (let i = 0; i < keyboardBtn.length; i++) {
    keyboardBtn[i].addEventListener("click", function () {
      const letter = keyboardBtn[i].textContent;
      const sentenceContainer = document.getElementsByClassName("sentence")[0];
      const letters = sentenceContainer.getElementsByClassName("letter");
      let mistake = true;
      for (let i = 0; i < letters.length; i++) {
        if (letter === sentence[i].toLowerCase()) {
          letters[i].textContent = sentence[i];
          mistake = false;
        }
      }
      console.log(mistake);
      if (mistake) {
        heartCounter = heartCounter - 1;
        console.log("liczba serc" + heartCounter);
      }
    });
  }
}

(function game() {
  const sentence = getRandomSentence(sentences);

  createKeyboard(alphabet);
  createSentence(sentence);
  checkLetter();
})();
