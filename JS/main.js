/* Contains the main functions.
   File: main.js */

// This is the map.
var mapTiles = [["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]];

$(document).ready(function() {
	
	var canvas = document.getElementById("theCanvas");
	
	var theMap = new map(mapTiles, canvas);
	theMap.draw();
});