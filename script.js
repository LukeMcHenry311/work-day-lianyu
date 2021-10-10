var today = moment().format("[today is] dddd MMM Do[,] YYYY");
var hours = ["2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm"];
var time = moment().format("Ha");
var currentTime = moment(time, "Ha");

shipHours = function () {
  $.each(hours, function (i) {
    var scheme = moment(hours[i], "Ha");
    var id = "#" + i.toString();

    var hourContainer = $("<li>").attr("id", i).addClass("row time-block");
    $(".list-group").append(hourContainer);

    let hourBlock = $("<li>").addClass("list-group-item").text(hours[i]);
    $(id).append(hourBlock);

    var texty;

    if (moment(currentTime).isAfter(scheme)) {
      texty = $("<textarea>").addClass("col-8 description past").text("text");
      $(id).append(texty);
    }
    if (moment(currentTime).isSame(scheme)) {
      texty = $("<textarea>").addClass("col-8 present").text("text");
      $(id).append(texty);
    }
    if (moment(currentTime).isBefore(scheme)) {
      texty = $("<textarea>").addClass("col-8 future").text("text");
      $(id).append(texty);
    }

    var saveDiv = $("<button>").addClass("col-md-2 saveBtn").text("save");
    $(id).append(saveDiv);

    $(".list-group").addClass("big");

    // document.getElementsByName("button").addEventListener("click", function () {
    //   console.log("hello");
    // });
  });
};

updateToday = function () {
  $("#currentDay").text(today);
};

updateToday();

shipHours();
