
// ===========================================
// Puzzle - Shuffle
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var shuffle = function() {
      var ids = [0,1,2,3,4,5,6,7,8];
      var copy = [];
      var n = ids.length;
      var i;

      while(n) {
        i = Math.floor(Math.random() * n--);
        copy.push(ids.splice(i, 1)[0]);
      }

      return copy;
    };


    var mix = function() {
      var order = shuffle();
      var options = {duration: 1250}
      
      for (var i = 0, i_end = 9; i < i_end; i++) {
        var piece = $cache("[data-id='" + i + "']");
        var position = puzzle.solution[order[i]];
        
        if (i == 8) {
          options.complete = function() {
            puzzle.setOpenTile(8);
          };
        }

        piece.velocity(position, options);
      }      
    };



    puzzle.shuffle = mix;

    return puzzle;

  })(puzzle || {});

