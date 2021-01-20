
'use strict';


// store date
let finalsDate = new Date("Dec 8, 2020 00:00:00").getTime();

// a function to do the counting and calculations from the date
let x = setInterval(function(){

    let currentTime = new Date().getTime();
    
    // code for the arithmetic refrenced to w3schools
    let dateDifference = finalsDate - currentTime;

    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

    // if there is still a positive difference between the start and end date and time, update the values 
    if (dateDifference > 0){
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
    
    //document.getElementById("timeZone").innerHTML = new Date().toString();      //output the current time and timezone of the user, continues even after countdown is finished.
    // document.getElementById("timeZone").innerHTML = "Showing Time for" + Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (dateDifference <= 0){           //if the countdown has finished stop updating the values at 0.
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;
        document.getElementById("finished").innerHTML = "2020 Countdown Complete!";
    }



}, 1000);

// display an alert when these texts are clicked.
document.getElementById("prompt").onclick = function(){
    alert("College of Arts and Science, Fall Semester, Final Examinations start on Tuesday, December 8, 2020.")
}

document.getElementById("advice").onclick = function(){
    alert("Here are some tips to help you do well in your final exams\n 1. Get enough rest\n 2. Eat healthy\n 3. Study smart not just hard\n 4. Be organised to optimise your time\n"
    + "5. Ask questions well before exams begin\n 6. Dont Panic\n\n All the Best.")
}