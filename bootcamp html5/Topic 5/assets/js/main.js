/*jslint indent: 2, browser: true, white: true*/
/*global require*/

/**
 * RequireJS Config
 */
require.config({
  baseUrl: 'assets/js',
  paths: {
    jquery: 'vendor/jquery-1.10.2.min'
  }
});

/**
 * Main App Module
 * @author Rebolini Pablo <rebolini.pablo@gmail.com>
 * @param Movie
 * @param Director
 */
require(['Movie', 'Director'], function (Movie, Director) {
  "use strict";
  var petter = new Movie(),
    bombita = new Director('Bombita Rodriguez');
    
  bombita.set('quotes', [
    'Lorem',
    'Lorem impsum',
    'Lorem impsum dolor',
    'Lorem impsum dolor sit',
    'Lorem impsum dolor sit amet'
  ]);

  petter.set('title', 'Petter Capusotto y sus tres dimensiones');
  petter.set('director', bombita);

  petter.get('director').speak();
});
