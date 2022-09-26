import React, { useState } from 'react'
import { Clock } from './Clock';
import { IconWeather } from './IconWeather';
import './WeatherCard.css'
export const WeatherCard = ({weather, temperature}) => {


    const feels = (weather?.main.feels_like - 273.15).toFixed(0) 
    const clouds = weather?.clouds.all
    const date = new Date
    let condition = weather?.weather[0].main
    console.log(condition);
    let nubess = 2
    const [cloudy, setCloudy] = useState()
    const [isCelcius, setIsCelcius] = useState(true)
    const toggleTemp = () => setIsCelcius(!isCelcius)
    console.log(weather);
    console.log(isCelcius);
    
return (
    <div>
            <div className='clockBox'> 
                <Clock />
            </div>
        <div className='WeatherImg'>
    
            <IconWeather weather={weather} Clock={Clock} />
        </div>
            <div className='cardW'>
                <h1> {isCelcius ? `${temperature?.celDeg} °C` : `${temperature?.farDeg} °F` }</h1>
                <h2 className='text'>{weather?.weather[0].description}</h2> 
                <h2>{weather?.name} {weather?.sys.country} </h2> 
                <h3> Sensacion termica {feels} C°</h3>
            </div> 
        
        
        <button className='Toggle' onClick={toggleTemp}> {isCelcius ? `Change to °F` : `Change to °C` } </button>
    </div>
)
}
