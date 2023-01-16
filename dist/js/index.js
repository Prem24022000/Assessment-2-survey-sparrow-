const contentBxs = document.querySelectorAll('.enhancement__page__mid--contentBx');

contentBxs.forEach((contnetBx) => {
    contnetBx.addEventListener('click', function(){
        this.classList.toggle('active');
    })
})