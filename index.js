const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

const cors = require("cors")
const morgan = require("morgan")
// Middleware
/*
 - Responsibilities of middleware
 - Handle common task
 - Request logs
 - Filter request 
 - Modify or reshape request
 - Validate request body
 - Authenticate or authorize request
 - Add additional details to request body
 - Response bad request
 - Pass request to next middleware or response handler
*/ 

// Global Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(require("./routes"))
app.use(cors())
app.use(morgan("dev"));



app.listen(port, () => {
    console.log(`Server rendering on ${port}`);
})