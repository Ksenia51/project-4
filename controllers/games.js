const { readData, writeData } = require("../utils/data");

const getAllGames = async (req, res) => {
    const games = await readData("./data/games.json");
    if(!games) {
        res.status(400);
        res.send ({
            status: "error",
            message: "Нет игр в базе данных",
        });
        return;
    }
    req.games = games;
    res.send(req.games);
};
const deleteGame = async (req, res) => {
    const games = await readData("./data/games.json");
    if(!games) {
        res.status(400);
        res.send ({
            status: "error",
            message: "Нет игр в базе данных",
        });
        return;
    }
    req.games = games;
   
    const gameId = Number(req.params.id);

    req.game = req.games.find((item) => item.id === gameId);
    const index = req.games.findIndex((item) => item.id === gameId);
    req.games.splice(index, 1);

    await writeData("./data/games.json", req.games);
    res.send ({
      games: req.games,
      updated: req.game,
    });
};
const addGame = async (req, res) => {};

module.exports = { getAllGames, deleteGame, addGame };