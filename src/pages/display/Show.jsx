import React from 'react'
import { useState } from 'react';
import css from './display.module.css';
const Show = ({city}) => {
  const [temp,set_temp]=useState(0);
  const [humidity,set_humidity]=useState(0);
  const [dirction,set_direction]=useState("");
  const [days,set_days]=useState(0);

  try
  {
    const weu = fetch("https://api.weatherapi.com/v1/current.json?key=6cd72e19397d429da6892536220712&q="+city+"&aqi=no&units=metric");
    async function we() {

        const first = await weu;
        const datae = await first.json();
        set_temp(datae.current.temp_c);
        set_humidity(datae.current.humidity);
        set_direction(datae.current.wind_dir);
        set_days(datae.current.is_day);

    }
    we();
  }
  catch(er)
  {
    console.log(er,"here is error")
  }
  


  return (
    <div className={css.main}>
    
    <div className={css.first}>
      <h1 className={css.h1}>{temp}°</h1>
     <div className={css.iconediv}><i  className="fa-solid fa-temperature-three-quarters"></i></div>
    </div>
    <div className={css.second}>
      <h2 className={css.h12}>{humidity}</h2>
      <h3 className={css.h13}>humidity</h3>
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