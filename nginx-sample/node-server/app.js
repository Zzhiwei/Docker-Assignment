const path = require("path");
const express = require("express");

const app = express();
const port = 3000;

// const publicDirectoryPath = path.join(__dirname, "../public");
// app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
