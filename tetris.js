const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

// Scale by 20% - Otherwise, tetris pieaces will be tiny
context.scale(20, 20);

// 'T' Pieace
const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
];

function createMatrix(w, h ) {
    
}

function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            // 0 here means nothing;a transparent spot
            if (value !== 0) {
                context.fillStyle = 'red';
                context.fillRect(x + offset.x,
                                y + offset.y, 1, 1);
            }
        })
    })
}

function playerDrop() {
    player.pos.y++;
    dropCounter = 0;
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();
    }
    draw();
    requestAnimationFrame(update);
}

const player = {
    pos: {x: 5, y:5},
    matrix: matrix,
}

// Key controls
document.addEventListener('keydown', event => {
    if (event.keyCode === 37) {
        player.pos.x--; // move to left
    } else if (event.keyCode === 39) {
        player.pos.x++; // move to right
    } else if (event.keyCode === 40) {
        playerDrop();
    }
    /* Switch method works as well!
    switch (event.keyCode) {
        // Move to left
        case 37:
            player.pos.x--;
            break;
        // Move to right
        case 39:
            player.pos.x++;
            break;
        // Move down
        case 40:
            player.pos.y++;
            dropCounter = 0;
                break;
        default:
            break;
    }
    */
});

update();