$(document).ready(function () {

    $('.btn-menu').on('click', function () {
        $('body, .nav, .btn-menu').toggleClass('active');
    })

    $(document).on('click', function (e) {
        if (!(($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.btn-menu').length) ||
            ($(e.target).parents('.language-form').length) ||
            ($(e.target).hasClass('btn-menu')) ||
            ($(e.target).hasClass('language__btn')) ||
            ($(e.target).hasClass('cat-item')) ||
            ($(e.target).hasClass('modal-content'))
        )) { $('body, .nav, .btn-menu, .language-form').removeClass('active'); }
    });


    /*---------------------------------------------------end*/

    $('.language__btn').on('click', function () {
        $(this).next().toggleClass('active');
    })

    /*---------------------------------------------------end*/

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 300,)
    });

    const dropdownFirst = $('.dropdown__btn')[0];
    $(dropdownFirst).toggleClass('active').next().slideToggle();

    $('.dropdown__btn').on('click', function (e) {
        if ($(this).hasClass('active')) { $('.dropdown__btn').removeClass('active').next().slideUp(); }
        else {
            $('.dropdown__btn').removeClass('active').next().slideUp();
            $(this).toggleClass('active').next().slideToggle();
        }
    })



});

