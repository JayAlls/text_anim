const target = document.getElementById("target");
let array = ["développeur", "autodidacte", "passioné"];
letterIndex = 0;
wordIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2500);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else if (wordIndex < array[wordIndex].length) {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2500);
    }
  }, 70);
};
loop();
