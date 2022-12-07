import React from 'react'
import css from './City.module.css'
const Area = () => {
  return (
    <div className={css.main}>
        
        <div className={css.first}>

            <h1 className={css.h11}>City</h1>
            <input className={css.inp} maxLength="20px" type="text"/>

        </div>

        <div className={css.second}>
            <div className={css.cr1}></div>
            <div className={css.cr2}></div>
            
          <div className={css.seca}>

          </div>
        </div>

    

        </div>
  )
}

export default Area