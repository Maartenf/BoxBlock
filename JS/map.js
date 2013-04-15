/* Functions for initializing tiles
   File: map.js */

// Get the tiles image
var tiles = new Image();
tiles.src = ".../images/tiles.jpg";

// Global vars for drawing single tile (the exact location in the canvas)
var latestX = -60;
var latestY = -60;

var howManyTilesInALine = 0;
var newLine = false;
   
// Initialize and draw the tiles into the canvas.
function map(mapTiles, context) {
	
	for (var i = 0; i < canvas.width / 20; i++) {
		
		for (var y = 0; y < canvas.height / 20; y++) {
			
			/* Tiles?  	- Exit
						- Floor
						- Computer
						- Box rack
						- Box
						- Wall
						-> Can be found in the images directory.
			*/
				
			switch(mapTiles[i][y])	{
					
				// Exit -- e
				case "e":
						
					drawTile(0, 0, 60, 60);
				break;
					
				// Floor -- f
				case "f":
					
					drawTile(60, 0, 120, 60);
				break;
					
				// Computer -- c
				case "c":
					
					drawTile(120, 0, 180, 60);
				break;
					
				// Box rack -- br
				case "br":
					
					drawTile(0, 60, 60, 120);
				break;
					
				// Box -- b
				case "b":
					
					drawTile(60, 60, 120, 120);
				break;
					
				// Wall -- w
				case "w":
					
					drawTile(120, 60, 180, 120);
				break;
			}
		}
	}
}

this.drawTile = drawTile;

// Class used for draw a signle tile.
function drawTile(cutX, cutY, cutXX, cutYY) {

	howManyTilesInALine++;
	latestX += 60;
	
	if (newLine) {
		latestY += 60;
		
		// Restore line
		newLine = false;
		
	// Checks if a new line is needed or not.
	} else if (howManyTilesInALine === canvas.width / 60) {
		newLine = true;
	}

	context.drawImage(tiles, cutX, cutY, cutXX, cutYY, latestX, latestY);
}