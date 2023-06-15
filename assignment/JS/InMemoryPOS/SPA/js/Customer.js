// // document.getElementById("add").addEventListener("click",function(){
// //     let id=document.getElementById("inputCId").value;
// //     let name=document.getElementById("Cname").value;
// //     let address=document.getElementById("inputAddress").value;
// //     let date=document.getElementById("Cdate").value;
// //     console.log(id,name,address,date);
//
//
// var customerArray =[];
//
//
// $("#add").click(function () {
//     let id = $("#inputCId").val();
//     let name = $("#Cname").val();
//     let address = $("#inputAddress").val();
//     let date=$("#Cdate").val();
//
//     console.log(id,name,address,date);
//
//      let cus = {
//          id: this.id,
//          name: this.name ,
//          address:this.address,
//          date:this.date,
//      }
//     customerArray.push(cus);
//
//     // let tBody=document.getElementById("tblCustomer");
// let tBody = $("#tblCustomer")
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
//
//
//
//     // col1.textContent=id;
//     // col2.textContent=name;
//     // col3.textContent=address;
//     // col4.textContent=date;
//
//
//     // td1.text(id);
//     // td2.text(name);
//     // td3.text(address);
//     // td4.text(date);
//
//     td1.text(cus[0]);
//     td2.text(cus[1]);
//     td3.text(cus[2]);
//     td4.text(cus[3]);
//
//
//
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
//
//
//
//
//
// });
var customerDB = [];

$("#add").click(function () {


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
    }
}


$("#getAll").click(function () {
getAllCustomers();


});


$("#tblCustomer").on('click', 'tr', function() {

    let id = $(this).children(":eq(0)").text();
    let name = $(this).children(":eq(1)").text();
    let address = $(this).children(":eq(2)").text();
    let date = $(this).children(":eq(3)").text();

    $("#inputCId").val(id);
    $("#Cname").val(name);
    $("#inputAddress").val(address);
    $("#Cdate").val(date);

});

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

        }else {
            alert("customer not deleted")
        }
    }


});



$("#update").click(function (){
    let id= $("#inputCId").val();
    updateCustomer(id);
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








