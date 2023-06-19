var customerDB = [];

function addCustomer() {

    let customerID = $("#inputCId").val();
    let customerName = $("#Cname").val();
    let customerAddress = $("#inputAddress").val();
    let customerBDay = $("#Cdate").val();


    let customerOb = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        date: customerBDay
    }


    customerDB.push(customerOb);

    getAllCustomers();
    searchCustomer();

}

$("#add").click(function () {

addCustomer();
});


function getAllCustomers() {
    $("#tblCustomer").empty();

    //get all customers
    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let name = customerDB[i].name;
        let address = customerDB[i].address;
        let date = customerDB[i].date;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${date}</td>
                    </tr>`;


        $("#tblCustomer").append(row);


        bindTrEvents();
    }
}


$("#getAll").click(function () {
getAllCustomers();


});

function bindTrEvents(){
    $('#tblCustomer>tr').click(function () {
        //get the selected rows data
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let date = $(this).children().eq(3).text();

        //set the selected rows data to the input fields
        $("#inputCId").val(id);
        $("#Cname").val(name);
        $("#inputAddress").val(address);
        $("#Cdate").val(date);
    })

}


//delete

function deleteCustomer(id){
    for (let i = 0; i < customerDB.length; i++) {
        if(customerDB[i].id==id){
            customerDB.splice(i,1);
            return true;
        }
    }
    return false
}

$("#delete").click(function () {
    let id=$("#inputCId").val();
    let consent=confirm("Do You Want to delete ");

    if(consent){
        let response = deleteCustomer(id);

        if(response){
            alert("customer deleted")
            getAllCustomers();
            clearCustomerInputFields();
        }else {
            alert("customer not deleted")
        }
    }


});



$("#update").click(function (){
    let id= $("#inputCId").val();
    updateCustomer(id);

    clearCustomerInputFields();
});


function updateCustomer(id){
    if (searchCustomer(id)==undefined) {
        alert("No such Customer..please check the ID");
    }else{
        let consent= confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer= searchCustomer(id);
            //if the customer available can we update.?

            let name = $("#Cname").val();
            let address = $("#inputAddress").val();
            let date = $("#Cdate").val();

            customer.name=name;
            customer.address=address;
            customer.date=date;

            getAllCustomers();
        }
    }

}

function searchCustomer(id){
    return customerDB.find(function (customer){
        return customer.id==id;
    });
}

function clearCustomerInputFields() {
    $("#inputCId,#Cname,#inputAddress,#Cdate").val("");
    $("#inputCId").focus();
}


//disable tab
$("#inputCId,#Cname,#inputAddress,#Cdate").keydown(function (e) {

    if (e.key == "Tab") {
        e.preventDefault();
    }
});


$("#inputCId").keydown(function (e){

    if (e.key=="Enter"){
        $("#Cname").focus();
    }

});

$("#Cname").keydown(function (e){
    if (e.key=="Enter"){
        $("#inputAddress").focus();
    }
});

$("#inputAddress").keydown(function (e){
    if (e.key=="Enter"){
        $("#Cdate").focus();
    }
});

$("#Cdate").keydown(function (e){
    if (e.key=="Enter"){
        addCustomer();
        clearCustomerInputFields();
    }
});





$("#inputCId").keyup(function (e) {
    const pattern = /^(C00)[0-9]$/;
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

