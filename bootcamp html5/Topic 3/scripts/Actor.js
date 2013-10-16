/*jslint indent: 2, browser: true, white: false, plusplus: true*/

/**
 * Actor.js
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 * @type Actor
 */
var Actor = (function () {
  "use strict";
  var actors = [], i;

  return {
    add: function (actor) {
      if (typeof actor === 'object') {
        for (i = actor.length - 1; i >= 0; i--) {
          actors.push(actor[i]);
        }
      }

      if (typeof actor === 'string') {
        actors.push(actor);
      }
    },

    remove: function (actor) {
      var id = actor.indexOf(actors);
      if (id <= 0) {
        actors.splice(id, 1);
      }
    },

    getAll: function () {
      return actors;
    }
  };
}());