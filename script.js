var today = moment().format("[today is] dddd MMM Do[,] YYYY");
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
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
    var txt = "txt-" + i;

    if (moment(currentTime).isAfter(scheme)) {
      texty = $("<textarea>")
        .addClass("col-8 description past")
        .attr("id", txt);
      $(id).append(texty);
    }
    if (moment(currentTime).isSame(scheme)) {
      texty = $("<textarea>").addClass("col-8 present").attr("id", txt);
      $(id).append(texty);
    }
    if (moment(currentTime).isBefore(scheme)) {
      texty = $("<textarea>").addClass("col-8 future").attr("id", txt);
      $(id).append(texty);
    }

    var saveDiv = $("<button>").addClass("col-md-2 clearBtn").text("clear");
    $(id).append(saveDiv);

    $(".list-group").addClass("big");

    // document.getElementById("1").addEventListener("click", function () {
    //   document.getElementById("1").value = "";
    // });

    // document.getElementsByName("button").addEventListener("click", function () {
    //   console.log("hello");
    // });
  });
  console.log("working");
  // because arrays start at 0
  // to save textarea input from user
  document.getElementById("0").addEventListener("keyup", (event) => {
    localStorage.setItem("0", event.target.value);
  });
  document.getElementById("1").addEventListener("keyup", (event) => {
    localStorage.setItem("1", event.target.value);
  });
  document.getElementById("2").addEventListener("keyup", (event) => {
    localStorage.setItem("2", event.target.value);
  });
  document.getElementById("3").addEventListener("keyup", (event) => {
    localStorage.setItem("3", event.target.value);
  });
  document.getElementById("4").addEventListener("keyup", (event) => {
    localStorage.setItem("4", event.target.value);
  });
  document.getElementById("5").addEventListener("keyup", (event) => {
    localStorage.setItem("5", event.target.value);
  });
  document.getElementById("6").addEventListener("keyup", (event) => {
    localStorage.setItem("6", event.target.value);
  });
  document.getElementById("7").addEventListener("keyup", (event) => {
    localStorage.setItem("7", event.target.value);
  });
  document.getElementById("8").addEventListener("keyup", (event) => {
    localStorage.setItem("8", event.target.value);
  });
  var comment = document.getElementsByClassName("clearBtn");
  comment[0].addEventListener("click", function () {
    console.log("hello");
  });
};

updateToday = function () {
  $("#currentDay").text(today);
};

updateToday();

shipHours();
