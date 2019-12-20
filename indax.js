window.checkFirstname = 0;
window.checkLastname = 0;
window.checkEmail = 0;
window.checkMob = 0;
window.checkAddress = 0;
window.checkGender = 0;

//FIRSTNAME
function myFirstName() {
    var firstname = document.getElementById("firstname");
    if (firstname.value == "") {
        firstname.style.border = "solid 2px crimson";
        document.getElementById("l-fname1").style.visibility = "visible";
        //alert("This field must not be empty");
        checkFirstname = 0;
    }
    if (/^[a-zA-Z]+$/.test(firstname.value)) {
        firstname.style.border = "solid 2px green";
        document.getElementById("l-fname1").style.visibility = "hidden";
        checkFirstname = 1;
    }
    else {
        firstname.style.border = "solid 2px crimson";
        document.getElementById("l-fname1").style.visibility = "visible";
        //alert("This field takes only alphabets");
        checkFirstname = 0;
    }
    console.log(checkFirstname);
}

//LASTNAME
function myLastName() {
    var lastname = document.getElementById("lastname");
    if (lastname.value == "") {
        lastname.style.border = "solid 2px crimson";
        document.getElementById("l-lname1").style.visibility = "visible";
        //alert("This field must not be empty");
        checkLastname = 0;

    }
    else if (/^[a-zA-Z]+$/.test(lastname.value)) {
        lastname.style.border = "solid 2px green";
        document.getElementById("l-lname1").style.visibility = "hidden";
        checkLastname = 1;    
    }
    else {
        lastname.style.border = "solid 2px crimson";
        document.getElementById("l-lname1").style.visibility = "visible";
        //alert("This field takes only alphabets");
        checkLastname = 0;
    }
    console.log(checkLastname);
}

//EMAIL
function myEmail() {
    var emailAddress = document.getElementById("emailAddress");
    if (emailAddress.value == "") {
        document.getElementById("l-email1").style.visibility = "visible";
        emailAddress.style.border = "solid 2px crimson";
        //alert("This field must not be empty");
        checkEmail = 0;
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress.value)) {
        emailAddress.style.border = "solid 2px crimson";
        document.getElementById("l-email1").style.visibility = "visible";
        //alert("It is not a valid E-mail address");
        checkEmail = 0;
    }
    else {
        emailAddress.style.border = "solid 2px green";
        document.getElementById("l-email1").style.visibility = "hidden"
        checkEmail = 1;
    }
    console.log(checkEmail);
}

//PHONE NUMBER
function myMob() {
    var mobileNumber = document.getElementById("mobileNumber");
    if (mobileNumber.value == "") {
        mobileNumber.style.border = "solid 2px crimson";
        document.getElementById("l-mob1").style.visibility = "visible";
        //alert("This field must not be empty");
        checkMob = 0;
    }
    if (!/^[0-9]+$/.test(mobileNumber.value)) {
        mobileNumber.style.border = "solid 2px crimson";
        document.getElementById("l-mob1").style.visibility = "visible";
        //alert("This is not a valid");
        checkMob = 0;
    }
    else {
        mobileNumber.style.border = "solid 2px green";
        document.getElementById("l-mob1").style.visibility = "hidden";
        checkMob = 1;
    }
}

//ADDRESS
function myAddress() {
    var Address = document.getElementById("address");
    if (Address.value == "") {
        Address.style.border = "solid 2px crimson";
        document.getElementById("l-add1").style.visibility = "visible";
        //alert("This field must not be empty");
        checkAddress = 0;
    }
    if (/^[a-zA-Z0-9\s,'-]*$/.test(Address.value)) {
        Address.style.border = "solid 2px green";
        document.getElementById("l-add1").style.visibility = "hidden";
        checkAddress = 1;
    }
    else {
        Address.style.border = "solid 2px crimson";
        document.getElementById("l-add1").style.visibility = "visible";
        //alert("Please enter a valid email address");
        checkAddress = 0;
    }
}

//RADIO CHOICES
function myGender() {
    var Male = document.getElementById("gmale");
    var Female = document.getElementById("gfemale");
    var Others = document.getElementById("gothers");
    
    if(Male.checked == true || Female.checked == true || Others.checked == true) {
        checkGender = 1;
        console.log("if");
    }
    else{
    checkGender = 0;
    document.getElementById("l-gen").style.visibility = "visible";
    console.log("else");
    }
}

//DROPDOWN LIST
var stateObject = {
    "India": {
        "Delhi": ["new Delhi", "North Delhi"],
        "Kerala": ["Thiruvananthapuram", "Palakkad"],
        "Goa": ["North Goa", "South Goa"],
        },
    "Australia": {
        "South Australia": ["Dunstan", "Mitchell"],
        "Victoria": ["Altona", "Euroa"]
        },
    "Canada": {
        "Alberta": ["Acadia", "Bighorn"],
        "Columbia": ["Washington", ""]
        },
    "US": {
        "California" : ["SM","ds"]
    }
}
//AUTO STATE AND CITY SELECTION
window.onload = function () {
    var countySel = document.getElementById("countySel"),
        stateSel = document.getElementById("stateSel"),
        districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
        stateSel.length = 1; // remove all options bar first
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        var district = stateObject[countySel.value][this.value];
        for (var i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
}

//SUBMIT DRIVER
function validateForm(form) {
    myFirstName();
    myLastName();
    myEmail();
    myMob();
    myAddress();
    myGender();

    var makeFormValid = checkFirstname && checkLastname && checkEmail && checkMob && checkAddress && checkGender;
    if (makeFormValid == 1) {
        form.submit();
    }
    else {
        console.log("invalid");
        if(checkFirstname.value == 0) {
            document.getElementById("l-fname1").style.visibility = "visible";
        }
        if(checkLastname.value == 0) {
            document.getElementById("l-lname1").style.visibility = "visible";
        }
        if(checkEmail.value == 0) {
            document.getElementById("l-email1").style.visibility = "visible";
        }
        if(checkMob.value == 0) {
            document.getElementById("l-mob1").style.visibility = "visible";
        }
        if(checkAddress == 0) {
            document.getElementById("l-add1").style.visibility = "visible";
        }
        return false;
    }
}