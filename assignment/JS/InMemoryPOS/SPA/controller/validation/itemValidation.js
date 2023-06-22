$("#IinputId").keyup(function (e) {
    const pattern = /^(I00)[0-9]$/;
    if (pattern.test($("#IinputId").val())){
        $("#IinputId").css('border','2px solid green');


    }else{
        $("#IinputId").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});


$("#name").keyup(function (e) {
    const pattern = /^[a-zA-Z\s']+$/u;
    if (pattern.test($("#name").val())){
        $("#name").css('border','2px solid green');


    }else{
        $("#name").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});



$("#Iprice").keyup(function (e) {
    const pattern = /^[0-9]{2,}([.]{1}[0-9]{2})?$/;
    if (pattern.test($("#Iprice").val())){
        $("#Iprice").css('border','2px solid green');


    }else{
        $("#Iprice").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#Iqty").keyup(function (e) {
    const pattern = /^[0-9]{1,}?$/;
    if (pattern.test($("#Iqty").val())){
        $("#Iqty").css('border','2px solid green');


    }else{
        $("#Iqty").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});