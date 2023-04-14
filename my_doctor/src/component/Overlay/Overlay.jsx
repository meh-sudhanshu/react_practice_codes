import React, { useState } from "react";
import classes from './overlay.module.css'
import doctor from './doctor.jpg'
import close from './icons8-close-48.png'
const Overlay = (props)=>{
    console.log(props)
    const [flag,setFlag] = useState(false)
    function clickHandler(){
        setFlag(!flag)
    }
    function closeHandler (){
        window.location.reload()
    }
    return(
        <div className={classes.overlay}>
            <img src={close} className={classes.close_btn} onClick={closeHandler}/>
           {flag === false &&  <div className={classes.wrapper}>
            <div className={classes.left}>
                <img src={doctor} alt="" className={classes.profile_Pic}/>
                <h2 className={classes.name_}>{props.data.name}</h2>
            </div>
            <div className={classes.right}>
                <h2 className={classes.title}>
                    {props.data.vertical} {props.data.name}
                    is looking forward to see you. Reserve your slots now
                </h2>
                <input type="datetime-local" className={classes.ip}/>
                <button className={classes.submit_btn} onClick={clickHandler}>Book Now</button>
            </div>
            </div>}
            {flag === true && <h2 className={classes.message}>Appointment Booked</h2>}
        </div>
    )
}



export default Overlay

// {/* <h2>{props.data.name}</h2>
//             <h2>{props.data.vertical}</h2> */}