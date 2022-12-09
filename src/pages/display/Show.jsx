import React from 'react'
import { useState } from 'react';
import css from './display.module.css';
import axios from "axios";

const Show = ({city}) => {
  const [temp,set_temp]=useState(0);
  const [humidity,set_humidity]=useState(0);
  const [dirction,set_direction]=useState("");
  const [days,set_days]=useState(0);
  const [place,setplace]=useState("");

    const weu = axios("https://api.weatherapi.com/v1/current.json?key=00547835b5e84313945140812220912&q="+city+"&aqi=no&units=metric");
    async function we() {

        try {
          
          const datae = await weu;
          set_temp(datae.data.current.temp_c);
          set_humidity(datae.data.current.humidity);
          set_direction(datae.data.current.wind_dir);
          set_days(datae.data.current.is_day);
          setplace(datae.data.location.name); 
           
        } 
        catch (error) {

           console.log(error)

        }
       
        

    }
    we();
 


  return (
    <div className={css.main}>
     <div className={css.name}><h1 className={css.h1name}>{place!==""?place.toUpperCase():"Not found!"}</h1></div>
    <div className={css.first}>
      <h1 className={temp>25?(temp>30?css.hot:css.h1):css.cold}>{temp}°</h1>
     <div className={css.iconediv}><i  className="fa-solid fa-temperature-three-quarters"></i></div>
    </div>
    <div className={css.second}>
      <h2 className={css.h12}>{humidity}%</h2>
      <h3 className={css.h13}>Humidity</h3>
    </div>
    <div className={css.third}>
    <h2 className={css.h12}>{dirction}</h2>
      <h3 className={css.h13}>Wind-Direction</h3>
    </div>
    <div className={css.fouth}>
    <h2 className={css.h12}>{days?"day":"night"}</h2>
      <h3 className={css.h13}>Day or night</h3>
    </div>
    

    </div>
  )
}
export default Show