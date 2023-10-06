$(document).ready(function () {

    $('.btn-menu').on('click', function () {
        $('body, .nav, .btn-menu').toggleClass('active');
    });

    $(document).on('click', function (e) {
        const selectors = ['.modal-content', '.btn-menu', '.language-form', '.nav', '.language__btn', '.present', '.cat-item'];
        if (!selectors.some(selector => $(e.target).is(selector) || $(e.target).parents(selector).length)) {
            $('body, .nav, .btn-menu, .language-form').removeClass('active');
            hideModals();
        }
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

        $('[data-product-img]').hide();
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

    setTimeout(() => { $('.present').addClass('active') }, 20000);

    var timer,
        added = false;
    function toggleShowClass() {
        $('.purchase').addClass('active', added = true);
        setTimeout(() => { $('.purchase').removeClass('active') }, 10000);
    }
    $('.purchase__close').on('click', () => { $('.purchase').removeClass('active'); })
    $(document).on('mousemove', () => {
        if (!added) {
            clearTimeout(timer);
            timer = setTimeout(toggleShowClass, 10000);
        }
    });

    /*---------------------------------------------------end*/

    function hideModals() {
        $('.modal').fadeOut();
        $('.modal, body').removeClass('active');
    };

    $(function () {
        function showModal(id) {
            $('body').addClass('active');
            $(id).fadeIn(300);
        }
        $('[data-modal]').on('click', function (e) {
            e.preventDefault();
            showModal('#' + $(this).attr("data-modal"));
        });
        $('.modal__close, .modal__cancel').on('click', () => { hideModals(); });

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

