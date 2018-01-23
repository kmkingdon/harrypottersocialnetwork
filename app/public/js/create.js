const background = document.getElementById('background');
const create1 = document.getElementById('create1');
const looks = document.getElementById('looks');
const create2 = document.getElementById('create2');


let name;
let dateOfBirth;
let gender;
let species;
let ancestry;


background.addEventListener('submit', saveBackground);

function saveBackground(e) {
  e.preventDefault();
  name = e.target[0].value;
  dateOfBirth= e.target[1].value;
  gender= e.target[2].value;
  species= e.target[3].value;
  ancestry= e.target[4].value;
  create1.style.display = "none";
  create2.style.display = "flex";
  console.log(name)
  console.log(gender)
}
