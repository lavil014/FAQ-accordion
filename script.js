const btn = document.getElementById('icon');
const paragraph = document.getElementById('paragraph');
let iconPlus = 'http://127.0.0.1:5500/assets/images/icon-plus.svg';
let iconMinus = 'http://127.0.0.1:5500/assets/images/icon-minus.svg';



console.log(btn, paragraph)

btn.addEventListener('click', (e)=>{
    paragraph.style.visibility = 'visible';

    console.log(iconPlus);

})

