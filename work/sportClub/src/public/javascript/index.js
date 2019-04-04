import addButton from './module';

const hello = name => console.log(`Heloo ${name}`);
hello('Artem');
hello('world');

addButton();

$(document).ready(function () {
    $('#arrowDown').on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 800}, 600);
    });

    $('.drop').on('click', function (e) {
        e.preventDefault();
        $('.drop').toggleClass('submenu')
    });

});