import addButton from './module';

const hello = name => console.log(`Heloo ${name}`);
hello('Artem');
hello('world');

addButton();

$(document).ready(function () {
    //arrow in header
    $('#arrowDown').on('click', function (e) {
        e.preventDefault();
        let screenTop = document.documentElement.clientHeight;
        $("html, body").animate({ scrollTop: `${screenTop}` }, 600);
    });
    //section social, arrow in subMenu
    $('.drop').on('click', function (e) {
        e.preventDefault();
        $('.drop').toggleClass('submenu')
    });

    /*init tooltips */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});

/* video muted*/
const videoCam1 = document.getElementById("videoCam1");
videoCam1.muted = true;
videoCam1.autoplay = true;
const videoCam2 = document.getElementById("videoCam2");
videoCam2.muted = true;
videoCam2.autoplay = true;
const videoCam3 = document.getElementById("videoCam3");
videoCam3.muted = true;
videoCam3.autoplay = true;

//random trainer face
$(document).ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        $('trainerFace').attr('src', data.results['0'].picture.medium);
        $('rainerName').valueOf(data.results['0'].name);
    }
});