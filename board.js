(function(){
  var SnakeGame = window.SnakeGame = window.SnakeGame || {};

  var Board = SnakeGame.Board = function(){
    this.snake = new SnakeGame.Snake([[5,5],[5,4],[5,3]], "N");
    this.yBOUNDS = 10;
    this.xBOUNDS = 10;
  };

  Board.prototype.render = function(){
    var htmlRender = "<pre>"
    for(var y = 0; y < this.yBOUNDS; y++){
      var row = ""
      for( var x = 0; x < this.xBOUNDS; x++){
        var pos = [x,y];
        var snakePresence = false;
        for (var i=0; i<this.snake.segments.length; i++) {
          var segment = this.snake.segments[i];

          if (SnakeGame.Coords.equals(pos, segment)){
            row += "S";
            snakePresence = true;
            break;
          }
        }

        if (!snakePresence) {
          row += ".";
        }
        
      }
      htmlRender += row + "\n";
      // console.log(row);
    }
    htmlRender += "<pre>";
    return htmlRender;
  }

})();
