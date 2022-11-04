// slider 
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

slides.forEach((item, index)=>{
    item.style.left = `${index*100}%`
})

let counter =0;

nextBtn.addEventListener('click',()=>{
    counter++
    carousel()
})

prevBtn.addEventListener('click', ()=>{
    counter--;
    carousel()
})

const carousel = ()=>{
    if(counter===slides.length)
    {
        counter=0;
    }
    if(counter<0){
        counter= slides.length-1;
    }
    slides.forEach((item)=>{
        item.style.transform = `translateX(-${counter * 100}%)`
    })
}