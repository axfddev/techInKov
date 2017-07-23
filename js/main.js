"use strict";
$(function() {
    svg4everybody();
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        //margin: 40,
        dotsEach: 3
    })



    // Появление кнопки наверх
    $(window).on('scroll', function (){
        $(this).scrollTop() > 100 ? $(".to-top").fadeIn() : $(".to-top").fadeOut()
    })
    // Кнопка наверх
    $('.to-top').on('click', function (){
        $('html, body').animate({ scrollTop: 0 }, 700);
    })

    // Галерея Наши работы
    var ourWorksPhotos = $('.our-works__photo')
    var mainPhotos = $('.our-works__main-photo')

    $('.our-works__photo--active').clone().removeClass().appendTo('.our-works__main-photo')

    ourWorksPhotos.on('click',function(){
        ourWorksPhotos.removeClass('our-works__photo--active')
        $(this).toggleClass('our-works__photo--active');

        mainPhotos.children().fadeOut(200);
        setTimeout(function (el) {
            mainPhotos.empty();
            $(el).clone().removeClass().css('display','none').appendTo('.our-works__main-photo').fadeIn(200);
        }, 200,$(this));




    })

    new WOW().init();
})