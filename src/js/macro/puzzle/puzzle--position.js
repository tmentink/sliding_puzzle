
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


    var setOpenTile = function(id) {
      puzzle.openTile = $cache("[data-id='" + id + "']").position();

      $cache("[data-id='" + id + "']").velocity(puzzle.solution[8]);
    };


    puzzle.position = getAllPositions;
    puzzle.setOpenTile = setOpenTile;

    return puzzle;

  })(puzzle || {});

