
// ===========================================
// Extensions
// ===========================================

  !(function (root) {
    "use strict";

    // Array Clone
    // =======================================
    Array.prototype.clone = function() {
      return JSON.parse(JSON.stringify(this));
    };


    // Array Inlcudes 
    // =======================================
    Array.prototype.includes = function(value) {
      return this.indexOf(value) > -1;
    };
    
  })(this);

