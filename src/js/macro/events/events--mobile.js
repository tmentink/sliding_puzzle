
// ===========================================
// Events - Mobile
// ===========================================

  var page = (function(page) {
    "use strict";
  
    // Events Object
    // =======================================
    if (typeof page.events == "undefined") {
      page.events = {};
    }


    // Mobile Events
    // =======================================
    var mobileOn = function() {
      $cache("#main-menu-button").on("click.mobile", function(){
        page.menu.toggle("#main-menu", "up", 500);
        $(this).toggleClass("hamburger-button--open");
      });

      $cache("#main-menu").on("click.mobile", ".responsive-menu__link", function() {
        page.menu.hide("#main-menu", "up", 500);
        $cache("#main-menu-button").removeClass("hamburger-button--open");
        page.scroll.smoothScroll(this, {duration: 0});
        return false;
      });
    };

    var mobileOff = function() {
      $cache("#main-menu-button").off(".mobile");
      $cache("#main-menu").off(".mobile");
    };


    // Public Methods
    // =======================================
    page.events.mobile = {
      on: mobileOn,
      off: mobileOff
    };

    return page;
  })(page || {});


