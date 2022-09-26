import React, { useState } from 'react'


export const IconWeather = ({weather,Clock}) => {
    //console.log(weather);
    //console.log(Clock.dateNow);
let condition = weather?.weather[0].description
//let condition = "claro"
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
//let dias = "dia"
//console.log(dias);
///////////////////----------------icono del clima----------------------/////
if (condition == "nieve ligera" || condition == "light snow") {
//console.log("nieve");
    return(
        <div className='iconW'> <h2 className='description'>nieve </h2> <img src="./nieve.png" alt="" /> </div>
    )
}
if (condition == "nieve" || condition == "snow") {
    //console.log("nieve");
    return(
        <div className='iconW'><h2 className='description'>Nieve </h2> <img src="./nieve.png" alt="" /></div>
    )
}
if (condition == "fuerte nieve" || condition == "heavy snow") {
    //console.log("nieve");
    return(
        <div className='iconW'><h2 className='description'>Nieve </h2> <img src="./nieve.png" alt="" /></div>
    )
}
if (condition == "aguanieve" || condition == "sleet") {
    //console.log("nieve");
    return(
        <div className='iconW'><h2 className='description'>Nieve </h2> <img src="./nieve.png" alt="" /></div>
    )
}
if (condition == "agunaieve liguera" || condition == "light shower sleet") {
    //console.log("nieve");
    return(
        <div className='iconW'><h2 className='description'>Nieve </h2> <img src="./nieve.png" alt="" /></div>
    )
}
if (condition == "aguanieve de ducha" || condition == "shower sleet") {
    //console.log("nieve");
    return(
        <div className='iconW'><h2 className='description'>Nieve </h2> <img src="./nieve.png" alt="" /></div>
    )
}
if (condition == "lluvia ligera y nieve" || condition == "light rain and snow") {
    //console.log("nieve");
    return(
        <div className='iconW'><h2 className='description'>Nieve </h2> <img src="./nieve.png" alt="" /></div>
    )
}
if (condition == "lluvia y nieve" || condition == "rain and snow") {
    //console.log("nieve");
    return(
        <div className='iconW'><h2 className='description'>Nieve </h2> <img src="./nieve.png" alt="" /></div>
    )
}
if (condition == "lluvia de nieve ligera" || condition == "light shower snow") {
    //console.log("nieve");
    return(
        <div className='iconW'><h2 className='description'>Nieve </h2> <img src="./nieve.png" alt="" /></div>
    )
}
if (condition == "ducha de nieve" || condition == "shower snow") {
    //console.log("nieve");
    return(
        <div className='iconW'><h2 className='description'>Nieve </h2> <img src="./nieve.png" alt="" /></div>
    )
}
if (condition == "fuerte lluvia de nieve" || condition == "heavy shower snow") {
    //console.log("nieve");
    return(
        <div className='iconW'><h2 className='description'>Nieve </h2> <img src="./nieve.png" alt="" /></div>
    )
}
if (condition == "nubes dispersas" || condition == "scattered clouds") {
   // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./nube.png" alt="" /></div>
    )

}
if (condition == "pocas nubes" || condition == "few clouds" && dias =="dia") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./nublado2.png" alt="" /></div>
    )
}
if (condition == "pocas nubes" || condition == "few clouds" && dias =="noche") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./night/nublado.png" alt="" /></div>
    )
}
if (condition == "nubes rotas" || condition == "broken clouds") {
    // console.log("nublao");
        return(
        <div className='iconW'> <h2 className='description'>Nublado</h2><img src="./nube.png" alt="" /></div>
        )
}
if (condition == "nubes nubladas" || condition == "overcast clouds") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./nublado3.png" alt="" /></div>
    )
}
if (condition == "lluvia ligera" || condition == "light rain" && dias =="dia") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./lluvia.png" alt="" /></div>
    )
}
if (condition == "lluvia ligera" || condition == "light rain" && dias =="noche") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./night/lluviaN.png" alt="" /></div>
    )
}
if (condition == "lluvia moderada" || condition == "moderate rain" && dias =="dia") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./lluvia.png" alt="" /></div>
    )
}
if (condition == "lluvia moderada" || condition == "moderate rain" && dias =="noche") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./night/lluviaN.png" alt="" /></div>
    )
}
if (condition == "lluvia de intensidad pesada" || condition == "heavy intensity rain" && dias =="dia") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./lluvia.png" alt="" /></div>
    )
}
if (condition == "lluvia de intensidad pesada" || condition == "heavy intensity rain" && dias =="noche") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./night/lluviaN.png.png" alt="" /></div>
    )
}
if (condition == "lluvia muy pesada" || condition == "very heavy rain" && dias =="dia") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./lluvia.png" alt="" /></div>
    )
}
if (condition == "lluvia muy pesada" || condition == "very heavy rain" && dias =="noche") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./lluvia.png" alt="" /></div>
    )
}
if (condition == "lluvia extrema" || condition == "extreme rain" && dias =="dia") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./lluvia.png" alt="" /></div>
    )
}
if (condition == "lluvia extrema" || condition == "extreme rain" && dias =="noche") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./lluvia.png" alt="" /></div>
    )
}
if (condition == "lluvia helada" || condition == "freezing rain") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./nieve.png" alt="" /></div>
    )
}
if (condition == "lluvia de ducha de intensidad ligera" || condition == "light intensity shower rain") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "lluvia" || condition == "Shower rain") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "lluvia de ducha de gran intensidad" || condition == "heavy intensity shower rain") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "lluvia de ducha irregular" || condition == "ragged shower rain") {
    // console.log("nublao");
    return(
        <div className='iconW'><h2 className='description'>Nublado</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "tormenta electrica con lluvia ligera" || condition == "thunderstorm with light rain") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./trueno.png" alt="" /></div>
    )
}
if (condition == "tormenta electrica con lluvia" || condition == "thunderstorm with rain") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./trueno.png" alt="" /></div>
    )
}
if (condition == "tormenta electrica con fuertes lluvias" || condition == "thunderstorm with heavyn rain") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./trueno.png" alt="" /></div>
    )
}
if (condition == "tormenta electrica ligera" || condition == "light thunderstorm") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./trueno.png" alt="" /></div>
    )
}
if (condition == "tormenta electrica" || condition == "thunderstorm") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./trueno.png" alt="" /></div>
    )
}
if (condition == "fuerte tormenta electrica" || condition == "heavy thunderstorm") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./trueno.png" alt="" /></div>
    )
}
if (condition == "tormenta electrica irregular" || condition == "ragged thunderstorm") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./trueno.png" alt="" /></div>
    )
}
if (condition == "tormenta electrica con llovizna ligera" || condition == "thunderstorm with light drizzle") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./trueno.png" alt="" /></div>
    )
}
if (condition == "tormenta electrica con llovizna" || condition == "thunderstorm with drizzle") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./trueno.png" alt="" /></div>
    )
}
if (condition == "tormenta electrica con llovizna pesada" || condition == "thunderstorm with heavy drizzle") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./trueno.png" alt="" /></div>
    )
}
if (condition == "llovizna de intensidad de luz" || condition == "light intensity drizzle") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "llovizna" || condition == "drizzle") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "llovizna de intensidad pesada" || condition == "heavy intensity drizzle") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "intensidad de la luz llovizna lluvia" || condition == "light intensity drizzle rain") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "llovizna llover" || condition == "drizzle rain") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "llovizna de gran intensidad" || condition == "heavy intensity drizzle rain") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "ducha lluvia y llovizna" || condition == "shower rain and drizzle") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "ducha de lluvia pesada y llovizna" || condition == "heavy shower rain and drizzle") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "llovizna de ducha" || condition == "shower drizzle") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Tormenta</h2> <img src="./lluvia2.png" alt="" /></div>
    )
}
if (condition == "niebla" || condition == "mist") {
    //console.log("niebla");
    return(
        <div className='iconW'><h2 className='description'>Niebla</h2> <img src="./wind.png" alt="" /></div>
    )
}
if (condition == "Humo" || condition == "smoke") {
    //console.log("humo");
    return(
        <div className='iconW'><h2 className='description'>Niebla</h2> <img src="./wind.png" alt="" /></div>
    )
}
if (condition == "haze" || condition == "haze") {
    //console.log("haze");
    return(
        <div className='iconW'><h2 className='description'>Niebla</h2> <img src="./wind.png" alt="" /></div>
    )
}
if (condition == "remolinos de arena/polvo" || condition == "sand/dust whirls") {
    //console.log("remolinos");
    return(
        <div className='iconW'><h2 className='description'>Remolino de arena/polvo</h2> <img src="./wind.png" alt="" /></div>
    )
}
if (condition == "niebla" || condition == "fog") {
    //console.log("niebla");
    return(
        <div className='iconW'><h2 className='description'>Niebla</h2> <img src="./wind.png" alt="" /></div>
    )
}
if (condition == "arena" || condition == "sand") {
    //console.log("arena");
    return(
        <div className='iconW'> <h2 className='description'>Tormenta de arena</h2> <img src="./wind.png" alt="" /></div>
    )
}
if (condition == "polvo" || condition == "dust") {
    //console.log("polvo");
    return(
        <div className='iconW'><h2 className='description'>Mucho polvo</h2> <img src="./wind.png" alt="" /></div>
    )
}
if (condition == "ceniza volcanica" || condition == "volcanic ash") {
    //console.log("ceniza");
    return(
        <div className='iconW'><h2 className='description'>Ceniza</h2> <img src="./wind.png" alt="" /></div>
    )
}
if (condition == "chubascos" || condition == "Squalls") {
    //console.log("chubascos");
    return(
        <div className='iconW'><h2 className='description'>Chubascos</h2> <img src="./wind.png" alt="" /></div>
    )
}
if (condition == "tornado" || condition == "Tornado") {
    //console.log("tornado");
    return(
        <div className='iconW'><h2 className='description'>Tornado</h2> <img src="./wind.png" alt="" /></div>
    )
}
if (condition == "clear" || condition == "claro" && dias == "dia") {
   // console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Despejado</h2><img src="./soleado.png" alt="" /></div>
    )
}
if (condition == "clear" || condition == "claro" && dias == "noche") {
    //console.log("lloviendo");
    return(
        <div className='iconW'><h2 className='description'>Despejado</h2><img src="./night/luna-llena" alt="" /></div>
    )
}

//   return (
//     <div>
// <h2>  ? </h2>






//     </div>
    
//   )
}
