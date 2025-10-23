// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

//about page
router.get("/about", (req, res) => res.send (`
    <h1>This is about page</h1>
    <p>This is the Lab 4 work in the Dynamic Web Applications module</p>
    `));

//contact page
router.get("/contact", (req,res) => res.send(`
    <h1>Email</h1>
    <p>nbeke001@gold.ac.uk</p>`));       //Contacts page displaying email

//date and time page
router.get("/date", (req,res) => res.send(new Date().toString()));  //Displays current date and time in GMT

//welcome page that uses user url input
router.get("/welcome/:name", (req,res) => res.send(`
    <h1>Welcome ${req.params.name}</h1>`));

// Export the router object so index.js can access it
module.exports = router;