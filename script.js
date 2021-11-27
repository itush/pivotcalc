function pivot(){
    var o,h,l,c,p,s1,s2,s3,r1,r2,r3;
    o=Number(document.getElementById("open").value);
    h=Number(document.getElementById("high").value);
    l=Number(document.getElementById("low").value);
    c=Number(document.getElementById("close").value);
    p= (h+ l + c)/3;
    s1= 2*p-h;
    r1= 2*p-l;
    s2= p-(r1-s1);
    s3= l-2*(h-p);
    r2= p+(r1-s1);
    r3= h+2*(p-l);
    document.getElementById("pivot").innerHTML= p;
    document.getElementById("s1").innerHTML= s1;
    document.getElementById("s2").innerHTML= s2;
    document.getElementById("s3").innerHTML= s3;
    document.getElementById("r1").innerHTML= r1;
    document.getElementById("r2").innerHTML= r2;
    document.getElementById("r3").innerHTML= r3;
    }