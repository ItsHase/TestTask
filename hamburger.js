const hamburger = document.querySelector('.hamburger');
const topBar = document.querySelector('.hamburger-bar-top');
const middleBar = document.querySelector('.hamburger-bar-middle');
const downBar = document.querySelector('.hamburger-bar-down');
const mobileNav = document.querySelector('.mobile-nav-bar');

hamburger.addEventListener('click', () => {
    topBar.classList.toggle('hamburger-bar-top-animation');
    middleBar.classList.toggle('hamburger-bar-middle-animation');
    downBar.classList.toggle('hamburger-bar-down-animation');
    mobileNav.classList.toggle('mobile-nav-drawer');
});