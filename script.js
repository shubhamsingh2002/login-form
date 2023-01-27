function validation() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phonenumber = document.getElementById('phonenumber').value;


    if (firstname == "") {
        document.getElementById('fname').innerHTML = "Please Fill The First Name Field";
        return false;
    }
    if ((firstname.length <= 2) || (firstname.length > 20)) {
        document.getElementById('fname').innerHTML = " First Name  Lenght must between 2 and 20 ";
        return false;
    }
    if (!isNaN(firstname)) {
        document.getElementById('fname').innerHTML = " Only Characters are allowed ";
        return false;
    }


    if (lastname == "") {
        document.getElementById('lname').innerHTML = "Please Fill The Last Name Field";
        return false;
    }
    if ((lastname.length <= 2) || (lastname.length > 20)) {
        document.getElementById('lname').innerHTML = " Last Name  Lenght must between 2 and 20 ";
        return false;
    }
    if (!isNaN(lastname)) {
        document.getElementById('lname').innerHTML = "  Only Characters are allowed ";
        return false;
    }



    if (email == "") {
        document.getElementById('em').innerHTML = " Please Fill The Email Address Field";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('em').innerHTML = "  Please Fill Valid Email Address Field Beacuse @ as Invalid Position";
        return false;
    }
    if((email.charAt(email.length-4) !='.') && (email.charAt(email.length-3) !='.')){
        document.getElementById('em').innerHTML = " Please Fill Valid Email Address Field Beacuse @ Or . as Invalid Position";
        return false;
    }
//     if (email.length != 12) {
//         document.getElementById('em').innerHTML = " Plese Valid Email id ";
//         return false;
// }




    if (password == "") {
        document.getElementById('psw').innerHTML = " Please Fill The Enter Password Field";
        return false;
    }
    if ((password.length <= 6) || (password.length > 20)) {
        document.getElementById('psw').innerHTML = "  Last Name  Lenght must between 2 and 20 ";
        return false;
    }


    if (phonenumber == "") {
        document.getElementById('phno').innerHTML = "  Please Fill The Mobile Number Field";
        return false;
    }
    if (isNaN(phonenumber)) {
        document.getElementById('phno').innerHTML = "  Only Digit .. . ";
        return false;
    }
    if (phonenumber.length != 10) {
        document.getElementById('phno').innerHTML = "  Phone Number Must be 10 Digit ";
        return false;
}
}