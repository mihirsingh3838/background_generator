var inp1= document.querySelector(".colour1");
var inp2= document.querySelector(".colour2");
var body= document.getElementById("gradient");

function setGradient(){
    body.style.background=  "linear-gradient(to right, " + inp1.value +"," + inp2.value + ")";
};

inp1.addEventListener("input", setGradient);

inp2.addEventListener("input", setGradient);