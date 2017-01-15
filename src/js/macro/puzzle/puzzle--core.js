
// ===========================================
// Puzzle - Core
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    // Init
    // =======================================
    var init = function() {
      puzzle.setPuzzleSize();
      puzzle.setGrid();
      puzzle.setCSS();
    };


    // New Game
    // =======================================
    var newGame = function() {
      if (puzzle.isAnimating) {
        return false;
      }

      puzzle.isAnimating = true;
      puzzle.moves = 0;
      puzzle.setScore();

      var delay = 250;
      if (!puzzle.isReady) {
        puzzle.start();
        delay = 1000;
      }

      setTimeout(function(){
        puzzle.shuffle();
      }, delay);
    };


    // Set Score
    // =======================================
    var setScore = function() {
      $cache(".moves").html(puzzle.moves);
    };


    // Check
    // =======================================
    var check = function() {
      if (puzzle.utility.isCorrect()) {
        puzzle.stop();
      }
    };


    // Public Methods
    // =======================================
    puzzle.init = init;
    puzzle.newGame = newGame;
    puzzle.setScore = setScore;
    puzzle.check = check;


    return puzzle;
  })(puzzle || {});

