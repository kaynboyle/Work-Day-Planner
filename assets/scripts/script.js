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
function localSave(){
  var here = "here"
  console.log(here)
};

// saveBtn.on("click", localSave());
// set(){}
for (let i=0; i < (textAreas.length); i++){
  saveBtn.on("click", localSave())

};

// i could always just do onclick the id for this specific button local storage this specific text area - is there an easier way?

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