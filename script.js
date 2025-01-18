const btns = document.querySelectorAll('img');
let iconPlus = 'icon-plus.svg';
let iconMinus = 'icon-minus.svg';


btns.forEach((btn)=>{

    btn.addEventListener('click',()=>{

        const pContent = btn.nextElementSibling;
        let headings = document.querySelectorAll('.headings');

        let faqItem = btn.parentElement;
        let paragraphs = faqItem.nextElementSibling;

        if(btn.src.includes(iconPlus)){
            btn.src = btn.src.replace(iconPlus, iconMinus);
            paragraphs.style.display = 'flex';
            
        } else if(btn.src.includes(iconMinus)){
            btn.src = btn.src.replace(iconMinus,iconPlus);
            paragraphs.style.display = 'none';
        }
    })
})


