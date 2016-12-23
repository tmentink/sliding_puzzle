
// ===========================================
// Page - Scroll
// ===========================================

  var page = (function(page) {
    "use strict";
  
    // Scroll Object
    // =======================================
    if (typeof page.scroll == "undefined") {
      page.scroll = {};
    }


    // Smooth Srolling
    // =======================================
    var smoothScroll = function(link, options) {
      var scrollOffset = 0;
      if (page.breakpoints.desktop.matches) {
        scrollOffset = $cache("#main-menu").height();
      }

      options = getSmoothScrollOptions(options);

      if (location.pathname.replace(/^\//, ') == link.pathname.replace(/^\//, ') || location.hostname == link.hostname) {
        var target = $cache(link.hash);
        target = target.length ? target : $cache("[name=" + link.hash.slice(1) + "]");
        if (target.length) {
          target.velocity("scroll", {duration: options.duration, offset: -(scrollOffset + options.padding)});
        }
      }
    };

    var getSmoothScrollOptions = function(options) {
      var defaults = {
        padding: 15,
        duration: 750
      };

      return $.extend({}, defaults, options);
    };


    // Disable Scrolling
    // =======================================
    var disable = function() {
      $cache("html").css({"overflow":"hidden", "height":"100%"});
      $cache("body").bind("touchmove", function(e){e.preventDefault()});
    };


    // Enable Scrolling
    // =======================================
    var enable = function() {
      $cache("html").css({"overflow":"auto", "height":"auto"});
      $cache("body").unbind("touchmove");
    };


    // Public Methods
    // =======================================
    page.scroll.smoothScroll = smoothScroll;
    page.scroll.disable = disable;
    page.scroll.enable = enable;


    return page;
  })(page || {});

