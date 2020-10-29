const seeMenuBtn = document.getElementById('menu-button');
const menuNavigation = document.getElementById('menu-mobile');
seeMenuBtn.addEventListener('click', function() {
    console.log(1);
    menuNavigation.classList.remove('hidden');

});

const closeButton = document.getElementById('close-menu');
closeButton.addEventListener('click', function() {
    console.log (2);
    menuNavigation.classList.add('hidden');
});