//add today date to the header
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm a");
var currentDayEL = $("#currentDay");
currentDayEL.text(currentDay);

//assign save button to click listener  and save
$("#btn9").on("click", function () {
  var text9 = $("#desc9").val();
  localStorage.setItem("hour9", text9);
});

$("#btn10").on("click", function () {
  var text10 = $("#desc10").val();
  localStorage.setItem("hour10", text10);
});

$("#btn11").on("click", function () {
  var text11 = $("#desc11").val();
  localStorage.setItem("hour11", text11);
});

$("#btn12").on("click", function () {
  var text12 = $("#desc12").val();
  localStorage.setItem("hour12", text12);
});

$("#btn13").on("click", function () {
  var text13 = $("#desc13").val();
  localStorage.setItem("hour13", text13);
});

$("#btn14").on("click", function () {
  var text14 = $("#desc14").val();
  localStorage.setItem("hour14", text14);
});

$("#btn15").on("click", function () {
  var text15 = $("#desc15").val();
  localStorage.setItem("hour15", text15);
});

$("#btn16").on("click", function () {
  var text16 = $("#desc16").val();
  localStorage.setItem("hour16", text16);
});

$("#btn17").on("click", function () {
  var text17 = $("#desc17").val();
  localStorage.setItem("hour17", text17);
});

//load any saved data to local storage
var desc9 = localStorage.getItem("hour9");
$("#desc9").val(desc9);

var desc10 = localStorage.getItem("hour10");
$("#desc10").val(desc10);

var desc11 = localStorage.getItem("hour11");
$("#desc11").val(desc11);

var desc12 = localStorage.getItem("hour12");
$("#desc12").val(desc12);

var desc13 = localStorage.getItem("hour13");
$("#desc13").val(desc13);

var desc14 = localStorage.getItem("hour14");
$("#desc14").val(desc14);

var desc15 = localStorage.getItem("hour15");
$("#desc15").val(desc15);

var desc16 = localStorage.getItem("hour16");
$("#desc16").val(desc16);

var desc17 = localStorage.getItem("hour17");
$("#desc17").val(desc9);

//get current number of hours - from moment.js
//create a loop over the block of time
//check time, if we are  past the time, during the time, and in the future, use class created in CSS .past .present .future
