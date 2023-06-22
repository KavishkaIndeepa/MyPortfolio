$("#inputCId").keyup(function (e) {
    const pattern = /^(C00-)[0-9]{4}$/;
    if (pattern.test($("#inputCId").val())){
        $("#inputCId").css('border','2px solid green');


    }else{
        $("#inputCId").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});




$("#Cname").keyup(function (e) {
    const pattern = /^[a-zA-Z\s']+$/u;
    if (pattern.test($("#Cname").val())){
        $("#Cname").css('border','2px solid green');


    }else{
        $("#Cname").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#inputAddress").keyup(function (e) {
    const pattern =  /^[a-zA-Z\s']+$/u;
    if (pattern.test($("#inputAddress").val())){
        $("#inputAddress").css('border','2px solid green');


    }else{
        $("#inputAddress").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#Cdate").keyup(function (e) {
    const pattern =/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if (pattern.test($("#Cdate").val())){
        $("#Cdate").css('border','2px solid green');


    }else{
        $("#Cdate").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});