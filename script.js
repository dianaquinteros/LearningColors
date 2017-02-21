var canvas, cuadro, tecla, colors, random, x;

function init() {
    
canvas = document.getElementById("canvas");
cuadro = canvas.getContext("2d");
tecla = document.getElementById("teclaPresionada");

colors = ["yellow", "green", "red", "blue", "orange", "purple", "brown"];
random= 0;
x = document.getElementById("mySound");

tecla.addEventListener("keypress", changeColors);

}

function changeColors(){
	
	x.play();
	random = Math.floor(Math.random() * (colors.length - 1));
	colorName.innerHTML = colors[random];
	cuadro.fillStyle = colors[random];
	cuadro.fillRect(0, 0,700, 300);
	
}

window.onload = init;
