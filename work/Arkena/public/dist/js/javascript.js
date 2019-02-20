$(document).ready(function() {

    // add button for menu

    $('.toogleMenu').click(function() {
        $('.toogleMenu').toggleClass('active');
        $('.menu').toggleClass('active');

    });

    //slider for stories

    $('.sliderStories').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
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

    //content slider

    $('.contentSlider').slick({
        infinite: true,
        arrows: false,
        dots: true,
    });
})