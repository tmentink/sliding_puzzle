
// ===========================================
// Search - Core
// ===========================================

  var search = (function(search) {
    "use strict";

    // Execute Search
    // =======================================
    var executeSearch = function() {
      if (!puzzle.isReady || puzzle.isAnimating){
        return false;
      }

      search.init();

      while(search.queue.length > 0) {
        search.currentNode = search.queue.dequeue();

        if (solvedPuzzled()) {
          return animateResult();
        }

        expandNode();
      }
    };


    // Solved
    // =======================================
    var solvedPuzzled = function() { 
      return utility.compareObjects(search.currentNode.state, search.finalState)
    };


    // Expand Node
    // =======================================
    var expandNode = function() {
      var node = search.currentNode;

      if (node.canMoveUp) {
        search.saveNode(node.expandUp());
      }

      if (node.canMoveDown) {
        search.saveNode(node.expandDown());
      }

      if (node.canMoveLeft) {
        search.saveNode(node.expandLeft());
      }

      if (node.canMoveRight) {
        search.saveNode(node.expandRight());
      }
    };


    // Animate Result
    // =======================================
    var animateResult = function() { 
      var ids = search.currentNode.path.split(",");
      ids.pop();

      var i = 0;
      var interval = setInterval(function(){
        puzzle.slide(ids[i]);
        i++;

        if (i >= ids.length) {
          clearInterval(interval);
        }
      }, 300);
    };


    // Public Methods
    // =======================================
    search.execute = executeSearch;

    return search;
  })(search || {});

