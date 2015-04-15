var ngModule = angular.module('MultiplicationApp', [])
ngModule.controller('MultiplicationTableCtrl', [function() {
  this.rows = [
    [ 1, 2,3 ],
    [ 4,5,6 ],
    [ 7,8,9 ]
  ];
  this.xInput = [];
  this.yInput = [];
  this.setId = function(id){
    return id+1;
  }

  this.onclick = function(id){
    this.rows[0][0] = 9;

  }

}]);

var findId = function()
