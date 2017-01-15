
// ===========================================
// Search - Expand Node
// ===========================================

  var search = (function(search) {
    "use strict";

    // Expand Node
    // =======================================
    var expandNode = function(node, direction) {
      var newEmpty = getNewEmptyCoords(node, direction);
      var newState = moveEmptyTile(node, newEmpty);
      var newNode = new search.node(newState, newEmpty.row, newEmpty.col, node.depth + 1);

      newNode.path = node.path + newState[node.emptyRow][node.emptyCol] + ",";
      return newNode;
    };

    var getNewEmptyCoords = function(node, direction) {
      switch(direction) {
        case "up":
          return {row: node.emptyRow - 1, col: node.emptyCol};

        case "down":
          return {row: node.emptyRow + 1, col: node.emptyCol};

        case "left":
          return {row: node.emptyRow, col: node.emptyCol - 1};

        case "right":
          return {row: node.emptyRow, col: node.emptyCol + 1};
      };
    };

    var moveEmptyTile = function(node, newEmpty) {
      var newState = node.state.clone();

      var temp = newState[newEmpty.row][newEmpty.col];
      newState[newEmpty.row][newEmpty.col] = newState[node.emptyRow][node.emptyCol];
      newState[node.emptyRow][node.emptyCol] = temp;

      return newState;
    };


    // Public Methods
    // =======================================
    search.expandNode = expandNode;

    return search;
  })(search || {});

