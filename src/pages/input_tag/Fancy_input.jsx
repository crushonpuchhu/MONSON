import { useState } from "react"
import React from 'react'
import style from './Fancy.module.css';

const Fancy_input = (obj) => {

    const [togel,settogell]=useState(false);



    const clk=(e)=>{
        
          settogell(!togel);
        
        
    }
  
  return (
    <>
   
        <label className={togel? style.lab1:style.lab} htmlFor="text">{obj.val}</label>
        <input onFocus={clk} onBlur={clk}  className={style.input_city} type="text"  />
       
    </>
  )
}

export default Fancy_input
