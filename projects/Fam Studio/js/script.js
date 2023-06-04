// go to top
window.onscroll = () => {
    let navigation = document.querySelector("#nav");
    navigation.classList.toggle("stickynav", window.scrollY > 200);

    let gotoBtn = document.querySelector("#topBtn")
    gotoBtn.classList.toggle("fixBtn", window.pageYOffset > 600)
}

// menu
function menu() {
    let showMenu = document.getElementById("menulink")
    let iconBtn = document.getElementsByClassName("check")
    if (showMenu.className === "hide") {
        showMenu.className = "show"
        iconBtn[0].childNodes[1].className = "fas fa-times"
        console.log(iconBtn);
    }

    else if (showMenu.className === "show") {
        showMenu.className = "hide"
        iconBtn[0].childNodes[1].className = "fas fa-bars"
    }
}
document.getElementById("checkbtn").onclick = menu;


// dark - light Mode
const darkBtn = document.querySelector('#icon');
const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('dark-theme')
    console.log(bodyEl);
}

darkBtn.addEventListener('click', () => {
    // Get the value of the "dark" item from the local storage on every click
    setDarkMode = localStorage.getItem('dark-theme');

    if (setDarkMode !== "on") {
        darkMode();
        // Set the value of the itwm to "on" when dark mode is on
        setDarkMode = localStorage.setItem('dark-theme', 'on');
    } else {
        darkMode();
        // Set the value of the item to  "null" when dark mode if off
        setDarkMode = localStorage.setItem('dark-theme', null);
    }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark-theme');

// Check dark mode is on or off on page reload
if (setDarkMode === 'on') {
    darkMode();
}

// sign up form validation
var userName = document.querySelector("#username");
var userMail = document.querySelector("#usermail");
var userMob = document.querySelector("#usermob");
var userSub = document.querySelector("#usersubject");
var msgErr = document.querySelector("#msg-Err");


function formValidate() {
    // console.log(data);
    //name
    if (userName.value === "") {
        document.querySelector(".nameError").innerHTML = "**Please write your name";
        document.querySelector("#username").style.border = "1px solid red";
        document.querySelector('.nameerr').style.visibility = 'visible';
        document.querySelector('.namecheck').style.visibility = 'hidden';
        return false;
    }
    if (userName.value.length < 4 || userName.value.length > 20) {
        document.querySelector(".nameError").innerHTML = "**Characters must be bewtween 5 to 20";
        document.querySelector("#username").style.border = "1px solid red";
        document.querySelector('.nameerr').style.visibility = 'visible';
        document.querySelector('.namecheck').style.visibility = 'hidden';
        return false;
    }
    else {
        document.querySelector(".nameError").innerHTML = "";
        document.querySelector("#username").style.border = "1px solid seagreen";
        document.querySelector('.iconcheck').style.visibility = 'visible';
        document.querySelector('.iconerr').style.visibility = 'hidden';
    }

    // email
    if (userMail.value === "") {
        document.querySelector(".mailError").innerHTML = "**Please enter your mail ID";
        document.querySelector("#usermail").style.border = "1px solid red";
        document.querySelector('.mailerr').style.visibility = 'visible';
        document.querySelector('.mailcheck').style.visibility = 'hidden';
        return false;
    }
    if (userMail.value.length < 7 || userMail.value.length > 25) {
        document.querySelector(".mailError").innerHTML = "**Invalid email";
        document.querySelector("#usermail").style.border = "1px solid red";
        document.querySelector('.mailerr').style.visibility = 'visible';
        document.querySelector('.mailcheck').style.visibility = 'hidden';
        return false;
    }
    else {
        document.querySelector(".mailError").innerHTML = "";
        document.querySelector("#usermail").style.border = "1px solid seagreen";
        document.querySelector('.mailcheck').style.visibility = 'visible';
        document.querySelector('.mailerr').style.visibility = 'hidden';
    }

    // number
    if (userMob.value === "") {
        document.querySelector(".mobError").innerHTML = "**Enter your mobile number";
        document.querySelector("#usermob").style.border = "1px solid red";
        document.querySelector('.moberr').style.visibility = 'visible';
        document.querySelector('.mobcheck').style.visibility = 'hidden';
        return false;
    }

    else {
        if (userMob.value.length <= 9) {
            document.querySelector(".mobError").innerHTML = "**Enter valid number"
            document.querySelector('.moberr').style.visibility = 'visible';
            document.querySelector('.mobcheck').style.visibility = 'hidden';
            document.querySelector("#usermob").style.border = "1px solid red";
            return false;
        }
        if (isNaN(userMob.value)) {
            document.querySelector(".mobError").innerHTML = "**Only numbers allowed";
            document.querySelector("#usermob").style.border = "1px solid red";
            document.querySelector('.moberr').style.visibility = 'visible';
            document.querySelector('.mobcheck').style.visibility = 'hidden';
            return false;
        }
        else {
            document.querySelector(".mobError").innerHTML = "";
            document.querySelector("#usermob").style.border = "1px solid seagreen";
            document.querySelector('.mobcheck').style.visibility = 'visible';
            document.querySelector('.moberr').style.visibility = 'hidden';
        }
    }

    // subject
    if (userSub.value === "") {
        document.querySelector(".subjectError").innerHTML = "**Write your subject";
        document.querySelector("#usersubject").style.border = "1px solid red";
        document.querySelector('.suberr').style.visibility = 'visible';
        document.querySelector('.subcheck').style.visibility = 'hidden';
        return false;
    }
    else {
        document.querySelector(".subjectError").innerHTML = "";
        document.querySelector("#usersubject").style.border = "1px solid seagreen";
        document.querySelector('.subcheck').style.visibility = 'visible';
        document.querySelector('.suberr').style.visibility = 'hidden';
    }
}

document.querySelector("#submitbtn").onclick = formValidate;

// OnKeyup

function nameOnKey() {
    var userName = document.querySelector("#username").value;

    if (userName !== "") {

        if (userName.length < 4) {
            document.querySelector(".nameError").innerHTML = "**Name is too short";
            document.querySelector('.nameerr').style.visibility = 'visible';
            document.querySelector('.namecheck').style.visibility = 'hidden';
            document.querySelector("#username").style.border = "1px solid red";
        }

        else {
            if (userName.length > 20) {
                document.querySelector(".nameError").innerHTML = "**Characters must be bewtween 5 to 20";
                document.querySelector("#username").style.border = "1px solid red";
                document.querySelector('.nameerr').style.visibility = 'visible';
                document.querySelector('.namecheck').style.visibility = 'hidden';
            }
            else {
                document.querySelector(".nameError").innerHTML = "";
                document.querySelector("#username").style.border = "1px solid seagreen";
                document.querySelector('.nameerr').style.visibility = 'hidden';
                document.querySelector('.namecheck').style.visibility = 'visible';
            }
        }

    } else {
        document.querySelector(".nameError").innerHTML = "**Please write your name";
        return false;
    }
}

function mailOnKey() {
    var userMail = document.querySelector("#usermail").value;
    if (userMail !== "") {
        if (userMail.length <= 6) {
            document.querySelector(".mailError").innerHTML = "**The mail length is too short";
            document.querySelector('.mailerr').style.visibility = 'visible';
            document.querySelector('.mailcheck').style.visibility = 'hidden';
            document.querySelector("#usermail").style.border = "1px solid red";

        } else {
            if (userMail.length > 25) {
                document.querySelector(".mailError").innerHTML = "**Invalid email";
                document.querySelector("#usermail").style.border = "1px solid red";
                document.querySelector('.mailerr').style.visibility = 'visible';
                document.querySelector('.mailcheck').style.visibility = 'hidden';
            }
            else {
                document.querySelector(".mailError").innerHTML = "";
                document.querySelector("#usermail").style.border = "1px solid seagreen";
                document.querySelector('.mailerr').style.visibility = 'hidden';
                document.querySelector('.mailcheck').style.visibility = 'visible';
            }
        }
    } else {
        document.querySelector(".mailError").innerHTML = "**Please enter your mail ID";
        return false;
    }
}

function mobOnKey() {
    var userMob = document.querySelector("#usermob").value;
    if (userMob !== "") {
        if (userMob.length <= 9) {
            document.querySelector(".mobError").innerHTML = "**Number must be in 10 digits"
            document.querySelector('.moberr').style.visibility = 'visible';
            document.querySelector('.mobcheck').style.visibility = 'hidden';
            document.querySelector("#usermob").style.border = "1px solid red";
        }
        else {
            if (isNaN(userMob)) {
                document.querySelector(".mobError").innerHTML = "**Please enter valid number";
                document.querySelector("#usermob").style.border = "1px solid red";
                document.querySelector('.mobnerr').style.visibility = 'visible';
                document.querySelector('.mobcheck').style.visibility = 'hidden';
            }
            else {
                document.querySelector(".mobError").innerHTML = "";
                document.querySelector("#usermob").style.border = "1px solid seagreen";
                document.querySelector('.moberr').style.visibility = 'hidden';
                document.querySelector('.mobcheck').style.visibility = 'visible';
            }
        }
    } else {
        document.querySelector(".mobError").innerHTML = "**Enter your mobile number";
        return false;
    }
}

function subOnKey() {
    var userSub = document.querySelector("#usersubject").value;
    if (userSub !== "") {
        if (userSub.length <= 8) {
            document.querySelector(".subjectError").innerHTML = "Subject is short";
            document.querySelector("#usersubject").style.border = "1px solid red";
            document.querySelector('.suberr').style.visibility = 'visible';
            document.querySelector('.subcheck').style.visibility = 'hidden';
        }
        else {
            document.querySelector(".subjectError").innerHTML = "";
            document.querySelector("#usersubject").style.border = "1px solid seagreen";
            document.querySelector('.suberr').style.visibility = 'hidden';
            document.querySelector('.subcheck').style.visibility = 'visible';
        }
    }
}

function formMsg() {
    var userMsg = document.querySelector("#contact-msg").value;
    var requiredMsg = 35;
    var leftWord = requiredMsg - userMsg.length;

    if (leftWord > 0) {
        document.querySelector(".msg-Err").innerHTML = leftWord + " More characters required";
        return false;
    }
    else {
        document.querySelector(".msg-Err").innerHTML = "valid";
        return true;
    }
}




