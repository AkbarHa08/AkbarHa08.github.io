var infoField = document.getElementById('info-field');
var clockField = document.getElementById('clock-field');
var infoText = document.getElementById('info-text');
var clockText = document.getElementById('clock-text');
var dateText = document.getElementById('date-text');
var clockArea = document.getElementById('clock-area-id');
var navbar = document.getElementById('navbar-id');
var navbarTexts = document.getElementsByClassName('text-color');
var actionsText = document.getElementById('actions-text');

var darkTheme = true;

var date = new Date;

var dateTimeFormat = Intl.DateTimeFormat().resolvedOptions();


var timezone = dateTimeFormat.timeZone;
var timeDif = date.getTimezoneOffset();
var hourDif = timeDif / -60;
var timezonedif;

if( hourDif > 0 ){
    timezonedif = "GMT+"+hourDif;
} else{
    timezonedif = ("GMT"+hourDif);
}

console.log(date.get);

infoText.innerHTML = timezone + " " + timezonedif;

setTime();

function setTime(){
    var date = new Date;
    var time = date.toLocaleTimeString();
    var currentDate = date.toLocaleDateString();
    clockText.innerHTML = time;
    dateText.innerHTML = currentDate;
}

setInterval(setTime,1000);


function changeTheme(){
    if( darkTheme ){
        darkTheme = false;
        clockArea.classList.remove("bg-dark");
        clockArea.classList.add("bg-light");
        navbar.classList.remove("bg-light");
        navbar.classList.add("bg-dark");
        for( let i = 0; i < 3; i++ ){
            navbarTexts[i].style.color = "white";
        }
        infoText.classList.remove("text-light");
        infoText.classList.add("text-dark");
        clockText.classList.remove("text-light");
        clockText.classList.add("text-dark");
        dateText.classList.remove("text-light");
        dateText.classList.add("text-dark");
        actionsText.classList.remove("text-light");
        actionsText.classList.add("text-dark");
    } else{
        darkTheme = true;
        clockArea.classList.remove("bg-light");
        clockArea.classList.add("bg-dark");
        navbar.classList.remove("bg-dark");
        navbar.classList.add("bg-light");
        for( let i = 0; i < 3; i++ ){
            navbarTexts[i].style.color = "black";
        }
        infoText.classList.remove("text-dark");
        infoText.classList.add("text-light");
        clockText.classList.remove("text-dark");
        clockText.classList.add("text-light");
        dateText.classList.remove("text-dark");
        dateText.classList.add("text-light");
        actionsText.classList.remove("text-dark");
        actionsText.classList.add("text-light");
    }
}


