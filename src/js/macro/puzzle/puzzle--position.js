
// ===========================================
// Puzzle - Position
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var getAllPositions = function() {
      var posObj = {};

      $cache(".puzzle__piece").each(function(){
        var piece = $(this);
        var id = piece.attr("data-id");

        posObj[id] = piece.position();
      });

      return posObj;
    };

    puzzle.position = getAllPositions;

    return puzzle;

  })(puzzle || {});

