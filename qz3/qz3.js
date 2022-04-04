var input= document.getElementById("myinput");
var output =document.getElementById("output");
addEventListener("keydown",keylog);
function keylog(e){
    if (e.keyCode >= 65 && e.keyCode <= 90 ||
        e.keyCode >= 96 && e.keyCode <= 105) {
        output.textContent += `${e.key}`;
        }
}