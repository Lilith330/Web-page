"use strict"

window.addEventListener("load", () => {
    const mobileMenuBtn = document.querySelector(".mobile_menu-btn");
    const menu = document.querySelector(".menu");
    mobileMenuBtn.addEventListener('click', function () {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
            menu.classList.remove("menu_active");
        } else {
            this.classList.add("active");
            menu.classList.add("menu_active");
        }
    });
});


const getCurrentTimeDate = () => {
    let currentTimeDate = new Date();

    var month = new Array();
    month[0] = "JAN";
    month[1] = "FEB";
    month[2] = "MAR";
    month[3] = "APR";
    month[4] = "May";
    month[5] = "JUN";
    month[6] = "JUL";
    month[7] = "AUG";
    month[8] = "SEP";
    month[9] = "OCT";
    month[10] = "NOV";
    month[11] = "DEC";

    var hours = currentTimeDate.getHours();

    var minutes = currentTimeDate.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var day_night = hours >= 12 ? 'PM' : 'AM';

    if (hours === 12) {
        hours = 12;

    } else {

        hours = hours % 12;

    }

    var currentTime = `${hours}:${minutes}${day_night} |`;
    var currentDate = currentTimeDate.getDate();
    var currentMonth = month[currentTimeDate.getMonth()];
    var CurrentYear = currentTimeDate.getFullYear();

    var fullDate = `| ${currentDate} ${currentMonth} ${CurrentYear}`;


    var hours_minutes = document.getElementsByClassName("time");
    var day_month_year = document.getElementsByClassName("date");
    setTimeout(getCurrentTimeDate, 500);
    for (let i = 0; i < hours_minutes.length; i++) {
        hours_minutes[i].innerHTML = currentTime;
        day_month_year[i].innerHTML = fullDate;
    }
}
getCurrentTimeDate();