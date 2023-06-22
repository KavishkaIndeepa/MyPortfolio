generateOrderId();

let OdId = generateOrderId();
$("#orderId").val(OdId);

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
        $("#code").append(`<option>${itemArElement.itemCode}</option>`);
    }
}

$("#code").on('change',function (){

    let item=searchItem($('#code').val());
    $("#dec").val(item.ItemName);
    $("#UnitPrice").val(item.unitPrice);
    $("#ODQty").val(item.qty);

});


$('#btnAddToCart').click(function (){

    let orderId=$('#orderId').val();
    let itemCode=$('#code').val();
    let itmName = $('#dec').val();
    let itmPrice = $('#UnitPrice').val();
    let itemOrderQty = $('#qty').val();

    let total =itmPrice*itemOrderQty;


    let rowExists = searchRowExists(itemCode);
    if(rowExists!=null){
        let newQty=((parseInt(rowExists.qty))+(parseInt(itemOrderQty)));


        rowExists.qty=newQty;
        rowExists.total=parseFloat(itmPrice)*newQty;
        addCartData();
        // loadCartTableDetail();

    }else{
        tempCartModal(orderId,itemCode,itmName,itmPrice,itemOrderQty,total)
        addCartData();
    }

    minQty(itemCode,itemOrderQty);
    // generateOrderId();
// $("#orderId").val(generateOrderId());

    /*------------Place holder table add-------------*/

});

function addCartData() {
    $("#placeOrder> tr").detach();

    for (var tc of tempOrderCartAr){
        var row="<tr><td>"+tc.oId+"</td><td>"+tc.itemCode+"</td><td>"+tc.description+"</td><td>"+tc.price+"</td><td>"+tc.qty+"</td><td>"+tc.total+"</td></tr>";
        $('#placeOrder').append(row);
    }
    bindTrEvents();
    getTotal();
}

function searchRowExists(itemCode) {
    for (let tempOr of tempOrderCartAr) {
        console.log(tempOr.itemCode+"-----"+itemCode);
        if(tempOr.itemCode===itemCode){
            return tempOr
        }
    }
    return null;
}

let tempTot=0;
function getTotal() {

    for (let tempOrderCartArElement of tempOrderCartAr) {
        tempTot=tempTot+tempOrderCartArElement.total;
    }
    $('#total').val(tempTot);


}

function minQty(itemCode,orderQty) {
    for (let itemArElement of itemAr) {
        if(itemArElement.itemCode===itemCode){
            itemArElement.qtyOnHand=parseInt(itemArElement.qtyOnHand)-parseInt(orderQty);
        }
    }
    // addTable();
    // clearData();
}


let disTOGave=0;
$('#discount').on('keyup',function (){
    let dis=$('#discount').val();
    let tot=$('#total').val();
    var totMin=0;
    let subTot=0;

    console.log(dis+"=="+tot);
    totMin=parseFloat(tot)*(dis/100);
    console.log("dis Dis: "+totMin)

    subTot=tot-totMin;
    disTOGave=totMin;

    $('#subTotal').val(subTot);


})


$('#cash').on('keyup',function (){
    let cash=$('#cash').val();
    let subT=$('#subTotal').val();


    /* $('#balance').val((cash-subT)-tempTot);*/
    $('#balance').val((parseFloat(cash-subT))-parseFloat(tempTot));
})

$('#purchaseOrder').click(function (){
    // $("#orderId").val( generateOrderId());

    alert("Order is Purchased")
    for (var tempOrder of tempOrderCartAr){
        tempOrderCartAr.pop();
    }
    tempOrderCartAr.pop();
    addCartData();
    clearOrderTexts()


    // console.log(orderArray);
});






function generateOrderId() {
    let existingOrderIds = []; // Replace with your actual existing order IDs

    let maxId = existingOrderIds.reduce(function (max, orderId) {
        let orderIdNumber = parseInt(orderId.split('-')[1]);
        return orderIdNumber > max ? orderIdNumber : max;
    }, 0);

    let nextIdNumber = maxId + 1;
    let nextId = 'O00-' + nextIdNumber.toString().padStart(3, '0');

    return nextId;
}


function clearOrderTexts(){
    // $('#orderId').val("");
    $('#date').val("");
    $('#CusId').val("");
    $('#CusName').val("");


    $('#code').val("");
    $('#dec').val("");
    $('#UnitPrice').val("");
    $('#ODQty').val(0);
    $('#qty').val("");

    $('#total').val("");
    $('#cash').val("");
    $('#discount').val(0);
    $('#balance').val("");
    $('#subTotal').val(0);
}

