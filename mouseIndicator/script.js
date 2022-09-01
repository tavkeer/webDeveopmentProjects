const containerEl = document.querySelector(".container");
const xPos = document.querySelector(".x");
const yPos = document.querySelector(".y");
window.addEventListener("mousemove", (event)=>{
    xPos.innerHTML = `${event.clientX}`;
    yPos.innerHTML = `${event.clientY}`;
});

window.addEventListener("mouseout", (event)=>{
    xPos.innerHTML = `NONE`;
    yPos.innerHTML = `NONE`;
});
