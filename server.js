const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

app.get("/", (req, res) => {
  res.send("hi");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));

//  res.sendFile(path.join(__dirname), "public", "index.html");
