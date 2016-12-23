
// ===========================================
// Page - Init
// ===========================================

  !(function(page) {
    "use strict";

    $cache(document).ready(function() {
      generalInit();

      if (page.breakpoints.mobile.matches) {
        page.events.mobile.on();
      }
      else if (page.breakpoints.desktop.matches) {
        page.events.desktop.on();
      }

      page.breakpoints.mobile.addListener(function(e){
        if (e.matches) {
          page.events.mobile.on();
          page.events.desktop.off();
        }
      });

      page.breakpoints.desktop.addListener(function(e){
        if (e.matches) {
          page.events.mobile.off();
          page.events.desktop.on();
        }
      });

    });


    // General Init
    // ========================================
    var generalInit = function() {
      page.loading.init();
      page.events.general.on();
    };


    // Mobile Init
    // ========================================
    var mobileInit = function() {
      
    };


    // Desktop Init
    // ========================================
    var desktopInit = function() {

    };

  })(page);

