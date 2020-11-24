const canvas = document.getElementById("gamecanvas");
const canvasLeft = canvas.offsetLeft + canvas.clientLeft;
const canvasTop = canvas.offsetTop + canvas.clientTop;
const ctx = canvas.getContext("2d");

const cellSize = 100;
const emptyCell = {colour: "White", width: 100, height: 100, top:100, left:100, full: false};
const boardSize = 3;

var board = [];

canvas.addEventListener("click", function(event){
	var x = event.pageX - canvasLeft;
	var y = event.pageY - canvasTop;
	var cellX = Math.floor(x/100);
	var cellY = Math.floor(y/100);
	
	if (cellX < boardSize && cellY < boardSize && turnState == true){
			colour = "Red";
			drawCell(cellX*100, cellY*100, cellSize, cellSize, colour);
			board[cellY][cellX].full = true;
			turnState = !turnState;
			aiTurn();
	}	
});

for (r = 0; r < boardSize; r++){
	board[r] = [];
	
	for (c = 0; c < boardSize; c++){
		board[r][c] = emptyCell;
	}
}

function drawCell(x,y,width,height,colour){

		ctx.fillStyle = colour;
		ctx.fillRect(x,y,width,height);
		
		ctx.strokeStyle = "Black";
		ctx.strokeRect(x,y,width,height);
};
	
function drawBoard(){

	for (r = 0; r < boardSize; r++){
		for (c = 0; c < boardSize; c++){
			
			board[r].forEach(function(element) {
				drawCell(element.left*c, element.top*r, element.width, element.height, element.colour);

			});
		}
	}
}

drawBoard();
console.log(board);
var turnState = true;





