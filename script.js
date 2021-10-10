var today = moment().format("[today is] dddd MMM Do[,] YYYY");
var hours = ["2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm"]
var time = moment().format("Ha");
var currentTime = moment(time, "Ha");

shipHours = function() {
    $.each(hours, function(i) {

        var scheme = moment(hours[i], "Ha");

        let hourBlock = $('<li>').addClass("list-group-item").text(hours[i]);

        if (moment(currentTime).isAfter(scheme)) {
            $(hourBlock).addClass("past");
        } if (moment(currentTime).isSame(scheme)) {
            $(hourBlock).addClass("present");
        } if (moment(currentTime).isBefore(scheme)) {
            $(hourBlock).addClass("future");
        }

        $('.list-group').append(hourBlock);

        $('.list-group').addClass("big");
    })
};

updateToday = function() {
    $('#currentDay').text(today);
};

updateToday();

shipHours();