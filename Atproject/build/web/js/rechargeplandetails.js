function openlist(planname,selectednumber){
    var i;
    var x = document.getElementsByClassName("plans");
    for(i=0;i<x.length;i++)
    {
                x[i].style.display = "none";
                document.getElementById(i).style.background = 'rgb(0,100,0)';
    }
    document.getElementById(planname).style.display="block";
    document.getElementById(selectednumber).style.background = '#2bab0d';
}