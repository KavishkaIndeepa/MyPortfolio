function loadAllCustomerId(){
    $("#CusId").empty();
    for (let customerArElement of customerDB){
        $("#CusId").append(`<option>${customerArElement.id}</option>`);
    }
}

$("#CusId").on('change',function (){

    let customer=searchCustomer($('#CusId').val());

    $("#CusName").val(customer.name);
});


function loadAllItemCode(){
    $("#code").empty();
    for (let itemArElement of itemDB){
        $("#code").append(`<option>${itemArElement.code}</option>`);
    }
}

$("#code").on('change',function (){

    let item=searchItem($('#code').val());

    $("#dec").val(item.name);
    $("#UnitPrice").val(item.price);
    $("#ODQty").val(item.qty);

});