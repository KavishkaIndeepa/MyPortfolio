var orderDB = [];

function addOrder(){
    let OrderId = $("#inputId").val();
    let OrderCode = $("#Ocode").val();
    let date = $("#inputdate").val();
    let price=$("#price").val();
    let Qty=$("#OQty").val();


    let orderOb = {
        id:OrderId,
        code:OrderCode,
        date:date,
        price:price,
        qty: Qty
    }

    orderDB.push(orderOb);

    getAllOrders();
}

$("#orderAdd").click(function () {
addOrder();
});


function getAllOrders(){
    $("#tblOrder").empty();


    for (let i = 0; i < orderDB.length; i++) {
        let id = orderDB[i].id;
        let code = orderDB[i].code;
        let date = orderDB[i].date;
        let price = orderDB[i].price;
        let qty = orderDB[i].qty;


        let row =`<tr> 
                     <td>${id}</td>
                     <td>${code}</td>
                     <td>${date}</td>
                     <td>${price}</td>
                     <td>${qty}</td>

                    <tr>`

        $("#tblOrder").append(row);

        bindTrEvent()

    }
}


$("#getAllOrder").click(function () {

    getAllOrders();
});

function bindTrEvent(){
    $('#tblOrder>tr').click(function () {
        let id = $(this).children().eq(0).text();
        let code = $(this).children().eq(1).text();
        let date = $(this).children().eq(2).text();
        let price = $(this).children().eq(3).text();
        let qty = $(this).children().eq(4).text();

        //set the selected rows data to the input fields
        $("#inputId").val(id);
        $("#Ocode").val(code);
        $("#inputdate").val(date);
        $("#price").val(price);
        $("#OQty").val(qty);
    })
}

function deleteOrder(id){
    for (let i = 0; i < orderDB.length; i++) {
        if(orderDB[i].id==id){
            orderDB.splice(i,1);
            return true;
        }
    }
    return false
}

$("#orderDelete").click(function () {
    let id=$("#inputId").val();
    let consent=confirm("Do You Want to delete ");

    if(consent){
        let response = deleteOrder(id);

        if(response){
            alert("order deleted")
            getAllOrders();
            clearOrderInputFields();
        }else {
            alert("order not deleted")
        }
    }


});

$("#orderUpdate").click(function (){
    let id= $("#inputId").val();
    updateOrder(id);

    clearOrderInputFields();
});


function updateOrder(id){
    if (searchOrder(id)==undefined) {
        alert("No such Order..please check the ID");
    }else{
        let consent= confirm("Do you really want to update this Order.?");
        if (consent) {
            let order= searchOrder(id);
            //if the customer available can we update.?

            let code = $("#Ocode").val();
            let date = $("#inputdate").val();
            let price = $("#price").val();
            let qty = $("#OQty").val();

            order.code=code;
            order.date=date;
            order.price=price;
            order.qty=qty;

            getAllOrders();
        }
    }

}

function searchOrder(id){
    return orderDB.find(function (order){
        return order.id==id;
    });
}

function clearOrderInputFields() {
    $("#inputId,#Ocode,#inputdate,#price,#OQty").val("");
    $("#inputId").focus();
}

$("#inputId,#Ocode,#inputdate,#price,#OQty").keydown(function (e) {

    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#inputId").keydown(function (e){

    if (e.key=="Enter"){
        $("#Ocode").focus();
    }

});

$("#Ocode").keydown(function (e){

    if (e.key=="Enter"){
        $("#inputdate").focus();
    }

});

$("#inputdate").keydown(function (e){

    if (e.key=="Enter"){
        $("#price").focus();
    }

});

$("#price").keydown(function (e){

    if (e.key=="Enter"){
        $("#OQty").focus();
    }

});

$("#OQty").keydown(function (e){
    if (e.key=="Enter"){
        addOrder();
        clearOrderInputFields();
    }
});

$("#inputId").keyup(function (e) {
    const pattern = /^(O00)[0-9]$/;
    if (pattern.test($("#inputId").val())){
        $("#inputId").css('border','2px solid green');


    }else{
        $("#inputId").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#Ocode").keyup(function (e) {
    const pattern = /^(I00)[0-9]$/;
    if (pattern.test($("#Ocode").val())){
        $("#Ocode").css('border','2px solid green');


    }else{
        $("#Ocode").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#inputdate").keyup(function (e) {
    const pattern =/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if (pattern.test($("#inputdate").val())){
        $("#inputdate").css('border','2px solid green');


    }else{
        $("#inputdate").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#price").keyup(function (e) {
    const pattern = /^[0-9]{2,}([.]{1}[0-9]{2})?$/;
    if (pattern.test($("#price").val())){
        $("#price").css('border','2px solid green');


    }else{
        $("#price").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#OQty").keyup(function (e) {
    const pattern = /^[0-9]{1,}?$/;
    if (pattern.test($("#OQty").val())){
        $("#OQty").css('border','2px solid green');


    }else{
        $("#OQty").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});