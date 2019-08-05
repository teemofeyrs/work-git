$(document).ready(function() {
   /*slow scroll*/
    $('.listNav').click(function(e) {
        var listItem = $(this).attr('href');
     $("html, body").animate({
            scrollTop: $(listItem).offset().top
        }, 1000);
        e.preventDefault();
    });
});
