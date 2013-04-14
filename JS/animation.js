/* HTML5 Canvas FRAMEWORK written by Maarten F.
File: gameLoop.js */

var FPS = 1;
var startX;
var startY;
var vx;
var vy;
var ax;
var ay;
var color;
var delayTime = 0;

function GameSprite(newCanvas, newStartX, newStartY, newVx, newVy, newAx, newAy, newColor) {

	this.canvas = document.getElementById(newCanvas);

	startX = newStartX;
	startY = newStartY;
	vx = newVx;
	vy = newVy;
	ax = newAx;
	ay = newAy;
	color = newColor;
	
	this.startLoop = startLoop;
	function startLoop() {
	
		setInterval(this.gameLoop, delayTime);
	};
	
	this.gameLoop = gameLoop;
	function gameLoop() {
		
		var beforeTime = performance.now();
		
		clear();
		update();
		draw(startX, startY);
		
		var afterTime = performance.now();
		delayTime = afterTime - beforeTime;
		alert(delayTime);
		
		FPS = delayTime * 1000;
	};
	
	this.clear = clear;
	function clear() {
	
		var context = this.canvas.getContext("2d");
		
		context.fillStyle = "#FFF";
		context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	};
	
	this.update = update;
	function update() {
		
		startX += vx / FPS;
		startY += vy / FPS;
		vx += ax / FPS;
		vy += ay / FPS;
	};
	
	this.draw = draw;
	function draw(x, y) {
	
		var context = this.canvas.getContext("2d");
		
		context.fillStyle = color;
		context.fillRect(x, y, 40, 40);
	};
}

var getFPS = function() { return FPS; };
var getX = function() { return startX; };
var getY = function() { return startY; };
var getVx = function() { return vx; };
var getVy = function() { return vy; };
var getAx = function() { return ax; };
var getAy = function() { return ay; };
var getColor = function() { return color; };