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
    t1 = setInterval(picture_in, 1000);
    t2 = setInterval(make_animate, 1);
    setInterval(stopanimate(),1);
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
    for (var j = 0; j < 6; j++) {
        var t=randomtimes();
        if (t>1){
            $("#r" + j).prepend('<img class="prow' + j + ' "src ="image/' + randomstringcode(j) + '.jpg" style="left:65px;" />');
            $("#r" + j).prepend('<img class="prow' + j + ' "src ="image/' + randomstringcode(j) + '.jpg" />');
        }
        else
            $("#r" + j).prepend('<img class="prow' + j + ' "src ="image/' + randomstringcode(j) + '.jpg" />');
    }
}
function make_animate() {
    $(".prow0").animate({ left: "+=19" }, 130);
    $(".prow1").animate({ left: "+=10" }, 100);
    $(".prow2").animate({ left: "+=25" }, 100);
    $(".prow3").animate({ left: "+=15" }, 125);
    $(".prow4").animate({ left: "+=20" }, 100);
    $(".prow5").animate({ left: "+=12" }, 100);
    setInterval(stopanimate(),1);
}
function stopanimate() {
    if ($(".prow0").last().offset().left > 1465||$(".prow1").last().offset().left > 1465||$(".prow2").last().offset().left > 1465||$(".prow3").last().offset().left > 1465||$(".prow4").last().offset().left > 1465||$(".prow5").last().offset().left > 1465) {
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
function randomtimes() {
    var nowtime = new Date();
    var number = Math.floor(Math.random() * (2) + 1);
    return number;
}