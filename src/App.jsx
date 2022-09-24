import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import { WeatherCard } from './components/WeatherCard'
import { Clock } from './components/Clock'
import { Loading } from './components/Loading'

function App() {
const [coords, setCoords] = useState()
const [weather, setWeather] = useState()
const apiKey = "df2cc64f8c09ba12c19dc1514d875a8b"
useEffect(() =>{

const success = (pos) => {
  const obj = {
    lat: pos.coords.latitude,
    lon: pos.coords.longitude
  }
  setCoords(obj);
}
navigator.geolocation.getCurrentPosition(success)
}, [] )
const language = navigator.language
const lang1 = language.split("-");
const lang = lang1[1]
console.log(lang);


//clima
useEffect(() =>{
  if (coords) {

      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}&lang=${lang}`
      axios.get(URL)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err))

    
    }

},[coords])
let clouds = weather?.weather[0].main
let nubess = "Rain"
function nubes(nube)    {
  if (nube == "Clouds") {
console.log("Clouds");
let clases = "Clouds"
return clases
}
  if (nube == "Rain" ) {
console.log("Rain");
let clases = "Rain"
return clases


}

                      }
let style = "App" + " " + nubes(clouds)
console.log(style);
console.log(weather?.weather[0].main)



  return (
    <div className={style}>
   {   weather ?
    <WeatherCard weather={weather}/>
    : <Loading />
   }    
    </div>
  )
}

export default App
