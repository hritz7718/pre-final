function solve_2_eqn() 
{
    var a= new Array(2);
    var b= new Array(2);
    var c= new Array(2);

    a[0]=document.getElementById("a1");
    a[1]=document.getElementById("a2");
    b[0]=document.getElementById("b1");
    b[1]=document.getElementById("b2");
    c[0]=document.getElementById("c1");
    c[1]=document.getElementById("c2");
    var x = ((c[0].value)*(b[1].value)-(c[1].value)*(b[0].value))/((a[0].value)*(b[1].value)-(b[0].value)*(a[1].value));
    var y = ((a[0].value)*(c[1].value)-(a[1].value)*(c[0].value))/((a[0].value)*(b[1].value)-(b[0].value)*(a[1].value));

    
    var paragraph2 = document.getElementsByClassName('par2');
    var i = paragraph2[0].innerHTML = "X: "+ x +"";
    var i = paragraph2[1].innerHTML = "Y: "+ y +"";   


}

function solve_3_eqns()
{
    var a= new Array(3);
    var b= new Array(3);
    var c= new Array(3);
    var d= new Array(3);

    a[0]=document.getElementById("a1").value;
    a[1]=document.getElementById("a2").value;
    a[2]=document.getElementById("a3").value;
    b[0]=document.getElementById("b1").value;
    b[1]=document.getElementById("b2").value;
    b[2]=document.getElementById("b3").value;
    c[0]=document.getElementById("c1").value;
    c[1]=document.getElementById("c2").value;
    c[2]=document.getElementById("c3").value;
    d[0]=document.getElementById("d1").value;
    d[1]=document.getElementById("d2").value;
    d[2]=document.getElementById("d3").value;

    var x = ((d[0]*(b[1]*c[2]-c[1]*b[2]))+(b[0]*(c[1]*d[2]-d[1]*c[2]))+(c[0]*(d[1]*b[2]-b[1]*d[2])))/((a[0]*(b[1]*c[2]-c[1]*b[2]))+(a[1]*(b[2]*c[0]-b[0]*c[2]))+(a[2]*(b[0]*c[1]-b[1]*c[0]))) ;
    var y = ((a[0]*(d[1]*c[2]-c[1]*d[2]))+(d[0]*(c[1]*a[2]-a[1]*c[2]))+(c[0]*(a[1]*d[2]-d[1]*a[2])))/((a[0]*(b[1]*c[2]-c[1]*b[2]))+(a[1]*(b[2]*c[0]-b[0]*c[2]))+(a[2]*(b[0]*c[1]-b[1]*c[0]))) ;
    var z = ((a[0]*(b[1]*d[2]-d[1]*b[2]))+(b[0]*(d[1]*a[2]-a[1]*d[2]))+(d[0]*(a[1]*b[2]-b[1]*a[2])))/((a[0]*(b[1]*c[2]-c[1]*b[2]))+(a[1]*(b[2]*c[0]-b[0]*c[2]))+(a[2]*(b[0]*c[1]-b[1]*c[0]))) ;

    
    var paragraph3 = document.getElementsByClassName('par3');
    var i = paragraph3[0].innerHTML = "X: "+ x +"";
    var i = paragraph3[1].innerHTML = "Y: "+ y +"";      
    var i = paragraph3[2].innerHTML = "Z: "+ z +"";

    
}

function factorization()
{
    var a =document.getElementById("a").value;
    var b =document.getElementById("b").value;
    var c =document.getElementById("c").value;


    var x1 = (-b+Math.sqrt((b*b)-4*a*c))/(2*a*c);
    var x2 = (-b-Math.sqrt((b*b)-4*a*c))/(2*a*c);
        
    var paragraphf = document.getElementsByClassName('parf');
    var i = paragraphf[0].innerHTML = "X1: "+ x1 +"";
    var i = paragraphf[1].innerHTML = "X2: "+ x2 +"";   
}


