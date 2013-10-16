/*jslint indent: 2, browser: true, white: false*/
/*global console, Movie*/

/**
 * Social.js Mixin
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 */
var Social = function () {
  "use strict";
  Movie.share = function (friendName) {
    console.log('Sharing ' + this.get('title') + ' with ' + friendName);
  };

  Movie.like  = function () {
    console.log('This movie rocks !');
  };

  return Movie;
};


// Social.js Module Pattern
//
// var Social = (function(Movie) {
//   Movie.share = function(friendName) {
//     console.log('Sharing ' + this.get('title') + ' with ' + friendName);
//   };

//   Movie.like = function() {
//     console.log('This movie rocks !');
//   };
//   return Movie;
// }(Movie));
