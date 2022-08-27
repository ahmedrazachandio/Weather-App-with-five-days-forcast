
  
//    div = document.createElement("div");
//   div.setAttribute("id", "div1");

//   const para = document.createElement("p");
//   console.log(para)
//   document.getElementById('section').appendChild(para);

    // para.innerText = "This is a paragraph";

    

    // Ahmed Raza 
function getnewWeatherData(){
    var city = document.getElementById("location").value;   
    axios.get('http://api.weatherapi.com/v1/current.json?key=212cba20af5047c398051557222408&q='+city)
    .then(function (response) {
        console.log(response.data);
        localStorage.setItem("latitude", response.data.location.lat);
        localStorage.setItem("longitude", response.data.location.lon);  
        getWeatherData()
    })
}






    // function getnewWeatherData(){
    //     var getLocation = document.getElementById("location").value;
    //     console.log(getLocation);

    // }


function getWeatherData(){


    // getLocation()
    // var city = document.getElementById("location").value;   
    var latitude = localStorage.getItem("latitude");
    var longitude = localStorage.getItem("longitude");
        
    axios.get('https://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&appid=7d32de22da3569e8ac36b42f3832199a')
    .then(function (response) {
        var list = response.data.list;
        list.forEach(element => {
            console.log(element);
            var div = document.createElement("div");
            div.className = "col-md-4 col-lg-3 col-sm-6 col-12 mt-3";
            var card = document.createElement("div");
            card.className = "card bg-transparent";
            div.appendChild(card);
            card_body = document.createElement("div");
            card_body.className = "card-body";
            card.appendChild(card_body);
            var h1 = document.createElement("h1");
            var temp = element.main.temp/10;
            var titleText = document.createTextNode(temp.toFixed(2));
            h1.appendChild(titleText);
            h1.className = "card-title";
            card_body.appendChild(h1);
            var p = document.createElement("p");
            var titleText = document.createTextNode(element.dt_txt);
            p.className = "card-text";
            p.appendChild(titleText);
            card_body.appendChild(p);
            var section = document.getElementById("section");
            section.appendChild(div);
        
            // var div = document.createElement("div");
            // var title = document.createElement("h3");
            // div.innerHTML = "First";
            // var titleText = document.createTextNode(element.main.temp);

            // title.appendChild(titleText);
        
            // var section = document.getElementById("section");
            // // var child = document.getElementById("section1");

     
            // div.appendChild(title)
            // section.appendChild(div);

            // console.log(element)
            // ...use `element`...
            // document.getElementById("temp_c").innerText = element.main.temp + "° C";
            // document.getElementById("fahrenheit").innerText = element.temp_f + "fahrenheit ° F";
            // document.getElementById("humidity").innerText = element.humidity + "Humidity ° ";
            // document.getElementById("feelslike_c").innerText = element.feelslike_c + "Feelslike ° C ";
            // document.getElementById("vis_km").innerText = element.vis_km + "Visibility KM ";
            // document.getElementById("wind_kph").innerText = element.wind_kph + "Wind Kph";
            // document.getElementById("cloud").innerText = element.cloud + "Cloud";
        })
    })
}
