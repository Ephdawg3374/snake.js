(function(){
  var SnakeGame = window.SnakeGame = window.SnakeGame || {};


  var Snake = SnakeGame.Snake = function(initSeg, initDir){
    this.dir = initDir;
    this.segments = initSeg;
  };

  var DIRECTIONS = {
    "N": [ 0,-1],
    "S": [ 0, 1],
    "E": [ 1, 0],
    "W": [-1, 0]
  };

  Snake.prototype.move = function () {
    var newHead = Coords.plus(this.segments[0], DIRECTIONS[this.dir]);

    this.segments.unshift(newHead);
    this.segments.pop();
  };

  Snake.prototype.turn = function (newDir) {
    if (!Coords.isOpposite(newDir, this.dir)){
      this.dir = newDir;
    }
  }

  var Coords = SnakeGame.Coords = function() {};

  Coords.plus = function(pos1, pos2){
    var x = pos1[0] + pos2[0];
    var y = pos1[1] + pos2[1];

    return [x,y];
  };

  Coords.equals = function(pos1, pos2){
    if (pos1[0] === pos2[0] && pos1[1] === pos2[1]){
      return true;
    }else{
      return false;
    }
  };

  Coords.isOpposite = function(dir, prevDir){
    var dirVec = DIRECTIONS[dir];
    var prevDirVec = DIRECTIONS[prevDir];

    if (dirVec[0] + prevDirVec[0] === 0 && dirVec[1] + prevDirVec[1] === 0){
      return true;
    }else{
      return false;
    }
  };
})();
