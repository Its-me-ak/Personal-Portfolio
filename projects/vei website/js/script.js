window.onscroll = ()=>{
    let goToTopBtn = document.querySelector("#topBtn")
    goToTopBtn.classList.toggle("fixBtn", window.scrollY > 400)
}