let colors = ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000",  '#400000', "#800000", "#bf0000", "#ff0000"];
let colors2 = ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000",  '#ff0000', "#bf0000", "#800000", "#400000"];

let section = document.querySelector("section");
let divArray = section.getElementsByTagName("div");

let count = 0;
let reverse = true;
let interval;

function Kitt() {

    interval = setInterval(function () {

        if (reverse) {
            for (let i = 0; i < divArray.length; i++) {
                divArray[i].style.backgroundColor = colors[i];
            }

            let lastValue = colors.pop();
            colors.unshift(lastValue);
            count++;

            if (count == 12) {
                reverse = false;
            }

        } if (reverse == false) {

            let lastColor = colors2.shift();
            colors2.push(lastColor);

            for (let i = 0; i < divArray.length; i++) {
                divArray[i].style.backgroundColor = colors2[i];
            }
            count--;

            if (count == 1) {
                reverse = true;
            }
        }

    }, 150);

}

$(document).ready(function () {
    clearInterval(interval);
    Kitt();


    $("#start-btn").click(function () {
        clearInterval(interval);
        Kitt();

    });

});

document.querySelector("#stop-btn").addEventListener('click', function () {
    clearInterval(interval);

});

document.querySelector("#start-btn").addEventListener('click', function () {
    clearInterval(interval);
    Kitt();
});

document.querySelector("#speed-btn").addEventListener('click', function () {
    Kitt();
});