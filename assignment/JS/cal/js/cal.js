function display(value){
    document.getElementById('result').value += value
    return value;
}

function solve(){
    let cal = document.getElementById('result').value
    let y = eval(cal);
    document.getElementById('result').value = y
    return y
}

function clearScreen(){
    document.getElementById("result").value = "";
}