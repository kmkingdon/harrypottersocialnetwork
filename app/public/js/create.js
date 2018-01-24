const getAPI = "https://hpdb.herokuapp.com/profiles";
const background = document.getElementById('background');
const create1 = document.getElementById('create1');
const looks = document.getElementById('looks');
const create2 = document.getElementById('create2');
const housePick = document.getElementById('house');
const create3 = document.getElementById('create3');
const sort= document.getElementById('sort');
const houseDisplay = document.getElementById('house-display');
const create4 = document.getElementById('create4');
const wandBox = document.getElementById('wand-box');
const wandDisplay = document.getElementById('wand-display');
const wandPick = document.getElementById('wand');
const create5 = document.getElementById('create5');
const patronusClick = document.getElementById('patronus-click');
const patronusDisplay = document.getElementById('patronus-display');
const patronusPick = document.getElementById('patronus');
const create6 = document.getElementById('create6');
const profileDisplay = document.getElementById('profile-preview');
const preview = document.getElementById('preview');
const profileSave = document.getElementById('save');
const back1 = document.getElementById('back1');
const back2 = document.getElementById('back2');
const back3 = document.getElementById('back3');
const back4 = document.getElementById('back4');
const back5 = document.getElementById('back5');

let name;
let dateOfBirth;
let gender;
let species;
let ancestry;
let eyeColour;
let hairColour;
let image;
let house;
let wand;
let patronus;


back1.addEventListener('click', goBack1);

function goBack1(){
  create2.style.display = "none";
  create1.style.display = "flex";
}

back2.addEventListener('click', goBack2);

function goBack2(){
  create3.style.display = "none";
  create2.style.display = "flex";
}

back3.addEventListener('click', goBack3);

function goBack3(){
  create4.style.display = "none";
  create3.style.display = "flex";
}

back4.addEventListener('click', goBack4);

function goBack4(){
  create5.style.display = "none";
  create4.style.display = "flex";
}

back5.addEventListener('click', goBack5);

function goBack5(){
  create6.style.display = "none";
  create5.style.display = "flex";
}

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

sort.addEventListener('click', pickHouse);

function pickHouse() {
  let houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  let index = Math.floor(Math.random()*4);
  house= houses[index];
  let houseName = document.createElement('h3');
  houseName.innerHTML= house;
  houseDisplay.appendChild(houseName);
  sort.classList.add('hidden');
  houseDisplay.classList.remove('hidden');
  switch (house) {
    case "Gryffindor":
        houseName.style.color= "red";
        break;
    case "Slytherin":
        houseName.style.color= "green";
        break;
    case "Hufflepuff":
        houseName.style.color= "yellow";
        break;
    case "Ravenclaw":
        houseName.style.color= "blue";
        break;
    default:
        break;
  }
}

housePick.addEventListener('submit', saveHouse);

function saveHouse(e) {
  e.preventDefault();
  create3.style.display = "none";
  create4.style.display = "flex";
}

wandBox.addEventListener('click', pickWand);

function pickWand() {
  let woods= ["Oak", "Elder", "Poplar", "Pine", "Cherry", "Maple"];
  let cores= ["Unicorn hair", "Dragon Heart String", "Phoenix Feather", "Veela Hair", "Troll Whisker", "Horned Serpent Horn"];
  let length= [7, 8, 9, 10, 11, 12];
  let index1 = Math.floor(Math.random()*6);
  let index2 = Math.floor(Math.random()*6);
  let index3= Math.floor(Math.random()*6);
  wand={"wood":woods[index1], "core":cores[index2], "length":length[index3]};
  let wandWood = document.createElement('h3');
  wandWood.innerHTML= "Wood: "+ woods[index1];
  wandDisplay.appendChild(wandWood);
  let wandCore = document.createElement('h3');
  wandCore.innerHTML= "Core: "+ cores[index2];
  wandDisplay.appendChild(wandCore);
  let wandLength = document.createElement('h3');
  wandLength.innerHTML= "Length: "+ length[index3];
  wandDisplay.appendChild(wandLength);
  wandBox.classList.add('hidden');
  wandDisplay.classList.remove('hidden');
}

wandPick.addEventListener('submit', saveWand);

function saveWand(e) {
  e.preventDefault();
  create4.style.display = "none";
  create5.style.display = "flex";
}

patronusClick.addEventListener('click', pickPatronus);

function pickPatronus() {
  let patronusAnimals= ["bat", "bear", "beaver", "crow", "doe", "dolphin", "goose", "hare", "hawk", "hedgehog","horse", "leopard", "lynx", "mouse", "otter", "sheep", "stag", "swan", "weasel", "wolf"];
  let index = Math.floor(Math.random()* patronusAnimals.length);
  patronus= patronusAnimals[index];
  let patronusName = document.createElement('h3');
  patronusName.innerHTML= patronusAnimals[index];
  patronusDisplay.appendChild(patronusName);
  let patronusImage = document.createElement('img');
  patronusImage.src= "../assets/patronus/"+ patronus +".png";
  patronusImage.id = "patronus-image";
  patronusDisplay.appendChild(patronusImage);
  patronusClick.style.display= "none";
  patronusDisplay.style.display="flex";
}

patronusPick.addEventListener('submit', savePatronus);

function savePatronus(e) {
  e.preventDefault();
  create5.style.display = "none";
  create6.style.display = "flex";
}

preview.addEventListener('click', previewProfile);

function previewProfile() {
  let namePreview = document.createElement('p');
  namePreview.innerHTML= `Name: ${name}`;
  profileDisplay.appendChild(namePreview);
  let dobPreview = document.createElement('p');
  dobPreview.innerHTML = `Date of Birth: ${dateOfBirth}`;
  profileDisplay.appendChild(dobPreview);
  let genderPreview = document.createElement('p');
  genderPreview.innerHTML = `Gender: ${gender}`;
  profileDisplay.appendChild(genderPreview);
  let speciesPreview = document.createElement('p');
  speciesPreview.innerHTML = `Species: ${species}`;
  profileDisplay.appendChild(speciesPreview);
  let ancestryPreview = document.createElement('p');
  ancestryPreview.innerHTML = `Ancestry: ${ancestry}`;
  profileDisplay.appendChild(ancestryPreview);
  let eyePreview = document.createElement('p');
  eyePreview.innerHTML = `Eye Colour: ${eyeColour}`;
  profileDisplay.appendChild(eyePreview);
  let hairPreview = document.createElement('p');
  hairPreview.innerHTML = `Hair Colour: ${hairColour}`;
  profileDisplay.appendChild(hairPreview);
  let housePreview = document.createElement('p');
  housePreview.innerHTML = `House: ${house}`;
  profileDisplay.appendChild(housePreview);
  let wandPreview = document.createElement('p');
  wandPreview.innerHTML = `Wand: ${wand.wood}, ${wand.core}, ${wand.length}`;
  profileDisplay.appendChild(wandPreview);
  let patronusPreview = document.createElement('p');
  patronusPreview.innerHTML = `Patronus: ${patronus}`;
  profileDisplay.appendChild(patronusPreview);
}

profileSave.addEventListener('submit', saveProfile);

function saveProfile(e) {
  e.preventDefault();
  const profile = {
    "name": name,
    "species": species,
    "gender": gender,
    "house": house,
    "dateOfBirth": dateOfBirth,
    "ancestry": ancestry,
    "eyeColour": eyeColour,
    "hairColour": hairColour,
    "wand": wand,
    "patronus":  patronus,
    "hogwartsStaff":  false,
    "hogwartsStudent": true,
    "alive": true,
    "image": image
  }
  sendProfile(profile);
}

function sendProfile(profile){
  fetch(getAPI , {
    method: "POST",
    body: JSON.stringify(profile),
    headers: new Headers ({
      "Content-Type": "application/json"
    })
  }).then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response))
  .then(redirect);
};

function(redirect) {
  window.location= "https://hpsocialnetwork.herokuapp.com/search";
}
