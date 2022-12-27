let stars=document.querySelector("#stars");
let moon=document.querySelector("#moon");
let text=document.querySelector("#text");
let mountains_behind=document.querySelector("#mountains_behind");
let btn=document.querySelector(".btn");
let mounstains_front=document.querySelector("#mounstains_front");
let header=document.querySelector("header");

window.addEventListener("scroll", ()=>{
    let value=window.scrollY;
    stars.style.left= value*0.25 +"px";
    text.style.marginRight=value*4+"px";
    text.style.marginTop=value*1.5+"px";
    btn.style.marginTop=value*1.5+"px";
    header.style.top= value*0.25 +"px";
    moon.style.top= value*1.25 +"px";
    mountains_behind.style.top= value*0.25 +"px";
    mounstains_front.style.top= value*0 +"px";
   
})