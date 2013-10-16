define(['Director'], function(director) {

  function Movie(){
    this.movies = [];
  };

  Movie.prototype.set = function(str, val){
    this.movies[str] = val;
  };

  Movie.prototype.get = function(str){
    return this.movies[str];
  };
  
  return Movie;
});