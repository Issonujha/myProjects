function checkForm(form) {
    if ((form.email.value.trim() == "" || form.password.value.trim() == "")) {
        alert("Error: Email and password cannot be blank!");
        form.email.focus();
        return false;
    }
    re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!re.test(form.email.value)) {
        alert("Error: This is not a valid email address");
        form.username.focus();
        return false;
    }
    if (form.password.value.length < 6) {
        alert("Error: Password must be at least 6 characters in length!");
        form.password.focus();
        return false;
    }
    re = /[0-9]/;
    if (!re.test(form.password.value)) {
        alert("Error: Password must contain at least one number (0-9)!")
        form.password.focus();
        return false;
    }
    re = /[a-z]/;
    if (!re.test(form.password.value)) {
        alert("Error: Password must contain at least one lowercase letter (a-z)!")
        form.password.focus();
        return false;
    }
    re = /[A-Z]/;
    if (!re.test(form.password.value)) {
        alert("Error: Password must contain at least one uppercase letter (A-Z)!")
        form.password.focus();
        return false;
    }
    if (form.password.value != form.rptpassword.value){
        alert("Password not matching please check!")
        return false;
    }
    else {
        return true;
    }
    
    
}