import React, { useState } from 'react'


export const IconWeather = ({weather,Clock}) => {
    console.log(weather);
    console.log(Clock.dateNow);
let condition = weather?.weather[0].main
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
}
if (condition == "Clouds") {
    console.log("nublao");
}
  return (
    <div>







    </div>
    
  )
}
