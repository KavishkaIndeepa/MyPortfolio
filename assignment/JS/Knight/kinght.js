var colors = ['#93041a', '#a00606', '#d50606', '#d00606', '#e30a0a'];
var index = 0;
var isReverse = false;
var isStop = true;


setInterval(setColors, 100);

function setColors() {
    clearColors()
    if(isStop==false){
        if(isReverse){
            reverse();
        }
        if (isReverse==false) {
            if(index==5){
                isReverse=true;
            }
            if(isReverse==false){
                $('#knight').children(`div:nth-child(${index + 1})`).css('background-color', colors[index++]);
            }
        }
    }
}


function reverse() {
    if(index===-1){
        index = 0;
        isReverse=false;
    }
    if(isReverse==true){
        $('#knight').children(`div:nth-child(${index+1})`).css('background-color', colors[index--]);
    }
}


function clearColors() {
    for (let c = 0; c < 5; c++) {
        $('#knight').children(`div:nth-child(${c + 1})`).css('background-color', 'white');
    }
}

$('#start-btn').click(function () {
    isStop = false;
});

$('#stop-btn').click(function () {
    isStop = true;
});