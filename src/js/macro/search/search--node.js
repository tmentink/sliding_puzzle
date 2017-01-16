
// ===========================================
// Search - Node
// ===========================================

  var search = (function(search) {
    "use strict";

    // Node Object
    // =======================================
    var node = function(state, emptyRow, emptyCol, depth) {
      this.path = [];
      this.size = state.length;
      this.value = 0;
      this.setValue = function() { this.value = this.depth + search.heuristic(this.state)};
      
      this.state = state;
      this.depth = depth;
      this.emptyRow = emptyRow;
      this.emptyCol = emptyCol;

      this.canMoveUp = canMoveUp(this);
      this.canMoveDown = canMoveDown(this);
      this.canMoveLeft = canMoveLeft(this);
      this.canMoveRight = canMoveRight(this);

      this.expandUp = function() { return search.expandNode(this, "up") };
      this.expandDown = function() { return search.expandNode(this, "down") };
      this.expandLeft = function() { return search.expandNode(this, "left") };
      this.expandRight = function() { return search.expandNode(this, "right") };
    };


    // Can Move Booleans
    // =======================================
    var canMoveUp = function(node) {
      return node.emptyRow > 0;
    };

    var canMoveDown = function(node) {
      return node.emptyRow < node.size - 1;
    };

    var canMoveLeft = function(node) {
      return node.emptyCol > 0;
    };

    var canMoveRight = function(node) {
      return node.emptyCol < node.size - 1;
    };


    // Public Objects
    // =======================================
    search.node = node;

    return search;
  })(search || {});

