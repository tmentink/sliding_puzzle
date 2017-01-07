
// ===========================================
// Puzzle - Sliding
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";


    var slide = function(piece) {
      var position = piece.position();

      if (!puzzle.isSliding && (puzzle.debug || puzzle.isAdjacent(position))) {

        puzzle.isSliding = true;

        piece.velocity(puzzle.openTile, {
          duration: 250,
          complete: function() {
            puzzle.openTile = position;
            puzzle.isSliding = false;
            puzzle.check();
          }
        });

      }
    };

    puzzle.slide = slide;
    

    return puzzle;

  })(puzzle || {});

