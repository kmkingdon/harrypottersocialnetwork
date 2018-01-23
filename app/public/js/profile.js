const getAPI = "https://harrypotterdb.herokuapp.com/profiles";
const avatar= document.querySelector(".avatar");
const nameSection= document.querySelector(".name");
const details= document.querySelector(".details");
const info= document.querySelector(".info");
const wand= document.querySelector(".wand");
const house= document.getElementById('house');
const patronus= document.getElementById('patronus');
const comment= document.getElementById('comment');

let name;
let characterInfo = {};
let id;

function findProfileName() {
  let n= window.location.href.split("?")[1];
  name= n.replace("%20", " ");
}

findProfileName();


fetch(getAPI)
  .then(response => response.json())
  .then(findProfileData);

function findProfileData(response) {
  response.profiles.forEach(item => {
    if(item.name === name) {
      Object.assign(characterInfo, item);
    }
  })

  id= characterInfo.id;

  let nameText = document.createElement("h1");
  nameText.innerHTML = characterInfo.name;
  nameSection.appendChild(nameText);
  avatar.src = characterInfo.image;
  house.src= `../assets/houses/${characterInfo.house}.png`;

  let species= document.createElement("h2");
  species.innerHTML= "Species: "+ characterInfo.species;
  info.appendChild(species);
  let ancestry= document.createElement("h2")
  ancestry.innerHTML= "Ancestry: "+ characterInfo.ancestry;
  info.appendChild(ancestry);
  let bday= document.createElement("h2")
  bday.innerHTML= "Date of Birth: "+ characterInfo.dateOfBirth;
  info.appendChild(bday);
  let gender= document.createElement("h2")
  gender.innerHTML= "Gender: "+ characterInfo.gender;
  info.appendChild(gender);
  let eye= document.createElement("h2")
  eye.innerHTML= "Eye Colour: "+ characterInfo.eyeColour;
  info.appendChild(eye);
  let hair= document.createElement("h2")
  hair.innerHTML= "Hair Colour: "+ characterInfo.hairColour;
  info.appendChild(hair);

  let wood= document.createElement("h2");
  wood.innerHTML= "Wood: "+ characterInfo.wand.wood;
  wand.appendChild(wood);
  let core= document.createElement("h2");
  core.innerHTML= "Core: "+ characterInfo.wand.core;
  wand.appendChild(core);
  let length= document.createElement("h2");
  length.innerHTML= "Length: "+ characterInfo.wand.length.toString() + " inches";
  wand.appendChild(length);

  let patronusString= characterInfo.patronus.replace(/\s+/g,'').toLowerCase();
  if(patronusString === ""){
    patronus.src="../assets/patronus/unknown.png";
  } else{
    patronus.src="../assets/patronus/"+patronusString+".png";
  }

  switch (characterInfo.house) {
    case "Gryffindor":
        return details.style.backgroundColor = "red";
        break;
    case "Slytherin":
        return details.style.backgroundColor = "green";
        break;
    case "Hufflepuff":
        return details.style.backgroundColor = "yellow";
        break;
    case "Ravenclaw":
        return details.style.backgroundColor = "blue";
        break;
    default:
        break;
  }
}

comment.addEventListener('submit', addComment);


function addComment(event){
  event.preventDefault();
  let poster = event.target[0].value;
  let post= event.target[1].value;
  const comment= {};
  comment[poster] = post;
  sendComment(comment);
  event.target.reset();
}

function sendComment(comment){
  let putAPI = "https://harrypotterdb.herokuapp.com/profiles/" + id;

  fetch(putAPI, {
    method: "PUT",
    body: JSON.stringify(comment),
    headers: new Headers ({
      "Content-Type": "application/json"
    })
  }).then(response => response.json()
  .then(response => console.log(response))
  .catch(console.error)
)};
