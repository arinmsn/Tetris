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

function update() {
    draw();
    requestAnimationFrame(update);
}

const player = {
    pos: {x: 5, y:5},
    matrix: matrix,
}

update();