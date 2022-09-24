import React, { useState } from 'react'


export const IconWeather = ({weather,Clock}) => {
    console.log(weather);
    console.log(Clock.dateNow);
let condition = weather?.weather[0].main
//let condition = "Clear"
//console.log(condition);
const [dateNow, setdateNow] = useState(new Date())
let hour = dateNow.getHours()
// console.log(hour);
// let horas = 5;
// console.log(horas);

function dianoche(hours) {
    if (hours <= 19 && hours >= 5 ) {
    //console.log("dia");
    let dayNight = "dia";
    return dayNight
}
if ( hours > 19 || hours < 5 ) {
    //console.log("noche");
    let dayNight = "noche";
    return dayNight
    
}

}
let dias= dianoche(hour)
console.log(dias);

if (condition == "snow") {
    console.log("nieve diceeee");
    return(
        <div><h2>nieve</h2></div>
    )
}
if (condition == "Clouds") {
    console.log("nublao");
    return(
        <div className='iconW'><h2>nublado <img src="public\nube.png" alt="" /></h2></div>
    )
}
if (condition == "Rain") {
    console.log("lloviendo");
    return(
        <div className='iconW'><h2>lloviendo <img src="public\lluvia.png" alt="" /></h2></div>
    )
}
if (condition == "Thunderstorm") {
    console.log("lloviendo");
    return(
        <div className='iconW'><h2>Tormenta <img src="public\trueno.png" alt="" /></h2></div>
    )
}
if (condition == "Clear" && dias == "dia") {
    console.log("lloviendo");
    return(
        <div className='iconW'><h2>Despejado<img src="public\soleado.png" alt="" /></h2></div>
    )
}
if (condition == "Clear" && dias == "noche") {
    console.log("lloviendo");
    return(
        <div className='iconW'><h2>Despejado<img src="public\night\luna-llena.png" alt="" /></h2></div>
    )
}

//   return (
//     <div>
// <h2>  ? </h2>






//     </div>
    
//   )
}
