const hamburger = document.querySelector('.header__hamburger');
const listItems = document.querySelector('.header__list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    listItems.classList.toggle('active');
})

