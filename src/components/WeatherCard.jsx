import React from 'react'

export const WeatherCard = ({weather}) => {

    console.log(weather);
    const celcius1 = (weather?.main.temp - 273.15)
    const celcius = celcius1.toFixed(2)


return (
    <div>
        <h1>el climaaaaaaaaaa</h1>
    
    <p> estas en {weather?.name}</p>
    <p>con una temperatura de {weather?.main.temp}F° </p>
    <p> en celcius  es {celcius}C° </p>
    <p> humedad de {weather?.main.humidity}%</p>
    </div>
)
}
