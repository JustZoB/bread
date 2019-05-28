$(document).ready(function() {
    function burgerMenu(selector) {
        let menu = $(selector);
        let button = $(".menu__icon");
        let button_close = $(".menu__close__icon");
        let links = menu.find(".menu__list__item");
        let overlay = menu.find(".burger-menu__overlay");

        function toggleMenu() {
            if ($(window).width() < 560) {
                menu.toggleClass("burger-menu_active");

                if (menu.hasClass("burger-menu_active")) {
                $("body").css("overflow", "hidden");
                } else {
                $("body").css("overflow", "visible");
                }
            }
        }
        button.click(toggleMenu);
        
        button_close.on("click", toggleMenu);
        links.on("click", toggleMenu);
        overlay.on("click", toggleMenu);
    }
    burgerMenu(".nav");

    
    var width = 120; 
    var count = 3; 

    var list = $('.carousel__imgs');
    var listElems = $('.carousel__imgs li');
    var position = 0;
    

    $('.prev').click (function() {
        if ($(window).width() < 640) {
            position = Math.min(position + width * count, 0);
            list.css({'margin-top' : position + 'px'});
        } 
        else {
            position = Math.min(position + width * count, 0);
            list.css({'margin-left' : position + 'px'});
        }
    });

    $('.next').click (function() {
        if ($(window).width() < 640) {
            position = Math.max(position - width * count, -width * (listElems.length - count));
            list.css({'margin-top' : position + 'px'});
        } 
        else {
            position = Math.max(position - width * count, -width * (listElems.length - count));
            list.css({'margin-left' : position + 'px'});
        }
    });
    $(window).resize(function() {
        list.css({'margin-top' : 0});
        list.css({'margin-left' : 0});
    });
});