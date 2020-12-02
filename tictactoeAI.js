const ownColour = "Blue";
const enemyColour = "Red";
//function drawCell(x,y,width,height,colour
function aiTurn(){
	if (turnState == true){
		return;
	}

	const moveList = [
		
		[function canWin(r,c) {
			for (x = -1; x < 1; x++){
				for(y = -1; y < 1 ; y++){
					//check center wins
					if (board[1][1].colour == ownColour && board[y+1][x+1].colour == ownColour && board[1-y][1-x].colour == emptyCell.colour){
						makeMove(1-x, 1-y);
						return;
					}
				}
			}
			//Check edges
			if (board[0][0].colour == ownColour && board[0][2].colour == ownColour && board[0][1].colour == emptyCell.colour){
				makeMove(1,0);
				return;
			}
			if (board[0][0].colour == ownColour && board[2][0].colour == ownColour && board[1][0].colour == emptyCell.colour){
				makeMove(0,1);
				return;
			}	
			if (board[2][2].colour == ownColour && board[0][2].colour == ownColour && board[0][1].colour == emptyCell.colour){
				makeMove(1,0);
				return;
			}
			if (board[2][2].colour == ownColour && board[2][0].colour == ownColour && board[1][0].colour == emptyCell.colour){
				makeMove(0,1);
				return;
			}	
		}],
		
		[function blockEnemyWin(r,c) {
			for (x = -1; x < 1; x++){
				for(y = -1; y < 1 ; y++){
					//check center wins
					if (board[1][1].colour == enemyColour && board[y+1][x+1].colour == enemyColour && board[1-y][1-x].colour == emptyCell.colour){
						makeMove(1-x, 1-y);
						return;
					}
				}
			}
			//Check edges
			if (board[0][0].colour == enemyColour && board[0][2].colour == enemyColour && board[0][1].colour == emptyCell.colour){
				makeMove(1,0);
				return;
			}
			if (board[0][0].colour == enemyColour && board[2][0].colour == enemyColour && board[1][0].colour == emptyCell.colour){
				makeMove(0,1);
				return;
			}	
			if (board[2][2].colour == enemyColour && board[0][2].colour == enemyColour && board[0][1].colour == emptyCell.colour){
				makeMove(1,0);
				return;
			}
			if (board[2][2].colour == enemyColour && board[2][0].colour == enemyColour && board[1][0].colour == emptyCell.colour){
				makeMove(0,1);
				return;
			}
		}],
		
		[function makeFork(r,c) {
			// X fork
			if (board[0][0].colour == ownColour && board[0][2].colour == ownColour && board[1][1].colour == emptyCell.colour ){
				if (board[2][0].colour == emptyCell.colour && board[2][2].colour == emptyCell.colour){
					makeMove(1,1);
					return;
				}
				if (board[2][0].colour == emptyCell.colour && board[1][0].colour == emptyCell.colour){
					makeMove(0,2);
					return;
				}
				if (board[2][2].colour == emptyCell.colour && board[1][2].colour == emptyCell.colour){
					makeMove(2,2);
					return;
				}
			}
		}







			if (board[0][0].colour == enemyColour && board[2][0].colour == enemyColour && board[1][0].colour == emptyCell.colour){
				makeMove(0,1);
				return;
			}	
			if (board[2][2].colour == enemyColour && board[0][2].colour == enemyColour && board[0][1].colour == emptyCell.colour){
				makeMove(1,0);
				return;
			}
			if (board[2][2].colour == enemyColour && board[2][0].colour == enemyColour && board[1][0].colour == emptyCell.colour){
				makeMove(0,1);
				return;
			}
		}],
		[function blockFork(r,c) { 
			
		}],
		[function takeCenter(r,c) { }],
		[function blockCorner(r,c) { }],
		[function takeCorner(r,c) { }],
		[function takeSide(r,c) { 
			for (x = -1; x < 1; x++){
				for(y = -1; y < 1 ; y++){
					//check center wins
					if (board[y+1][x+1].colour == emptyCell.colour){
						makeMove(x+1,y+1);
						return;
					}
				}
			}
		}]

	];



	//function boardChecker(currentMove){

	//	for (r = 0; r < boardSize ; r++){
	//		for (c = 0; c < boardSize; c++){
	//			if (turnState == true){
	//				break;
	//			}
			//currentMove(r,c);
	//		moveList[currentMove][0](r,c);
	//		}
	//	}
	//}
	for ( i = 0; i < moveList.length; i++){
		moveList[i][0]();
		if ( turnState == true ){
			break;
		}
	}



	function makeMove(x,y){
		drawCell(x*cellSize, y*cellSize, ownColour);
		board[y][x] = aiCell;

		turnState = !turnState;
		drawBoard();
		//aiTurn();
	}
}






