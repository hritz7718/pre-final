$(document).ready(function(){
    $('form').on('submit',function(){
        var item = $('form input');
        var todo = {item: item.val()};

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,

            success: function(data){
                //do some front end
                //location.reload();
                console.log("shared");
                //return false;
            }
        });
        
    });

    $('li').on('click', function(){
        var item = $(this).text();
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data){
                //location.reload();
                console.log("deleted");
                console.log(data);
            }
        });
    });

});


function _hide(){
    $('.sp_ans').hide();
}

function add(e) {
       val = e.target.parentNode.getElementsByClassName('in_ans')[0];
       app = e.target.parentNode.getElementsByClassName('sp_ans')[0];
       
       $(app).append("<p>"+val.value+"</p>");
       val.value = "";
}

function tog(e) {
    console.log("IN", e)
       a = e.target.parentNode.getElementsByClassName('sp_ans')[0];
       console.log(a);
       $(a).slideToggle();   
}

