const monthEl = document.querySelector(".date h1");
const monthIndex = new Date().getMonth();
const fulldateEl = document.querySelector(".date p");
const lastday = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const daysEl = document.querySelector(".days");
const firstday = new Date(new Date().getFullYear(), monthIndex , 1).getDay()-1;


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
monthEl.innerText = months[monthIndex];
fulldateEl.innerText = new Date().toDateString()-1;

let days = "";
for(let i = 1; i<=firstday; i++)
{
    days += `<div class="empty"></div>`;
}
for(let i = 1; i <= lastday; i++)
{
    if(i===new Date().getDate()){
        days += `<div class="today">${i}</div>`;
    }
    else{
    days += `<div>${i}</div>`;
    }
}
daysEl.innerHTML = days;
