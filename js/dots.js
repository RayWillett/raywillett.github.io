var DOTS = function() {
	this.board = [];
	this.players = 0;
	this.scoreBoard = [];
	this.ctx = $('#playarea')[0].getContext('2d');
	this.ctx.fillStyle = "black";
	startGame.call(this);
}

DOTS.prototype.printBoard = function(){
	const l = this.board.length;
	for(var i=0; i<l; i++){
		for(var j=0; j<l; j++){
			console.log(this.board[i][j].x + " : " + this.board[i][j].y + ", ");
		}
		console.log("\n");
	}
}

var startGame = function() {
	this.players = getNumberPlayers();
	var n = getBoardSize();
	this.board = get2DArray(n);
	this.scoreBoard = get2DArray(n-1);
	for(i=0; i<n; i++){
 		for(j=0; j<n; j++){
 			this.ctx.beginPath();
    		this.ctx.rect(this.board[i][j].x, this.board[i][j].y, 1, 1);
    		this.ctx.fill();
    		if(typeof this.ctx.addHitRegion === "function") {
    			this.ctx.addHitRegion({id: "" + i + "," + j});
    		} else {
    			console.log("oops");
    		}
  		}
	}

	//get offset
	$('#playarea').on('click', function(event){
		var x = event.clientX;
		var y = event.clientY;
		var magicValue = 530;
		var spacing = 50;
		var rounded = ~~((x - magicValue) / n);
		console.log(rounded);
	});
}

DOTS.prototype.constructor = DOTS;

var getNumberPlayers = function() {
	return 2; //TODO
}

var getBoardSize = function() {
	return 15; //TODO
}

//must be a square matrix
var get2DArray = function(n){
	var ret = [];
	for(var i = 0; i < n; i++) {
		ret[i] = [];
		for(var j = 0; j <= n; j++) {
			ret[i][j] = 0;
		}
	}
	return ret;
}

var get2DArray = function(n){
	var ret = [];
	for(var i = 0; i < n; i++) {
		ret[i] = [];
		for(var j = 0; j < n; j++) {
			ret[i][j] = {x:i*10, y:j*10};
		}
	}
	return ret;
}


var d = new DOTS();
/*TODO: Canvas HITREGIONS- experimental, no go
 *
 *
 *
 */
