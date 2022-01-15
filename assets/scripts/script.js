// 1. webpage loads
//2. get todays date - and display it \
//compare each timeslot to current time, red past green future
//load save data - display in time slots - in input field 
//wait till user hits saveBtn - when they hit save you either save all of the time slots or just the ones that
//
// const currentDayblock = document.getelementById('currentDay'); //
var daytime = moment().format('MMMM Do YYYY, h:mm:ss a');
var temp = "string"
var onlyTime = moment().format("HH:mm");

// $(".saveBtn").addEventListener("click", function() {
//     console.log("button clicked");
//   });
// var taskItemEl = document.createElement("li");
// taskItemEl.textContent = "hello";
// var tasksToDoEl = document.querySelector("#tasks-to-do");
// tasksToDoEl.appendChild(taskItemEl);  

// var createTaskHandler = function() {
//     var listItemEl = document.createElement("li");
//     listItemEl.className = "task-item";
//     listItemEl.textContent = "This is a new task.";
//     tasksToDoEl.appendChild(listItemEl);
//     var taskNameInput = document.querySelector("input[name='task-name']").value;
//   };

// var input = document.getElementById("text");
// localStorage.setItem("server", input.val());

// function set(){
//   console.log("onclick ran");
//     // var sendJSON = JSON.stringify(userInput);
//     // localStorage.setItem('userInput',sendJSON)
// };
var textAreas = $(".description");
var saveBtn= $(".saveBtn")
//run the function on each instance of text area

$(".time-block").each(function(){
  var ID = $(this).attr("data-id");
  var getStorage = localStorage.getItem(ID);
  $(this).children(".description").val(getStorage);

});


$(".saveBtn").on("click", function(){
  var hourID = $(this).parent().attr("data-id");
  console.log(hourID);
  var textValue = $(this).siblings(".description").val();
  console.log(textValue);
  localStorage.setItem(hourID, textValue);
});


var temporary = document.getElementById('currentDay');

temporary.textContent = `${daytime}`;

var timeSplit = onlyTime.split(":");
var currentHour = timeSplit[0];
var blockTimes = parseInt($(this).attr("data-id"));
var blocksClass = $('.blocks').children('div').length;

function classChange(){
  $(".time-block").each(function(){
    var givenTimeBlock = parseInt($(this).attr("data-id"));
    if(currentHour == givenTimeBlock){
      $(this).children('textarea').addClass("present");
    }
    if(currentHour > givenTimeBlock){
      $(this).children('textarea').addClass("past");
    }
    if(currentHour < givenTimeBlock){
      $(this).children('textarea').addClass("future");
    }
  })
};
classChange();