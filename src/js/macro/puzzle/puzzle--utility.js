
// ===========================================
// Puzzle - Utility
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var getTileSize = function() {
      return (puzzle.config.puzzleSize / puzzle.config.rowSize);
    };

    var getTileCount = function() {
      return puzzle.config.rowSize * puzzle.config.rowSize;
    };

    var isCorrect = function() {
      return utility.compareObjects(getAllTilePositions(), getAllGridPositions());
    };


    // ID Functions
    // =======================================
    var getIDs = function() {
      var ids = [];
      var tileCount = getTileCount();

      for (var i = 0, i_end = tileCount; i < i_end; i++) {
        ids.push(i);
      }

      return ids;
    };

    var getLastID = function() {
      return getTileCount() - 1;
    };

    var getLastImageID = function() {
      return puzzle.config.imageIDs.length - 1;
    };


    // Selector Functions
    // =======================================
    var getTile = function(id) {
      return $("[data-id='" + id + "']");
    };

    var getLastTile = function() {
      var id = getLastID();
      return getTile(id);
    };


    // Position Functions
    // =======================================
    var getAllTilePositions = function() {
      var posObj = {};
  
      for (var id in puzzle.grid) {
        posObj[id] = getTilePosition(id);
      }

      return posObj;
    };

    var getAllGridPositions = function() {
      var posObj = {};

      for (var id in puzzle.grid) {
        posObj[id] = puzzle.grid[id].position;
      }

      return posObj;
    };

    var getTilePosition = function(id) {
      return getTile(id).position();
    };

    var setOpenPosition = function(id) {
      puzzle.openPosition = getTilePosition(id);
    };


    // Public Methods
    // =======================================
    puzzle.utility = {
      getIDs: getIDs,
      getTile: getTile,
      isCorrect: isCorrect,
      getLastID: getLastID,
      getLastTile: getLastTile,
      getTileSize: getTileSize,
      getTileCount: getTileCount,
      getLastImageID: getLastImageID,
      setOpenPosition: setOpenPosition,
      getTilePosition: getTilePosition,
      getAllTilePositions: getAllTilePositions,
      getAllGridPositions: getAllGridPositions
    };


    return puzzle;
  })(puzzle || {});

