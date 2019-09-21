const express = require("express");
const moment = require("moment");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Mongoose
const {ATLAS_URI} = require('./key');
mongoose.connect(ATLAS_URI, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true})
const connection = mongoose.connection;
connection.once('open', () =>{
  console.log('MongoDB database connection established');
})


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
  res.send("Look at /api/blogposts or /api/blogposts/[the id you want to find] or /comments on any of them");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));

//  res.sendFile(path.join(__dirname), "public", "index.html");
