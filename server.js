const express = require("express")
const ejs = require("ejs")

const server = express()
const port = 3030

const note_router = require("./routes/note")

server.set("view engine", "ejs")

server.use(express.static("static"))

server.get("/", function (request, response) {
    response.render("index",{})
})
server.use("/note", note_router)

server.listen(port,function () {
    console.log("serveur started!")
})

const express = require('express');
const path = require('path');

// ⚠️ Cette ligne manquait ou est placée trop bas !
const app = express();

const PORT = 3000;

// Configuration du moteur de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Fichiers statiques (CSS/JS)
app.use(express.static(path.join(__dirname, 'public')));

// ROUTE ACCUEIL
app.get('/', (req, res) => {
    res.render('index');
});

// ROUTE PAGE 2 /note
app.get('/note', (req, res) => {
    res.render('note');
});

// LANCEMENT DU SERVEUR
app.listen(PORT, () => {
    console.log(`Serveur Notebook lancé sur http://localhost:${PORT}`);
});
