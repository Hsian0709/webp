var urldata = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=252&%24format=JSON";
var data = $.getJSON(urldata);
data.done(function (data) {
    $(".myselect").after('<div class="station" id="A1">' + data[0].OriginStationName.Zh_tw + '</div>');
    $("#start").append('<option value="1">' + data[0].OriginStationName.Zh_tw + '</option>');
    $("#end").append('<option value="1">' + data[0].OriginStationName.Zh_tw + '</option>');
    var time = 0;
    for (var i = 0; i < 12; i++) {
        $("#start").append('<option value="' + (i + 2) + '">' + data[i].DestinationStationName.Zh_tw + '</option>');
        $("#end").append('<option value="' + (i + 2) + '">' + data[i].DestinationStationName.Zh_tw + '</option>');
        $("#A" + (i + 1)).after('<div class="time" id="t' + i + '">' + (data[i].TravelTime - time) + '分鐘</div>')
        $("#t" + i).after('<div class="station" id="A' + (i + 2) + '">' + data[i].DestinationStationName.Zh_tw + '</div>');
        time = data[i].TravelTime;
    }
    $('#btn').on('click', function () {
        var s = $("#start").val();
        console.log(s);
        var e = $("#end").val();
        console.log(e);
        if ((e - s) != 0) {
            if (s < e) {
                var d = (s - 1) * 20 + (e - 2);
                console.log(d);
                $("#price").html(data[d].Fares[0].Price + "元");
            }
            else {
                var d = (s - 1) * 20 + (e - 1);
                console.log(d);
                $("#price").html(data[d].Fares[0].Price + "元");
            }
        }
    });
});
data.fail(function (data) {
    console.log(data);
    $("#contain").html("fail getting data");
});
