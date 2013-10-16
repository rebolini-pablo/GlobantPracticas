/*jslint indent: 2, browser: true, white: false*/
/*global define*/

/**
 * Director.js Module
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 * @param $
 * @returns Director
 */
define(['jquery'], function ($) {
  "use strict";
  function Director(name) {
    this.name = name;
    this.quotes = [];
  }

  Director.prototype.set = function (str, val) {
    var i;
    if (str === 'quotes') {
      if (typeof val === 'string') {
        this.quotes.push(val);
      } else if (typeof val === 'object') {
        for (i = val.length - 1; i >= 0; i--) {
          this.quotes.push(val[i]);
        }
      }
    }
  };

  Director.prototype.speak = function () {
    var random = Math.floor(Math.random() * this.quotes.length),
      quoteString = this.name + ' says: "' + this.quotes[random] + '..."';
    
    //console.log(quoteString);
    $('.quotes').html(quoteString);
  };

  return Director;
});
