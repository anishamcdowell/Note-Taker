// Dependencies
const express = require("express");
const PORT = 7500;
const app = express();

//HTML Routes
// GET /notes to return notes.thml
//GET * return index.html

//API Routes
//GET /api/notes to read db.json and retun all saved notes as JSON
//POST /api/notes to receive a new note to save on request body and add to db.js file, then return new note to client
    //each note needs a unique id when it's saved. check out npm packages that can do this for me

// Listener
app.listen(PORT, () => {
    console.log(`Connected to server at port ${PORT}`);
})