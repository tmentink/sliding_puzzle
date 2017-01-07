
// ===========================================
// Page - Init
// ===========================================

  !(function(puzzle) {
    "use strict";

    $cache(document).ready(function() {

      $cache(".puzzle").on("click", ".puzzle__piece", function(){
        var piece = $(this);
        puzzle.slide(piece);
      });

    });

  })(puzzle);

