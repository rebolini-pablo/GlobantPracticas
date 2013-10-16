/*jslint indent: 2, browser: true, white: false*/
/*global define*/

/**
 * Movie.js Module
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 * @param director
 * @returns Movie
 */
define(['Director'], function (director) {
  "use strict";
  function Movie() {
    this.movies = [];
  }

  Movie.prototype.set = function (str, val) {
    this.movies[str] = val;
  };

  Movie.prototype.get = function (str) {
    return this.movies[str];
  };

  return Movie;
});