$(document).ready(function () {

    $('.btn-menu').on('click', function () {
        $('body, .nav, .btn-menu').toggleClass('active');
    });

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

    $('.products-slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '10px',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true
                }
            },
        ]
    });

    /*---------------------------------------------------end*/


    function productSelect(item) {
        var cardHeading = $('.card__heading'),
            cardPrice = $('.card__price'),
            cardtValue = $(item).attr('data-product');

        $('[data-product-img').hide();
        $('[data-product-img="' + cardtValue + '"]').fadeIn();
        $(item).hasClass('label') ? textReplace($(item)) : textReplace($('[for="' + cardtValue + '"]'));

        function textReplace(parent) {
            $('[for]').prop('checked', false);
            parent.prev().prop('checked', true);
            cardHeading.text(parent.find('.heading').text());
            cardPrice.html(parent.find('.price').html())
        }
    }
    productSelect($('.card-nav__item.active'));
    $('[data-product]').on('click', function (e) { productSelect(this); })


    /*---------------------------------------------------end*/

    $('.language__btn').on('click', function () {
        $(this).next().toggleClass('active');
    });

    /*---------------------------------------------------end*/

    $(document).one('mousemove', function () {
        let timer;
        let added = false;

        function toggleShowClass() {
            $('.purchase').toggleClass('active', added = !added);
            added == false ? $('.purchase').remove() : false;
        }
        $(document).on('mousemove', () => {
            clearTimeout(timer);
            timer = setTimeout(toggleShowClass, 10000);
        });
    });
    /*---------------------------------------------------end*/

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 300,)
    });

    /*---------------------------------------------------end*/
    const dropdownFirst = $('.dropdown__btn')[0];
    $(dropdownFirst).toggleClass('active').next().slideToggle();

    $('.dropdown__btn').on('click', function (e) {
        if ($(this).hasClass('active')) { $('.dropdown__btn').removeClass('active').next().slideUp(); }
        else {
            $('.dropdown__btn').removeClass('active').next().slideUp();
            $(this).toggleClass('active').next().slideToggle();
        }
    });


});

