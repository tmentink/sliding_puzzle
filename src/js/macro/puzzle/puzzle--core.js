
// ===========================================
// Puzzle - Core
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var newGame = function() {
      if (puzzle.isAnimating) {
        return false;
      }

      puzzle.isAnimating = true;
      puzzle.moves = 0;
      puzzle.setScore();
      puzzle.setGrid();

      var delay = 250;
      if (!puzzle.isReady) {
        puzzle.start();
        delay = 1000;
      }

      setTimeout(function(){
        puzzle.shuffle();
      }, delay);
    };


    var setScore = function() {
      $cache(".moves").html(puzzle.moves);
    };

    var check = function() {
      if (puzzle.utility.isCorrect()) {
        puzzle.stop();
      }
    };


    // Public Methods
    // =======================================
    puzzle.newGame = newGame;
    puzzle.setScore = setScore;
    puzzle.check = check;


    return puzzle;
  })(puzzle || {});

