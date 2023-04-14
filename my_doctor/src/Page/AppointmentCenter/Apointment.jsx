import React, { useState } from "react";

import classes from './appointment.module.css'
import Navbar from "../../component/Navbar/Navbar";
import ItemWrapper from "../../component/ItemWrapper/ItemWrapper";
import Overlay from "../../component/Overlay/Overlay";

const Appointment = ()=>{
    const doctorList =[
        {
            id:1,
            name:"Pratibha saini",
            vertical:"Eye specialist",
            backgroundColor:"#f2f2f2"
        },
        {
            id:2,
            name:"Kuwar Singh",
            backgroundColor:"#ffffff",
            vertical:"Stomach specialist",
            border:"1px solid #dee2e6"
        },
        {
            id:3,
            name:"Ranjan Verma",
            vertical:"Dentist",
            backgroundColor:"#f2f2f2"
        },
        {
            id:4,
            name:"RP singh",
            backgroundColor:"#ffffff",
            vertical:"Bone specialist",
            border:"1px solid #dee2e6"
        },
        {
            id:5,
            name:"Ankita Singh",
            vertical:"Skin Care",
            backgroundColor:"#f2f2f2"
        }
    ]
    const [flag,setFlag] = useState(false)
    const [index,setIndex] = useState(0)
    const toggleFlag = (index)=>{
        setIndex(index)
        setFlag(!flag)
    }
    return(
        <div className={classes.center}>
            {flag && <Overlay data={doctorList[index]}/>}
            <Navbar/>
            <div className={classes.bottom}>
                {doctorList.map(item=><ItemWrapper item={item} key={
                    Math.random()
                } toggleFlag={toggleFlag}/>)}
            </div>
        </div>
    )
}


export default Appointment