const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile-nav');
const closee = document.querySelector('.close');

console.log(menu)

menu.addEventListener('click', () => {
    mobile.classList.add('mobile-nav-active');
});

closee.addEventListener('click', () => {
    mobile.classList.remove('mobile-nav-active');
});