// fixed menu and go to top
window.onscroll = () => {
    let header  = document.querySelector("#header");
    header.classList.toggle("stickyheader", window.scrollY > 200);

    let gotoBtn = document.querySelector("#topBtn")
    gotoBtn.classList.toggle("fixBtn", window.pageYOffset > 400)
}
