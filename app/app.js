const express = require("express");
const app = express();

// Middleware
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, 'public')));


// View Routes
app.get("/", (request, response) => {
    response.render("index");
});

app.get("/about", (request, response) => {
    response.render("about");
});

app.get("/allMembers", (request, response) => {
    response.render("allMembers");
});

app.get("/search", (request, response) => {
    response.render("search");
});

app.get("/profile", (request, response) => {
    response.render("profile");
});



// API Routes
// const queries = require("./data/queries");
// app.get("/api/dogs", (request, response) => {
//     queries.dogs.getAll(request.params.id).then(dogs => {
//         response.json({dogs});
//     });
// });
// app.get("/api/dogs/:id", (request, response) => {
//     queries.dogs.getOne(request.params.id).then(dog => {
//         response.json({dog});
//     });
// });
// app.post("/api/dogs", (request, response) => {
//     queries.dogs.add(request.body).then(dog => {
//         response.status(201).json({dog});
//     });
// });


app.listen(process.env.PORT ||3000);
