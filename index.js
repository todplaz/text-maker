const target = document.getElementById("target");

let array = ["la_vie", "l'amour", "mon_prochain", "la_musique", "l'évasion", "la_paix"];
let wordIndex = 0;
let letterIndex = 0;


const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  },2500)
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    }
    else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      },2500);
    }
  },60);
};
loop();
