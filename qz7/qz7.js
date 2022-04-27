var dataUrl = "https://wic.heo.taipei/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D"; 
var mydata = $.getJSON(dataUrl);
var myfaildata={
  "count": 170,
  "data": [
    {
      "stationNo": "C0AD1",
      "stationName": "八里",
      "recTime": "202204271600",
      "rain": 0.0
    },
    {
      "stationNo": "C0AD0",
      "stationName": "三芝",
      "recTime": "202204271600",
      "rain": 0.0
    },
    {
      "stationNo": "C0AD4",
      "stationName": "土城",
      "recTime": "202204271600",
      "rain": 0.0
    },
    {
      "stationNo": "318",
      "stationName": "大安福州山",
      "recTime": "202204271602",
      "rain": 0.0
    },
    {
      "stationNo": "01A17",
      "stationName": "坪林",
      "recTime": "201911130140",
      "rain": 0.0
    }
  ]
};
mydata.done(function(mydata){ 
  for(var i=0;i<5;i++){
     $("#contain").append('<h2>'+mydata.data[i].stationName+'('+mydata.data[i].stationNo+')'+'</h2>');
                          var y=mydata.data[i].recTime/100000000;
                           var m=mydata.data[i].recTime%100000000/1000000;
                           var d=mydata.data[i].recTime%1000000/10000;
                      var h=mydata.data[i].recTime%10000/100;
    var s=mydata.data[i].recTime%100; 
    $("#contain").append('<h3>'+mydata.data[0].recTime+'</h3>');
$("#contain").append('<h3>即時雨量'+mydata.data[0].rain+'</h3>');
  }
});                  
mydata.fail( function() { 
   for(var i=0;i<5;i++){
     $("#contain").append('<h2>'+myfaildata.data[i].stationName+'('+myfaildata.data[i].stationNo+') </h2>');
                          var y=myfaildata.data[i].recTime/100000000;
                           var m=myfaildata.data[i].recTime%100000000/1000000;
                           var d=myfaildata.data[i].recTime%1000000/10000;
                      var h=myfaildata.data[i].recTime%10000/100;
    var s=myfaildata.data[i].recTime%100; 
  $("#contain").append('<h3>'+Math.floor(y)+'年'+Math.floor(m)+'月'+Math.floor(d)+'日'+Math.floor(h)+'時'+Math.floor(s)+'分</h3>');
$("#contain").append('<h3>即時雨量'+myfaildata.data[0].rain+'</h3>');
  }
}); 
