
// ===========================================
// Search - Init
// ===========================================

  var search = (function(search) {
    "use strict";

    var init = function() {
      setStartNode();
      setFinalState();
      setVistedStates();
      setQueue();
    };


    var setStartNode = function() {
      var currentState = search.utility.getCurrentState();
      var openCoords = puzzle.utility.getOpenCoordinates();

      search.startNode = new search.Node(currentState, openCoords[0], openCoords[1], 0);
    };


    var setFinalState = function() {
      search.finalState = search.utility.getFinalState();
    };


    var setVistedStates = function() {
      search.visitedStates = new HashSet();
      search.visitedStates.add(JSON.stringify(search.startNode.state));
    };
    

    var setQueue = function() {
      search.queue = new PriorityQueue({comparator: function(a,b){
        return a.value - b.value;
      }});

      search.queue.queue(search.startNode);
    };


    // Public Methods
    // =======================================
    search.init = init;

    return search;
  })(search || {});

