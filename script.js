function pivot(){
    var o,h,l,c,p;
    o=Number(document.getElementById("open").value);
    h=Number(document.getElementById("high").value);
    l=Number(document.getElementById("low").value);
    c=Number(document.getElementById("close").value);
    p= (h+ l + c)/3;
    document.getElementById("pivot").innerHTML= p;
    }