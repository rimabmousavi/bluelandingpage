const openBtn=document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const menu=document.querySelector('.offcanvass');
const hamburgerContainer=document.querySelector('.hamburger-menu');
const overlay = document.querySelector('#overlay'); 


function openMenu() {
    menu.classList.add('open');
    hamburgerContainer.classList.add('is-active');
    overlay.classList.remove('hidden');
}

function closeMenu() {
    menu.classList.remove('open');
    hamburgerContainer.classList.remove('is-active');
    overlay.classList.add('hidden');
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click',closeMenu);