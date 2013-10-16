/**
 * Movie.js
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 */

/**
 * Movie Module Pattern
 */
var Movie = (function(movieObserver) {
  var movie = []
  ,   actors= [];

  // Binding the events...
  movieObserver.subscribe('playing', function(title) {
   console.log('Playing: ' + title);
  });

  movieObserver.subscribe('stopped', function() {
   console.log('Stopped...!');
  }); 

  return{
    set: function(str, val) {

      // In case of val was type of object
      // and has 'getAll' property
      // assign the content of this instead
      // of the complete object
      if(val.hasOwnProperty('getAll')){
        val = val.getAll();
      }

      movie[str] = val;
    },
    
    get: function(str) {
      if(! movie[str]) throw new Error('Invalid Param Suplied');
      return movie[str];
    },

    play: function() {
      movieObserver.publish('playing', [this.get('title')]);
    },

    stop: function() {
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
