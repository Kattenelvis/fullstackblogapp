const express = require("express");
const path = require("path");
const moment = require("moment");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    } at ${moment().format()}`
  );
  next();
};

app.use("/api/blogposts", require("./routes"));

app.use(logger);

app.get("/", (req, res) => {
  res.send("hi");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));

//  res.sendFile(path.join(__dirname), "public", "index.html");
