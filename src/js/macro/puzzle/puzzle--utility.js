
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
      return utility.compareObjects(getAllPositions(), puzzle.grid);
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
      return $cache("[data-id='" + id + "']");
    };

    var getLastTile = function() {
      var id = getLastID();
      return getTile(id);
    };


    // Position Functions
    // =======================================
    var getAllPositions = function() {
      var posObj = {};
      var ids = getIDs();

      for (var i = 0, i_end = ids.length; i < i_end; i++) {
        var id = ids[i];
        var position = getTilePosition(id);

        posObj[id] = position;
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
      getIDs          : getIDs,
      getTile         : getTile,
      isCorrect       : isCorrect,
      getLastID       : getLastID,
      getLastTile     : getLastTile,
      getTileSize     : getTileSize,
      getTileCount    : getTileCount,
      getLastImageID  : getLastImageID,
      getAllPositions : getAllPositions,
      getTilePosition : getTilePosition,
      setOpenPosition : setOpenPosition
    };


    return puzzle;
  })(puzzle || {});

