const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

const sliderbutton = document.querySelector('.slider__button');
const slider = document.querySelector('.slider');

nav.classList.add('nav--closed');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
});

if (sliderbutton) {
    let flag = false;
    sliderbutton.addEventListener('click', () => {
        if (!flag) {
            slider.classList.add('slider--after');
            flag = true;
        } else {
            slider.classList.toggle('slider--after');
            slider.classList.toggle('slider--before');
        }
    }
    )
}