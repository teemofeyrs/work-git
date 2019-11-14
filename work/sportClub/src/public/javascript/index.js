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

    //random trainer face
    let url = 'https://randomuser.me/api/?results=10';
    function fetchInformation(url){

        let trainersSlider = $('#trainersSlider');
        /*let trainerCard = $('trainerCard');
        let img = $('trainerFace');
        let trainerName = $('trainerName');*/

        fetch(url)
            .then((respons) => respons.json())
            .then(function (data) {
                console.log(data);
                console.log(data.results);

                data.results.forEach(person => {
                    function createEl( elem){
                        return document.createElement(elem);
                    }
                    function appendEl(parent, elem){
                        return parent.append(elem);
                    }
                    let img = createEl('img');
                    img.src = person.picture.medium;
                    let trainerName = createEl('h4');
                        trainerName.classList.add('trainerName');
                        trainerName.innerHTML = person.name.first + ' ' + person.name.last;
                    let trainerCard = createEl('div');
                        trainerCard.classList.add('trainerCard');
                        trainerCard.append(img);
                        trainerCard.append(trainerName);
                    trainersSlider.append(trainerCard);
                });
                return trainersSlider;
            })

    }
    fetchInformation(url);

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


