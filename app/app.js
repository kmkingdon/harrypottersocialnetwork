const express = require("express");
const app = express();

// Middleware
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

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

app.get("/create", (request, response) => {
  response.render("create");
});



app.listen(process.env.PORT || 8080);
