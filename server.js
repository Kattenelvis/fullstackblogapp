const express = require("express");
const moment = require("moment");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    } at ${moment().format()}`
  );
  next();
};

app.use("/api/blogposts", require("./routes/routes"));

app.use(logger);

app.get("/", (req, res) => {
  res.send("hi");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));

//  res.sendFile(path.join(__dirname), "public", "index.html");
