const openBtn=document.querySelector('.open-menu-btn');
const menu=document.querySelector('.offcanvas');
const hamburgerContainer=document.querySelector('.hamburger-menu');
const overlay = document.querySelector('#overlay'); 


function openMenu() {
    menu.classList.toggle('open');
    hamburgerContainer.classList.toggle('is-active');
    overlay.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}
function onClickOutside(event){
    if (!menu.contains(event.target) && !hamburgerContainer.contains(event.target)) {
    menu.classList.remove('open');
    overlay.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  }
}
openBtn.addEventListener('click', openMenu);

document.addEventListener('click', onClickOutside);