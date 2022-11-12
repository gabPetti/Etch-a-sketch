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

var sliderX = document.getElementById("canvas-x");
var sliderY = document.getElementById("canvas-y");
var outputX = document.getElementById("x-value");
var outputY = document.getElementById("y-value");
outputX.innerHTML = sliderX.value;
outputY.innerHTML = sliderY.value

sliderX.oninput = function() {
    outputX.innerHTML = this.value;
}

sliderY.oninput = function() {
    outputY.innerHTML = this.value;
}