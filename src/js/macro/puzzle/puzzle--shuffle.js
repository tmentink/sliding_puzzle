
// ===========================================
// Puzzle - Shuffle
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var shuffle = function() {
      var ids = [0,1,2,3,4,5,6,7,8];
      var order = utility.shuffleArray(ids);

      for (var i = 0, i_end = 9; i < i_end; i++) {
        var tile = $cache("[data-id='" + i + "']");
        var position = puzzle.grid[order[i]];
        var options = getOptions(i);
        
        tile.velocity(position, options);
      }      
    };

    var getOptions = function(i) {
      var options = {duration: 1250};

      if (i == 8) {
        options.complete = function() {
          puzzle.setOpenPosition(8);
          var position = puzzle.grid[8];
          $cache("[data-id='8']").velocity(position);
          puzzle.isAnimating = false;
        };
      }

      return options;
    };


    // Public Methods
    // =======================================
    puzzle.shuffle = shuffle;
    

    return puzzle;
  })(puzzle || {});

