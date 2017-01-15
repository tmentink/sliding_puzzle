
// ===========================================
// Puzzle - CSS
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    // Set CSS
    // =======================================
    var setCSS = function() {
      setPuzzleSize();
      setTileSize();
      setTilePosition();
      puzzle.setImage();
    };

    var setPuzzleSize = function() {
      var size = puzzle.puzzleSize + "px";
      
      $cache(".puzzle").css({"height": size, "width": size});
    };

    var setTileSize = function() {
      var size = puzzle.utility.getTileSize() + "px";
      var backgroundSize = puzzle.puzzleSize + "px";

      $(".puzzle__tile").css({"height": size, "width": size, "backgroundSize": backgroundSize});
    };

    var setTilePosition = function() {
      var gridPositions = puzzle.utility.getAllGridPositions();

      for (var id in puzzle.grid) {
        var tile = puzzle.utility.getTile(id);
        var left = gridPositions[id].left;
        var top  = gridPositions[id].top;
        var backgroundPosition = "-" + left + "px -" + top + "px";

        tile.css({"top": top, "left": left, "backgroundPosition": backgroundPosition});
      }
    }


    // Public Methods
    // =======================================
    puzzle.setCSS = setCSS;

    return puzzle;
  })(puzzle || {});

