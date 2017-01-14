
// ===========================================
// Page - Breakpoint
// ===========================================

  !(function(puzzle) {
    "use strict";

    $cache(document).ready(function() {
      page.breakpoints.mobile.addListener(function(e){
        if (e.matches) {
          puzzle.init();
          puzzle.newGame();
        }
      });

      page.breakpoints.tablet.addListener(function(e){
        if (e.matches) {
          puzzle.init();
          puzzle.newGame();
        }
      });

      page.breakpoints.desktop.addListener(function(e){
        if (e.matches) {
          puzzle.init();
          puzzle.newGame();
        }
      });
    });

  })(puzzle);

