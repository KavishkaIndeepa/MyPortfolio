var orderDB = [];

$("#orderAdd").click(function () {

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

});


$("#getAllOrder").click(function () {

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

    }

});


$("#tblOrder").on('click', 'tr', function() {

    let id = $(this).children(":eq(0)").text();
    let code = $(this).children(":eq(1)").text();
    let date = $(this).children(":eq(2)").text();
    let price = $(this).children(":eq(3)").text();
    let qty = $(this).children(":eq(4)").text();

    $("#inputId").val(id);
    $("#Ocode").val(code);
    $("#inputdate").val(date);
    $("#price").val(price);
    $("#OQty").val(qty);

});

