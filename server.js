const express = require("express");
const ejs = require("ejs");

const server = express();
const port = 3030;

// On récupère le routeur "note"
const note_router = require("./routes/note");

// Moteur de vue
server.set("view engine", "ejs");
// (optionnel si par défaut) :
// server.set("views", __dirname + "/views");


// Fichiers statiques (CSS, images, etc.)
// --> ton dossier "static" doit contenir style.css
server.use(express.static("static"));

// Route de la page d'accueil -> index.ejs
server.get("/", function (request, response) {
    response.render("index", {});
});

// Route /note -> gérée par routes/note.js
server.use("/note", note_router);

// Lancement du serveur
server.listen(port, function () {
    console.log("serveur started! http://localhost:" + port);
});
