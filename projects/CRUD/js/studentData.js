var studentDetails = [
    { name: "John Doe", mail: "jd@gmail.com", password: "john@123", gender: "Male", address: "America", course: "BCA", age: "21 Years", mobile: "9088771234", roll_no: 456987, dob:"10-08-2000" },
    { name: "Monica", mail: "monica@gmail.com", password: "monica@1111", gender: "Female", address: "New Zealand", course: "BBA", age: "20 Years", mobile: "9918795213", roll_no: 456123 , dob:"27-06-2001" },
    { name: "Chris Evans", mail: "ce@gmail.com", password: "evans@786", gender: "Male", address: "England", course: "MCA", age: "25 Years", mobile: "9888771999", roll_no: 123907, dob:"04-11-1996" },
    { name: "Elizabeth Jane", mail: "jf@01gmail.com", password: "jane@0000", gender: "Female", address: "Russia", course: "MBBS", age: "23 Years", mobile: "9600881234", roll_no: 471987, dob:"18-12-1998" },
    { name: "Rachel Frost", mail: "rachel@gmail.com", password: "frost@123", gender: "Female", address: "Germany", course: "MBA", age: "26 Years", mobile: "9000779999", roll_no: 478980 , dob:"11-01-1996"},
    { name: "Kapil Singh", mail: "kp@gmail.com", password: "kapil@777", gender: "Male", address: "India", course: "B-Tech", age: "24 Years", mobile: "7298701234", roll_no: 452888 , dob:"07-07-1997"},
    { name: "Stuart Clark", mail: "sc@120gmail.com", password: "sclark@110", gender: "Male", address: "Australia", course: "B-Com", age: "19 Years", mobile: "9122107234", roll_no: 486007, dob:"22-05-2002" }
]
// console.log(studentDetails);

function printStudentRecord(dataFound = studentDetails) {
    var studentOutput = "";
    for (var i = 0; i < dataFound.length; i++) {
        studentOutput += `<tr>
        <td>${i + 1}</td>
        <td>${dataFound[i]["name"]}</td>
        <td>${dataFound[i]["mail"]}</td>
        <td>${dataFound[i]["password"]}</td>
        <td>${dataFound[i]["gender"]}</td>
        <td>${dataFound[i]["address"]}</td>
        <td>
            <button type="button" id="${i}" value="Edit" class="editbtn" onclick= "editStudentData(this.id);">Edit</button>
            <button type="button"  id="${i}" value="view" class="viewbtn" onclick="viewStudentData(this.id);">VIew</button>
            <button type="button" id="${i}" value="delete" class="delbtn" onclick= "dltStudentdata(this.id);">Delete</button>
        </td>
        </tr>`
    }
    if(studentOutput!==""){
        document.querySelector("#tablebodyData").innerHTML = studentOutput;
    }else{
        document.querySelector("#tablebodyData").innerHTML = "search data missing";
    }
}
printStudentRecord();

// popup visible
function viewPopup() {
    document.querySelector("form").style.visibility = "visible";
}

// close popup
function closePopup() {
    document.querySelector("form").style.visibility = "hidden"
}

// add student name
function addStudentName(form) {
    console.log(form);
    var studentName = form.studName.value;
    var studentMail = form.studMail.value;
    var studentPassword = form.studPass.value;
    var studentGender = form.studGender.value;
    var studentAddress = form.studAddress.value;
    var studentCourse = form.studCourse.value;
    var studentAge = form.studAge.value;
    var studentMob = form.studMob.value;
    var studentRollNum = form.studRollNum.value;
    var studentDob = form.studDob.value;

    newUser = {
        name: studentName, mail: studentMail, password: studentPassword, gender: studentGender, address: studentAddress, course:studentCourse, age:studentAge, mobile:studentMob, roll_no:studentRollNum, dob:studentDob
    };
    studentDetails.push(newUser);
    // console.log(newUser);
    form.reset();
    document.querySelector("form").style.visibility = "hidden";
    printStudentRecord();
    return false;
}

// delete studeent data
function dltStudentdata(id) {
    if (confirm("Are you sure?")) {
        studentDetails.splice(id, 1);
    }
    // console.log(id);
    printStudentRecord();
}

// view remaining data of student
function viewStudentData(id) {
    document.querySelector("#viewStudData").style.visibility = "visible";
    document.querySelector("#viewStudCourse").value = studentDetails[id]["course"]
    document.querySelector("#viewStudAge").value = studentDetails[id]["age"]
    document.querySelector("#viewStudPhone").value = studentDetails[id]["mobile"]
    document.querySelector("#viewStudRollNum").value = studentDetails[id]["roll_no"]
    document.querySelector("#viewStudDob").value = studentDetails[id]["dob"]
}

// close remaining data of student
function closeStudentData() {
    document.querySelector("#viewStudData").style.visibility = "hidden"
}
document.querySelector("#viewStudbtn").onclick = closeStudentData;

// Edit student data
function editStudentData(id) {
    document.querySelector("#editStudentData").style.visibility = "visible";

    document.querySelector("#updateStudentName").dataset.studentDetails = id;

    // getting student data
    document.querySelector("#editStudName").value = studentDetails[id]["name"];
    document.querySelector("#editStudMail").value = studentDetails[id]["mail"];
    document.querySelector("#editStudPass").value = studentDetails[id]["password"];
    document.querySelector("#editStudGender").value = studentDetails[id]["gender"];
    document.querySelector("#editStudAddress").value = studentDetails[id]["address"];
    document.querySelector("#editStudCourse").value = studentDetails[id]["course"];
    document.querySelector("#editStudAge").value = studentDetails[id]["age"];
    document.querySelector("#editStudMob").value = studentDetails[id]["mobile"];
    document.querySelector("#editStudRollNum").value = studentDetails[id]["roll_no"];
    document.querySelector("#editDob").value = studentDetails[id]["dob"];
}
function closeEditPopup() {
    document.querySelector("#editStudentData").style.visibility = "hidden";
}

// Update student data
function updateStudentData(){
    var studentUpdate = studentDetails[this.dataset.studentDetails];
    // console.log(studentUpdate);
    // console.log(this.dataset);
    studentUpdate.name = document.querySelector("#editStudName").value
    studentUpdate.mail = document.querySelector("#editStudMail").value
    studentUpdate.password = document.querySelector("#editStudPass").value
    studentUpdate.gender = document.querySelector("#editStudGender").value
    studentUpdate.address = document.querySelector("#editStudAddress").value
    studentUpdate.course = document.querySelector("#editStudCourse").value
    studentUpdate.age = document.querySelector("#editStudAge").value
    studentUpdate.mobile = document.querySelector("#editStudMob").value
    studentUpdate.roll_no = document.querySelector("#editStudRollNum").value
    studentUpdate.dob = document.querySelector("#editDob").value
    // console.log(studentUpdate.name);
    document.querySelector("#editStudentData").style.visibility = "hidden";
    printStudentRecord();
    return false;
}
document.querySelector("#updateStudentName").onclick = updateStudentData;


// form validation
var nameError = document.querySelector("#nameErr");
var mailError = document.querySelector("#mailErr");
var passError = document.querySelector("#passErr");
var genderError = document.querySelector("#genderErr");
var addressError = document.querySelector("#addressErr");

// name
function studentName(){
    var studentName = document.querySelector("#studName").value
    if(studentName===""){
        document.querySelector("#nameErr").innerHTML = "**Name is required";
        return false;
    }else{
        if(studentName.length>=24 || studentName.length<=3){
            document.querySelector("#nameErr").innerHTML = "**Invalid characters";
            return false;
        }else{
            document.querySelector("#nameErr").innerHTML = "";
            return true;
        }
    }
}

// mail
function studentMail(){
    var studentMail = document.querySelector("#studMail").value
    if(studentMail===""){
        document.querySelector("#mailErr").innerHTML = "**Mail is required";
        return false;
    }else{
        if(studentMail.length>=24 || studentMail.length<=6){
            document.querySelector("#mailErr").innerHTML = "**Invalid mail ID";
            return false;
        }else{
            // const pattern =/ ^[A-Za-z._-]{3,}[0-9]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{3,6}$/gm
            // if(pattern.test(studentMail)){
            //     console.log('mail match');
            //     return false;
            // }else{
            //     console.log('mail not match');
            //     return false;
            // }
            document.querySelector("#mailErr").innerHTML = "";
            return true;
        }
    }
}

// password
function studentPassword(){
    var studentPass = document.querySelector("#studPass").value
    if(studentPass===""){
        document.querySelector("#passErr").innerHTML = "**Password is required";
        return false;
    }else{
        if( studentPass.length<=6){
            document.querySelector("#passErr").innerHTML = "**Weak password";
            return false;
        }else{
            document.querySelector("#passErr").innerHTML = "";
            return true;
        }
    }
}

// gender
function studentGender(){
    var studentGender = document.querySelector("#studGender").value
    if(studentGender===""){
        document.querySelector("#genderErr").innerHTML = "**Enter your gender here";
        return false;
    }else{
        if( studentGender.length<=2){
            document.querySelector("#genderErr").innerHTML = "**Incorrect gender";
            return false;
        }else{
            document.querySelector("#genderErr").innerHTML = "";
            return true;
        }
    }
}

// address
function studentAddress(){
    var studentAddress = document.querySelector("#studAddress").value
    if(studentAddress===""){
        document.querySelector("#addressErr").innerHTML = "**Address is required";
        return false;
    }else{
        if(studentAddress.length>=24 || studentAddress.length<=6){
            document.querySelector("#addressErr").innerHTML = "**Enter valid address";
            return false;
        }else{
            document.querySelector("#addressErr").innerHTML = "";
            return true;
        }
    }
}


function submitForm(){
    if(!studentName() ||  !studentMail()  ||  !studentPassword()  ||  !studentGender() ||  !studentAddress()){
        document.querySelector("#submitErr").innerHTML = "**Fill input first";
        return false;
    }else{
       alert("Ready to submit");
    }
}
// search student data
function searchStudentData(data) {
    console.log(data);
    var searchValue = data.value;
    var dataFound = [];

    var arrayLength = studentDetails.length;

    for (i = 0; i < arrayLength; i++) {
        if (studentDetails[i]["name"].toLowerCase().indexOf(searchValue.toLowerCase()) === 0) {
            dataFound.push(studentDetails[i]);
        }
    }
    printStudentRecord(dataFound);
}