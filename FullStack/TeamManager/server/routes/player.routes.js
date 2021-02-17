const PlayerController = require('../controllers/player.controller');

module.exports = function(app){
    app.get('/api', PlayerController.index);
    app.get('/api/allplayers', PlayerController.getAllPlayers);
    app.post('/api/addplayer', PlayerController.createPlayer);
    app.get('/api/player/:id', PlayerController.getPlayerById);
    app.put('/api/player/:id', PlayerController.updatePlayer);
    app.delete('/api/player/:id', PlayerController.deletePlayer);
}
