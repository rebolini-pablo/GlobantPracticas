/**
 * downloadableMovie.js
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 */

/**
 * Movie Module Pattern
 */
var downloadableMovie = (function(Movie) {
  Movie.download = function() {
    console.log('Downloading movie...');
  };
  
  return Movie;
}(Movie || {}));