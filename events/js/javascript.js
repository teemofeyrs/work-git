var firstMenu = document.querySelector('ul');
var leftMenu = document.getElementsByClassName('left_panel clearfix');
var footerMenu = document.getElementsByClassName('menu_main menu_main_bottom clearfix');
firstMenu.addEventListener("click", eVent);
leftMenu[0].addEventListener("click", eVent);
footerMenu[0].addEventListener("click", eVent);
function eVent(e) {
    if(e.target.tagName === "A")
    alert('Вы нажали на ' + e.target.textContent);
}
var img = document.querySelector('img');
img.addEventListener("click", changeImg);
function changeImg() {
    img.src = "img/harley.jpg";
    img.removeEventListener("click",changeImg);
}