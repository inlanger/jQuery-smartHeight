/*
Name: smartHeight
Author: inlanger www.inlanger.org.ua
Description: Make similar height of all selected elements
Usage: $(YOUR_SELECTOR).smartHeight({change: "css_property_name"});
Requirements: jQuery 1.5+
Browser support: IE 7+, Chrome 2+, FireFox 2+, Opera 9+, Safari 4+
*/

(function($) {
    $.fn.smartHeight = function(options) {
        var defaults = {
            change: 'min-height'
        }, opts = $.extend(defaults, options);

        function find_highest(element) {
            var value = 0;
            var t_elem;
            $(element).each(function() {
                $this = $(this);
                if ($this.outerHeight() > value) {
                    t_elem = this;
                    value = $this.outerHeight();
                }
            });
            return value;
        }
        max_high = find_highest(this);
        $(this).each(function() {
            $(this).css(opts['change'], max_high);
        });
    };
})(jQuery);