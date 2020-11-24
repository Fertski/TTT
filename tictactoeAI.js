var move = 0;
var ownColour = "Blue";

//function drawCell(x,y,width,height,colour){




function aiTurn(){

	for (r = 0; r < boardSize - r ; r++){
		for (c = 0; c < boardSize - c; c++){
			if (board[r][c].colour == ownColour && board[2-r][2-c].colour == ownColour){
				if (board[Math.abs(1-r)][Math.abs(1-c)].colour == emptyCell.colour){
					move = canWin;
					makeMove(Math.abs(1-c),Math.abs(1-r),move);
					break;
				}
			}
		}
	}
}



function makeMove(x,y,move){
	switch(x,y,move){
	
		case canWin:
			drawCell(x,y,cellSize, cellSize, ownColour);
			turnState = !turnState;
			break;
		case blockEnemyWin:
		
		case makeFork:
		
		case blockFork:
		
		case takeCenter:
		
		case blockCorner:
		
		case takeCorker:
		
		case takeSide:
		

	}
	
}