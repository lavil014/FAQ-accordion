const btn = document.getElementById('plus-icon');
const paragraph = document.getElementById('paragraph');

console.log(btn, paragraph)

btn.addEventListener('click', ()=>{
    paragraph.style.visibility = 'visible';
})