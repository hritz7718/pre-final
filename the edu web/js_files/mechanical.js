    
/*function summattion_of_forces()
{
    var num_forces = document.getElementById("forces_num");
    var head = document.getElementById("head");
    var butt = document.getElementById("butt");
    var parent = head.parentNode;   
    var k=num_forces.value;
    parent.removeChild(head);
    parent.removeChild(butt);
    alert(k);

    var head = document.createElement("h1");
    var header = document.createTextNode("enter the forces here: ");
    head.appendChild(header);
    parent.appendChild(head);
    var i=0;
    var forces = new Array(k);
    var angles = new Array(k);
    var ip1 = new Array(k);
    var ip2 = new Array(k);

    for(i=0;i<k;i++)
        {
            ip1[i] = document.createElement("input");
            var attr = document.createAttribute("type");
            parent.appendChild(ip1[i]);
            attr.value="number";
            ip1[i].setAttribute(attr);

            ip2[i] = document.createElement("input");
            parent.appendChild(ip2[i]);
            ip2[i].setAttribute(attr);
            
            var br= document.createElement("br");
            parent.appendChild(br);
        }

    var button = document.createElement("button");
    parent.appendChild(button);

    
};*/

function summattion_of_forces()
{
    var force1 = document.getElementById("force1");
    var angle1 = document.getElementById("angle1");
    var force2 = document.getElementById("force2");
    var angle2 = document.getElementById("angle2");
    var force3 = document.getElementById("force3");
    var angle3 = document.getElementById("angle3");
    var force4 = document.getElementById("force4");
    var angle4 = document.getElementById("angle4");
    var force5 = document.getElementById("force5");
    var angle5 = document.getElementById("angle5");
    var force6 = document.getElementById("force6");
    var angle6 = document.getElementById("angle6");

    angle1.value=(angle1.value)*(Math.PI/180);
    angle2.value=(angle2.value)*(Math.PI/180);
    angle3.value=(angle3.value)*(Math.PI/180);
    angle4.value=(angle4.value)*(Math.PI/180);
    angle5.value=(angle5.value)*(Math.PI/180);
    angle6.value=(angle6.value)*(Math.PI/180);

    var sum_fx = (force1.value)*(Math.cos(angle1.value))+(force2.value)*(Math.cos(angle2.value))+(force3.value)*(Math.cos(angle3.value))+(force4.value)*(Math.cos(angle4.value))+(force5.value)*(Math.cos(angle5.value))+(force6.value)*(Math.cos(angle6.value)) ;

    var sum_fy = (force1.value)*(Math.sin(angle1.value))+(force2.value)*(Math.sin(angle2.value))+(force3.value)*(Math.sin(angle3.value))+(force4.value)*(Math.sin(angle4.value))+(force5.value)*(Math.sin(angle5.value))+(force6.value)*(Math.sin(angle6.value)) ;

    var resultant_force = Math.sqrt((sum_fx*sum_fx)+(sum_fy*sum_fy));

    var thetha = (sum_fy/sum_fx);
    var thetha = Math.atan(thetha)*(180/Math.PI);

    var paragraph = document.getElementsByClassName('par');
    var i = paragraph[0].innerHTML = "sum of fx is" + sum_fx + " .";
    var i = paragraph[1].innerHTML = "sum of fY is" + sum_fy + " .";    
    var i = paragraph[2].innerHTML = "resultant angle" + thetha + " .";
    var i = paragraph[3].innerHTML = "resultant force is" + resultant_force + " .";

    angle1.value=(angle1.value)*(180/Math.PI);
    angle2.value=(angle2.value)*(180/Math.PI);
    angle3.value=(angle3.value)*(180/Math.PI);
    angle4.value=(angle4.value)*(180/Math.PI);
    angle5.value=(angle5.value)*(180/Math.PI);
    angle6.value=(angle6.value)*(180/Math.PI);
}

function reset()
{
    
    var paragraph = document.getElementsByClassName('par');
    var i = paragraph[0].innerHTML = "";
    var i = paragraph[1].innerHTML = "";    
    var i = paragraph[2].innerHTML = "";
    var i = paragraph[3].innerHTML = "";

    force1.value="";
    force2.value="";
    force3.value="";
    force4.value="";
    force5.value="";
    force6.value="";

    angle1.value="";
    angle2.value="";
    angle3.value="";
    angle4.value="";
    angle5.value="";
    angle6.value="";
}

/*force1.value="";
    force2.value="";
    force3.value="";
    force4.value="";
    force5.value="";
    force6.value="";

    angle1.value="";
    angle2.value="";
    angle3.value="";
    angle4.value="";
    angle5.value="";
    angle6.value="";*/

    
    /*var parent = document.getElementsByClassName("content");

    var fx = document.createElement("p");
    var fy = document.createElement("p");
    var angle = document.createElement("p");
    var result = document.createElement("p");

    var text1 = document.createTextNode("summ fx is" + sum_fx);
    var text2 = document.createTextNode("summ fy is" + sum_fy);
    var text3 = document.createTextNode("angle is" + thetha);
    var text4 = document.createTextNode("resultant force is" + resultant_force);

    fx.appendChild(text1);
    parent.appendChild(fx);
    
    parent.appendChild(fy);
    fy.appendChild(text2);

    parent.appendChild(angle);
    angle.appendChild(text3);

    parent.appendChild(result);
    result.appendChild(text4);*/