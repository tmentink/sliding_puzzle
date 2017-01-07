
// ===========================================
// Puzzle - Position
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var getAllPositions = function() {
      var posObj = {};

      $cache(".puzzle__tile").each(function(){
        var tile = $(this);
        var id = tile.attr("data-id");

        posObj[id] = tile.position();
      });

      return posObj;
    };

    var getTilePosition = function(id) {
      return $cache("[data-id='" + id + "']").position();
    }

    var setOpenPosition = function(id) {
      puzzle.openPosition = $cache("[data-id='" + id + "']").position();
    };


    // Public Methods
    // =======================================
    puzzle.getAllPositions = getAllPositions;
    puzzle.getTilePosition = getTilePosition;
    puzzle.setOpenPosition = setOpenPosition;


    return puzzle;
  })(puzzle || {});

