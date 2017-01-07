
// ===========================================
// Utility
// ===========================================

  !(function (root) {
    "use strict";

    // Debounce
    // =======================================
    var debounce = function (fn, delay) {
      if (delay === undefined) { delay = 250; }

      var timer = null;
      return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    }


    // Throttle
    // =======================================
    var throttle = function(fn, delay) {
      if (delay === undefined) { delay = 250; }

      var deferTimer,
          last;
      return function () {
        var context = this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + delay) {
          // hold on to it
          clearTimeout(deferTimer);
          deferTimer = setTimeout(function () {
            last = now;
            fn.apply(context, args);
          }, delay);
        } else {
          last = now;
          fn.apply(context, args);
        }
      };
    }


    // Selector Cache
    // =======================================
    if (root.jQuery) {
      var selector_cache = function() {
        var elementCache = {};

        var get_from_cache = function( selector, $ctxt, reset ) {
          if ( "boolean" === typeof $ctxt ) {
            reset = $ctxt;
            $ctxt = false;
          }
          var cacheKey = $ctxt ? $ctxt.selector + ' ' + selector : selector;

          if ( undefined === elementCache[ cacheKey ] || reset ) {
            elementCache[ cacheKey ] = $ctxt ? $ctxt.find( selector ) : jQuery( selector );
          }

          return elementCache[ cacheKey ];
        };

        get_from_cache.elementCache = elementCache;
        return get_from_cache;
      }
    }


    // Compare Objects
    // =======================================
    var compareObjects = function(obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    };


    // Shuffle Array
    // =======================================
    var shuffleArray = function(array) {
      var shuffled = [];
      var n = array.length;
      var i;

      while(n) {
        i = Math.floor(Math.random() * n--);
        shuffled.push(array.splice(i, 1)[0]);
      }

      return shuffled;
    };


    // Public Methods
    // =======================================
    root.utility = {
      debounce: debounce,
      throttle: throttle,
      compareObjects: compareObjects,
      shuffleArray: shuffleArray
    };

    if (selector_cache) {
      root.$cache = new selector_cache();
    } 

  })(this);



