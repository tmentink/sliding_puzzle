
// ===========================================
// Page - Init
// ===========================================

  !(function(puzzle) {
    "use strict";

    $cache(document).ready(function() {
      if (page.breakpoints.mobile.matches) {
        mobileInit();
      }
      else if (page.breakpoints.tablet.matches) {
        tabletInit();
      }
      else if (page.breakpoints.desktop.matches) {
        desktopInit();
      }

      generalInit();

      // breakpoint listeners
      page.breakpoints.mobile.addListener(function(e){
        if (e.matches) {
          mobileInit();
          puzzle.setGrid();
          puzzle.setCSS();
          puzzle.newGame();
        }
      });

      page.breakpoints.tablet.addListener(function(e){
        if (e.matches) {
          tabletInit();
          puzzle.setGrid();
          puzzle.setCSS();
          puzzle.newGame();
        }
      });

      page.breakpoints.desktop.addListener(function(e){
        if (e.matches) {
          desktopInit();
          puzzle.setGrid();
          puzzle.setCSS();
          puzzle.newGame();
        }
      });
    });


    // General Init
    // ========================================
    var generalInit = function() {
      puzzle.imageID = 0;
      puzzle.setGrid();
      puzzle.setCSS();

      $cache(".container-fluid").addClass("loaded");

      $cache("#btnStart").on("click", function(){
        puzzle.newGame();
      });

      $cache("#btnChange").on("click", function(){
        puzzle.change();
      });


      $cache(".radio").on("touchstart", function(e){
        e.preventDefault();

        var size = $(this).attr("data-size");
        puzzle.changeGridSize(size);
      });

      $cache(".radio").on("click", function(){
        var size = $(this).attr("data-size");
        puzzle.changeGridSize(size);
      });


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


    // Mobile Init
    // ========================================
    var mobileInit = function() {
      puzzle.config.puzzleSize = puzzle.config.mobileSize;
    };


    // Tablet Init
    // ========================================
    var tabletInit = function() {
      puzzle.config.puzzleSize = puzzle.config.tabletSize;
    };
    

    // Desktop Init
    // ========================================
    var desktopInit = function() {
      puzzle.config.puzzleSize = puzzle.config.desktopSize;
    };

  })(puzzle);

