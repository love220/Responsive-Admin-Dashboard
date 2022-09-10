
// Menutoggle
let toggle = document.querySelectorAll('.toggle');
let navigation = document.querySelectorAll('.navigation');
let main = document.querySelectorAll('.main');

toggle.onclick = function () {
    navigation.classList.toggle('active');
}


//adding hovered class in selected list item
let list = document.querySelectorAll('.navigation li');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));



