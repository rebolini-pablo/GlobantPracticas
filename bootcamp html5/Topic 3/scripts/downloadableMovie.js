/*jslint indent: 2, browser: true, white: false*/
/*global console, movieObserver, Movie*/

/**
 * downloadableMovie.js Module
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 * @param Movie
 */
var downloadableMovie = (function (Movie) {
  "use strict";
  Movie.download = function () {
    console.log('Downloading movie...');
  };
  return Movie;
}(Movie || {}));