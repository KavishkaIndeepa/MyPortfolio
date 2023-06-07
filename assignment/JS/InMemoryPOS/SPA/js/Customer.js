// document.getElementById("add").addEventListener("click",function(){
//     let id=document.getElementById("inputCId").value;
//     let name=document.getElementById("Cname").value;
//     let address=document.getElementById("inputAddress").value;
//     let date=document.getElementById("Cdate").value;
//     console.log(id,name,address,date);


var customerArray =[];


$("#add").click(function () {
    let id = $("#inputCId").val();
    let name = $("#Cname").val();
    let address = $("#inputAddress").val();
    let date=$("#Cdate").val();

    console.log(id,name,address,date);

     let cus = {
         id: this.id,
         name: this.name ,
         address:this.address,
         date:this.date,
     }
    customerArray.push(cus);

    // let tBody=document.getElementById("tblCustomer");
let tBody = $("#tblCustomer")


    // let tr=document.createElement("tr");
    // let col1= document.createElement("td");
    // let col2=document.createElement("td");
    // let col3=document.createElement("td");
    // let col4=document.createElement("td");

    let tr = $('<tr>');
    let td1 = $('<td>');
    let td2 = $('<td>');
    let td3 = $('<td>');
    let td4 = $('<td>');





    // col1.textContent=id;
    // col2.textContent=name;
    // col3.textContent=address;
    // col4.textContent=date;


    // td1.text(id);
    // td2.text(name);
    // td3.text(address);
    // td4.text(date);

    td1.text(cus[0]);
    td2.text(cus[1]);
    td3.text(cus[2]);
    td4.text(cus[3]);



    // tr.appendChild(col1);
    // tr.appendChild(col2);
    // tr.appendChild(col3);
    // tr.appendChild(col4);
    //
    //
    // tBody.appendChild(tr);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);

    tBody.append(tr);





});