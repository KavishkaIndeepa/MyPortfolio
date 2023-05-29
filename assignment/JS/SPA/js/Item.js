document.getElementById("itemAdd").addEventListener("click",function(){
    let code=document.getElementById("IinputId").value;
    let name=document.getElementById("name").value;
    let price=document.getElementById("Iprice").value;
    let date=document.getElementById("Iqty").value;
    console.log(code,name,price,date);




    let tBody=document.getElementById("tblItem");



    let tr=document.createElement("tr");
    let col1= document.createElement("td");
    let col2=document.createElement("td");
    let col3=document.createElement("td");
    let col4=document.createElement("td");





    col1.textContent=code;
    col2.textContent=name;
    col3.textContent=price;
    col4.textContent=date;


    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);


    tBody.appendChild(tr);
});