const sendAllGames = async (req, res) => {
    res.send(req.games);
};
const sendUpdatedGame = async (req, res) => {
    res.send ({
      games: req.games,
      updated: req.updatedObject,
    });
};
const addGame = async (req, res) => {
   
    res.send({
        games: req.games, 
        updated: req.updatedObject,
    });
};

module.exports = { sendAllGames, sendUpdatedGame, addGame };