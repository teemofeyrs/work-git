var div = document.getElementsByTagName('div');
var tableW =document.getElementsByTagName('table');
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast/city?APPID=445db5b5bb87587513214ae1e4393445&units=metric&lang=ua&q=Zaporizhya");
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4)
        return;

    try {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
        div[0].childNodes[0].innerHTML += "The weather in " + response.city.name + ", " + response.city.country +" for next day" + "</br>";
        for (var i = 0; i < response.list.length; i++)
             div[0].childNodes[1] += getWeather(response, i);
    }
    catch (e) {
        div.innerHTML = "Error occured. Please try again.";
    }
};

function getWeather(response, index) {
    var currentWeather = response.list[index];
    tableW[0].rows[0].firstElementChild.innerHTML = currentWeather.dt_txt;
    tableW[0].rows[0].lastElementChild.innerHTML= "temperature: " + currentWeather.main.temp + "C";
    tableW[0].rows[1].cells[0].innerHTML= "<img src='http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png' alt='weather condition'>" + currentWeather.weather[0].description;
    tableW[0].rows[1].cells[1].innerHTML= " humidity: " + currentWeather.main.humidity + "%"
    return html;
}
