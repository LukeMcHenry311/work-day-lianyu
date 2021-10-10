var today = moment().format("[today is] dddd MMM Do[,] YYYY");
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

shipHours = function() {
    $.each(hours, function(i) {

        let hourBlock = $('<li>').addClass("list-group-item").text(hours[i]);

        $('.list-group').append(hourBlock);
    })
};

updateToday = function() {
    $('#currentDay').text(today);
};

updateToday();

shipHours();