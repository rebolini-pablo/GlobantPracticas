/**
 * actor.js
 * 
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 */
 var Actor = (function() {
  var actors = [];

  return {
    add: function(actor) {
      if (typeof actor === 'object') {
        for (var i = actor.length - 1; i >= 0; i--) {
          actors.push(actor[i]);
        };
      }

      if (typeof actor === 'string') {
        actors.push(actor);
      }
    },

    remove: function(actor) {
      var id = actor.indexOf(actors);
      if (id <= 0) {
        actors.splice(id, 1);
      }
    },

    getAll: function() {
      return actors;
    }
  };
 }());