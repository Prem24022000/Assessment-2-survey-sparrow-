const contentBxs = document.querySelectorAll('.enhancement__page__mid--contentBx');

const burgerIcon = document.querySelector('.burger');

const navs = document.querySelector('.nav__items--navs');

console.log(navs);

contentBxs.forEach((contnetBx) => {
    contnetBx.addEventListener('click', function(){
        this.classList.toggle('active');
    })
})

burgerIcon.addEventListener('click', () => {
    navs.classList.toggle('active');
})