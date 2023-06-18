var itemDB = [];

function addItems(){
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

    getAllItems();
    searchItem();

}
$("#itemAdd").click(function () {
    addItems();
});


function getAllItems(){
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

        bindTrEvents();
    }
}

$("#getAllItem").click(function () {

getAllItems();

});

function bindTrEvents() {
    $('#tblItem>tr').click(function (){
        //get the selected rows data
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let price = $(this).children().eq(2).text();
        let qty = $(this).children().eq(3).text();

        //set the selected rows data to the input fields
        $("#IinputId").val(code);
        $("#name").val(name);
        $("#Iprice").val(price);
        $("#Iqty").val(qty);
    })
}

// $("#tblItem").on('click', 'tr', function() {
//
//     let code = $(this).children(":eq(0)").text();
//     let name = $(this).children(":eq(1)").text();
//     let price = $(this).children(":eq(2)").text();
//     let qty = $(this).children(":eq(3)").text();
//
//     $("#IinputId").val(code);
//     $("#name").val(name);
//     $("#Iprice").val(price);
//     $("#Iqty").val(qty);
//
// });

function deleteItem(id){
    for (let i = 0; i < itemDB.length; i++) {
        if(itemDB[i].code==id){
            itemDB.splice(i,1);
            return true;
        }
    }
    return false
}

$("#itemDelete").click(function () {
    let id=$("#IinputId").val();
    let consent=confirm("Do You Want to delete ");

    if(consent){
        let response = deleteItem(id);

        if(response){
            alert("item deleted")
            getAllItems();
        }else {
            alert("item not deleted")
        }
    }


});


$("#updateItem").click(function (){
    let id= $("#IinputId").val();
    updateItems(id);
});


function updateItems(id){
    if (searchItem(id)==undefined) {
        alert("No such Item..please check the ID");
    }else{
        let consent= confirm("Do you really want to update this Item.?");
        if (consent) {
            let item= searchItem(id);
            //if the customer available can we update.?

            let name = $("#name").val();
            let price = $("#Iprice").val();
            let qty = $("#Iqty").val();

            item.name=name;
            item.price=price;
            item.qty=qty;

            getAllItems();
        }
    }

}

function searchItem(id){
    return itemDB.find(function (item){
        return item.code==id;
    });
}

function clearItemInputFields() {
    $("#IinputId,#name,#Iprice,#Iqty").val("");
    $("#IinputId").focus();
}

$("#IinputId,#name,#Iprice,#Iqty").keydown(function (e) {

    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#IinputId").keydown(function (e){

    if (e.key=="Enter"){
        $("#name").focus();
    }

});

$("#name").keydown(function (e){
    if (e.key=="Enter"){
        $("#Iprice").focus();
    }
});

$("#Iprice").keydown(function (e){
    if (e.key=="Enter"){
        $("#Iqty").focus();
    }
});

$("#Iqty").keydown(function (e){
    if (e.key=="Enter"){
        addItems();
        clearItemInputFields();
    }
});