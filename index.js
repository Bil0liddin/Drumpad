let drums = document.getElementsByClassName("drum");

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    addClickedEffect(i);
    addSoundEffect(i);
  });
}

function addClickedEffect(indeks) {
  drums[indeks].classList.add("pressed");
  setTimeout(function () {
    drums[indeks].classList.remove("pressed");
  }, 50);
}

function addSoundEffect(indeks) {
  switch (indeks) {
    case 0:
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case 1:
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case 2:
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case 3:
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case 4:
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case 5:
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case 6:
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
  }
}

document.addEventListener("keypress", function (hodisa) {
  let i,
    basilganHarf = hodisa.key;

  switch (basilganHarf) {
    case "w":
      i = 0;
      break;
    case "a":
      i = 1;
      break;
    case "s":
      i = 2;
      break;
    case "d":
      i = 3;
      break;
    case "j":
      i = 4;
      break;
    case "k":
      i = 5;
      break;
    case "l":
      i = 6;
  }

  addClickedEffect(i);
  addSoundEffect(i);
});