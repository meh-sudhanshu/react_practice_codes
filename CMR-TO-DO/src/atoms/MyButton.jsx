

import React from "react";

import styles from './button.module.css'
import Button from '@mui/material/Button';

const MyButton = ()=>{
    const style = {
        backgroundColor:"#474F7A",
        color:"white"
    }
    return(
        <Button variant="contained" style={style}>
            Add Item
        </Button>
    )
}


export default MyButton