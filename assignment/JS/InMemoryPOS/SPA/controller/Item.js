// var itemDB = [];

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
    loadAllItemCode();

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

        bindItemTrEvent();
    }
}

$("#getAllItem").click(function () {

getAllItems();

});

function bindItemTrEvent() {
    $('#tblItem>tr').click(function () {
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let price = $(this).children().eq(2).text();
        let qty = $(this).children().eq(3).text();

        $("#IinputId").val(code);
        $("#name").val(name);
        $("#Iprice").val(price);
        $("#Iqty").val(qty);


    })

}


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
            clearItemInputFields();
        }else {
            alert("item not deleted")
        }
    }


});


$("#updateItem").click(function (){
    let id= $("#IinputId").val();
    updateItems(id);

    clearItemInputFields();
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