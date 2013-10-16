/**
 * Mixin Social.js
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 */


// No estoy seguro si la implementacion 
// del mixin es correcta. Dado que, en este caso,
// solo se podria aplicar a un objeto 'Movie'
var Social = function() {
  Movie.share = function(friendName) {
    console.log('Sharing ' + this.get('title') + ' with ' + friendName);
  };

  Movie.like  = function() {
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
