const mainRouter = require("express").Router();

const sendHtml = (req, res)=>{
    fs.readFile("./public/index.html", "utf-8").then((data)=>{
        res.header("Content-Type", "text/html");
        res.send(data);
    });
};

mainRouter.get("/", sendHtml);

module.exports = mainRouter;