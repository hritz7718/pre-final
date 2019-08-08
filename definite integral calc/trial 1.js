exp = document.getElementById('textview');
uppper = document.getElementById('textview1');
lower = document.getElementById('textview2');
function insert(num){
    //document.form.textview.value = document.form.textview.value+num;
    exp.value = exp.value + num ;
}
function clear_(){
    exp.value = "";
}

function equal(){
    exp.value = eval(exp.value);
}

function back_(){
    exp.value = exp.value.substring(0,(exp.value.length)-1);
}
function x_(){
    exp.value = exp.value + 'x';
}
function sin_()
{
    exp.value = exp.value + 'Math.sin(x)' ;
}

function cos_()
{
    exp.value = exp.value + 'Math.cos(x)' ;
}

function tan_()
{
    exp.value = exp.value + 'Math.tan(x)' ;
}

function integrate()
{
    var b = parseFloat(uppper.value);
    var dx = 0.01;
    var sum = 0.000; 
    var x = 0.000;
    var eqn = exp.value
    for(x = parseFloat(lower.value) ; x < b ; x+=dx)
    {
        //eqn = eqn.replace('x', String(x));
        console.log(eqn)
        console.log(eval(eqn))
        console.log(eval(eqn)*dx)
       sum += (eval(eqn)*dx);
       console.log(sum);

    }
    console.log(b);
    console.log(x);
    console.log(dx);
    console.log(eqn);
    console.log(eval(eqn));
    console.log(uppper.value);
    console.log(lower.value);
    console.log(sum);

}
