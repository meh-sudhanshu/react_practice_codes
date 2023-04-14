import { useState } from 'react'
import Button2 from '../Button/Button2'
import classes from './card.module.css'


const Card  =(props)=>{
    return(
        <div className={classes.card}>
            <h2 className={classes.que}>
                {props.que}
            </h2>
            <div className={classes.ans_ctn}>
                {props.options.map((item)=>
                    <Button2 item={item}  toggleFlag={props.toggleFlag} scoreHandler={props.scoreHandler}/>
                )}
            </div>
        </div>
    )
}


export default Card