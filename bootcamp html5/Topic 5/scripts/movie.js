/**
 * Movie.js
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 */

/**
 * Movie object
 */
 function movie(mOb){
  this.movie = [];
  this.movieObserver = mOb;

  // Binding the events...
  this.movieObserver.subscribe('playing', function(movie){
    console.log('Playing: ' + movie);
  });

  this.movieObserver.subscribe('stopped', function(){
    console.log('Stopped...!');
  });  
 };

 // Setter
 movie.prototype.set = function(str, val){
  this.movie[str] = val;
 };

 // Getter
 movie.prototype.get = function(str){
  return this.movie[str];
 };

 // Play the movie
 movie.prototype.play = function() {
  this.movieObserver.publish('playing', [this.get('title')]);
 };

 // Stop the movie
 movie.prototype.stop = function() {
  this.movieObserver.publish('stopped', []);  
 };


 function movieObserver(){
  this.cache = {}; // Cache of 'events'
 }

 movieObserver.prototype.publish = function(event, args){
   if(!this.cache[event]) throw new Error('Nobody was suscribed to this event');

   $.each(this.cache[event], function() {
     this.apply(undefined, args);
   });
 };

 movieObserver.prototype.subscribe = function(event, callback){
  if(typeof callback !== 'function') throw new Error('Callback must be a function');

  if(!this.cache[event]) this.cache[event] = [];
  this.cache[event].push(callback);

  return [event, callback];
 };
 
 movieObserver.prototype.unsubscribe = function(event){
  if(!this.cache[event]) throw new Error('Invalid or inexistent event');
  delete(this.cache[event]);
 };