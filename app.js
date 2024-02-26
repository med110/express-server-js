const express = require("express");
const app = express();

const port = 5000;
const dateverifier = (req, res, next) => {
  var date = new Date();
  var day = date.getDay();
  var houres = date.getHours();
  if (day > 0 && day < 6 && houres < 17 && houres > 9) {
    next();
  } else {
    res.send("this website is accessible during work times only");
  }
};
app.use(dateverifier);
app.use(express.static("public"));

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running ${port}`);
});
