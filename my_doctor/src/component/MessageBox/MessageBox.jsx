import React from "react";
import classes from './message_box.module.css'


const MessageBox = ()=>{
    const clickHandler = ()=>{
        alert("message sent")
        window.location.reload()
    }
    return(
        <div className={classes.message_box}>
            <input type="text" className={classes.msg}/>
            <button className={classes.send_btn} onClick={clickHandler}>Send Message</button>
        </div>
    )
}



export default MessageBox