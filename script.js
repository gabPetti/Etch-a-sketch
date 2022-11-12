function canvasSize() {
    canvas = document.getElementById('canvas');
    canvas.innerHTML = "";
    canvasX = parseInt(document.querySelector("#canvas-x").value);
    canvasY = parseInt(document.querySelector("#canvas-y").value);

    num = canvasX * canvasY;

    for (let i = 0; i < num; i++) {
        canvas.innerHTML = canvas.innerHTML + "<div></div>";
    }

    canvasGridTemplateText = " 15px".repeat(canvasX);
    canvas.style.cssText = 'grid-template-columns:' + canvasGridTemplateText + ';';
}

canvasSize();