
// ===========================================
// Search - Manhatten Distance
// ===========================================

  var search = (function(search) {
    "use strict";

    var manhattanDistance = function(nodeState) {
      var result = 0;

      for (var i = 0, i_len = nodeState.length; i < i_len; i++) {
        
        for (var j = 0, j_len = nodeState[i].length; j < j_len; j++) {
          
          var id = nodeState[i][j];
          var found = false;

          for (var k = 0, k_len = search.goalState.length; k < k_len; k++) {
            
            for (var l = 0, l_len = search.goalState[k].length; l < l_len; l++) {
              
              if (search.goalState[k][l] == id) {
                result += Math.abs(k - i) + Math.abs(j - l);
                found = true;
                break;
              }
            }

            if (found) { break; }
          }
        }
      }

      return result;
    };


    // Public Methods
    // =======================================
    search.manhattanDistance = manhattanDistance;

    return search;
  })(search || {});

