
// ===========================================
// Events - General
// ===========================================

  var page = (function(page) {
    "use strict";
  
    // Events Object
    // =======================================
    if (typeof page.events == "undefined") {
      page.events = {};
    }


    // General Events
    // =======================================
    var generalOn = function() {
      $cache("body").on("click.general", ".link", function(){
        page.scroll.smoothScroll(this);
        return false;
      });
    };



    // Public Methods
    // =======================================
    page.events.general = {
      on: generalOn
    };

    return page;
  })(page || {});


