/* Project setup: For the server
1 - new project folder
2 - open an integrated terminal
3 - run these commands:
    npm init -y
    npm i express nodemon
    (optional) -> go into package.json and add "type": "module" to enable import from 
*/
 
// [Please enable only ONE of these] 
import express from "express"; // if you are using type: module
// const express = require("express"); // if using common JS (Default)
import logger from "./middleware/logger.js";
import auth from "./middleware/auth.js";
 
const app = express();
const PORT = process.env.PORT || 8000;
 
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger) //Application wide - used everywhere

// routes
app.get("/", logger, (req, res) => { //Using it in route
    res.send("Welcome to our server");
});

app.get("/about", logger, (req, res) => {
    res.send("Welcome to our about page");
});

app.get("/login", (req, res) => {    
    res.send("We received your LOGIN request");
});

app.get("/", (req, res) => {
    res.send("We stole your information");
});

app.get("/fetchData", auth, (req, res) => {
    res.send("Welcome Gabriel, this is your data");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
    res.status(404).send("Page not found");
});