// // document.getElementById("orderAdd").addEventListener("click",function(){
// //     let OrderId=document.getElementById("inputId").value;
// //     let OrderCode=document.getElementById("Ocode").value;
// //     let date=document.getElementById("inputdate").value;
// //     let price=document.getElementById("price").value;
// //     let Qty=document.getElementById("OQty").value;
// //     console.log(OrderId,OrderCode,date,price,Qty);
//
// $("#orderAdd").click(function () {
//     let OrderId = $("#inputId").val();
//     let OrderCode = $("#Ocode").val();
//     let date = $("#inputdate").val();
//     let price=$("#price").val();
//     let Qty=$("#OQty").val();
//
//     console.log(OrderId,OrderCode,date,price,Qty);
//
//
//
//     // let tBody=document.getElementById("tblOrder");
//
//     let tBody = $("#tblOrder")
//
//     // let tr=document.createElement("tr");
//     // let col1= document.createElement("td");
//     // let col2=document.createElement("td");
//     // let col3=document.createElement("td");
//     // let col4=document.createElement("td");
//     // let col5=document.createElement("td");
//
//     let tr = $('<tr>');
//     let td1 = $('<td>');
//     let td2 = $('<td>');
//     let td3 = $('<td>');
//     let td4 = $('<td>');
//     let td5 = $('<td>');
//
//
//
//     // col1.textContent=OrderId;
//     // col2.textContent=OrderCode;
//     // col3.textContent=date;
//     // col4.textContent=price;
//     // col5.textContent=Qty;
//
//     td1.text(OrderId);
//     td2.text(OrderCode);
//     td3.text(date);
//     td4.text(price);
//     td5.text(Qty);
//
//     // tr.appendChild(col1);
//     // tr.appendChild(col2);
//     // tr.appendChild(col3);
//     // tr.appendChild(col4);
//     // tr.appendChild(col5);
//     //
//     //
//     // tBody.appendChild(tr);
//
//     tr.append(td1);
//     tr.append(td2);
//     tr.append(td3);
//     tr.append(td4);
//     tr.append(td5);
//
//     tBody.append(tr);
// });



var orderDB = [];


$("#orderAdd").click(function () {


    let OrderId = $("#inputId").val();
    let OrderCode = $("#Ocode").val();
    let date = $("#inputdate").val();
    let price=$("#price").val();
    let Qty=$("#OQty").val();


    let orderOb = {
        id: OrderId,
        code: OrderCode,
        date: date,
        price: price,
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

        let row = `<tr>
                     <td>${id}</td>
                     <td>${code}</td>
                     <td>${date}</td>
                     <td>${price}</td>
                     <td>${qty}</td>
                    </tr>`;


        $("#tblOrder").append(row);
    }
});