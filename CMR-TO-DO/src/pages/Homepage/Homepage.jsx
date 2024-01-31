import React from "react";
import MyButton from '../../atoms/MyButton'
import MultiActionAreaCard from '../../components/MultiActionAreaCard'
import DataGridDemo from '../../components/DataGridDemo'
import './homepage.css'


const Homepage = (props)=>{
    console.log(props.userId)
    return(
       <div className="main">
            <div className="left">
                <MyButton/>
                <DataGridDemo/>
            </div>
            <div className="right">
                <MultiActionAreaCard/>
            </div>
       </div>
    )
}

export default Homepage