var slider = document.getElementById("canvas-size");
var sliderOutput = document.getElementById("size-value");
sliderOutput.innerHTML = slider.value + ' x ' + slider.value;

slider.oninput = function() {
    sliderOutput.innerHTML = this.value + ' x ' + this.value;
}

function canvasSize() {
    var canvas = document.getElementById('canvas');
    canvas.innerHTML = "";

    var canvasSize = parseInt(document.querySelector("#canvas-size").value);
    var num = canvasSize * canvasSize;
    for (let i = 0; i < num; i++) {
        canvas.innerHTML = canvas.innerHTML + '<div onmouseover="coloring(this)"></div>';
    }

    canvas.style.cssText = 'width: ' + (canvasSize * 15).toString() + 'px;';
}

canvasSize();

function coloring(event) {
    event.style.backgroundColor = document.querySelector(".color").value;
}

function changePenColor() {
    pen = document.querySelector(".color").value;
}

function toggleGridlines() {
    var toggle = document.querySelector(".toggle");
    var gridlines = document.getElementById("canvas");
    toggle.classList.toggle("on");
    gridlines.classList.toggle("on");
}

function toggleAside() {
    var aside = document.querySelector("aside");
    var navbar = document.querySelector("nav")
    var main = document.querySelector("main");
    var closeAside = document.getElementById("close-aside");

    aside.classList.toggle("on");
    closeAside.classList.toggle("on");
    main.classList.toggle("on");
    navbar.classList.toggle("on");
}
