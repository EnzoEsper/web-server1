const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Hello Express!</h1>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "dada",
      age: 69
    },
    {
      name: "life",
      age: 33
    }
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
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
