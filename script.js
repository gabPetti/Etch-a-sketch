var slider = document.getElementById("canvas-size");
var sliderOutput = document.getElementById("size-value");
sliderOutput.innerHTML = slider.value + ' x ' + slider.value;

slider.oninput = function() {
    sliderOutput.innerHTML = this.value + ' x ' + this.value;
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

function createCanvas() {
    var canvas = document.getElementById('canvas');
    canvas.innerHTML = "";

    var canvasSize = parseInt(document.querySelector("#canvas-size").value);
    canvas.style.cssText = 'grid-template-columns:' + ' auto'.repeat(canvasSize) + ';';

    var divNum = canvasSize * canvasSize;
    for (let i = 0; i < divNum; i++) {
        canvas.innerHTML = canvas.innerHTML + '<div onmouseover="coloring(this)"></div>';
    }
}

canvasSize();

/* Aside functions --------------------------------------------*/

function changePenColor() {
    pen = document.querySelector(".color").value;
}

function coloring(event) {
    if (document.querySelector("aside .rainbow").classList.contains("on")) {
        event.style.backgroundColor = rgbGenerator();
    } else {
        event.style.backgroundColor = document.querySelector(".color").value;
    }
}

function toggleGridlines() {
    var toggle = document.querySelector(".toggle-gridlines .toggle");
    var gridlines = document.getElementById("canvas");
    toggle.classList.toggle("on");
    gridlines.classList.toggle("on");
}

function toggleRainbow() {
    var toggle = document.querySelector(".toggle-rainbow .toggle");
    toggle.classList.toggle("on");
}

function rgbGenerator() {
    hexaArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    Math.random() * 16
    randomRGB = 'rgb(' + (Math.random() * 255).toString() + ',' + (Math.random() * 255).toString() + ',' + (Math.random() * 255).toString() + ')';
    return randomRGB
}

function clearCanvas() {
    var divs = document.querySelectorAll("#canvas div");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = 'white';
    }
}