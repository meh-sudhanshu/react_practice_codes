import React, { useEffect } from "react";
import MyButton from '../../atoms/MyButton'
import MultiActionAreaCard from '../../components/MultiActionAreaCard'
import DataGridDemo from '../../components/DataGridDemo'
import './homepage.css'


const Homepage = (props)=>{
    console.log(props,"props")
    const USER_ID = (props.userId)
    const [userData,setUserData] = React.useState(null)
   

  


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