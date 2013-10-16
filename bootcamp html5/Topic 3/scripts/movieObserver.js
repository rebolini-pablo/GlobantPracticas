/**
 * movieObserver Module pattern
 */
var movieObserver = (function($) {
  var cache = {}; // Cache of 'events'

  return{
    publish: function(event, args) {
      if(!cache[event]) throw new Error('Nobody was suscribed to this event');

      $.each(cache[event], function() {
        this.apply(undefined, args);
      });
    },

    subscribe: function(event, callback){
      if(typeof callback !== 'function') throw new Error('Callback must be a function');
      
      if(!cache[event]){
        cache[event] = [];
      }
      
      cache[event].push(callback);
    },

    unsubscribe: function(event) {
      if(!cache[event]) throw new Error('Invalid or inexistent event');
      
      delete(cache[event]);
    }
  };
}($));


////
// movieObserver object
////

// function movieObserver() {
//  this.cache = {}; // Cache of 'events'
// }

// movieObserver.prototype.publish = function(event, args) {
//   if(!this.cache[event]) throw new Error('Nobody was suscribed to this event');

//   $.each(this.cache[event], function() {
//     this.apply(undefined, args);
//   });
// };

// movieObserver.prototype.subscribe = function(event, callback) {
//  if(typeof callback !== 'function') throw new Error('Callback must be a function');

//  if(!this.cache[event]) this.cache[event] = [];
//  this.cache[event].push(callback);
//  return [event, callback];
// };

// movieObserver.prototype.unsubscribe = function(event) {
//  if(!this.cache[event]) throw new Error('Invalid or inexistent event');
//  delete(this.cache[event]);
// };
