const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('Server has been start on http://localhost:3000');
});

app.get("/", (req, res)=>{
    res.send("Hello");
});