const btns = document.querySelectorAll('img');
let iconPlus = 'icon-plus.svg';
let iconMinus = 'icon-minus.svg';



btns.forEach((btn)=>{

    btn.addEventListener('click',()=>{

        const pContent = btn.nextElementSibling;


        if(btn.src.includes(iconPlus)){
            btn.src = btn.src.replace(iconPlus, iconMinus);
            pContent.style.display = 'flex';
            
        } else if(btn.src.includes(iconMinus)){
            btn.src = btn.src.replace(iconMinus,iconPlus);
            pContent.style.display = 'none';
           
        }
    })
})


