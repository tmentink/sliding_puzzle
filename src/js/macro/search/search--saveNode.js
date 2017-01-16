
// ===========================================
// Search - Save Node
// ===========================================

  var search = (function(search) {
    "use strict";

    var saveNode = function(node) {
      var strState = JSON.stringify(node.state)

      if (!search.visitedStates.contains(strState)) {
        node.setValue();
        search.queue.queue(node);
        search.visitedStates.add(strState);
      }
    };

    // Public Methods
    // =======================================
    search.saveNode = saveNode;

    return search;
  })(search || {});

