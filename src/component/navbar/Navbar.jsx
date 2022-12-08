import React from "react";
import { useState } from "react";
import css from '../navbar/Navbar.module.css'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const search_by_city = useNavigate();
    const search_by_All=useNavigate();
    const [lat, setlat] = useState(0);
    const [lon, setlon] = useState(0);
    const [location, setlocation] = useState("");
    const [tempt, settemp] = useState(0);
    const [day, setday] = useState(1);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((data) => {
            setlat(data.coords.latitude);
            setlon(data.coords.longitude);

        }, () => {
            console.log("error");
        })
    }
    else {
        alert("This browser is not compatable for loction purpose use anounthe browser or update your current browser")
    }


    

    const webu = fetch("https://api.weatherapi.com/v1/current.json?key=6cd72e19397d429da6892536220712&q=" + lat + "," + lon + "&aqi=no&units=metric");
    async function weat() {
        const first = await webu;
        const datare = await first.json();
        setlocation(datare.location.name);
        settemp(datare.current.temp_c)
        setday(datare.current.is_day)
        console.log(datare)

    }
    weat();



    return (
        <>
            <div className={day ? css.main : css.dark}>
                <div className={css.div1}>
                  
                     <div className={css.img}></div>
                </div>
                <div className={css.div2}>
                    <div className={day ? css.day : css.night}>
                        <h1 className={css.tepm}>{tempt}°</h1>
                        <h1 className={css.h12}>{location}</h1>
                        {day ? <img className={css.sun} src={require('./sun.png')} alt="sun_day" /> : <img className={css.sun} src={require('./moon.png')} alt="sun_day" />}
                    </div>

                    <div onClick={()=>search_by_city("/search_by_city")} className={css.ser1}>

                        Serach by city
                    </div>
                    <div onClick={()=>search_by_All("/search_by_All")} className={css.ser2}>
                        Serach by All
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar