document.getElementById("add").addEventListener("click",function(){
    let id=document.getElementById("inputCId").value;
    let name=document.getElementById("Cname").value;
    let address=document.getElementById("inputAddress").value;
    let date=document.getElementById("Cdate").value;
    console.log(id,name,address,date);




    let tBody=document.getElementById("tblCustomer");



    let tr=document.createElement("tr");
    let col1= document.createElement("td");
    let col2=document.createElement("td");
    let col3=document.createElement("td");
    let col4=document.createElement("td");





    col1.textContent=id;
    col2.textContent=name;
    col3.textContent=address;
    col4.textContent=date;


    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);


    tBody.appendChild(tr);
});