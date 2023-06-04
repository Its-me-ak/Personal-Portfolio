var userName = document.querySelector("#username");
var userMail = document.querySelector("#usermail");
var userMob = document.querySelector("#usermob");
var userPass = document.querySelector("#userpass");
var userCpass = document.querySelector("#usercpass");
console.log(userName);


function nameValidate() {
    // console.log(data);
    //name
    if (userName.value === "") {
        document.querySelector(".nameError").innerHTML = "**Please write your name";
        console.log('.nameError');
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

    //phone
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
            document.querySelector('.mobnerr').style.visibility = 'visible';
            document.querySelector('.mobcheck').style.visibility = 'hidden';
            return false;
        }
        else{
            document.querySelector(".mobError").innerHTML = "";
            document.querySelector("#usermob").style.border = "1px solid seagreen";
            document.querySelector('.mobcheck').style.visibility = 'visible';
            document.querySelector('.moberr').style.visibility = 'hidden';
        }
    }
    console.log(userMob);
    // password
    if (userPass.value === "") {
        document.querySelector(".passError").innerHTML = "**Enter your password";
        document.querySelector("#userpass").style.border = "1px solid red";
        document.querySelector('.passerr').style.visibility = 'visible';
        document.querySelector('.passcheck').style.visibility = 'hidden';
        return false;
    }
    else {
        document.querySelector(".passError").innerHTML = "";
        document.querySelector("#userpass").style.border = "1px solid seagreen";
        document.querySelector('.passcheck').style.visibility = 'visible';
        document.querySelector('.passerr').style.visibility = 'hidden';
    }

    // confirm password
    if (userCpass.value === "") {
        document.querySelector(".cnfpassError").innerHTML = "**Confirm your password";
        document.querySelector("#usercpass").style.border = "1px solid red";
        document.querySelector('.cpasserr').style.visibility = 'visible';
        document.querySelector('.cpasscheck').style.visibility = 'hidden';
        return false;
    }
    else {
        if (userCpass.value.length !== userPass.value.length) {
            document.querySelector(".cnfpassError").innerHTML = "**Password not match";
            document.querySelector("#usercpass").style.border = "1px solid red";
            document.querySelector('.cpasserr').style.visibility = 'visible';
            document.querySelector('.cpasscheck').style.visibility = 'hidden';
            return false;
        }
        else {
            document.querySelector(".passError").innerHTML = "";
            document.querySelector("#userpass").style.border = "1px solid seagreen";
            document.querySelector('.cpasscheck').style.visibility = 'visible';
            document.querySelector('.cpasserr').style.visibility = 'hidden';
        }
    }
}

// document.querySelector("#submitbtn").onclick = nameValidate;

function nameonKey() {
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

function mailonKey() {
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

function mobonKey() {
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

function passonKey() {
    var userPass = document.querySelector("#userpass").value;
    if (userPass !== "") {
        if (userPass.length <= 7) {
            document.querySelector(".passError").innerHTML = "**Your password is weak"
            document.querySelector('.passerr').style.visibility = 'visible';
            document.querySelector('.passcheck').style.visibility = 'hidden';
            document.querySelector("#userpass").style.border = "1px solid red";
        }
        else {
            document.querySelector(".passError").innerHTML = ""
            document.querySelector('.passcheck').style.visibility = 'visible';
            document.querySelector('.passerr').style.visibility = 'hidden';
            document.querySelector("#userpass").style.border = "1px solid seagreen";
        }
    } else {
        document.querySelector(".passError").innerHTML = "**Enter your password";
        return false;
    }
}

function cpassonKey() {
    var userCpass = document.querySelector("#usercpass").value;
    var userPass = document.querySelector("#userpass").value;
    if (userCpass !== "") {
        if (userCpass.length !== userPass.length) {
            document.querySelector(".cnfpassError").innerHTML = "Password not match";
            document.querySelector("#usercpass").style.border = "1px solid red";
            document.querySelector('.cpasserr').style.visibility = 'visible';
            document.querySelector('.cpasscheck').style.visibility = 'hidden';
        }
        else {
            if (userCpass.length == userPass.length) {
                document.querySelector(".cnfpassError").innerHTML = "";
                document.querySelector("#usercpass").style.border = "1px solid seagreen";
                document.querySelector('.cpasserr').style.visibility = 'hidden';
                document.querySelector('.cpasscheck').style.visibility = 'visible';
            }
        }
    } else {
        document.querySelector(".cpassError").innerHTML = "**Confirm your password";
        return false;
    }
}

