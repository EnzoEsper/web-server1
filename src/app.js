const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

// telling express which template engine we install (setting up handlebars)
app.set("view engine", "hbs");
// configurando express para que sirva el directorio public
app.use(express.static(publicDirectoryPath));

// render the handlebars index file and passing the objet as an argument for it acces on the file
app.get("", (req, res) => {
  res.render("index", {
    title: "Handlebars title",
    name: "dada"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Nyan"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nobis voluptate libero molestias consequatur perspiciatis numquam tempora, veniam dolor. Tempora, nisi sapiente? Eaque enim culpa ex reiciendis obcaecati odit porro?"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Its snowing",
    location: "Philadelphia"
  });
});

app.listen(5000, () => {
  console.log("SERVER LISTEN ON PORT 5000");
});
