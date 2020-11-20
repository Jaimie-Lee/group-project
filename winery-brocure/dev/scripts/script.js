//hamburger menu
$(function () {
    function slideMenu() {
        var activeState = $("#menu-container .menu-list").hasClass("active");
        $("#menu-container .menu-list").animate({ left: activeState ? "0%" : "-100%" }, 400);
    }
    $("#menu-wrapper").click(function (event) {
        event.stopPropagation();
        $("#hamburger-menu").toggleClass("open");
        $("#menu-container .menu-list").toggleClass("active");
        slideMenu();

        $("body").toggleClass("overflow-hidden");
    });

    $(".menu-list").find(".accordion-toggle").click(function () {
        $(this).next().toggleClass("open").slideToggle("fast");
        $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

        $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
        $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
}); // jQuery load

//Check to see if the window is top if not then display button
//& change header height and logo size
$(window).scroll(function () {

    var height = $(window).scrollTop();

    if (height > 100) {

        $('.go-to-up').fadeIn();
        $('.full-site').css('height', '100px');
        $('.header-logo img').attr('src', 'images/white-logo-medium.png');
        $('.menu-has-children').mouseenter(function () {
            $('.sub-menu').css('background', '#f5f5f5');
        });

    } else {

        $('.go-to-up').fadeOut();
        $('.full-site').css('height', '200px');
        $('.header-logo img').attr('src', 'images/white-logo.png');
        $('.menu-has-children').mouseenter(function () {
            $('.sub-menu').css('background', '#fff');
        });
    }
});

//When clicked g-oup-to button
$(document).ready(function () {
    $(".go-to-up").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

