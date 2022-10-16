var currentTime = document.getElementById("currentDay");
var saveButton = document.getElementsByClassName("saveBtn")

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


console.log("hi")