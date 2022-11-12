function canvasSize(x, y) {
    canvas = document.getElementById('canvas');
    
    num = x * y;

    for (let i = 0; i < num; i++) {
        canvas.innerHTML = canvas.innerHTML + "<div></div>";
    }
}

canvasSize(16, 16);