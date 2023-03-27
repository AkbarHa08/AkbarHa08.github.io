var infoField = document.getElementById('info-field');
var clockField = document.getElementById('clock-field');
var infoText = document.getElementById('info-text');
var clockText = document.getElementById('clock-text');
var dateText = document.getElementById('date-text');

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



