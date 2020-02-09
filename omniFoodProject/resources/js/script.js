$(document).ready(function(){

    // sticky navigation
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px'
    });

    //scroll on buttons
    $('.js--scroll-to-plans').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });



        // sticky navigation
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '60%'
    });

    //mobile navigation

    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        nav.slideToggle(200);


        if (icon.attr("name") === "menu") {
            icon.attr("name", "close");
        } else {
            icon.attr("name", "menu");
        }

    });



    //Navigation Scroll
     function filterPath(string) {
        return string
          .replace(/^\//, '')
          .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
          .replace(/\/$/, '');
      }
      
      var locationPath = filterPath(location.pathname);
      $('a[href*="#"]').each(function () {
        var thisPath = filterPath(this.pathname) || locationPath;
        var hash = this.hash;
        if ($("#" + hash.replace(/#/, '')).length) {
          if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
            var $target = $(hash), target = this.hash;
            if (target) {
              $(this).click(function (event) {
                event.preventDefault();
                $('html, body').animate({scrollTop: $target.offset().top}, 1000, function () {
                  location.hash = target; 
                  $target.focus();
                  if ($target.is(":focus")){ //checking if the target was focused
                    return false;
                  }else{
                    $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
                    $target.focus(); //Setting focus
                  };
                });       
              });
            }
          }
        }
      });



});