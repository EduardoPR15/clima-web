import React, { useState } from 'react'
import { Clock } from './Clock';
import { IconWeather } from './IconWeather';
import './WeatherCard.css'
export const WeatherCard = ({weather}) => {

    //console.log(weather);
    const celcius1 = (weather?.main.temp - 273.15)
    const celcius = celcius1.toFixed(0)
    const farenheit = (celcius* 9/5 + 32 )
    const feels = (weather?.main.feels_like - 273.15).toFixed(0) 
    const clouds = weather?.clouds.all
    const date = new Date
    let condition = weather?.weather[0].main
    console.log(condition);
    let nubess = 2
    const [cloudy, setCloudy] = useState()
    const [temperature, settemperature] = useState()
settemperature(celcius)
return (
    <div>
        <h1>el clima</h1> 
            <div className='clockBox'> 
                <Clock />
            </div>
        <div className='WeatherImg'>
            <p>aqui va el icono del clima :va</p>
            <IconWeather weather={weather} Clock={Clock} />
        </div>
            <div className='cardW'>
                <h1> {celcius} C° </h1>
                <h2 className='text'>{weather?.weather[0].description}</h2> 
                <h2>{weather?.name} {weather?.sys.country} </h2> 
                <h3> Sensacion termica {feels} C°</h3>
            </div> 
        
        
        <button> Change</button>
            <p>con una temperatura de {farenheit}F° </p>
            <p> humedad de {weather?.main.humidity}% {clouds} aa </p>
            <article> o </article>
            <h2></h2>
    </div>
)
}
