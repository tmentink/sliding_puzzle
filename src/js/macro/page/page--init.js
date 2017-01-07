
// ===========================================
// Page - Init
// ===========================================

  !(function(puzzle) {
    "use strict";

    $cache(document).ready(function() {
      generalInit();

      if (page.breakpoints.mobile.matches) {
        mobileInit();
      }
      else if (page.breakpoints.tablet.matches) {
        tabletInit();
      }
      else if (page.breakpoints.desktop.matches) {
        desktopInit();
      }

      // breakpoint listeners
      page.breakpoints.mobile.addListener(function(e){
        if (e.matches) {
          mobileInit();
          puzzle.newGame();
        }
      });

      page.breakpoints.tablet.addListener(function(e){
        if (e.matches) {
          tabletInit();
          puzzle.newGame();
        }
      });

      page.breakpoints.desktop.addListener(function(e){
        if (e.matches) {
          desktopInit();
          puzzle.newGame();
        }
      });
    });


    // General Init
    // ========================================
    var generalInit = function() {
      $cache("#btnNewGame").on("click", function(){
        puzzle.newGame();
      });

      $cache(".puzzle").on("touchstart", ".puzzle__tile", function(e){
        e.preventDefault();

        if (puzzle.isReady) {
          var id = $(this).attr("data-id");
          puzzle.slide(id);
        }
      })

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
      $cache(".puzzle")
        .removeClass("puzzle--tablet puzzle--desktop")
        .addClass("puzzle--mobile");

      puzzle.config.puzzleSize = puzzle.config.mobileSize;
    };


    // Tablet Init
    // ========================================
    var tabletInit = function() {
      $cache(".puzzle")
        .removeClass("puzzle--mobile puzzle--desktop")
        .addClass("puzzle--tablet");

      puzzle.config.puzzleSize = puzzle.config.tabletSize;
    };
    

    // Desktop Init
    // ========================================
    var desktopInit = function() {
      $cache(".puzzle")
        .removeClass("puzzle--mobile puzzle--tablet")
        .addClass("puzzle--desktop");

      puzzle.config.puzzleSize = puzzle.config.desktopSize;
    };

  })(puzzle);

