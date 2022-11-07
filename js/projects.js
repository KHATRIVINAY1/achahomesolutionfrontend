const viewMoreArray = document.querySelectorAll(".view-more-btn")


function toggleView(event){
    this.parentElement.previousElementSibling.classList.toggle('d-none')
    if(this.parentElement.previousElementSibling.classList.contains('d-none'))
    {
        this.innerHTML = `Show More Detail <i class="bi bi-chevron-down"></i>`
    }
    else{
        this.innerHTML = `Show Less<i class="bi bi-chevron-up"></i>`
    }
}

viewMoreArray.forEach((item)=>{
    item.addEventListener('click', toggleView)
})