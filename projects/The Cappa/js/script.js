   // sticky navbar
   window.onscroll = function (e) {
    // console.log(e);
    // console.log(window.scrollY);
    let header = document.querySelector(".header")
    header.classList.toggle("sticky", window.pageYOffset > 102);
  
    let gotoBtn = document.querySelector("#topBtn")
    gotoBtn.classList.toggle("fixBtn", window.pageYOffset > 550)
    // console.log(gotoBtn);

    let logo = document.querySelector(".logo")
    logo.classList.toggle("dark", window.pageYOffset > 102)
    logo.style.display = "block";
};



menu
function menu(){
    var showMenu = document.getElementById("menulink")
    console.log(showMenu);
    var iconBtn = document.getElementsByClassName("checkbtn")
    if(showMenu.className === "hide"){
        showMenu.className = "show"
        iconBtn[0].childNodes[1].className = "fas fa-times"
        console.log(iconBtn);
    }
    
    else if(showMenu.className === "show"){
        showMenu.className = "hide"
        iconBtn[0].childNodes[1].className = "fas fa-bars"
        // console.log(iconBtn);
    }
}
document.getElementById("check").onclick = menu;

