const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

// configurando express para que sirva el directorio public
app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Its snowing",
    location: "Philadelphia"
  });
});

app.listen(5000, () => {
  console.log("SERVER LISTEN ON PORT 5000");
});
