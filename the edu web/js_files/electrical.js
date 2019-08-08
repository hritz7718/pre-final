vm = document.getElementById('v_m');
exp = document.getElementById('v_func');
upper = document.getElementById('t_1');
lower = document.getElementById('t_2');

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
    var a = parseFloat(lower.value);
    var b = parseFloat(upper.value);
    var dx = 0.01;
    var sum = 0.000; 
    var x = 0.000;
    var eqn = exp.value
    for(x = parseFloat(lower.value) ; x < b ; x+=dx)
    {
        //eqn = eqn.replace('x', String(x));
       sum += ((Math.pow(eval(eqn)),2)*dx) ;
       console.log(sum);

    }
    console.log(sum);
    console.log(x,a,b);

    var res = Math.sqrt((sum/(b-a)));

    console.log(res);
    alert("the rms "+ eqn + " is " + (vm.value*res));
}
