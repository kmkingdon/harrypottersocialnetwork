fetch("http://hp-api.herokuapp.com/api/characters")
  .then(response => response.json())
  .then(response => console.log(response))
