const playerColour = "Red";
const aiColour = "Blue";

function aiTurn(){
	
	if (turnState == true){
		return;
	}
	
	var s1 = board[0][0];
	var s2 = board[0][1];
	var s3 = board[0][2];
	var s4 = board[1][0];
	var s5 = board[1][1];
	var s6 = board[1][2];
	var s7 = board[2][0];
	var s8 = board[2][1];
	var s9 = board[2][2];
	
	var winStates = [
		//Horizontal wins
		[s1, s2, s3],
		[s4, s5, s6],
		[s7, s8, s9],
		//Vertical wins
		[s1, s4, s7],
		[s2, s5, s8],
		[s3, s6, s9],
		//Diagonal wins
		[s1, s5, s9],
		[s3, s5, s7]
	];

	var forkStates = [
		//L's rotating around board
		[s1, s2, s3, s6, s9],
		[s3, s6, s9, s8, s7],
		[s9, s8, s7, s4, s1],
		[s7, s4, s1, s2, s3]
	];
	
	var oppositeCorners = [
		[s1, s9],
		[s3, s7],
		[s9, s1],
		[s7, s3]
	]
	
	var corners = [s1, s3, s7, s9];
	var edges = [s2, s4, s6, s8];

	function checkWin(col){
		for ( x = 0; x < winStates.length; x++){

			var colourCount = 0;
			var emptyCount = 0;
			var emptyLocation = undefined; 
			
			for ( y = 0; y < winStates[x].length; y++){
				if (winStates[x][y].colour == col){
					colourCount++;
				}
				if (winStates[x][y].colour == emptyCell.colour){
					emptyCount++;
					emptyLocation = winStates[x][y];
					//console.log(emptyLocation);
					if (emptyCount > 1){
						break;
					}
				}
				if (colourCount == 2 && typeof emptyLocation != "undefined"){
					console.log(emptyLocation);
					makeMove(emptyLocation.x, emptyLocation.y);
					return;
				}	
			}
		}
	}
	
	function checkFork(col){
		
		for (x = 0; x < forkStates.length; x++){
			
			var colourCount = 0;
			var emptyCount = 0;
			
			for (y = 0; y < forkStates[x].length; y++){
				if (forkStates[x][y].colour == col && (y == 1 || y == 5)){
					colourCount++;
				}
				if (forkStates[x][y].colour == emptyCell.colour && (y != 1 || y != 5)){
					emptyCount++;
					if (emptyCount > 3){
						break;
					}
				}
				if (colourCount == 2 && emptyCount == 3){
					makeMove(forkStates[x][2].x, forkStates[x][2].y);
					return;
				}
			}
		}
	}
	
	function takeCenter(){
		if (s5.colour == emptyCell.colour){
			makeMove(1,1);
			return;
		}
	}
	
	function takeOppositeCorner(){
		
		for (x = 0; x < oppositeCorners.length; x++){
			if (oppositeCorners[x][0].colour == playerColour && oppositeCorners[x][1].colour == emptyCell.colour){
				makeMove(oppositeCorners[x][1].x, oppositeCorners[x][1].y);
				return;
			}
		}
	}
	
	function takeEmptyCorner(){
		for (x = 0; x < corners.length; x++){
			if (corners[x].colour == emptyCell.colour){
				makeMove(corners[x].x, corners[x].y);
				return;
			}
		}
	}
	
	function takeEmptySide(){
		for (x = 0; x < edges.length; x++){
			if (edges[x].colour == emptyCell.colour){
				makeMove(edges[x].x, edges[x].y);
				return;
			}
		}
	}
		
		

	checkWin(aiColour);
		if (turnState == true){
			return;
		}
	checkWin(playerColour);
		if (turnState == true){
			return;
		}
	checkFork(aiColour);
		if (turnState == true){
			return;
		}
	checkFork(playerColour);
		if (turnState == true){
			return;
		}
	takeCenter(aiColour);
		if (turnState == true){
			return;
		}
	takeOppositeCorner();
		if (turnState == true){
			return;
		}
	takeEmptyCorner();
		if (turnState == true){
			return;
		}
	takeEmptySide();
	turnState = true;

	function makeMove(x,y){
		
		drawCell(x*cellSize, y*cellSize, aiColour);
		board[y][x] = aiCell;

		turnState = true;
		drawBoard();
	}

}

