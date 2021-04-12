// Dependencies
const express = require("express");
const path = require("path");

// Establish Express App
const app = express();
const PORT = 7500;

// Handle data parsing via Express
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//HTML Routes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});
app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

//TODO: API Routes
//GET /api/notes to read db.json and return all saved notes as JSON
app.get("/api/notes", (req, res) => {
    
});

//POST /api/notes to receive a new note to save on request body and add to db.js file, then return new note to client
// TODO: each note needs a unique id when it's saved. check out npm packages that can do this for me
app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    console.log(newNote);
    notesArray.push(newNote);
    res.json(newNote);
});

// Listener
app.listen(PORT, () => {
    console.log(`Connected to server at port ${PORT}`);
    console.log(__dirname);
})