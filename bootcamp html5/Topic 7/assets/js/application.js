/**
 * Get the data
 */

var movies = [];

(function ($) {
  $.getJSON("assets/json/data.movies.json", function (data) {
    $.each(data, function (i, e) {
        movies.push(e);
    });

    console.log(movies);
  });
} (jQuery));


/**
 * Movie Model
 */
var Movie = Backbone.Model.extend({
    defaults:{
        img: 'http://placehold.it/250x250/placeholder'
    }
});

/**
 * Movie Collection
 */
var MovieDir = Backbone.Collection.extend({
    model: Movie
});


var MovieView = Backbone.View.extend({
    template: _.template('<h1><%= title %></h1><ul><li><b>Imagen: </b><%= img %></li><li><b>Desc: </b><%= desc %></li></ul><a href="/">Lorem impsum</a>'),

    render: function () {
        var tpl = this.template;
        this.$el.html(tpl(this.model.toJSON()));
        return this;
    }
});

var MovielistView = Backbone.View.extend({
    el: $(".movie-list"),
 
    initialize: function () {
        this.collection = new Movie(movies);
        this.render();
    },
 
    render: function () {
        var that = this,
            movieView;

        _.each(this.collection.models, function (item) {
            movieView = new MovieDir({
                model: item
            });

            //this.$el.append(movieView.render().el);

            console.log(movieView);

        }, this);
    },
 
});