function canvasSize() {
    canvas = document.getElementById('canvas');
    canvasX = parseInt(document.querySelector("#canvas-x").value);
    canvasY = parseInt(document.querySelector("#canvas-y").value);

    num = canvasX * canvasY;

    for (let i = 0; i < num; i++) {
        canvas.innerHTML = canvas.innerHTML + "<div></div>";
    }
}

canvasSize();