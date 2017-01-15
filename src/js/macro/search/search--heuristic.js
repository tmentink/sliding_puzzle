
// ===========================================
// Search - Heuristic
// ===========================================

  var search = (function(search) {
    "use strict";

    var heuristic = function(nodeState) {
      return search.manhattanDistance(nodeState) + search.linearConflicts(nodeState);
    };
    

    // Public Methods
    // =======================================
    search.heuristic = heuristic;

    return search;
  })(search || {});

