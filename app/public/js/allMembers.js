const container = document.getElementById('inner-container');

fetch("http://hp-api.herokuapp.com/api/characters")
  .then(response => response.json())
  .then(createMemberList);

function createMemberList(response) {
  response.forEach(item => {
    let memberContainer= document.createElement('div');
    memberContainer.id = "member-container";
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
  })
}
