setInterval(myfunction,100);
function myfunction(){
  const date=new Date();
 var h= date.getHours();
  var m= date.getMinutes();
  var s= date.getSeconds();
  $("#demo").text(h+":"+m+":"+s);}
