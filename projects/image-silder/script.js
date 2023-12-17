// button click
let num = 1;

function nextImg(){
    num++;
    if(num > 12){
        num = 1
    }
    document.querySelector("#largeImg").src = "img/" + num + ".jpg";
    console.log(num);
}

document.querySelector("#next").onclick = nextImg;


function prevImg() {
    num--;
    if (num < 1) {
        num = 12
    }
    document.querySelector("#largeImg").src = "img/" + num + ".jpg";
    console.log(num);
}
document.querySelector("#prev").onclick = prevImg;

// thumbnail click

function changeImg(){
    document.querySelector("#largeImg").src = this.src;
    num = Number(this.dataset.imgid) + 1;
    console.log(num);
    console.log(this.src);
}

document.querySelector("#thumbnail_1").onclick = changeImg;
document.querySelector("#thumbnail_2").onclick = changeImg;
document.querySelector("#thumbnail_3").onclick = changeImg;
document.querySelector("#thumbnail_4").onclick = changeImg;
document.querySelector("#thumbnail_5").onclick = changeImg;
document.querySelector("#thumbnail_6").onclick = changeImg;
document.querySelector("#thumbnail_7").onclick = changeImg;
document.querySelector("#thumbnail_8").onclick = changeImg;
document.querySelector("#thumbnail_9").onclick = changeImg;
document.querySelector("#thumbnail_10").onclick = changeImg;
document.querySelector("#thumbnail_11").onclick = changeImg;
document.querySelector("#thumbnail_12").onclick = changeImg;

// let allImg = document.querySelectorAll('img');
// console.log(allImg);

// for(let i=0; i < allImg.length; i++){
//     allImg.onclick = changeImg;
// }


