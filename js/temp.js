
const api_key = `b6dcc8a74aa346dd01b3433aceab2b06`;
const loadData = (city)=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
      .then(response => response.json())
      .then(data => displayTemperature(data))
}

const displayTemperature = (data)=>{
      console.log(data.weather[0].main)
      const tempLoc = document.getElementById('temp');
      tempLoc.innerText = data.main.temp; 
      const cityCondition = document.getElementById('condition');
      cityCondition.innerText = data.weather[0].main; 
}

      
document.getElementById("btn-search").addEventListener('click',function(){

      const cityName = document.getElementById('city-name');
      console.log(cityName)

      const takeData = document.getElementById('search-feild');
      cityName.innerText= takeData.value;
      const userInput = takeData.value;
      
      // console.log(cityCondition);
      loadData(userInput)
      takeData.value = '';
})

loadData('dhaka')





      