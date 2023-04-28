var hexValue = document.querySelector(".color-circle");
var hexText = document.querySelector(".hexcode");
var buttonRandom = document.querySelector(".random");

window.onload = function(){
    UpdateColor("#ff0000");
}

hexValue.addEventListener("change",()=>{
    UpdateColor(hexValue.value);
})
buttonRandom.addEventListener("click",()=>{

    var randomColor ="#" + Math.floor(Math.random()*16777215).toString(16);
    UpdateColor(randomColor);
})
hexText.addEventListener("click",()=>{
    hexText.innerText ="Copied!";
    navigator.clipboard.writeText(hexValue.value);
    setTimeout(()=>{
        hexText.innerText = hexValue.value;
    },1500)
})

function UpdateColor(hexVal){
    hexValue.value = hexVal;
    hexText.innerText = hexVal;
    hexText.style.background = hexVal;
    buttonRandom.style.background = hexVal;
}