
// ===========================================
// Puzzle - Solution
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    puzzle.solution = {
      0: {top: 0,   left: 0},
      1: {top: 0,   left: 100},
      2: {top: 0,   left: 200},
      3: {top: 100, left: 0},
      4: {top: 100, left: 100},
      5: {top: 100, left: 200},
      6: {top: 200, left: 0},
      7: {top: 200, left: 100},
      8: {top: 200, left: 200}
    };

    var getID = function(position) {
      for (var prop in puzzle.solution) {
        
        if (utility.compareObj(puzzle.solution[prop], position)) {
          return parseInt(prop);
        }
      }
    };

    var getPosition = function(id) {
      return puzzle.solution[id];
    };

    var isCorrect = function() {
      return utility.compareObj(puzzle.position(), puzzle.solution);
    };

    var check = function() {
      if (puzzle.isCorrect()) {
        alert("You won!");
      }
    }


    puzzle.getID = getID;
    puzzle.getPosition = getPosition;
    puzzle.isCorrect = isCorrect;
    puzzle.check = check;

    return puzzle;

  })(puzzle || {});

