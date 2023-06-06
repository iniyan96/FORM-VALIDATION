

function iniyan()
{
    var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;
var cpass=document.getElementById("cpassword").value;
var e_mail=document.getElementById("email").value;

    if(user==null||user=="")
    {
    alert("name cant be blank");
    return false;
}
else if(pass.length<6)
{
    alert("password must be at least 6 characters long.");
    return false;
}

else if(pass!=cpass)
{
    alert("password must be same")
    return false;
}
else if(e_mail==null|| e_mail=="")
{
    alert("give proper mail");
    return false;
}
    else
    {
        alert("login successful");
    
    }
}



