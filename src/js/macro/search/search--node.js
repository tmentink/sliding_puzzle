
// ===========================================
// Search - Node
// ===========================================

  var search = (function(search) {
    "use strict";

    // Node Object
    // =======================================
    var Node = function(state, emptyRow, emptyCol, depth) {
      this.path = "";
      this.size = state.length;
      this.value = 0;
      this.state = state;
      this.depth = depth;
      this.emptyRow = emptyRow;
      this.emptyCol = emptyCol;
    };

    Node.prototype = {
      setValue: function() { this.value = this.depth + search.heuristic(this.state); },
      canMoveUp: function() { return this.emptyRow > 0; },
      canMoveDown: function() { return this.emptyRow < this.size - 1; },
      canMoveLeft: function() { return this.emptyCol > 0; },
      canMoveRight: function() { return this.emptyCol < this.size - 1; },
      expandUp: function() { return search.expandNode(this, "up"); },
      expandDown: function() { return search.expandNode(this, "down"); },
      expandLeft: function() { return search.expandNode(this, "left"); },
      expandRight: function() { return search.expandNode(this, "right"); }
    };
    

    // Public Objects
    // =======================================
    search.Node = Node;

    return search;
  })(search || {});

