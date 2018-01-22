const submitName = document.getElementById('submit-name');
const submitHouse = document.getElementById('submit-house');
const submitStaff = document.getElementById('submit-staff');
const submitAll = document.getElementById('submit-allmembers');
const form = document.getElementById('form');
const nameSelect= document.getElementById('name');
const container = document.getElementById('inner-container');
let house;


function updateNames() {
  fetch("http://hp-api.herokuapp.com/api/characters")
    .then(response => response.json())
    .then(response => {
      response.forEach(item => {
        let select= document.createElement('option');
        select.value= item.name;
        select.innerHTML= item.name;
        nameSelect.appendChild(select);
      })
    });
}

updateNames();

submitName.addEventListener('submit', displayByName);

function displayByName(event) {
  event.preventDefault();
  window.location = '/profile' + '?' + event.target[0].value
}

submitHouse.addEventListener('submit', displayByHouse);

function displayByHouse(event) {
  event.preventDefault()
  house = event.target[0].value;
  form.style.display = "none";
  container.classList.remove('hidden');
  fetch("http://hp-api.herokuapp.com/api/characters")
    .then(response => response.json())
    .then(createMemberListByHouse);
}

function createMemberListByHouse(response) {
  let houseArray = [];
  for (var i = 0; i < response.length; i++) {
    if(response[i].house === house) {
      houseArray.push(response[i])
    }
  }
  houseArray.forEach(createListings)
}

submitStaff.addEventListener('submit', displayByStaff);

function displayByStaff(event) {
  event.preventDefault()
  form.style.display = "none";
  container.classList.remove('hidden');
  fetch("http://hp-api.herokuapp.com/api/characters")
    .then(response => response.json())
    .then(createMemberListByStaff);
}

function createMemberListByStaff(response) {
  let staffArray = [];
  for (var i = 0; i < response.length; i++) {
    if(response[i].hogwartsStaff === true) {
      staffArray.push(response[i])
    }
  }
  staffArray.forEach(createListings)
}

submitAll.addEventListener('submit', displayAllMembers);

function displayAllMembers(event) {
  event.preventDefault()
  form.style.display = "none";
  container.classList.remove('hidden');
  fetch("http://hp-api.herokuapp.com/api/characters")
    .then(response => response.json())
    .then(response => {
      response.forEach(createListings)
    });
}


function createListings(item) {
  let memberContainer= document.createElement('div');
  memberContainer.classList.add("member-container");
  let photo= document.createElement('img');
  photo.src = item.image;
  memberContainer.appendChild(photo)
  let name = document.createElement('h1');
  name.innerHTML= item.name;
  memberContainer.appendChild(name);
  let house = document.createElement('h2');
  house.innerHTML= item.house;
  memberContainer.appendChild(house);
  let link = document.createElement('a');
  link.href = "/profile" + "?" + item.name;
  let image = document.createElement('img');
  image.src = "./assets/viewprofile.png";
  image.id = "link";
  link.appendChild(image);
  memberContainer.appendChild(link);
  container.appendChild(memberContainer);
}
