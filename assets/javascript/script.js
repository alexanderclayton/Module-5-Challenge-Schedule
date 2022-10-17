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