import React from 'react'
import css from './City.module.css'
import { Sho} from '../display/Show'
import { useState } from 'react'
import axios from 'axios'
const Area = () => {
  const [city, setcity] = useState("");
  const [setdata, setplace] = useState("");
  const [d,setd]=useState(1);
  function func() {
    setplace(city);
    setcity("");
    

  }
  const day = axios("https://api.weatherapi.com/v1/current.json?key=00547835b5e84313945140812220912&q="+setdata+"&aqi=no&units=metric");
    async function weo() {

        try {
          
          const dat = await day;
          setd(dat.data.current.is_day);
          
           console.log(dat); 
        } 
        catch (error) {

           console.log(error)

        }
       
        

    }
    weo();
    


  return (
    <div className={setdata===""?css.defaltu:(d?css.main:css.night)}>

      <div className={css.first}>

        <h1 className={css.h11}>City</h1>
        <input value={city} onChange={(e) => {
          setcity(e.target.value)
        }} className={css.inp} maxLength="20px" type="text" />
        <div onClick={func} className={css.btn}>Search</div>
      </div>

      <div className={css.second}>

        
        <div className={css.cr2}></div>

        <div className={css.seca}>

          {setdata !== "" ? <Sho cit={setdata} /> : <div className={css.image}></div>}


        </div>

      </div>



    </div>
  )
}

export default Area