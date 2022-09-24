import React, { useState } from 'react'
import { Clock } from './Clock';
import { IconWeather } from './IconWeather';
import './WeatherCard.css'
export const WeatherCard = ({weather}) => {

    //console.log(weather);
    const celcius1 = (weather?.main.temp - 273.15)
    const celcius = celcius1.toFixed(2)
    const farenheit = (celcius* 9/5 + 32 )
    const feels = (weather?.main.feels_like - 273.15).toFixed(2) 
    const clouds = weather?.clouds.all
    const date = new Date
    let nubess = 2
    const [cloudy, setCloudy] = useState()
    
    function nubes(nube)    {
        if (nube == 1) {
    //console.log("1");
    let clases = "clase1"
    return clases
    }
        if (nube == 2) {
    ///console.log("2");
    let clases = "clase2"
    return clases

    
    }
    
                            }
let style = nubes(nubess)
return (
    <div className={style}>
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
        
        
        
            <p>con una temperatura de {farenheit}F° </p>
            <p> humedad de {weather?.main.humidity}% {clouds} aa {style} </p>
            <article> o </article>
    </div>
)
}
