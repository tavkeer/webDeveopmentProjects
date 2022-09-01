const loadtext = document.querySelector(".loadingtext");
const bg = document.querySelector(".bg");

let load = 0;
let b = 100;
let int = setInterval(blurring, 50);

function blurring(){
    load++;
    b--;
    if(b<96){
    bg.style.opacity = (load)/100;
    }
    else{
        bg.style.opacity = 0.96;
    }
    loadtext.style.opacity = (b)/100;
    if(load>99){
        clearInterval(int);
    }
    loadtext.innerHTML = `${load}%`;
    
}