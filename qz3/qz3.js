var input= document.getElementById("myinput");
var output =document.getElementById("output");
input.addEventListener("keydown",keylog);
function keylog(e){
    if (e.keyCode >= 32 && e.keyCode <= 126) {
        output.innerHTML += `${e.key}`;
        }
}