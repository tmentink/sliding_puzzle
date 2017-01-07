
// ===========================================
// Breakpoints
// ===========================================

  var page = (function(page) {
    "use strict";

    page.breakpoints = {
      mobile: window.matchMedia("(max-width: 767px)"),
      tablet: window.matchMedia("(min-width: 768px) and (max-width: 1366px)"),
      desktop: window.matchMedia("(min-width: 1367px)")
    };

    return page;
  })(page || {});

