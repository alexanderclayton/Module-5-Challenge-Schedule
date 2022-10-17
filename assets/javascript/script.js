var currentTime = document.getElementById("currentDay");
var saveButton = document.getElementsByClassName("saveBtn");
var timeBlock = moment().hour();
var currentTimeBlock = document.getElementsByClassName("row");

/*displays time on page load without waiting for setInterval function to kick in...*/
currentTime.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

function momentCount() {
currentTime.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

};

setInterval(momentCount, 1000);

    $(saveButton).on("click", function () {
        var data = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, data);
    });

function whatTime() {
    var textArea = document.getElementsByClassName("description");
    for (i = 0; i < textArea.length; i++) {
        for (i = 0; i < currentTimeBlock.length; i++) {
            var numberCurrentTimeBlock = parseInt(currentTimeBlock[i].id);

            console.log(numberCurrentTimeBlock)
            console.log(textArea)

        if (numberCurrentTimeBlock < timeBlock) {
            textArea[i].classList.remove("future");
            textArea[i].classList.remove("present");
            textArea[i].classList.add("past");
        } else if (numberCurrentTimeBlock === timeBlock) {
            textArea[i].classList.remove("future");
            textArea[i].classList.add("present");
            textArea[i].classList.remove("past");
        } else  if (numberCurrentTimeBlock > timeBlock) {
            
            textArea[i].classList.add("future");
            textArea[i].classList.remove("present");
            textArea[i].classList.remove("past");
            }
        }
    }
}
whatTime();

$("#0 .description").val(localStorage.getItem("0"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));
$("#6 .description").val(localStorage.getItem("6"));
$("#7 .description").val(localStorage.getItem("7"));
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));
$("#20 .description").val(localStorage.getItem("20"));
$("#21 .description").val(localStorage.getItem("21"));
$("#22 .description").val(localStorage.getItem("22"));
$("#23 .description").val(localStorage.getItem("23"));



/* wasn't able to get the "description" div through this method...
var textArea = document.getElementsByClassName("description");

if (currentTimeBlock < timeBlock) {
    $(this).removeClass("future");
    $()
} else if (currentTimeBlock === timeBlock) {
    textArea.classList.remove("future");
    textArea.classList.add("present");
    textArea.classList.remove("past");
} else  if (currentTimeBlock > timeBlock) {
    textArea.classList.add("future");
    textArea.classList.remove("present");
    textArea.classList.remove("past");
}
*/

/*
if (currentTimeBlock < timeBlock) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTimeBlock === timeBlock) {
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
        */