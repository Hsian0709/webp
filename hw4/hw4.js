var initime = null;
var mystring = [];
var len = [];
var initime = new Date();
var t1;
var t2;
var t3;
$(document).ready(function () {
    for (var k = 0; k < 6; k++) {
        mystring[k] = "";
    }
    t1 = setInterval(picture_in, 666);
    t2 = setInterval(make_animate, 1);
    setInterval(stopanimate(), 1);
});
$(document).keydown(function (e) {
    for (var i = 0; i < 6; i++) {
        if (e.key == mystring[i].slice(-1)) {
            $(".prow" + i).last().remove();
            mystring[i] = mystring[i].slice(0, -1);
            break;
        }
    }
});
function picture_in() {
    var num = '012345';
    var x = num[Math.round(Math.random() * 5)];
    $("#r" + x).prepend('<img class="prow' + x + ' "src ="image/' + randomstringcode(x) + '.jpg" />');

}
function make_animate() {
    for (var i = 0; i < 6; i++) {
        $(".prow" + i).animate({ left: "1650PX" }, 10000 + 1000 * i);
    }
    setInterval(stopanimate(), 1);
}
function stopanimate() {
    if ($(".prow0").last().offset().left > 1465 || $(".prow1").last().offset().left > 1465 || $(".prow2").last().offset().left > 1465 || $(".prow3").last().offset().left > 1465 || $(".prow4").last().offset().left > 1465 || $(".prow5").last().offset().left > 1465) {
        $("img").stop(true);
        clearInterval(t1);
        clearInterval(t2);
        alert("GAME OVER !");
    }
}
function randomstringcode(i) {
    len[i]++;
    var char = Math.floor((Math.random() * (26)) + 65);
    mystring[i] = String.fromCharCode(char) + mystring[i];
    return String.fromCharCode(char);
}
