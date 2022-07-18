const fs = require("fs");

exports.rootController = (req, res) => {
  res.send("hello, world!");
}

exports.aboutController = (req, res) => {
  fs.readFile("./pages/about.html", (err, data) => {
    if (err) {
      console.log(err); // Pass errors to Express.
      res.send(`<h1>Something went wrong!</h1>`);
    } else {
      res.end(data);
    }
  });
};

exports.userController = (req, res) => {
  fs.readFile("./pages/user.html", (err, data) => {
    if (err) {
      console.log(err); // Pass errors to Express.
      res.send(`<h1>Something went wrong!</h1>`);
    } else {
      res.end(data);
    }
  });
};