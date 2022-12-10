import React from 'react'
import { useState } from 'react';
import Fancy_input from '../input_tag/Fancy_input';
import style from './All.module.css';
import Show from '../display/Show';
const All = () => {
  
  return (
    <div className={style.main}>
     <div className={style.first}>

      <div className={style.fome}>
       <div className={style.f1}>
       <Fancy_input val="city" />
       </div>
       <div className={style.f1}>
        <Fancy_input val="State"/>
       </div>
       <div className={style.f1}>
       <Fancy_input val="Country"/>
       </div>
       <div className={style.f1}>
           <div className={style.btn}>
            Search
           </div>
       </div>
      </div>
       
     </div>
     <div className={style.second}>
      
       <div className={style.seco}>
        
       {false ? <Show city="ranchi" /> : <div className={style.image}></div>}
       </div>
      
      </div>

    </div>
  )
}

export default All