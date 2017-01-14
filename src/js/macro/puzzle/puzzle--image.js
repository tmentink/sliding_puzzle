
// ===========================================
// Puzzle - Image
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var setImage = function() {
      $(".puzzle__tile").css({"backgroundImage": "url(img/" + puzzle.config.imageID + ".jpg)"});
    };

    var nextImage = function() {
      if (puzzle.config.imageID == puzzle.utility.getLastImageID()) {
        puzzle.config.imageID = 0;
      }
      else {
        puzzle.config.imageID++;
      }

      setImage();
    };

    var lastImage = function() {
      if (puzzle.config.imageID == 0) {
        puzzle.config.imageID = puzzle.utility.getLastImageID();
      }
      else {
        puzzle.config.imageID--;
      }

      setImage();
    };


    // Public Methods
    // =======================================
    puzzle.setImage = setImage;
    puzzle.nextImage = nextImage;
    puzzle.lastImage = lastImage;


    return puzzle;
  })(puzzle || {});

