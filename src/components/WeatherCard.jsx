import React, { useState } from 'react'
import { Clock } from './Clock';
import './WeatherCard.css'
export const WeatherCard = ({weather}) => {

    console.log(weather);
    const celcius1 = (weather?.main.temp - 273.15)
    const celcius = celcius1.toFixed(2)
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
        <h1>el climaaaaaaaaaa</h1>
        <div className='cardW'>
            <h2>{weather?.name} {weather?.sys.country} </h2> 
            <div>
                <Clock />
            </div>
            <h3> Con una temperatura de {celcius}C° </h3>
            </div>
            <p>con una temperatura de {weather?.main.temp}F° </p>
            <p> humedad de {weather?.main.humidity}% {clouds} aa {style} </p>
            <article> pruebas {weather?.weather[0].description} {weather?.feels_like}</article>
    </div>
)
}
