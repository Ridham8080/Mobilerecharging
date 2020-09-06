function displayeffect()
{
    
    var mobile = document.getElementById("input_mobile").value;
    if(mobile.length == 10)
    {
        var dropdownmenu = document.getElementById("company-list");
        if(dropdownmenu.style.display == "block")
        {
            dropdownmenu.style.display="none";
        }
        else
        {
            dropdownmenu.style.display="block";
        }
    }
    else {
    alert("please enter correct mobile number");
    }
}
function jio(){
    document.cookie = "company = jio";
    window.location.href="rechargeplandetails.html";
}
function airtel(){
    document.cookie = "company = airtel";
    window.location.href="rechargeplandetails.html";
    
}
function vodafone(){
    document.cookie = "company = vodafone";
    window.location.href="rechargeplandetails.html";
}
function bsnl(){
    document.cookie = "company = bsnl";
    window.location.href="rechargeplandetails.html";
}