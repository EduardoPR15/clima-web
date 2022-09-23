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
    


    useEffect(() => {
        setInterval(() => setdateNow(new Date()), 1000);
    }, []);
    return (
    <div className='clock' >
    <div className="date">
        <h3> {days} de {month} de {year}</h3>
    </div>
    <div className="time">
        <h3> {hour}:{minutes}:{seconds} </h3>
    </div>
        
    </div>
)
}
