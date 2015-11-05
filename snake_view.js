(function() {
  var SnakeGame = window.SnakeGame = window.SnakeGame || {};

  var View = SnakeGame.View = function ($el) {
    this.$el = $el;
    this.board = new SnakeGame.Board();

    window.setInterval(this.step.bind(this), 500);
  };

  View.prototype.handleKeyEvent = function (event) {
    switch (event.keyCode) {
      case 97:
        this.board.snake.turn("W");
        break;
      case 119:
        this.board.snake.turn("N");
        break;
      case 100:
        this.board.snake.turn("E");
        break;
      case 115:
        this.board.snake.turn("S");
        break;
    };
  };

  View.prototype.step = function () {
    this.board.snake.move();
    $("main").empty();
    $("main").append(this.board.render());
  };

})();
