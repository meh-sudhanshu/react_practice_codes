import React, { useState } from "react";
import   classes from './itemwrapper.module.css'
import Overlay from "../Overlay/Overlay";

const ItemWrapper = (props)=>{
    const style = {
        backgroundColor:props.item.backgroundColor,
        border:props.item.border
    }
    const toggleFlag = ()=>{
        props.toggleFlag(props.item.id - 1)
    }
    const messageHandler =()=>{
        props.toggleMFlag()
    }
    return(
        <div className={classes.item} style={style}>
            <div className={classes.align}>
                <h2 className={classes.id_}>{props.item.id}</h2>
            </div>
            <div className={classes.align}>
                <h2 className={classes.name_}>{props.item.name}</h2>
            </div>  
            <div className={classes.align}>
                <h2 className={classes.vertical_}>{props.item.vertical}</h2>
            </div>
            <div className={classes.align}>
                <button className={classes.appoint_btn}
                    onClick={toggleFlag}
                >Book An Appointment</button>
            </div>
            <div className={classes.align}>
                <button className={classes.message_btn} onClick={messageHandler}>Message</button>
            </div>
        </div>
    )
}


export default ItemWrapper
