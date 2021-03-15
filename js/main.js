const currentDate = document.getElementById('current-day');
const saveBtn = document.querySelector('save');

//Instantiate a moment object
var nowMoment = moment();
//Display value of moment object in #currentDay
currentDate.innerHTML = nowMoment.format('dddd, MMM Do YYYY');

$(document).ready(function () {
    // Listening for click
    $(".save").on("click", function () {
        var eventInput = $(this).siblings(".text-entry").val();
        var hour = $(this).parent().attr("id");
        // store event in the local storage
        localStorage.setItem(hour, eventInput);
    });
    // keep any stored data from localStorage in viewport
    $("#time8 .text-entry").val(localStorage.getItem("time8"));
    $("#time9 .text-entry").val(localStorage.getItem("time9"));
    $("#time10 .text-entry").val(localStorage.getItem("time10"));
    $("#time11 .text-entry").val(localStorage.getItem("time11"));
    $("#time12 .text-entry").val(localStorage.getItem("time12"));
    $("#time13 .text-entry").val(localStorage.getItem("time13"));
    $("#time14 .text-entry").val(localStorage.getItem("time14"));
    $("#time15 .text-entry").val(localStorage.getItem("time15"));
    $("#time16 .text-entry").val(localStorage.getItem("time16"));
    $("#time17 .text-entry").val(localStorage.getItem("time17"));


    function hourUpdater() {
        // grab current time
        var currentTime = moment().hours();
        // loop througe and compare with currentTime to indicate color background
        $(".time-section").each(function () {
            var blockHour = parseInt($(this).attr("id").split("time")[1]);

            if (blockHour < currentTime) {
                $(this).addClass('past');
            } else if (blockHour === currentTime) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass('past');
            } else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass('past');
            }
        });
    }
    hourUpdater();
});