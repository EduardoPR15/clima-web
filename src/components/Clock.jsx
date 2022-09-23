import React, { useEffect } from 'react'
import { useState } from 'react'

export const Clock = () => {

    const [dateNow, setdateNow] = useState(new Date())
    let hour = dateNow.getHours()
    let minutes = dateNow.getMinutes()
    let seconds = dateNow.getSeconds()
    let days = dateNow.getDate()
    let months = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre","Octubre","Noviembre","Diciembre"]
    let month = months[dateNow.getMonth()]
    let year = dateNow.getFullYear()
    //console.log(dateNow.getHours())
    useEffect(() => {
        setInterval(() => setdateNow(new Date()), 1000);
      }, []);
    return (
    <div className='clock' >
    <div className="date">
        <h2> {days} de {month} de {year}</h2>
    </div>
    <div className="time">
        <h2> {hour}:{minutes}:{seconds} </h2>
    </div>
        
    </div>
)
}
