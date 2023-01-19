const contentBxs = document.querySelectorAll('.enhancement__page__mid--contentBx');

const burgerIcon = document.querySelector('.burger');

const navs = document.querySelector('.nav__items--navs');



contentBxs.forEach((contnetBx) => {
    contnetBx.addEventListener('click', function(){

        this.classList.toggle('active');

        const content = contnetBx.children[1];

        if(contnetBx.classList.contains('active')){
            content.style.maxHeight = content.scrollHeight + 'px';
        }else{
            content.style.maxHeight = 0;
        }
    })
})

burgerIcon.addEventListener('click', () => {
    navs.classList.toggle('active');
})