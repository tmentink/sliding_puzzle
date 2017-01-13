
// ===========================================
// Puzzle - Shuffle
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var shuffle = function() {
      var ids = puzzle.utility.getIDs();
      var order = utility.shuffleArray(ids);

      for (var i = 0, i_end = order.length; i < i_end; i++) {
        var tile = puzzle.utility.getTile(i);
        var position = puzzle.grid[order[i]].position;
        var options = getOptions(i);
        
        tile.velocity(position, options);
      }      
    };

    var getOptions = function(i) {
      var options = {duration: 1250};
      var lastID = puzzle.utility.getLastID();

      if (i == lastID) {
        var position = puzzle.grid[lastID].position;

        options.complete = function() {
          puzzle.utility.setOpenPosition(lastID);
          puzzle.utility.getTile(lastID).velocity(position);
          puzzle.isAnimating = false;
        };
      }

      return options;
    };

    var reset = function() {
      var tileCount = puzzle.utility.getTileCount();

      for (var i = 0, i_end = tileCount; i < i_end; i++) {
        var tile = puzzle.utility.getTile(i);
        var position = puzzle.grid[i].position;      
        
        tile.velocity(position, {duration: 500});
      } 
    };


    // Public Methods
    // =======================================
    puzzle.shuffle = shuffle;
    puzzle.reset = reset;
    

    return puzzle;
  })(puzzle || {});

