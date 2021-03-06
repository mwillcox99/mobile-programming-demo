// Generated by CoffeeScript 1.9.3
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

this.block_beyonce_ = (function() {
  function block_beyonce_() {
    this.run = bind(this.run, this);
    var beyonce, css, feed;
    css = "#instafeed {\n	display: none;\n}\n\n#beyonce-image {\n	height:100%;\n	position: relative;\n	left: -40px;\n	bottom:0;\n}";
    $('<style type="text/css"></style>').html(css).appendTo("head");
    $("<div class=\"drag-wrap draggable\" name=\"beyonce\">\n	<img id=\"beyonce-image\" src=\"img/beyonce.jpg\">\n<div id=\"instafeed\"></div>\n</div>").appendTo(".drag-zone");
    beyonce = 247944034;
    feed = new Instafeed({
      get: 'user',
      userId: beyonce,
      accessToken: '2072221807.1677ed0.cfc898e6c7124300bb90d836f3e14e9d',
      clientId: 'f41df43206564056b252ae8a5cb4019e',
      error: function() {
        return console.log("instagram error");
      },
      success: (function(_this) {
        return function(json) {
          return _this.images = json.data;
        };
      })(this)
    });
    feed.run();
  }

  block_beyonce_.prototype.run = function() {
    var audio;
    audio = new Audio("sound/drunkinlove.mp3");
    audio.play();
    return this.images;
  };

  return block_beyonce_;

})();
