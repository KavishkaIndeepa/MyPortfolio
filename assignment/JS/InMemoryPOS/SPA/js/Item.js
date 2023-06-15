// // document.getElementById("itemAdd").addEventListener("click",function(){
// //     let code=document.getElementById("IinputId").value;
// //     let name=document.getElementById("name").value;
// //     let price=document.getElementById("Iprice").value;
// //     let date=document.getElementById("Iqty").value;
// //     console.log(code,name,price,date);
//
// $("#itemAdd").click(function () {
//     let code = $("#IinputId").val();
//     let name = $("#name").val();
//     let price = $("#Iprice").val();
//     let qty=$("#Iqty").val();
//
//     console.log(code,name,price,qty);
//
//
//     // let tBody=document.getElementById("tblItem");
//     let tBody = $("#tblItem")
//
//
//     // let tr=document.createElement("tr");
//     // let col1= document.createElement("td");
//     // let col2=document.createElement("td");
//     // let col3=document.createElement("td");
//     // let col4=document.createElement("td");
//
//     let tr = $('<tr>');
//     let td1 = $('<td>');
//     let td2 = $('<td>');
//     let td3 = $('<td>');
//     let td4 = $('<td>');
//
//
//     //
//     // col1.textContent=code;
//     // col2.textContent=name;
//     // col3.textContent=price;
//     // col4.textContent=qty;
//     td1.text(code);
//     td2.text(name);
//     td3.text(price);
//     td4.text(qty);
//
//     //
//     // tr.appendChild(col1);
//     // tr.appendChild(col2);
//     // tr.appendChild(col3);
//     // tr.appendChild(col4);
//     //
//     //
//     // tBody.appendChild(tr);
//     tr.append(td1);
//     tr.append(td2);
//     tr.append(td3);
//     tr.append(td4);
//
//     tBody.append(tr);
// });

var itemDB = [];


$("#itemAdd").click(function () {


    let itemCode = $("#IinputId").val();
    let ItemName = $("#name").val();
    let itemPrice = $("#Iprice").val();
    let itemQty=$("#Iqty").val();


    let itemOb = {
        code: itemCode,
        name: ItemName,
        price: itemPrice,
        qty: itemQty
    }

    itemDB.push(itemOb);



});


$("#getAllItem").click(function () {

    $("#tblItem").empty();


    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let name = itemDB[i].name;
        let price = itemDB[i].price;
        let qty = itemDB[i].qty;

        let row = `<tr>
                     <td>${code}</td>
                     <td>${name}</td>
                     <td>${price}</td>
                     <td>${qty}</td>
                    </tr>`;


        $("#tblItem").append(row);
    }
});

$("#tblItem").on('click', 'tr', function() {

    let code = $(this).children(":eq(0)").text();
    let name = $(this).children(":eq(1)").text();
    let price = $(this).children(":eq(2)").text();
    let qty = $(this).children(":eq(3)").text();

    $("#IinputId").val(code);
    $("#name").val(name);
    $("#Iprice").val(price);
    $("#Iqty").val(qty);

});


