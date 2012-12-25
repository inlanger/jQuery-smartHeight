/*
Name: smartHeight
Author: inlanger and miXOnIN
Description: Make similar height of all selected elements
Usage: $(YOUR_SELECTOR).smartHeight({change: "css_property_name", tabs: 4});
Requirements: jQuery 1.5+
Browser support: IE 7+, Chrome 2+, FireFox 2+, Opera 9+, Safari 4+
*/

(function($) {
    $.fn.smartHeight = function(options) {
      var defaults = {
          change: 'min-height',
          tabs: 3,
          fix_px: 0                    
      }, opts = $.extend(defaults, options);

      function sel_highest_tr(element) {
        if(element.length>0){
          for(var i=0;i<Math.floor(element.length/opts.tabs);i++){
            var value = 0;
            var _tmp=$(element).filter((i==0?'*':':gt('+((i*opts.tabs)-1)+')')).filter(':lt('+opts.tabs+')');
            _tmp.each(function() {
              $this = $(this);
              if ($this.outerHeight() > value) {
                value = $this.outerHeight();
              }
            });
            _tmp.css(opts['change'], (value+opts.fix_px)+'px');
          }
          
        }
      }
      sel_highest_tr(this);
    };
})(jQuery);