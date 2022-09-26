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
const [temperature, setTemperature] = useState()
const [isCelcius, setIsCelcius] = useState(true)
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
      .then(res =>{
        const celDeg = (res.data.main.temp - 273.15).toFixed(0)
        const farDeg = (celDeg * 9 / 5 + 32 ).toFixed(0)
        setTemperature({celDeg, farDeg})
        setWeather(res.data)})
      .catch(err => console.log(err))

    
    }

},[coords])
////---------------------------PANTALA DE FONDO------------------------------/////
let clouds = weather?.weather[0].main
let nubess = "Ash"
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
if (nube == "Thunderstorm" ) {
  console.log("Thunderstorm");
  let clases = "Thunderstorm"
  return clases
  }
if (nube == "Drizzle" ) {
    console.log("Drizzle");
    let clases = "Drizzle"
    return clases
    }
if (nube == "Snow" ) {
      console.log("Snow");
      let clases = "Snow"
      return clases
      }
if (nube == "Clear" ) {
      console.log("Clear");
      let clases = "Clear"
      return clases
      }
if (nube == "Mist" ) {
      console.log("Mist");
      let clases = "Mist"
      return clases
      }
if (nube == "Smoke" ) {
      console.log("Smoke");
      let clases = "Smoke"
      return clases
      } 
if (nube == "Haze" ) {
      console.log("Haze");
      let clases = "Haze"
      return clases
      }
if (nube == "Dust" ) {
      console.log("Dust");
      let clases = "Dust"
      return clases
      }
if (nube == "Fog" ) {
      console.log("Fog");
      let clases = "Fog"
      return clases
      }
if (nube == "Sand" ) {
      console.log("Sand");
      let clases = "Sand"
      return clases
      }
if (nube == "Ash" ) {
      console.log("Ash");
      let clases = "Ash"
      return clases
      }
if (nube == "Squall" ) {
      console.log("Squall");
      let clases = "Squall"
      return clases
      }
if (nube == "Tornado" ) {
      console.log("Tornado");
      let clases = "Tornado"
      return clases
      }
      
    }
let style = "App" + " " + nubes(nubess)
console.log(style);
console.log(weather?.weather[0].main)



  return (
    <div className={style}>
    {   weather ?
    <WeatherCard weather={weather} temperature={temperature }/>
    : <Loading />
    }    
    </div>
  )
}

export default App
