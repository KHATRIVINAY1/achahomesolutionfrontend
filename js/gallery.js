const figures = document.querySelectorAll('figure')
const modal= document.querySelector('.img-modal')
const modalImage= document.querySelector('.img-modal>img')
const caption= document.querySelector('#caption')



function showDetail(e)
{
    const detail = this.querySelector('.project-detail');
    detail.style.visibility ="visible"  
}

function hideDetail(e)
{
    console.log(this)
    const detail = this.querySelector('.project-detail');
    detail.style.visibility ="hidden"  
}

figures.forEach((figure)=>{
    figure.addEventListener('mouseenter', showDetail);
    figure.addEventListener('mouseleave', hideDetail)
    figure.addEventListener('click', showModal)
})



function showModal(e)
{
    modal.style.display= "block";
    modalImage.src = this.querySelector('img').src;
    caption.innerHTML = this.querySelector('.project-detail>p').innerHTML;
}


// Get the <span> element that closes the modal
var span = document.querySelector(".close-modal-btn");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}