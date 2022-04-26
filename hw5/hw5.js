var urldata = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=12&%24format=JSON";
var data = $.getJSON(urldata);
data.done(function (data) {
    $("h1").after('<div class="station" id="A1">' + data[0].OriginStationName.Zh_tw + '</div>');
    var time = 0;
    for (var i = 0; i < 12; i++) {
        $("#A" + (i + 1)).after('<div class="time" id="t' + i + '">' + (data[i].TravelTime - time) + '分鐘</div>')
        $("#t" + i).after('<div class="station" id="A' + (i + 2) + '">' + data[i].DestinationStationName.Zh_tw +' '+'</div>');
        time = data[i].TravelTime;
    }
});
data.fail(function (data) {
    console.log(data);
    $("#contain").html("fail getting data");
}); 