const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const iconBars = document.getElementById('fontAwesomeIcon');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

iconBars.addEventListener('click', () => {
    iconBars.classList.remove('fa-bars');
    iconBars.classList.add('fa-xmark');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    if (wrapper.classList.contains('active')) {
        wrapper.classList.remove('active');
    };
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        if ($(window).width() < 768) {
            $('.navbar').css('background','');
        } else {
            $('.navbar').css('background','none');
        }
    } else {
        $('.navbar').css('background','');
    }
});