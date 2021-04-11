// Dependencies
const express = require("express");
const path = require("path");

// Establish Express App
const app = express();
const PORT = 7500;

//HTML Routes
app.get("/notes.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});
app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

//TODO: API Routes
//GET /api/notes to read db.json and return all saved notes as JSON
app.get("/api/notes", (req, res) => {
    
});

//POST /api/notes to receive a new note to save on request body and add to db.js file, then return new note to client
app.POST("/api/notes", (req, res) => {
    
});
//each note needs a unique id when it's saved. check out npm packages that can do this for me


// Listener
app.listen(PORT, () => {
    console.log(`Connected to server at port ${PORT}`);
})