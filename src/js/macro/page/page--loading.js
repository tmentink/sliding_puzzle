
// ===========================================
// Page - Loading
// ===========================================

  var page = (function(page) {
    "use strict";
  
    // Loading Object
    // =======================================
    if (typeof page.loading == "undefined") {
      page.loading = {};
    }


    // Init Loading
    // =======================================
    var init = function() {
      page.scroll.disable();
      setTimeout(function(){
        page.loading.finished();
      }, 2000);
    }

    // Finished Loading
    // =======================================
    var finished = function() {
      $cache("#loading-screen").addClass("loader--loaded");
      
      setTimeout(function() {
        $cache("#loading-screen").removeClass("loader--loading");
        scrollToMenu();
      }, 700);
    };

    var scrollToMenu = function() {
      var menu = $cache("#main-menu-wrapper");
      var menuBottom = menu.offset().top + menu.height();
      var scrollPos = menuBottom - $cache(window).height();
      
      $cache("html").velocity("scroll", {
        duration: 1000, 
        offset: scrollPos, 
        easing: "easeOut",
        complete: function() {
          page.scroll.enable();
        }
      }); 
    };


    // Public Methods
    // =======================================
    page.loading.init = init;
    page.loading.finished = finished;


    return page;
  })(page || {});


