function colorChanger1() {
    var color2 = document.getElementById("navbar").style.background = "black";  
}
function colorChanger2(){
    var color3 = document.getElementById("navbar").style.background = "red";
}
function colorChanger3() {
    var color4 = document.getElementById("navbar").style.backgroundColor = "aqua";
}
function colorChanger4() {
    var color2 = document.getElementById("navbar").style.background = "purple";  
}

function validate() {
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");

    if(firstName.value == "") {
        alert("Please enter your first name");
        return false;
    }
    else if(lastName.value == "") {
        alert("Please enter your last name");
        return false;
    }
    else if(phone.value == "") {
        alert("Please enter a valid phone number");
        return false;
    }
    else if(email.value == "") {
        alert("Please enter a valid email address");
        return false;
    }
    else{
        alert("Submitted successfully");
        return true;
    }
}

//An empty Array for my images
var images = [];
var timer;
// image list
images[0] = "./pics/1.jpg";
images[1] = "./pics/2.jpg";
images[2] = "./pics/6.jpg";
images[3] = "./pics/8.jpg";
images[4] = "./pics/9.jpg";
images[5] = "./pics/10.jpg";
images[6] = "./pics/11.jpg";
images[7] = "./pics/12.jpg";
images[8] = "./pics/16.jpg";
images[9] = "./pics/17.jpg";


imageIndex = 0;


function changeImage() {

    document.getElementById("slider").src =  images[imageIndex]; 

    if(imageIndex < images.length - 1){
        imageIndex++;
    } else {
        imageIndex = 0;
    }
    timer = setTimeout("changeImage()", 1500);
}

function stopShow() {
    clearTimeout(timer);
}

function runShow() {
    changeImage();
}
window.onload = runShow;

