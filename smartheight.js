/*
Name: smartHeight
Author: inlanger www.inlanger.org.ua
Description: Make similar height of all selected elements
Usage: $(YOUR_SELECTOR).smartHeight();
Requirements: jQuery 1.5+
Browser support: IE 7+, Chrome 2+, FireFox 2+, Opera 9+, Safari 4+
*/

(function($) {
    $.fn.smartHeight = function(options) {
        function find_highest(element) {
            var t = 0;
            var t_elem;
            $(element).each(function() {
                $this = $(this);
                if ($this.outerHeight() > t) {
                    t_elem = this;
                    t = $this.outerHeight();
                }
            });
            return t;
        }
        max_high = find_highest(this);
        $(this).each(function() {
            $(this).css("min-height", max_high);
        });
    };
})(jQuery);