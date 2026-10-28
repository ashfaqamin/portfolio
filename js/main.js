(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 31
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }

    });  

})(jQuery); // End of use strict


$.fn.moveIt = function(){
            var $window = $(window);
            var instances = [];

            $(this).each(function(){
                instances.push(new moveItItem($(this)));
            });

            window.onscroll = function(){
                var scrollTop = $window.scrollTop();
                instances.forEach(function(inst){
                  inst.update(scrollTop);
                });
            }
        }

        var moveItItem = function(el){
            this.el = $(el);
            this.speed = parseInt(this.el.attr('data-scroll-speed'));
        };

        moveItItem.prototype.update = function(scrollTop){
        var pos = scrollTop / this.speed;
        this.el.css('transform', 'translateY(' + -pos + 'px)');
        };

        $(function(){
        $('[data-scroll-speed]').moveIt();
        });
