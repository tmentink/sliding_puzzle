
// ===========================================
// Breakpoints
// ===========================================

  var page = (function(page) {
    "use strict";

    page.breakpoints = {
      mobile: window.matchMedia("(max-width: 767px)"),
      tablet: window.matchMedia("(min-width: 768px)")
    };

    return page;
  })(page || {});

