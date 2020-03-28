$(document).ready(function(){
var div = $('#weather');
    console.log(div);
    var xhr = $.ajax({
        url:"http://api.openweathermap.org/data/2.5/forecast/city?APPID=445db5b5bb87587513214ae1e4393445&units=metric&lang=ua&q=Zaporizhya",
        success:function(){
           var response = JSON.parse(xhr.responseText);
           
            // div[0].childNodes[0].innerHTML += "The weather in " + response.city.name + ", " + response.city.country +" for next day:"+"</br>"+"</br>";
            // for (var i = 0; i < response.list.length; i++)
            //  div[0].innerHTML += getWeather(response, i);
            // function getWeather(response, index) {
            //     var html = ""
            //     var currentWeather = response.list[index];
            //     html += currentWeather.dt_txt;
            //     html += "temperature: " + currentWeather.main.temp + "C"+"</br>";
            //     html += "<img src='http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png' alt='weather condition'>" + currentWeather.weather[0].description;
            //     html += " humidity: " + currentWeather.main.humidity + "%"+"</br>";
            //     return html;}
            return response;
        },
        
    })
    console.log(response);
});
