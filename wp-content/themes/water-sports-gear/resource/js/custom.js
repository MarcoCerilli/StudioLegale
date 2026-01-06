jQuery(function($) {

    /* -----------------------------------------
    Preloader
    ----------------------------------------- */
    $('#preloader').delay(1000).fadeOut();
    $('#loader').delay(1000).fadeOut("slow");

    /* -----------------------------------------
    Navigation
    ----------------------------------------- */
    $('.menu-toggle').click(function() {
        $(this).toggleClass('open');
    });

    /* -----------------------------------------
    Keyboard Navigation
    ----------------------------------------- */
    $(window).on('load resize', testing)

    function testing(event) {
        if ($(window).width() < 1200) {
            $('.main-navigation').find("li").last().bind('keydown', function(e) {
                if (e.shiftKey && e.which === 9) {
                    if ($(this).hasClass('focus')) {
                    }

                } else if (e.which === 9) {
                    e.preventDefault();
                    $('#masthead').find('.menu-toggle').focus();
                }                
            })
        } else {
            $('.main-navigation').find("li").unbind('keydown')
        }
    }

    testing()

    var primary_menu_toggle = $('#masthead .menu-toggle');
    primary_menu_toggle.on('keydown', function(e) {
        var tabKey = e.keyCode === 9;
        var shiftKey = e.shiftKey;

        if (primary_menu_toggle.hasClass('open')) {
            if (shiftKey && tabKey) {
                e.preventDefault();
                const $the_last_li = $('.main-navigation').find("li").last()
                $the_last_li.find('a').focus()
                if (!$the_last_li.hasClass('focus')) {

                    const $is_parent_on_top = true
                    let $the_parent_ul = $the_last_li.closest('ul.sub-menu')

                    let count = 0

                    while (!!$the_parent_ul.length) {
                        ++count

                        const $the_parent_li = $the_parent_ul.closest('li')

                        if (!!$the_parent_li.length) {
                            $the_parent_li.addClass('focus')
                            $the_parent_ul = $the_parent_li.closest('ul.sub-menu')

                            // Blur the cross
                            $(this).blur()
                            $the_last_li.addClass('focus')
                        }

                        if (!$the_parent_ul.length) {
                            break;
                        }
                    }

                }

            };
        }
    })

    /* -----------------------------------------
    Main Slider
    ----------------------------------------- */
    // Determine if the document is RTL
    var isRtl = $('html').attr('dir') === 'rtl';

    $('.banner-slider').slick({
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        nextArrow: '<button class="fas fa-angle-right slick-next"></button>',
        prevArrow: '<button class="fas fa-angle-left slick-prev"></button>',
        rtl: isRtl, // Set the rtl option
        responsive: [{
            breakpoint: 1025,
            settings: {
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
                arrows: false,
            }
        }]
    });


    /* -----------------------------------------
    Scroll Top
    ----------------------------------------- */
    var scrollToTopBtn = $('.water-sports-gear-scroll-to-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            scrollToTopBtn.addClass('show');
        } else {
            scrollToTopBtn.removeClass('show');
        }
    });

    scrollToTopBtn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    $(".input").focus(function() {
      $(".form").addClass("move");
    });
    $(".input").focusout(function() {
      $(".form").removeClass("move");
      $(".input").val("");
    });

    $(".fa-search").click(function() {
      $(".input").toggleClass("active");
      $(".form").toggleClass("active");
    });

    jQuery(".service-title h3 a").html(function(){
     var text2= jQuery(this).text().trim().split(" ");
     var las2 = text2[(text2.length-1)];
     
     if(text2.length > 1 ){
        text2.splice((text2.length-1),1)
       var updatedTex2 = `<span class='about-us-heading'>${las2}</span>`
       text2.splice((text2.length), 0, updatedTex2)
       return text2.join(" ");
     } else if(text2.length == 1 ) {
        var updatedTex2 = `<span class='about-us-heading'>${text2}</span>`
        // text2.splice((text2.length), 0, updatedTex2)
        return updatedTex2;
     }else{
       return text2.join(" ");
     }
    });
    jQuery(".banner-section.banner-style-1 .banner-single .banner-caption .banner-catption-wrapper .banner-caption-title a").html(function() {
        var textArray = jQuery(this).text().trim().split(" ");

        if (textArray.length > 3) {  // Ensure there are at least 4 words
            var fourthWord = textArray[3];
            textArray.splice(3, 1);  // Remove the fourth word

            // Wrap the fourth word in a span and insert it back into the array
            var updatedText = `<span class='banner-text'>${fourthWord}</span>`;
            textArray.splice(3, 0, updatedText);
        }

        return textArray.join(" ");
    });

    jQuery(".banner-section.banner-style-1 .banner-single .banner-caption .banner-catption-wrapper .banner-caption-title a").html(function(){
        var text2 = jQuery(this).text().trim();
        var lastLetter = text2.slice(-1);
        
        if (text2.length > 1) {
            var updatedText = text2.slice(0, -1) + `<span class='last_slide_head'>${lastLetter}</span>`;
            return updatedText;
        } else if (text2.length == 1) {
            var updatedText = `<span class='last_slide_head'>${text2}</span>`;
            return updatedText;
        } else {
            return text2;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    if (stickyHeaderSettings.isEnabled) {
        const header = document.querySelector('.sticky-header');

        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                header.classList.add('is-sticky');
            } else {
                header.classList.remove('is-sticky');
            }
        });
    }
});