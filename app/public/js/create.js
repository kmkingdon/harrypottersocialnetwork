const background = document.getElementById('background');
const create1 = document.getElementById('create1');
const looks = document.getElementById('looks');
const create2 = document.getElementById('create2');


let name;
let dateOfBirth;
let gender;
let species;
let ancestry;
let eyeColour;
let hairColour;
let image;


background.addEventListener('submit', saveBackground);

function saveBackground(e) {
  e.preventDefault();
  name = e.target[0].value;
  dateOfBirth= e.target[1].value;
  species= e.target[2].value;
  ancestry= e.target[3].value;
  create1.style.display = "none";
  create2.style.display = "flex";
}

looks.addEventListener('submit', saveLooks);

function saveLooks(e) {
  e.preventDefault();
  gender = e.target[0].value;
  eyeColour= e.target[1].value;
  hairColour= e.target[2].value;
  image= e.target[3].value;
  create2.style.display = "none";
  create3.style.display = "flex";
}
