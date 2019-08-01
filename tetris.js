class Tetris {
    constructor() {
    
     
    this.colors = [
        null,
        '#FF0D72',
        '#0DC2FF',
        '#0DFF72',
        '#F538FF',
        '#FF8E0D',
        '#FFE138',
        '#3877FF',
    ];
   
    let lastTime = 0;

    const update = (time = 0) => {
        const deltaTime = time - lastTime;
        lastTime = time;
        player.update(deltaTime);
        this.draw();
        requestAnimationFrame(update);
    }
    update()
    }

    drawMatrix(matrix, offset) {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                // 0 here means nothing;a transparent spot
                if (value !== 0) {
                    context.fillStyle = this.colors[value];
                    context.fillRect(x + offset.x,
                                    y + offset.y, 1, 1);
                }
            });
        });
    }
    
    
    draw() {
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        this.drawMatrix(arena.matrix, {x:0, y:0});
        this.drawMatrix(player.matrix, player.pos);
    }
}