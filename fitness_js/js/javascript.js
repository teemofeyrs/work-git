var menu = document.getElementById('first_menu');
menu.removeChild(menu.childNodes[5]);

var leftPanel = document.getElementById('side');
var liSide = document.createElement('li');
liSide.innerHTML = '<a hfer="#">О Нас</a>';
leftPanel.appendChild(liSide);

var col = document.querySelector('.side_menu li a');
console.dir(col);
col.style.color = 'green';//почему-то цвет меняет первый элемент

var text = document.getElementsByTagName('p');
text[0].innerHTML = "позволяет делать что угодно с HTML-элементом и его содержимым, но для этого нужно сначала нужный элемент получить,Доступ к DOM начинается с объекта document. Из него можно добраться до любых узлов.Так выглядят основные ссылки, по которым можно переходить между узлами DOM.";//текс не изменился

var copy = document.getElementsByClassName('menu_main menu_main_bottom clearfix');
console.log(copy[0].childNodes[9].outerText);