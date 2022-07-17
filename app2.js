const express = require("express");
const port = process.env.PORT || 5000;
const fs = require("fs")
const app = express();

app.get("/", (req, res) =>{
  fs.readFile("./pages/home.html", (err, data) => {
    if (err) {
      console.log(err);// Pass errors to Express.
      res.send(`<h1>Something went wrong!</h1>`);
    } else {
      res.write(data)
      res.end();
    }
  });
})

app.get("/about", (req, res) =>{
  fs.readFile("./pages/about.html", (err, data) => {
    if (err) {
      console.log(err);// Pass errors to Express.
      res.send(`<h1>Something went wrong!</h1>`);
    } else {
      res.end(data);
    }
  });
})

app.get("/user", (req, res) =>{
  fs.readFile("./pages/user.html", (err, data) => {
    if (err) {
      console.log(err);// Pass errors to Express.
    //   res.send(`<h1>Something went wrong!</h1>`);
    } else {
      res.write(data)
    //   res.end(data);
    }
  });
})

app.listen(port, () => {
    console.log("Welcome to server site");
})