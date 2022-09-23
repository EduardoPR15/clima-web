import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import { WeatherCard } from './components/WeatherCard'

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



//console.log(coords);

//clima
useEffect(() =>{
  if (coords) {

      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(URL)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err))

    
    }

},[coords])



  return (
    <div className="App">
   <WeatherCard weather={weather}/>
    </div>
  )
}

export default App