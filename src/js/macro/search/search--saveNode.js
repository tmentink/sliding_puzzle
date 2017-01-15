
// ===========================================
// Search - Save Node
// ===========================================

  var search = (function(search) {
    "use strict";
    
    var saveNode = function(astar, node) {
      var strState = JSON.stringify(node.state);

      if (astar.visited.contains(strState)) {
        return false;
      }

      node.setValue();
      astar.queue.queue(node);
      astar.visited.add(strState);
    };


    // Public Methods
    // =======================================
    search.saveNode = saveNode;

    return search;
  })(search || {});

