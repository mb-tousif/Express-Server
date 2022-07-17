const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// routes
app.get("/", (req, res) => {
    res.send(`
    <h1>This is Root Page</h1>
    <h3>Welcome to server site</h3>
    `)
})

app.get("/about", (req, res) => {
    res.send(`
    <h1>This is About Page</h1>
    <h3>Welcome to My page.</h3>
    `)
})

app.get("/user", (req, res) => {
    res.send(`
    <h1>This is User Page</h1>
    <h3>Welcome to user detail page</h3>
    `)
})

app.listen(port, () => {
    console.log(`Server port ${port}`);
})