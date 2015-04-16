
var game = angular.module('TicTacToe', []);

var storePlayerAction = function (indexes, id) {
  if (this.yPlayer.length == this.xPlayer.length - 1 && this.xPlayer.length < 5 && this.xPlayer.length < 5) {
    this.rows[indexes.x][indexes.y] = 'Y';
    getPlayerAction(this.yPlayer, id);
  }
  else {
    this.rows[indexes.x][indexes.y] = 'X';
    getPlayerAction(this.xPlayer, id);
  }
};

game.controller('RowsColumnsCtrl', [function() {
  this.rows = [[ 1,2,3 ], [ 4,5,6 ], [ 7,8,9 ]];
  this.xPlayer = [];
  this.yPlayer = [];
  this.winningPossibilities = [
      [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
  ];
  this.winner = "";

  this.onclick = function(id){
    var indexes = findId(id,this.rows);
    storePlayerAction.call(this, indexes, id);
    if(getWinner(this.winningPossibilities,this.xPlayer) == true){
      this.winner = "First player won";
    }

    if(getWinner(this.winningPossibilities,this.yPlayer) == true){
      this.winner = "Second player won";
    }
  }
}]);

var getWinner = function(possibilties,playerActions){
  for(var i=0;i < possibilties.length; i++){
    var length = playerActions.filter(function(elem){
          return possibilties[i].indexOf(elem) > -1;
        }).length == possibilties[i].length;
    if(length == true){
      return true;
    }
  }
}

var getPlayerAction = function(player,id){
  player.push(id);
}


var findId = function(id,rows){
  var indexes={};
  rows.forEach(function(row,rowIndex){
    row.forEach(function(cell,cellIndex){
      if(cell == id){
        indexes.x = rowIndex;
        indexes.y = cellIndex;
      }
    })
  })
  return indexes;
}
