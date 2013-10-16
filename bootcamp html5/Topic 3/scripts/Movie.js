/*jslint indent: 2, browser: true, white: false*/
/*global console, movieObserver*/

/**
 * Movie.js Module
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 * @param movieObserver
 */
var Movie = (function (movieObserver) {
  "use strict";
  var movie = [],
    actors = [];

  // Binding the events...
  movieObserver.subscribe('playing', function (title) {
    console.log('Playing: ' + title);
  });

  movieObserver.subscribe('stopped', function () {
    console.log('Stopped...!');
  });

  return {
    set: function (str, val) {

      // En caso de que 'val' sea un objeto
      // x ej: de tipo Actor
      if (val.hasOwnProperty('getAll')) {
        val = val.getAll();
      }

      movie[str] = val;
    },
    get: function (str) {
      if (!movie[str]) throw new Error(str + ' ' + 'Propiedad no existente');
      return movie[str];
    },

    play: function () {
      movieObserver.publish('playing', [this.get('title')]);
    },

    stop: function () {
      movieObserver.publish('stopped', []);
    }
  };

}(movieObserver || {}));


// Movie object
//
// function Movie(mOb) {
//  this.movie = [];
//  this.movieObserver = mOb;

//  // Binding the events...
//  this.movieObserver.subscribe('playing', function(movie) {
//    console.log('Playing: ' + movie);
//  });

//  this.movieObserver.subscribe('stopped', function() {
//    console.log('Stopped...!');
//  });  
// };

// // Setter
// Movie.prototype.set = function(str, val) {
//  this.movie[str] = val;
// };

// // Getter
// Movie.prototype.get = function(str) {
//  return this.movie[str];
// };

// // Play the movie
// Movie.prototype.play = function() {
//  this.movieObserver.publish('playing', [this.get('title')]);
// };

// // Stop the movie
// Movie.prototype.stop = function() {
//  this.movieObserver.publish('stopped', []);  
// };

// return Movie;
