
// ===========================================
// Search - Linear Conflicts
// ===========================================

  var search = (function(search) {
    "use strict";

    var linearConflicts = function(nodeState) {
      var result = 0;

      for (var i = 0, i_len = nodeState.length; i < i_len; i++) {
        result += findConflicts(nodeState, i, 1);
      }

      for (var i = 0, i_len = nodeState.length; i < i_len; i++) {
        result += findConflicts(nodeState, i, 0);
      }

      return result;
    };

    var findConflicts = function(nodeState, i, dimension) {
      var result = 0;
      var tilesRelated = [];

      for (var j = 0, j_len = nodeState.length - 1; j < j_len && !tilesRelated.includes(j); j++) {
        
        for (var k = j + 1, k_len = nodeState.length; k < k_len && !tilesRelated.includes(j); k++) {
          
          var moves;
          if (dimension == 1) {
            moves = inConflict(i, nodeState[i][j], nodeState[i][k], j, k, dimension);
          }
          else {
            moves = inConflict(i, nodeState[j][i], nodeState[k][i], j, k, dimension);
          }


          if (moves == 0) { 
            continue; 
          }

          result += 2;
          tilesRelated.push([j,k]);
          break;
        }
      }

      return result;
    };

    var inConflict = function(index, a, b, indexA, indexB, dimension) {
      var indexGoalA = -1;
      var indexGoalB = -1;

      for (var i = 0, i_len = search.finalState.length; i < i_len; i++) {
        
        if (dimension == 1 && search.finalState[index][i] == a) {
          indexGoalA = i;
        }
        else if (dimension == 1 && search.finalState[index][i] == b) {
          indexGoalB = i;
        }
        else if (dimension == 0 && search.finalState[i][index] == a) {
          indexGoalA = i;
        }
        else if (dimension == 0 && search.finalState[i][index] == b) {
          indexGoalB = i;
        }
      }

      return (indexGoalA >= 0 && indexGoalB >= 0) && 
             ((indexA < indexB && indexGoalA > indexGoalB) || (indexA > indexB && indexGoalA < indexGoalB))
             ? 2
             : 0;
    };


    // Public Methods
    // =======================================
    search.linearConflicts = linearConflicts;

    return search;
  })(search || {});

