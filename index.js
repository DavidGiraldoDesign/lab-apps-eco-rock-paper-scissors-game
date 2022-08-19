const express = require('express');
const os = require('os')
const cors = require('cors');
const serverApp = express();
const PORT = 5050;
const IPaddress = os.networkInterfaces().en0[1].address;

//---------------------------- Setting EJS
serverApp.set('view engine', 'ejs');

//---------------------------- "use" external midleware
serverApp.use(express.json());
serverApp.use(cors({
    origin: '*'
}));

//---------------------------- Server listening
serverApp.listen(PORT, (error) => {
    console.log(`http://${IPaddress}:${PORT}`);
});

//---------------------------- First serve Static resources
serverApp.use('/player', express.static('public-player'));
serverApp.use('/display', express.static('public-display'));

//---------------------------- Dinamic files
serverApp.get('/player', (request, response) => {
    response.render('player', { DNS: `http://${IPaddress}:${PORT}` });
});


serverApp.get('/display', (request, response) => {
    response.render('display', { DNS: `http://${IPaddress}:${PORT}` });
});


//---------------------------- Data base
let players = []; 
// player structure =  {name: ‘’, move: ‘’}

//---------------------------- API Endpoints


serverApp.get('/moves', (request, response) => {
    // send players
});

serverApp.post('/player', (request, response) => {

    // Add a player to your Server database
});

serverApp.put('/make-a-move', (request, response) => {

    upDatePlayerMove(request.body);
    // Validate the player exists, then upate player's move

});

//---------------------------------------------- Midlewares

const doesPlayerExists = newPlayer => {
    return players.some(player => player.name == newPlayer.name);
};

const addPlayer = newPlayer => {
    // Validate player exists and add only new players
};

const findPlayer = wantedPlayer => {
    return players.find(player => player.name == wantedPlayer.name);
};

const upDatePlayerMove = targetPlayer => {
    // Validate player exists and update move
}