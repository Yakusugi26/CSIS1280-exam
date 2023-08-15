function UpdateTime(){
    var date = new Date();
    var year = date.getFullYear(); 
    var month = date.getMonth(); 
    const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY",
                    "AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
    var textmonth = months[month];
    var day = String(date.getDate()).padStart(2, '0'); 
    var textdate = textmonth + ' '+ day + ", " + year;
    document.getElementById("date").innerHTML = textdate;

    var weekday = date.getDay();
    const week = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
    var dayname = week[weekday];
    document.getElementById("day").innerHTML = dayname;

    var hour = date.getHours();
    if (toggle == true){
        var session = "AM";
        if (hour == 0){
            hour = 12;
        }
        if (hour > 12){
            hour = hour - 12;
            session = "PM";
        }
        document.getElementById("session").style.display = "inline";
        document.getElementById("clock").className = "clock grid--4-col";
    }
    else{
        document.getElementById("session").style.display = "none";
        document.getElementById("clock").className = "clock grid--3-col";
    }
    var min = date.getMinutes();
    var sec = date.getSeconds();
    document.getElementById("hours").innerHTML = String(hour).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(min).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(sec).padStart(2, '0');
    document.getElementById("session").innerHTML = session;
    setTimeout(UpdateTime,1000);
}

var toggle = true;

function switchDisplay(){
    toggle = !toggle;
}
