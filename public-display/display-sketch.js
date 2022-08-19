let canvas;
let time = 0;
let counter = 10;
let players = [];

console.log('Server DNS: ',getDNS);
const DNS = getDNS;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw() {
    background(255, 50);
    fill(0);
    ellipse(pmouseX, pmouseY, 50, 50);
    textSize(40);
    for (let i = 0; i < players.length; i++) {
        text(players[i].name, 100, 150 + (i * 60));
        text(players[i].move, 300, 150 + (i * 60));
    }


    time++;
    if (time % 60 == 0) {
        counter--;
    }
    textSize(20);
    text('Rock, paper, scissors: ' + counter, 10, 50);
    if (time > (60 * 10)) {
        console.log('update');
        time = 0;
        counter = 10;
        updateMoves();

    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
    console.log('event');
}


//---------------------------------------- async fetch functions
async function updateMoves() {
    // Update all players' moves
    // You may want to use `${DNS}/moves` as the endpoint
}