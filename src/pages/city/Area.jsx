import React from 'react'
import css from './City.module.css'
import Show from '../display/Show'
import { useState } from 'react'

const Area = () => {
  const [city, setcity] = useState("");
  const [setdata, setplace] = useState("");
  function func() {
    setplace(city);
    setcity("");

  }

  return (
    <div className={css.main}>

      <div className={css.first}>

        <h1 className={css.h11}>City</h1>
        <input value={city} onChange={(e) => {
          setcity(e.target.value)
        }} className={css.inp} maxLength="20px" type="text" />
        <div onClick={func} className={css.btn}>Search</div>
      </div>

      <div className={css.second}>

        <div className={css.cr1}></div>
        <div className={css.cr2}></div>

        <div className={css.seca}>

          {setdata !== "" ? <Show city={setdata} /> : <div className={css.image}></div>}


        </div>

      </div>



    </div>
  )
}

export default Area