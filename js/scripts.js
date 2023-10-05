$(document).ready(function () {

    $('.btn-menu').on('click', function () {
        $(this).toggleClass('active');
        $('header, body, nav').toggleClass('actives');
    })


    /*---------------------------------------------------end*/

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 40, }, 300,)
    })



});

