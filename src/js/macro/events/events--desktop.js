
// ===========================================
// Events - Desktop
// ===========================================

  var page = (function(page) {
    "use strict";
  
    // Events Object
    // =======================================
    if (typeof page.events == "undefined") {
      page.events = {};
    }


    // Desktop Events
    // =======================================
    var desktopOn = function() {
      $cache("#main-menu").on("click.desktop", ".responsive-menu__link", function() {
        page.scroll.smoothScroll(this);
        return false;
      });

      page.menu.desktopState("#main-menu");
      page.menu.startStickyMenu("#main-menu");
    };

    var desktopOff = function() {
      $cache("#main-menu").off(".desktop");

      page.menu.mobileState("#main-menu");
      page.menu.stopStickyMenu("#main-menu");
    };


    // Public Methods
    // =======================================
    page.events.desktop = {
      on: desktopOn,
      off: desktopOff
    };

    return page;
  })(page || {});

