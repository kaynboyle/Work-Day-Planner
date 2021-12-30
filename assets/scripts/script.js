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
// var userInput = document.getElementByClassName("description").value;
var button9 = document.querySelector("#save-task");
button9.addEventListener("click", function() {
    console.log("button clicked");
  });
// var taskItemEl = document.createElement("li");
// taskItemEl.textContent = "hello";
// var tasksToDoEl = document.querySelector("#tasks-to-do");
// tasksToDoEl.appendChild(taskItemEl);  

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
    var taskNameInput = document.querySelector("input[name='task-name']").value;
  }
// template += `
//     <header>
//         <p id="currentDay" class="lead">${daytime}</p>
//     </header>
//     `
console.log(onlyTime);
// getelementById('currentDay').innerHTML = template;


// currentDayblock.innerHTML += `<p id="currentDay" class="lead">${daytime}</p>`;
// currentDayblock.innerHTML += `${daytime}`;

// function set(){
//     var sendJSON = JSON.stringify(userInput);
//     localStorage.setItem('userInput',sendJSON)
// }

var temporary = document.getElementById('currentDay');

temporary.textContent = `${daytime}`;

console.log(typeof onlyTime)

var rowNine = document.getElementById('row9');
var ele9 = document.getElementById('9');
var ele10 = document.getElementById('10');
var ele11 = document.getElementById('11');
var ele12 = document.getElementById('12');
var ele13 = document.getElementById('1');
var ele14 = document.getElementById('2');
var ele15 = document.getElementById('3');
var ele16 = document.getElementById('4');
var ele17 = document.getElementById('5');


var timeCut = onlyTime.split(":");
if (timeCut[0] === "09"){;
    ele9.classList.remove("hour");
    ele9.className += "present";
    ele10.classList.remove("hour");
    ele10.className += "future";
    ele11.classList.remove("hour");
    ele11.className += "future";
    ele12.classList.remove("hour");
    ele12.className += "future";
    ele13.classList.remove("hour");
    ele13.className += "future";
    ele14.classList.remove("hour");
    ele14.className += "future";
    ele15.classList.remove("hour");
    ele15.className += "future";
    ele16.classList.remove("hour");
    ele16.className += "future";
    ele17.classList.remove("hour");
    ele17.className += "future";
    
}
if (timeCut[0] === "10"){
    console.log("lesgo");
    ele9.classList.remove("hour");
    ele9.className += "past";
    ele10.classList.remove("hour");
    ele10.className += "present";
    ele11.classList.remove("hour");
    ele11.className += "future";
    ele12.classList.remove("hour");
    ele12.className += "future";
    ele13.classList.remove("hour");
    ele13.className += "future";
    ele14.classList.remove("hour");
    ele14.className += "future";
    ele15.classList.remove("hour");
    ele15.className += "future";
    ele16.classList.remove("hour");
    ele16.className += "future";
    ele17.classList.remove("hour");
    ele17.className += "future";
    
}
if (timeCut[0] === "11"){
    console.log("lesgo");
    ele9.classList.remove("hour");
    ele9.className += "past";
    ele10.classList.remove("hour");
    ele10.className += "past";
    ele11.classList.remove("hour");
    ele11.className += "present";
    ele12.classList.remove("hour");
    ele12.className += "future";
    ele13.classList.remove("hour");
    ele13.className += "future";
    ele14.classList.remove("hour");
    ele14.className += "future";
    ele15.classList.remove("hour");
    ele15.className += "future";
    ele16.classList.remove("hour");
    ele16.className += "future";
    ele17.classList.remove("hour");
    ele17.className += "future";
    
}
//if (onlyTime[0] === '9'){
//     console.log('fookyea');
// }
// if (onlyTime[0] === '1'){
//     console.log('fookyea');
// }

//document.getelementById('currentDay').appendChild(temp);

// if time is equal to === id? can you do that? or in the java script 
// if time === 9 id=9 background red
//if time === 10 id 9 background red
// if time == 1 id 9 id 10 id 11 id 12 bakcground = red

// WHY DOESNT ALL THIS WORK ? ? ?

// document.getElementById("9").style.background = "red"; 
// uhhhh why not????
// var x = document.getelementById("9");
// x.style.setProperty("background, "red", "important");

//change 
// if time == 9 
//  id 9 add class .present
// id 10, id 11, id 12 , id 1, id 2 add class future
//  
// if time == 10 
// id 10 add class .present
// id 9 add class .past