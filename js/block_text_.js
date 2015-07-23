// Generated by CoffeeScript 1.9.3
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

this.block_text_ = (function() {
  function block_text_() {
    this.run = bind(this.run, this);
    var css;
    css = "#text_field{\n	font-size: 90px;\n	position: absolute;\n	top: -40px;\n	left: 30px;\n}\n\n#text_input {\n	position: absolute;\n	top: 150px;\n	left: 40px;\n	width: 200px;\n	font-size: 25px;\n}";
    $('<style type="text/css"></style>').html(css).appendTo("head");
    $("<div id=\"drag11\" class=\"draggable block2\">\n	<div id=\"text_field\">TEXT</div>\n	<input id=\"text_input\" type=\"text\" name=\"image\" ><br>\n</div>").appendTo(".block_bank_wrapper");
    interact("#drag11").on('tap', function(event) {
      return $("#text_input").focus();
    });
  }

  block_text_.prototype.run = function() {
    console.log($("#text_input").val());
    return $("#text_input").val();
  };

  return block_text_;

})();
