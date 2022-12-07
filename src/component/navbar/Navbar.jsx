import React from "react";
import { useState } from "react";
import css from '../navbar/Navbar.module.css'

 const Navbar=()=>{
    const [lat,setlat]=useState(0);
    const [lon,setlon]=useState(0);
    const [location,setlocation]=useState("");

   if(navigator.geolocation)
   {
    navigator.geolocation.getCurrentPosition((data)=>{
        console.log(data);
        setlat(data.coords.latitude);
        setlon(data.coords.longitude);
        
    },()=>{
        console.log("error");
    })
   }
   else
   {
     alert("This browser is not compatable for loction purpose use anounthe browser or update your current browser")
   }
    



    const webu=fetch("ttps://api.weatherapi.com/v1/current.json?key=6cd72e19397d429da6892536220712&q="+lat+","+lon+"&aqi=no&units=metric");
async function  weat()
{
    const first=  await webu;
    const datare= await first.json();
    console.log(datare);
    setlocation(datare.location.name);

}
weat();



    return(
        <>
           <div className={css.main}>
             <div className={css.div1}>
             <img className={css.img} src={require('./hsun.png')} alt="" />
             
             </div>
             <div className={css.div2}>
             {"lat="}{lat}{" "}{"lon="}{lon}{location}
                <div className={css.ser1}>
                    
                    Serach by city
                </div>
                <div  className={css.ser2}>
                    Serach by All
                </div>
             </div>
           </div>
        </>
    )
 }
 export default Navbar