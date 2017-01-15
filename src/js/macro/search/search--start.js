
// ===========================================
// Search - Start
// ===========================================

  var search = (function(search) {
    "use strict";

    var start = function() {
      if (!puzzle.isReady || puzzle.isAnimating){
        return false;
      }

      var currentState = search.utility.getCurrentState();
      search.goalState = search.utility.getFinalState();

      var openCoords = puzzle.utility.getOpenCoordinates();

      var startNode = new search.node(currentState, openCoords[0], openCoords[1], 0);
      
      var astar = new search.AStar(startNode);

      // var startTime = new Date();

      var result = astar.execute();

      // var endTime = new Date();

      // console.log("finished in " + (endTime - startTime));

      if (result) {
        var temp = result.path.split(",");
        temp.pop();

        var i = 0;
        var interval = setInterval(function() {
        
          puzzle.slide(temp[i]);
          i++;

          if (i >= temp.length) {
            clearInterval(interval);
          }
        }, 300);
       
      }
      else {
        alert("Could not find the solution.")
      }
    };


    // Public Objects
    // =======================================
    search.start = start;

    return search;
  })(search || {});

