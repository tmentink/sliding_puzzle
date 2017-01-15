
// ===========================================
// Page - Init
// ===========================================

  !(function(puzzle) {
    "use strict";

    $cache(document).ready(function() {
      puzzle.init();    
      headerEvents();
      changeImageEvents();
      slideTileEvents();
      changeSizeEvents();

      $cache(".container-fluid").addClass("loaded");
    });



    // Header Events
    // ======================================== 
    var headerEvents = function() {
      $cache("#btnStart").on("click", function(){
        puzzle.newGame();
      });

      $cache("#btnChange").on("click", function(){
        puzzle.change();
      });

      $cache("#btnSolve").on("click", function(){
        search.start();
      });
    };


    // Change Image Events
    // ========================================
    var changeImageEvents = function() {
      $cache(".puzzle").on("touchstart", ".puzzle__arrow--right", function(e){
        e.preventDefault();
        puzzle.nextImage();
      });

      $cache(".puzzle").on("click", ".puzzle__arrow--right", function(){
        puzzle.nextImage();
      });

      $cache(".puzzle").on("touchstart", ".puzzle__arrow--left", function(e){
        e.preventDefault();
        puzzle.lastImage();
      });

      $cache(".puzzle").on("click", ".puzzle__arrow--left", function(){
        puzzle.lastImage();
      });
    };


    // Slide Tile Events
    // ========================================
    var slideTileEvents = function() {
      $cache(".puzzle").on("touchstart", ".puzzle__tile", function(e){
        e.preventDefault();

        if (puzzle.isReady) {
          var id = $(this).attr("data-id");
          puzzle.slide(id);
        }
      });

      $cache(".puzzle").on("click", ".puzzle__tile", function(){
        if (puzzle.isReady) {
          var id = $(this).attr("data-id");
          puzzle.slide(id);
        }
      });
    };


    // Change Size Events
    // ========================================   
    var changeSizeEvents = function() {
      $cache(".radio").on("touchstart", function(e){
        e.preventDefault();

        var size = $(this).attr("data-size");
        puzzle.setGridSize(size);
      });

      $cache(".radio").on("click", function(){
        var size = $(this).attr("data-size");
        puzzle.setGridSize(size);
      });
    };

  })(puzzle);

