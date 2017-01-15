
// ===========================================
// Search - A Star
// ===========================================

  var search = (function(search) {
    "use strict";

    // AStar Object
    // =======================================
    var AStar = function(startNode) {
      this.startNode = startNode
      this.queue = getNewQueue(startNode);
      this.visited = new HashSet();
      this.saveNode = function(node){ return search.saveNode(this, node)};
    };

    var getNewQueue = function(startNode) {
      var queue = new PriorityQueue({comparator: function(a,b){
        return a.value - b.value;
      }});

      queue.queue(startNode);
      return queue;
    };


    // Execute
    // =======================================
    AStar.prototype.execute = function() {
      this.visited.add(JSON.stringify(this.startNode.state));

      while(this.queue.length > 0) {
        var current = this.queue.dequeue();

        if (utility.compareObjects(current.state, search.goalState)) {
          return current;
        }

        this.expandNode(current);
      }
    };


    // Expand Node
    // =======================================
    AStar.prototype.expandNode = function(node) {
      if (node.canMoveUp) {
        this.saveNode(node.expandUp());
      }

      if (node.canMoveDown) {
        this.saveNode(node.expandDown());
      }

      if (node.canMoveLeft) {
        this.saveNode(node.expandLeft());
      }

      if (node.canMoveRight) {
        this.saveNode(node.expandRight());
      }
    };


    // Public Objects
    // =======================================
    search.AStar = AStar;

    return search;
  })(search || {});

