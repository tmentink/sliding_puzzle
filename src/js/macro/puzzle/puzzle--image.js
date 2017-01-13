
// ===========================================
// Puzzle - Image
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var setImage = function() {
      $(".puzzle__tile").css({"backgroundImage": "url(img/" + puzzle.imageID + ".jpg)"});
    };

    var nextImage = function() {
      if (puzzle.imageID == puzzle.utility.getLastImageID()) {
        puzzle.imageID = 0;
      }
      else {
        puzzle.imageID++;
      }

      setImage();
    };

    var lastImage = function() {
      if (puzzle.imageID == 0) {
        puzzle.imageID = puzzle.utility.getLastImageID();
      }
      else {
        puzzle.imageID--;
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

