const berger = document.querySelector(".berger"); 
const menu = document.querySelector(".menuresponsive"); 
berger.addEventListener('click', menuToggle)
menu.addEventListener('click', closeMenu)

function menuToggle() {
        menu.classList.toggle('open');
        berger.classList.toggle('open');
}

function closeMenu() {
    menu.classList.remove('open');
    berger.classList.remove('open');
}

console.log(window.innerWidth)