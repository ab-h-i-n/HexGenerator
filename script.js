var hexValue = document.querySelector(".color-circle");
var hexText = document.querySelector(".hexcode");
var buttonRandom = document.querySelector(".random");
var value = hexValue.value;

window.onload = function(){
    hexValue.value = "#ff0000";
    hexText.innerText = hexValue.value;
    hexText.style.background = hexValue.value;
    buttonRandom.style.background = hexValue.value
}

hexValue.addEventListener("change",()=>{
    console.log(hexValue.value);
    hexText.innerText = hexValue.value;
    hexText.style.background = hexValue.value;
    buttonRandom.style.background = hexValue.value;
})

hexText.addEventListener("click",()=>{
    hexText.innerText ="Copied!";
    navigator.clipboard.writeText(hexValue.value);
    setTimeout(()=>{
        hexText.innerText = hexValue.value;
    },1500)
})
