
function render_page(){
    var company = document.getElementById("company_name");
    var plan = document.getElementById("select_plan");
    if(plan.value == "Regular plan")
        window.location.href='http://127.0.0.1:5500/web/regularplan.html';   
    else if(plan.value == "Talktime plan")
        window.location.href='http://127.0.0.1:5500/web/talktimeplan.html';
    else   
        window.location.href='http://127.0.0.1:5500/web/mahadatapack.html';   
}