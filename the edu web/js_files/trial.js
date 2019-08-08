exp = document.getElementById('textview');
function insert(num){
    //document.form.textview.value = document.form.textview.value+num;
    exp.value = exp.value + num ;
}
function equal(){
    exp.value = eval(exp.value);
}
function clear_(){
    exp.value = "";
}
function back_(){
    exp.value = exp.value.substring(0,(exp.value.length)-1);
}

function trigo(no){
    var i = (Math.PI/180) ;
    exp.value = exp.value + 'Math.'+ no +'((Math.PI/180)*' ;
}

function factorial(){ 
    var x = parseInt(exp.value);
    var sum = 0;
    if(x==0)
    {
        sum = 1;
        exp.value = sum ;
    }
    else if(x > 0)
    {
        sum = 1
        while(x > 0)
        {
            sum*=x;
            x--;
        }   
        exp.value = sum ;
    }
    else
    {
        exp.value = "garpe jaa"
    }
}