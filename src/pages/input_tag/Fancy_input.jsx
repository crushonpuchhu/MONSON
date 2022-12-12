import { useState } from "react"
import React from 'react'
import style from './Fancy.module.css';

const Fancy_input = ({val,fun,up}) => {

    const [togel,settogell]=useState(false);



    const clk=(e)=>{
           if(e.target.value!=="")
           {
            settogell(togel);
           }
           else
           {
            settogell(!togel);
           } 
           if(up=="")
           {
            settogell(!togel);
           }
          
        
        
    }

    

  
  return (
    <>
   
        <label className={togel?style.lab1:style.lab} htmlFor="text">{val}</label>
        <input value={up} onFocus={clk} onBlur={clk} onChange={fun} className={style.input_city} type="text"  />
       
    </>
  )
}

export default Fancy_input
