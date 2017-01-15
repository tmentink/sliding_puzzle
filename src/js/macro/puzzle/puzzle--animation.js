
// ===========================================
// Puzzle - Animation
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    // References
    // =======================================
    var getTile = puzzle.utility.getTile;
    var getLastID = puzzle.utility.getLastID;
    var getLastTile = puzzle.utility.getLastTile;
    var setOpenPosition = puzzle.utility.setOpenPosition;


    // Slide
    // =======================================
    var slide = function(id) {
      if (puzzle.isAnimating) {
        return false;
      }

      if (puzzle.debug || 
          puzzle.isAdjacent(id)) {
        
        var tile = getTile(id);
        var options = getSlideOptions(id);

        tile.velocity(puzzle.openPosition, options);
      }
    };

    var getSlideOptions = function(id) {
      return {
        duration: 250,
        begin: function() {
          puzzle.isAnimating = true;
          puzzle.moves ++;
          setOpenPosition(id);
        },
        complete: function() {
          puzzle.isAnimating = false;
          puzzle.setScore();
          puzzle.check();
        }
      }
    };


    // Mix
    // =======================================
    var mix = function(ids) {
      puzzle.isAnimating = true;

      for (var i = 0, i_end = ids.length; i < i_end; i++) {
        var id = ids[i];
        var tile = getTile(id);
        var position = puzzle.grid[i].position;
        var options = getMixOptions(i);
        
        tile.velocity(position, options);
      }   
    };

    var getMixOptions = function(id) {
      var options = {duration: 1250};
      var lastID = getLastID();

      if (id == lastID) {
        var position = puzzle.grid[lastID].position;

        options.complete = function() {
          setOpenPosition(lastID);
          getLastTile().velocity(position, {duration: 50});
          puzzle.isAnimating = false;
        };
      }

      return options;
    };


    // Reset
    // =======================================
    var reset = function() {
      puzzle.isAnimating = true;

      for (var id in puzzle.grid) {
        var tile = puzzle.utility.getTile(id);
        var position = puzzle.grid[id].position;      
        
        tile.velocity(position, {duration: 500});
      }

      puzzle.isAnimating = false;
    };


    // Public Methods
    // =======================================
    puzzle.slide = slide;
    puzzle.mix = mix;
    puzzle.reset = reset;

    return puzzle;
  })(puzzle || {});

