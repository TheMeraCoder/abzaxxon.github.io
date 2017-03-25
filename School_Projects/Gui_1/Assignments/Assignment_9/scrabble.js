/*
 Name:             Aliyu B. Zakari,
 UMS:              01190914
 Major:            Computer Science Major
 Email:            aliyu_zakari@student.uml.edu
 School:           UMass Lowell Computer Science,
 Course:           91.61 GUI Programming I, Sec 201
 Assignment:       9
 
 
 Documentation:
 This assignment goal is making a muliplcation table using Javascript.
 
 */




$(function(){

  
  //Array storing the tiles information ["Letter","number of tiles","value"]
  var tileDb = {
  totalTiles: 100,
  wordTiles : [["A", 9, 1],
               ["B", 2, 3],
               ["C", 3, 3],
               ["D", 4, 2],
               ["E", 12, 1],
               ["F", 2, 4],
               ["G", 3, 2],
               ["H", 2, 4],
               ["I", 9, 1],
               ["J", 1, 8],
               ["K", 1, 5],
               ["L", 4, 1],
               ["M", 2, 3],
               ["N", 6, 1],
               ["O", 8, 1],
               ["P", 2, 3],
               ["Q", 1, 10],
               ["R", 6, 1],
               ["S", 4, 1],
               ["T", 6, 1],
               ["U", 4, 1],
               ["V", 2, 4],
               ["W", 2, 4],
               ["X", 1, 8],
               ["Y", 2, 4],
               ["Z", 1, 10],
               ["Blank", 2, 0]]
  };
    //Array storing the titles information ["position","string word","value mulipler" ,"either Word or letter"]
  
  var boardDb = {
  numSpace:15,
  wordBoard : [[1, "3xWord", 3, "w"],
               [2, null, 1, null],
               [3, null, 1, null],
               [4, "2xLetter", 2, "l"],
               [5, null, 1, null],
               [6, null, 1, null],
               [7, null, 1, null],
               [8, "3xWord", 3, "w"],
               [9, null, 1, null],
               [10, null, 1, null],
               [11, null, 1, null],
               [12, "2xLetter", 2, "l"],
               [13, null, 1, null],
               [14, null, 1, null],
               [15, "3xWord", 3, "w"]]
  };
  
  var handDB = {
  numSpace:7
  };
  
  var b;
  var rack;
  
  
  
  b = new Board("board");
  var dist = boardDb.wordBoard.slice();
  $("#buttons").append($("<button>").attr("id", "move").append("Submit Move")).append($("<button>").attr("id", "resetRack").append("Reset Move"));
  $("#move").onclick = moveFunc;
  
  console.log("b = ");
  console.log(b);
  $("#resetRack").click(resetRack);
  
  
  var getTile = function(){
		
		var total = 0;
		for(var i = 0; i < boardDb.numSpace; i++){
  total += boardDb.numSpace;
		}
		
		var rand = Math.floor(Math.random() * boardDb.numSpace);
		
		total = 0;
		for(var i = 0; i < boardDb.numSpace; i++){
  if(rand < total){
  tileDb.wordTiles[i][1]-=1;

  return String.fromCharCode(65 + i);
  
  }
  total += tileDb.wordTiles[i][1];
		}
		return null;
  };
  
  rack = [];

  rack = fillRack(rack, getTile);
  console.log(rack);
  updateRack(rack, "rack");
  

  
  function moveFunc(){
  
  }
  
  
  
  function tileProm(Dist){
  return function(){
		
		var total = 0;
		for(var i = 0; i < tileDb.totalTiles; i++){
  total += tileDb.wordTiles[i][1];
		}
		
		var rand = Math.floor(Math.random() * total);
		
		total = 0;
		for(var i = 0; i < tileDb.totalTiles; i++){
  if(rand < total){
  tileDb.wordTiles[i][1]-=1;

  return String.fromCharCode(65 + i);
  
  }
  total += tileDb.wordTiles[i][1];
		}
		return null;
  };
  }
  
  function resetRack(){
  console.log(b);
  b.setDroppable();
  for(var i = 0; i < rack.length; i++){
		console.log(rack[i]);
		rack[i].img.animate({
                            top: "0px",
                            left: "0px"
                            });
		rack[i].img.draggable("enable");
  }
  }
  
  function updateRack(rack, containerName){
  var cont = $("#" + containerName);
  cont.empty();
  
  for(var i = 0; i < rack.length; i++){
		var tempDiv = $("<div>");
		tempDiv.append(rack[i].img);
		cont.append(tempDiv);
  }
  return;
  }
  function fillRack(r, tileFunc){

  while(r.length < 7){
		var c = (tileFunc());
		
		if(c == null){
  return r;
		}

		r.push(new Tile(c));
  }
  return r.slice();
  }
  
  function Tile(c){
  this.c = c;
  this.img = $("<img>");
  this.img.attr("src", "tiles/" + c + ".jpg");
  this.img.draggable({
                     containment:"#container2",
                     start: movedTile,
                     revert:true
                     });
  this.img.addClass("tile");
  this.location = null;
  return this;
  }
  
  
  function Hand(containerName){
  this.cont = $("#" + containerName);
  this.tiles = [];
  
  }
  function Board(containerName){
  this.cont = $("#" + containerName);
  this.letters = [];
  this.firstMove = true;
  
  for(var i = 0; i < 1; i++){
		var templ = [];
		var tempe = $("<tr>");
		
		for(var j = 0; j < boardDb.numSpace; j++){
  var td = $("<td>");
  var tempd = $("<div>");
  tempd.attr("id", i + "," + j);
  tempd.addClass("square");
  tempd.droppable({
                  drop:handleDrop,
                  out: pickedUp
                  });
  if(boardDb.wordBoard[j][1] ==  null){ 
  tempd.addClass("empty");
  }
  else if(boardDb.wordBoard[j][2] == [3]){
  if(boardDb.wordBoard[j][3] == "w"){
  tempd.addClass("tripWord");
  tempd.append("3x Word");
  }
  if(boardDb.wordBoard[j][3] == "l"){
  tempd.addClass("tripLet");
  tempd.append("3x Letter");
  }
  }
  else if(boardDb.wordBoard[j][2] == [2]){
  if(boardDb.wordBoard[j][3] == "w"){
  tempd.addClass("dubWord");
  if(i != 7 || j != 7){
  tempd.append("2x Word");
  }
  }
  if(boardDb.wordBoard[j][3] == "l"){
  tempd.addClass("dubLet");
  tempd.append("2x Letter");
  }
  }
  td.append(tempd);
  tempe.append(td);
  templ.push(null);
		}
		this.cont.append(tempe);
		this.letters.push(templ);
  }
  }
  Board.prototype.placeTile = function (tile, pos){
  if(this.letters[pos[0]][pos[1]] != null){
		return false;
  }
  else{
		this.letters[pos[0]][pos[1]] = tile;
		$(tile).draggable.draggable('disable');
  }
  }
  
  Board.prototype.setDroppable = function(){
		var squares = this.cont.find(".square");
		console.log(squares);
		for(var i = 0; i < squares.length; i++){
  var id = String($(squares[i]).attr("id"));
  console.log( id);
  var x = id.slice(0, id.indexOf(","));
  var y = id.slice(id.indexOf(","), id.length);
  if(this.letters[x][y] == null){
  $(squares[i]).droppable('enable');
  }
  else{
  $(squares[i]).droppable('disable');
  }
		}

		
  }
  
  function handleDrop(event, ui){
  
  ui.draggable.draggable({revert:false});
  ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
  ui.draggable.draggable("disable");
  
  ui.draggable.location = $(this).attr("id");
  
  $(this).droppable('disable');
  

  }
  var oldPos = null;
  function pickedUp(event, ui){
  
  
  
  }
  function movedTile(event, ui){
  $(this).draggable({revert:true});
  oldPos = $(this).position();
  
  }
  
console.log(boardDb.wordBoard[1][1]);
  });

