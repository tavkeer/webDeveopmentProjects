const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

setInterval(() => {
    //getting hour minute and seconds from the browsers time
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    //converting the time value to angle
    const seconddeg = (second / 60) * 360;
    const minutedeg = (minute / 60) * 360;
    const hourdeg = (hour / 12) * 360;

    //changing css accodingly and updating it per second
    secondEl.style.transform = `rotate(${seconddeg}deg)`;
    minuteEl.style.transform = `rotate(${minutedeg}deg)`;
    hourEl.style.transform = `rotate(${hourdeg}deg)`;
   
}, 1000);