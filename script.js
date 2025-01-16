const btns = document.querySelectorAll('img');
let iconPlus = 'http://127.0.0.1:5500/assets/images/icon-plus.svg';
let iconMinus = 'http://127.0.0.1:5500/assets/images/icon-minus.svg';



console.log(btns.length)

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        

        if(btn.src === iconPlus){
            btn.src = iconMinus;
            paragraph.style.visibility = 'visible';
        } else{
            btn.src = iconPlus;
            paragraph.style.visibility = 'hidden';
        }
    })
})


