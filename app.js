const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const mainRouter = require("./routes/main");
const gamesRouter = require("./routes/games");

const app = express();

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server has been started on http://locallhost:3000`);
});

app.use(express.static(path.join(__dirname, "public")), 
mainRouter,
gamesRouter
);
