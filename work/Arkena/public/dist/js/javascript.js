$(document).ready(function() {
    $('.toogleMenu').click(function() {
        $('.toogleMenu').toggleClass('active');
        $('.menu').toggleClass('active');

    });
    $('.sliderStories').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 850,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.contentSlider').slick({
        infinite: true,
        arrows: false,
        dots: true,
    });
})