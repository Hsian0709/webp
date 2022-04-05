var input= document.getElementById("myinput");
var output =document.getElementById("output");
input.addEventListener("keydown",keylog);
function keylog(e){
    output.innerHTML += `${e.key}`;
}
