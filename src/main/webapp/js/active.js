(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#egamesNav').classyNav();
    }

    // :: 3.0 Sticky Active Code
    if ($.fn.sticky) {
        $("#sticker").sticky({
            topSpacing: 0
        });
    }

    // :: 4.0 Video Active Code
    if ($.fn.magnificPopup) {
        $('.play-button').magnificPopup({
            type: 'iframe'
        });
    }

    // :: 5.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-post-slides');
        var popularSlide = $('.popular-games-slideshow');
        var latestSlide = $('.latest-games-slideshow');
        var editorSlide = $('.editor-games-slideshow');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['Prev Game', 'Next Game'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        popularSlide.owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            center: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });

        latestSlide.owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            center: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });

        editorSlide.owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            center: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });
    }

    // :: 6.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 7.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // :: 8.0 Prevent Default a Click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // :: 9.0 Wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

    // :: 10.0 barfiller Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            barColor: '#20d8da',
            duration: 5000
        });
        $('#bar2').barfiller({
            barColor: '#20d8da',
            duration: 5000
        });
        $('#bar3').barfiller({
            barColor: '#20d8da',
            duration: 5000
        });
        $('#bar4').barfiller({
            barColor: '#20d8da',
            duration: 5000
        });
    }

    // :: 11.0 niceScroll Active Code
    if ($.fn.niceScroll) {
        $(".egames-nav-btn").niceScroll({
            cursorborder: "none",
            cursorcolor: "#20d8da",
            scrollspeed: 200
        });
    }

    function innerData(data){
        var strDataData = ''
        try{
            var gropData = JSON.parse(data);
            gropData = Array.from(gropData.data);
            gropData.map(function(item,index){
                strDataData += `<div class="single-game-review-area d-flex flex-wrap mb-30">
                <div class="game-thumbnail">
                        <img src="${item[index].img_path}" alt="">
                    </div>
                    <div class="game-content">
                        <span class="game-tag">${item[index].gamename}</span>
                        <a href="single-game-review.html" class="game-title">${item[index].now_price}</a>
                        <div class="game-meta">
                            <a href="#" class="game-date">${item[index].origin_price}</a>
                            <a href="#" class="game-comments">${item[index].discount}</a>
                        </div>
                        <p>${item[index].desc}</p>
                        
                        <div class="download-rating-area d-flex align-items-center justify-content-between">
                            <div class="download-area">
                                <a href="#"><img src="img/core-img/app-store.png" alt=""></a>
                                <a href="#"><img src="img/core-img/google-play.png" alt=""></a>
                            </div>
                            <div class="rating-area text-center">
                                <h3>9.1</h3>
                                <div class="stars">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            })
        
            $('.game-review-area .container .row .col-12').html(strDataData);
        }catch(e){
            console.log('传JSON格式');
        }
    }

        $.ajax({
            type: "get",//请求类型
            url: "/searchGames",//请求地址
            // async:false,
            dataType: 'json',
            data : {data:window.location.search.substr(1)},
            contentType:"application/json",
            success:function(data){
                innerData(data);
            }
        })

})(jQuery);