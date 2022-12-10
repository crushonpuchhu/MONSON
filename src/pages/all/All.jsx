import React from 'react'
import { useState } from 'react';
import Fancy_input from '../input_tag/Fancy_input';
import style from './All.module.css';
import {Show} from '../display/Show';
const All = () => {
  const [palce,setplace]=useState("");
  const [state,setstate]=useState("");
  const [Country,setcountry]=useState("");
  const [data,setdata]=useState([]);
   const fn1=(e)=>{
      setplace(e.target.value);
   }

   const fn2=(e)=>{
    setstate(e.target.value);
 }

 const fn3=(e)=>{
  setcountry(e.target.value);
}

function submit()
{
  setdata([palce,state,Country])
  setplace("");
  setstate("");
  setcountry("");
}

  return (
    <div className={style.main}>
     <div className={style.first}>

      <div className={style.fome}>
       <div className={style.f1}>
       <Fancy_input up={palce} val="city" fun={fn1}/>
       </div>
       <div className={style.f1}>
        <Fancy_input up={state}  val="State"  fun={fn2}/>
       </div>
       <div className={style.f1}>
       <Fancy_input up={Country}  val="Country"  fun={fn3}/>
       </div>
       <div className={style.f1}>
           <div onClick={submit} className={style.btn}>
            Search
           </div>
       </div>
      </div>
       
     </div>
     <div className={style.second}>
      
       <div className={style.seco}>
        
       {data.length!==0? <Show city={data[0]} s={data[1]} c={data[2]} /> : <div className={style.image}></div>}
       </div>
      
      </div>

    </div>
  )
}

export default All