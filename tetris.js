class Tetris {
    constructor(canvas) {
    
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    // Scale by 20% - Otherwise, tetris pieaces will be tiny
    this.context.scale(20, 20);

    this.arena = new Arena(12, 20);
    this.player = new Player(this);

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
        this.player.update(deltaTime);
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
                    this.context.fillStyle = this.colors[value];
                    this.context.fillRect(x + offset.x,
                                    y + offset.y, 1, 1);
                }
            });
        });
    }
    
    
    draw() {
        this.context.fillStyle = '#000';
        this.context.fillRect(0, 0, this.canvas.width, canvas.height);
        this.drawMatrix(this.arena.matrix, {x:0, y:0});
        this.drawMatrix(this.player.matrix, this.player.pos);
    }
}