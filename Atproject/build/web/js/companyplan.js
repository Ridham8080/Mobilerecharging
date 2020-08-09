function displayeffect()
{
    var mobile = document.getElementById("input_mobile").value;
            if(mobile.length < 10)
            {
                window.alert("please enter mobile number");
            }
            else 
            {
                var dropdownmenu=document.getElementById("company-list");
                if(dropdownmenu.style.display == "block")
                {
                    dropdownmenu.style.display="none";
                }
                else
                {
                    dropdownmenu.style.display="block";
                }
            }
}
