function add_sub(sign)
{
    var mat_a = document.getElementsByTagName('input');
    var a = new Array(3);
    var a = [
                [ mat_a[0].value , mat_a[1].value , mat_a[2].value ],
                [ mat_a[3].value , mat_a[4].value , mat_a[5].value ],
                [ mat_a[6].value , mat_a[7].value , mat_a[8].value ],        
            ];

    var b = [
                [ mat_a[9].value , mat_a[10].value , mat_a[11].value ],
                [ mat_a[12].value , mat_a[13].value , mat_a[14].value ],
                [ mat_a[15].value , mat_a[16].value , mat_a[17].value ],        
            ];

            var c = new Array(3) ;
            c[0] = new Array(3);
            c[1] = new Array(3);
            c[2] = new Array(3);
             
for(var i = 0; i<3; i++)
{
    for(var j = 0; j<3; j++)
    {    
        c[i][j] = eval('parseFloat(a[i][j]) '+ sign+' parseFloat(b[i][j])') ;   
    }
}

var para = document.getElementsByClassName('result');
var p = para[0].innerHTML = c[0][0] +"  "+ c[0][1] +"  "+ c[0][2]; 
var p = para[1].innerHTML = c[1][0] +"  "+ c[1][1] +"  "+ c[1][2]; 
var p = para[2].innerHTML = c[2][0] +"  "+ c[2][1] +"  "+ c[2][2]; 


}

function mult()
{
    var mat_a = document.getElementsByTagName('input');
    var a = new Array(3);
    var a = [
                [ mat_a[0].value , mat_a[1].value , mat_a[2].value ],
                [ mat_a[3].value , mat_a[4].value , mat_a[5].value ],
                [ mat_a[6].value , mat_a[7].value , mat_a[8].value ],        
            ];

    var b = [
                [ mat_a[9].value , mat_a[10].value , mat_a[11].value ],
                [ mat_a[12].value , mat_a[13].value , mat_a[14].value ],
                [ mat_a[15].value , mat_a[16].value , mat_a[17].value ],        
            ];

            var c = new Array(3) ;
            c[0] = new Array(3);
            c[1] = new Array(3);
            c[2] = new Array(3);

for(var i = 0; i<3; i++)
{
    for(var j = 0; j<3; j++)
    {    
        c[i][j] = 0;
        for(var k = 0; k<3 ; k++)
        {
            c[i][j] = parseFloat(c[i][j])+(parseFloat(a[i][j])*parseFloat(b[k][j]));
        }
    }
}

var para = document.getElementsByClassName('result');
var p = para[0].innerHTML = c[0][0] +"  "+ c[0][1] +"  "+ c[0][2]; 
var p = para[1].innerHTML = c[1][0] +"  "+ c[1][1] +"  "+ c[1][2]; 
var p = para[2].innerHTML = c[2][0] +"  "+ c[2][1] +"  "+ c[2][2]; 

}

function add_sub_2(sign)
{
    var mat_a = document.getElementsByTagName('input');
    var a = new Array(2);
    var a = [
                [ mat_a[0].value , mat_a[1].value ],
                [ mat_a[2].value , mat_a[3].value ],        
            ];

    var b = [
                [ mat_a[4].value , mat_a[5].value ],
                [ mat_a[6].value , mat_a[7].value ],
            ];

            var c = new Array(2) ;
            c[0] = new Array(2);
            c[1] = new Array(2);
             
for(var i = 0; i<2; i++)
{
    for(var j = 0; j<2; j++)
    {    
        c[i][j] = eval('parseFloat(a[i][j]) '+ sign+' parseFloat(b[i][j])') ;   
    }
}

var para = document.getElementsByClassName('result');
var p = para[0].innerHTML = c[0][0] +"  "+ c[0][1] ; 
var p = para[1].innerHTML = c[1][0] +"  "+ c[1][1] ;  


}

function mult_2()
{
    var mat_a = document.getElementsByTagName('input');
    var a = new Array(2);
    var a = [
                [ mat_a[0].value , mat_a[1].value ],
                [ mat_a[2].value , mat_a[3].value ],        
            ];

    var b = [
                [ mat_a[4].value , mat_a[5].value ],
                [ mat_a[6].value , mat_a[7].value ],
            ];

            var c = new Array(2) ;
            c[0] = new Array(2);
            c[1] = new Array(2);
             
for(var i = 0; i<2; i++)
{
    for(var j = 0; j<2; j++)
    {    
        c[i][j] = 0;
        for(var k = 0; k<2 ; k++)
        {
            c[i][j] = parseFloat(c[i][j])+(parseFloat(a[i][j])*parseFloat(b[k][j]));
        }
    }
}

for(var i = 0; i<2; i++)
{
    for(var j = 0; j<2; j++)
    {    
        if(isNaN(parseInt(c[i][j])))
        {
            c[i][j] == "barabar se number daal";
        }
    }
}


var para = document.getElementsByClassName('result');
var p = para[0].innerHTML = c[0][0] +"    "+ c[0][1] ; 
var p = para[1].innerHTML = c[1][0] +"    "+ c[1][1] ;  
    
}


/*a = new Array;
var k=0 ;
for(var i = 0; i<3; i++)
    {
    for(var j = 0; j<3; j++)
        {    
            a[i][j] += [[mat_a[k].value,],];
            k++;   
        }
    }*/
    /*mat_a = document.getElementsByTagName('input');
a = new Array(3);
a = [
        [ mat_a[0].value , mat_a[1].value , mat_a[2].value ],
        [ mat_a[3].value , mat_a[4].value , mat_a[5].value ],
        [ mat_a[6].value , mat_a[7].value , mat_a[8].value ],        
    ];*/
