const canvas = document.getElementById("gamecanvas");
const canvasLeft = canvas.offsetLeft + canvas.clientLeft;
const canvasTop = canvas.offsetTop + canvas.clientTop;
const ctx = canvas.getContext("2d");
var boardSize = 3;

const cellSize = (document.getElementById("gamecanvas").width)/boardSize;
const emptyCell = {colour: "White", top:cellSize, left:cellSize, full: false};
const playerCell = {colour: "Red", top:cellSize, left:cellSize, full: true};
const aiCell = {colour: "Blue", top:cellSize, left:cellSize, full: true};


var board = [];

//Create board array full of empty cells
for (r = 0; r < boardSize; r++){
	board[r] = [];
	
	for (c = 0; c < boardSize; c++){
		//board[r][c] = emptyCell;
		board[r][c] = Object.assign({
			x:c, y:r
		}, emptyCell);
		
	}
}

//Click detection 
canvas.addEventListener("click", function(event){
	var x = event.pageX - canvasLeft;
	var y = event.pageY - canvasTop;
	var cellX = Math.floor(x/cellSize);
	var cellY = Math.floor(y/cellSize);
	//Checks if player has clicked within board confines.
	if (cellX < boardSize && cellY < boardSize && turnState == true && board[cellY][cellX].full == false){
			drawCell(cellX*cellSize, cellY*cellSize, "Red");
			board[cellY][cellX] = playerCell;
			//board[cellY][cellX].colour = "Red";
			turnState = !turnState;
			drawBoard();
			aiTurn();
	}	
});


//Fills Cell
function drawCell(x,y,colour){

		ctx.fillStyle = colour;
		ctx.fillRect(x,y,cellSize,cellSize);
		
		ctx.strokeStyle = "Black";
		ctx.strokeRect(x,y,cellSize,cellSize);
};
	
function drawBoard(){

	for (r = 0; r < boardSize; r++){
		for (c = 0; c < boardSize; c++){
			//These bits make sure each cell individually reports back to EventListener
			board[r].forEach(function(element) {
				drawCell(element.left*c, element.top*r, board[r][c].colour);

			});
		}
	}
}

drawBoard();
var turnState = true;





