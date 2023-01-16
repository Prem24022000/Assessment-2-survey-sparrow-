const expands = document.querySelectorAll('.expand');
const enhancementParagraphs = document.querySelector('.enhancement__page__mid--paragraph');

let value = false;

expands.forEach((expand) => {
    expand.addEventListener('click', (e) => {
        e.preventDefault();

        const paragraph = e.target.parentElement.nextElementSibling;
    
        if(!value){
            e.target.innerText = '-';
            value = true;
            paragraph.classList.add('paragraph');
        }else{
            e.target.innerText = '+';
            value = false;
            paragraph.classList.remove('paragraph');

        }
    })
})



