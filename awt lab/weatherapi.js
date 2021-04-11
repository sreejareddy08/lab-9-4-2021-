function weather(){

var request=new XMLHttpRequest();
var city=document.getElementById("city").value;
var url=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=b90d7f9b742617e7c24701e658fab0b1`
console.log(url)
request.open('GET',url,true)
request.send()
request.onload=function(){
    var result=JSON.parse(this.response)
    table=document.createElement("TABLE")
    table.border="1"
    var row=table.insertRow(-1)
    var cella1=row.insertCell(-1)
    var cella2=row.insertCell(-1)
    cella1.innerHTML="date and time"
    cella2.innerHTML="temperature"

    result.list.forEach((day) => {
        var row1=table.insertRow(-1);
         var cell1=row1.insertCell(-1)
         var cell2=row1.insertCell(-1)
        cell1.innerHTML=day.dt_txt
        cell2.innerHTML=day.main.temp
        
    });
    tabled=document.getElementById("temptable")
    tabled.append(table);
    request.send();

}
}
