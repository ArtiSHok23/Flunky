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

const slides = document.querySelectorAll('.slide');

for(const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}

function validForm() {
    let nam = document.forms[myForm][name].value;
    if (nam == '') {
        alert('Введите имя!');
    }
}