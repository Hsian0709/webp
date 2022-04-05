var out = document.getElementById("out");
addEventListener("keydown", keylog);
var initime = null;
var pretime = null;
let mystring = "";
var len = 0;
var tlen=0;
function randomstringcode(n) {
    for (var i = 0; i < n; i++) {
        tlen++;
        len++;
        var char = Math.floor((Math.random() * (25)) + 65);
        mystring=String.fromCharCode(char)+mystring;
    }
}
function produce_string(){
    var nowtime = new Date();
    var tempn = (nowtime - pretime) / 1000 ;
    if (tempn > 1) {
        randomstringcode(tempn* 2.5);
    }
    var tempt = (nowtime - initime) / 1000 * 2.5;
    if (tempt - tlen > 1) {
        randomstringcode(tempt-tlen);
    }
    pretime = nowtime;
}
function keylog(e) {
    var nowtime = new Date();
    if (initime == null) {
        initime = new Date();
        pretime = initime;
        var number = Math.floor(Math.random() * (3) + 1);
        randomstringcode(number);
    }
    else {
       produce_string();
    }
    eliminate_char(e);
    out.innerHTML="打字機比賽:"+mystring;
}
function eliminate_char(e){
  if(e.key==mystring.slice(-1)){
        mystring=mystring.slice(0,-1);
    } 
}