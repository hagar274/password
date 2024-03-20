var pass = document.getElementById("pass") ; 
var conpass = document.getElementById("conpass") ; 
var Total = document.getElementById("Total") ; 
var btn = document.getElementById("btn") ; 

btn.onclick = function(password) {
    var pass = new password();
    var pass = new Date(pass.value);

    if (pass == conpass) {
        "change password";
    }else{
        "Not Equal";
    }

    Total.innerHTML = " Your password change " ; 
    Total.style.display = "block";
}