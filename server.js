// Dependencies
const express = require("express");
const path = require("path");

// Establish Express App
const app = express();
const PORT = 7500;

// Note data
const notes = [];

//TODO: HTML Routes
app.get("/notes.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

//TODO: API Routes
//GET /api/notes to read db.json and retun all saved notes as JSON
//POST /api/notes to receive a new note to save on request body and add to db.js file, then return new note to client
    //each note needs a unique id when it's saved. check out npm packages that can do this for me


//Render notes.html


// Listener
app.listen(PORT, () => {
    console.log(`Connected to server at port ${PORT}`);
})