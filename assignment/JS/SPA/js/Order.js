document.getElementById("orderAdd").addEventListener("click",function(){
    let OrderId=document.getElementById("inputId").value;
    let OrderCode=document.getElementById("Ocode").value;
    let date=document.getElementById("inputdate").value;
    let price=document.getElementById("price").value;
    let Qty=document.getElementById("OQty").value;
    console.log(OrderId,OrderCode,date,price,Qty);




    let tBody=document.getElementById("tblOrder");



    let tr=document.createElement("tr");
    let col1= document.createElement("td");
    let col2=document.createElement("td");
    let col3=document.createElement("td");
    let col4=document.createElement("td");
    let col5=document.createElement("td");





    col1.textContent=OrderId;
    col2.textContent=OrderCode;
    col3.textContent=date;
    col4.textContent=price;
    col5.textContent=Qty;


    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);
    tr.appendChild(col5);


    tBody.appendChild(tr);
});