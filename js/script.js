$(document).ready(function () {
    // $(".theme").click(function () {
    //     $(".hero-bg").toggleClass("dark-bg");
    //     console.log("dark bg works");
    // });

    // Progress bar animation
    if ($('.skill-bar').length > 0) {
        var waypoint = new Waypoint({
            element: document.getElementsByClassName('skill-bar'),
            handler: function (direction) {

                $('.progress-bar').each(function () {
                    var bar_value = $(this).attr('aria-valuenow') + '%';
                    $(this).animate({ width: bar_value }, { easing: 'linear' });
                });

                this.destroy()
            },
            offset: '50%'
        });
    }
});


//  Porfolio isotope and filter
$(window).on('load', function () {
    var projectIsotope = $('.project-container').isotope({
        itemSelector: '.project-item'
    });

    $('#project-filter li').on('click', function () {
        $("#project-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        console.log("works");
        projectIsotope.isotope({
            filter: $(this).data('filter')
        });
    });
});



// START PRELOADED
$(window).on("load", function () {
    function preLoader() {
        setTimeout(function () {
            $("#preloader-wapper .loader-middle").addClass("loaded");
            setTimeout(function () {
                $("#preloader-wapper").addClass("loaded");
                setTimeout(function () {
                    $("#preloader-wapper").remove();
                }, 400);
            }, 600);
        }, 1000);
    }
    preLoader();
});

// sticky navbar
window.onscroll = function () {
    let navigation = document.querySelector("#nav");
    navigation.classList.toggle("stickynav", window.scrollY > 200);
    // console.log(navigation);
}


// DARK LIGHT MODE
// let themeSwitcher = document.querySelector('#themeChanger');
// let bodyEle = document.querySelector('body');

// let savedTheme = localStorage.getItem('theme')
// // console.log(savedTheme);

// if (savedTheme) {
//     bodyEle.classList.add(savedTheme);
// }

// themeSwitcher.addEventListener('click', () => {
//     bodyEle.classList.toggle('dark-theme');
//     bodyEle.classList.toggle('light-theme');

//     let currentTheme = bodyEle.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';

//     localStorage.setItem('theme', currentTheme);
// })


// MOVING CURSOR
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
})


// CONTACT FORM VALIDATION
let userName = document.querySelector('#name');
let userEmail = document.querySelector('#email')
let userMobile = document.querySelector('#mobile');
let userMsg = document.querySelector("#message");

function formValidate() {
    if (userName.value === "") {
        document.querySelector('.nameError').innerHTML = "Please write your name";
        document.querySelector('#name').style.borderBottom = "2px solid red";
        document.querySelector('.nameerr').style.visibility = 'visible';
        document.querySelector('.namecheck').style.visibility = 'hidden';
        return false;
    }
    else {
        if (userName.value.length < 4 || userName.value.length > 20) {
            document.querySelector(".nameError").innerHTML = "**Characters must be bewtween 5 to 20";
            document.querySelector("#name").style.borderBottom = "2px solid red";
            document.querySelector('.nameerr').style.visibility = 'visible';
            document.querySelector('.namecheck').style.visibility = 'hidden';
            return false;
        }

        else {
            document.querySelector(".nameError").innerHTML = "";
            document.querySelector("#name").style.borderBottom = "2px solid seagreen";
            document.querySelector('.iconcheck').style.visibility = 'visible';
            document.querySelector('.iconerr').style.visibility = 'hidden';
        }
    }

    // Email
    if (userEmail.value === "") {
        document.querySelector('.emailError').innerHTML = "Please enter your mail ID";
        document.querySelector('#email').style.borderBottom = "2px solid red";
        document.querySelector('.emailerr').style.visibility = 'visible';
        document.querySelector('.emailcheck').style.visibility = 'hidden';
        return false;
    }
    else {
        if (userEmail.value.length < 6 || userEmail.value.length > 25) {
            document.querySelector('.emailError').innerHTML = "Email length must be bewtween 6 to 25";
            document.querySelector('#email').style.borderBottom = "2px solid red";
            document.querySelector('.emailerr').style.visibility = 'visible';
            document.querySelector('.emailcheck').style.visibility = 'hidden';
            return false;
        }
        else {
            document.querySelector('.emailError').innerHTML = "";
            document.querySelector('#email').style.borderBottom = "2px solid red";
            document.querySelector('.emailerr').style.visibility = 'hidden';
            document.querySelector('.emailcheck').style.visibility = 'visible';
        }
    }

    // Phone
    if (userMobile.value === "") {
        document.querySelector('.mobError').innerHTML = "Please enter your mobile number";
        document.querySelector('#mobile').style.borderBottom = "2px solid red";
        document.querySelector('.moberr').style.visibility = 'visible';
        document.querySelector('.mobcheck').style.visibility = 'hidden';
        return false;
    }
    else {
        document.querySelector('.mobError').innerHTML = "";
        document.querySelector('#mobile').style.borderBottom = "2px solid seagreen";
        document.querySelector('.moberr').style.visibility = 'hidden';
        document.querySelector('.mobcheck').style.visibility = 'visible';
    }

    // Message
    if (userMsg.value === "") {
        document.querySelector('.msgError').innerHTML = "This field is required";
        document.querySelector('#message').style.borderBottom = "2px solid red";
        document.querySelector('.msgerr').style.visibility = 'visible';
        document.querySelector('.msgcheck').style.visibility = 'hidden';
        return false;
    }
    else {
        document.querySelector('.msgError').innerHTML = "";
        document.querySelector('#message').style.borderBottom = "2px solid seagreen";
        document.querySelector('.msgerr').style.visibility = 'hidden';
        document.querySelector('.msgcheck').style.visibility = 'visible';
    }
}

// VALIDATION ON KEYUP
// Name
function nameonKey() {
    let userName = document.querySelector("#name").value;
    let regName = /^([a-zA-Z ]){4,25}$/;

    if (userName !== "") {

        if (userName.length < 4) {
            document.querySelector(".nameError").innerHTML = "**Name is too short";
            document.querySelector('.nameerr').style.visibility = 'visible';
            document.querySelector('.namecheck').style.visibility = 'hidden';
            document.querySelector("#name").style.borderBottom = "2px solid red";
        }

        else {
            if (userName.length > 25) {
                document.querySelector(".nameError").innerHTML = "**Characters must be bewtween 4 to 25";
                document.querySelector("#name").style.borderBottom = "2px solid red";
                document.querySelector('.nameerr').style.visibility = 'visible';
                document.querySelector('.namecheck').style.visibility = 'hidden';
            }
            else if (!regName.test(userName)) {
                document.querySelector(".nameError").innerHTML = "**Invalid name";
                document.querySelector("#name").style.borderBottom = "2px solid red";
                document.querySelector('.nameerr').style.visibility = 'visible';
                document.querySelector('.namecheck').style.visibility = 'hidden';
            }
            else {
                document.querySelector(".nameError").innerHTML = "";
                document.querySelector("#name").style.borderBottom = "2px solid seagreen";
                document.querySelector('.nameerr').style.visibility = 'hidden';
                document.querySelector('.namecheck').style.visibility = 'visible';
            }
        }

    } else {
        document.querySelector(".nameError").innerHTML = "**Please write your name";
        return false;
    }
}

// Email
function mailonKey() {
    let userEmail = document.querySelector("#email").value;
    let regEmail = /[A-Za-z0-9._-]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{3,6}$/gm;
    if (userEmail !== "") {
        if (userEmail.length <= 6) {
            document.querySelector(".emailError").innerHTML = "**The mail length is too short";
            document.querySelector('.emailerr').style.visibility = 'visible';
            document.querySelector('.emailcheck').style.visibility = 'hidden';
            document.querySelector("#email").style.borderBottom = "2px solid red";

        } else {
            if (userEmail.length > 35) {
                document.querySelector(".emailError").innerHTML = "**Characters must be bewtween 6 to 35";
                document.querySelector("#email").style.borderBottom = "2px solid red";
                document.querySelector('.emailerr').style.visibility = 'visible';
                document.querySelector('.emailcheck').style.visibility = 'hidden';
            }
            else if (!regEmail.test(userEmail)) {
                document.querySelector(".emailError").innerHTML = "**Invalid email";
                document.querySelector("#email").style.borderBottom = "2px solid red";
                document.querySelector('.emailerr').style.visibility = 'visible';
                document.querySelector('.emailcheck').style.visibility = 'hidden';
            }
            else {
                document.querySelector(".emailError").innerHTML = "";
                document.querySelector("#email").style.borderBottom = "2px solid seagreen";
                document.querySelector('.emailerr').style.visibility = 'hidden';
                document.querySelector('.emailcheck').style.visibility = 'visible';
            }
        }
    } else {
        document.querySelector(".emailError").innerHTML = "**Please enter your mail ID";
        return false;
    }
}

// Phone
function mobonKey() {
    let userMobile = document.querySelector("#mobile").value;
    let regMobile = /^[0-9]{10}$/;
    if (userMobile !== "") {
        if (!regMobile.test(userMobile)) {
            document.querySelector(".mobError").innerHTML = "**Please enter a valid number"
            document.querySelector("#mobile").style.borderBottom = "2px solid red";
            document.querySelector('.moberr').style.visibility = 'visible';
            document.querySelector('.mobcheck').style.visibility = 'hidden';
        }
        else {
            document.querySelector('.mobError').innerHTML = "";
            document.querySelector('#mobile').style.borderBottom = "2px solid seagreen";
            document.querySelector('.moberr').style.visibility = 'hidden';
            document.querySelector('.mobcheck').style.visibility = 'visible';
        }
    } else {
        document.querySelector(".mobError").innerHTML = "**Enter your mobile number";
        return false;
    }
}



