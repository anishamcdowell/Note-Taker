// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require('util');
const { uuid } = require('uuidv4');

const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile);

// Establish Express App
const app = express();
const PORT = 7500;

// Handle data parsing via Express
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

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
    //use fs to read db.json
    readFileSync('db/db.json', 'utf8').then(data => {
        res.json(JSON.parse(data));
    });
});

//POST /api/notes to receive a new note to save on request body and add to db.js file, then return new note to client
// TODO: each note needs a unique id when it's saved. check out npm packages that can do this for me
app.post("/api/notes", (req, res) => {
    //use fs to read data and store to notesArray
    readFileSync('db/db.json', 'utf8').then(data => {
       const notesArray = JSON.parse(data);
       const newNote = req.body;
       newNote.id = uuid();
       
       console.log(newNote);
       notesArray.push(newNote);
   
       //use fs to rewrite to db.json w/ updated notesArray
       writeFileSync('db/db.json', JSON.stringify(notesArray));

        res.json(newNote);
    });
});

app.delete("/api/notes/:id", (req, res) => {
    //use fs to read data and store to notesArray
    readFileSync('db/db.json', 'utf8').then(data => {
       const notesArray = JSON.parse(data);
      
       // how to remove the note with req.params.id === note.id
   
       //use fs to rewrite to db.json w/ updated notesArray
       writeFileSync('db/db.json', JSON.stringify(notesArray));

        res.json(newNote);
    });
});

// Listener
app.listen(PORT, () => {
    console.log(`Connected to server at port ${PORT}`);
})