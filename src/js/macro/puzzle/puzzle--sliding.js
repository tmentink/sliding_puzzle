
// ===========================================
// Puzzle - Sliding
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var slide = function(id) {
      if (puzzle.isAnimating) {
        return false;
      }

      if (puzzle.debug || 
          puzzle.isAdjacent(id)) {
        
        var tile = puzzle.utility.getTile(id);
        var options = getOptions(id);

        tile.velocity(puzzle.openPosition, options);
      }
    };

    var getOptions = function(id) {
      return {
        duration: 250,
        begin: function() {
          puzzle.isAnimating = true;
          puzzle.moves ++;
          puzzle.utility.setOpenPosition(id);
        },
        complete: function() {
          puzzle.isAnimating = false;
          puzzle.setScore();
          puzzle.check();
        }
      }
    };


    // Public Methods
    // =======================================
    puzzle.slide = slide;
    

    return puzzle;
  })(puzzle || {});

