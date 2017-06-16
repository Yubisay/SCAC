(function($) {
    $.fn.offCanvasFullScreenOverlay = function(opts) {
        var config = $.extend({}, {
            opt: ''
        }, opts);
        function init(obj) {
            var dObj = $(obj);
            var dMenuTrigger = dObj.find('.menu-trigger');
            var dMenuCloseBtn = dObj.find('.menu-close');
            var dNav = dObj.find('.navigation');

            dObj.addClass('on');

            dMenuTrigger.click(function(e){
                e.preventDefault();
                dNav.toggleClass('off-canvas-hide off-canvas-show');
            });

            dMenuCloseBtn.click(function(e){
                dNav.toggleClass('off-canvas-hide off-canvas-show');
            });

            $(window).resize(function() {
                if($(window).width() > 640) {
                    dNav.removeClass('off-canvas-show');
                } else {
                    dNav.addClass('off-canvas-hide');
                }
            });
        }
        this.each(function() {
            init($(this));
        });
        return this;
    };
    $(function() {
        $('.header').offCanvasFullScreenOverlay();
    });
})(jQuery);









$(document).ready(function(){

  // hide #back-top first
  $("#back-top").hide();

  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top .fi-arrow-up').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

});


jQuery(document).foundation();

