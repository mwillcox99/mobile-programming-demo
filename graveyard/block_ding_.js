// Generated by CoffeeScript 1.9.3
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

this.block_ding_ = (function() {
  function block_ding_() {
    this.run = bind(this.run, this);
    var css;
    css = "#ding-image {\n	position: relative;\n	width: 50%;\n	top: 20%;\n}";
    $("<style type='text/css'></style>").html(css).appendTo("head");
    $("<div class=\"drag-wrap draggable\" name=\"ding\">\n	<img id=\"ding-image\" src=\"img/bell.png\">\n</div>").appendTo(".drag-zone");
  }

  block_ding_.prototype.run = function(cb, element) {
    var audio;
    console.log("DING run");
    audio = new Audio("sound/Ding.mp3");
    $(audio).bind('ended', function() {
      console.log("FINSIHED AUDIO");
      return cb();
    });
    return audio.play();
  };

  return block_ding_;

})();
