define(['jquery'], function($) {

  function Director(name) {
    this.name = name;
    this.quotes = [];
  };

  Director.prototype.set = function(str, val) {
    if(str === 'quotes') {

      if(typeof val === 'string'){
        this.quotes.push(val);      
      }

      else if(typeof val === 'object'){
        for (var i = val.length - 1; i >= 0; i--) {
          this.quotes.push(val[i]);
        };
      }
    }
  };

  Director.prototype.speak = function() {
    var random = Math.floor(Math.random() * this.quotes.length)
    ,   quoteString = this.name + ' says: "' + this.quotes[random] + '..."';
    
    console.log(quoteString);
    
    this.render(quoteString);
  };

  Director.prototype.render = function(quote){
    $('.quotes').html(quote);
  };
  
  return Director;
});