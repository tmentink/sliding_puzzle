
// ===========================================
// Search - Utility
// ===========================================

  var search = (function(search) {
    "use strict";

    
    // Get State
    // =======================================
    var getCurrentState = function() {
      var tilePos = puzzle.utility.getAllTilePositions();
      var gridPos = puzzle.utility.getAllGridPositions();

      var IDs = [];
      for (var i in gridPos) {

        if (utility.compareObjects(gridPos[i], puzzle.openPosition)) {
          IDs.push(puzzle.utility.getLastID());
          continue;
        }

        for (var j in tilePos) {
          if (utility.compareObjects(gridPos[i], tilePos[j])) {
            IDs.push(j);
            break;
          }
        }
      }

      return formatArray(IDs);
    };

    var getFinalState = function() {
      return formatArray(puzzle.utility.getIDs());
    };

    var formatArray = function(array) {
      var formatted = [];
      var row = [];

      for (var i = 0, i_len = array.length; i < i_len; i++) {
        var id = parseInt(array[i]);
        row.push(id);

        if (row.length == puzzle.gridSize) {
          formatted.push(row);
          row = [];
        }
      }

      return formatted;
    };


    // Public Methods
    // =======================================
    search.utility = {
      getFinalState: getFinalState,
      getCurrentState: getCurrentState
    };

    return search;
  })(search || {});

