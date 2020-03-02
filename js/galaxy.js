/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * /
 /*
 Created on : Oct 17, 2019, 9:32:40 AM
 Author     : Dhakal Anil
 */

document.getElementsByName('email')[0].placeholder = "       your Id";
document.getElementsByName('password')[0].placeholder = "       ********";

let today = new Date();
let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

document.getElementsByName('date1')[0].placeholder = date;
document.getElementsByName('date2')[0].placeholder = date;


function getMore() {
    let detail = "Kathmandu is the capital of Nepal and is also known as\n\
                city of Temples. Here is only the basic info about Kathmandu valley\n\
                tour. To know more click the link: https://fi.wikipedia.org/wiki/Kathmandu";
    document.getElementById("ktm").innerHTML = detail;
}

function showCalendar() {
    today.setDate(1);
    let day = today.getDay();
    let current = new Date();
    let endDate = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            0
            ).getDate();

    let prevDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
            ).getDate();
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    document.getElementById("month").innerHTML = months[today.getMonth()] + " " + today.getFullYear();
    let cells = "";
    for (let x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }
    console.log(day);
    for (let i = 1; i <= endDate; i++) {
        if (i === current.getDate() && today.getMonth() === current.getMonth()) {
            cells += "<div class='today'>" + i + "</div>";

        } else {
            cells += "<div>" + i + "</div>";
        }
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para) {
    if (para === "prev") {
        today.setMonth(today.getMonth() - 1);
    } else if (para === 'next') {
        today.setMonth(today.getMonth() + 1);
    }
    showCalendar();
}