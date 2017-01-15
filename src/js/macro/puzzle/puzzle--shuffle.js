
// ===========================================
// Puzzle - Shuffle
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    // Shuffle
    // =======================================
    var shuffle = function() {
      var ids = getShuffledIDs();

      if (isValid(ids)) {
        puzzle.mix(ids);
      }
      else {
        puzzle.shuffle();
      }
    };

    var getShuffledIDs = function() {
      var shuffled = [];
      var ids = puzzle.utility.getIDs();
      var n = ids.length;
      var i;

      while(n) {
        i = Math.floor(Math.random() * n--);
        shuffled.push(ids.splice(i, 1)[0]);
      }

      return shuffled;
    };

    var isValid = function(ids) {
      var clone = ids.clone();
          clone = removeLastID(clone); 

      var inversions = 0;
      for (var i = 0, i_len = clone.length; i < i_len; i++) {
        for (var j = i + 1, j_len = clone.length; j < j_len; j++) {
          if (clone[j] < clone[i]) {
            inversions++;
          }
        }
      }

      return inversions % 2 == 0;
    };

    var removeLastID = function(ids) {
      var lastID = puzzle.utility.getLastID();
      var lastIDIndex = ids.indexOf(lastID);

      ids.splice(lastIDIndex, 1);
      return ids;
    };


    // Public Methods
    // =======================================
    puzzle.shuffle = shuffle; 

    return puzzle;
  })(puzzle || {});

