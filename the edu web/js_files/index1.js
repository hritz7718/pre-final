function ask()
    {
        var input = document.getElementById("doubts");
        if(input.value=="")
            {
                alert("barabar se likh fakeer");
            }

        else
            {
                alert("puch ke koi ehsaan nai karraha hai tu");
                input.value="";
            }
    }
