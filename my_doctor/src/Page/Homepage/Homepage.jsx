import React, { useState } from "react";
import classes from './homepage.module.css'
import Navbar from "../../component/Navbar/Navbar";
import doctor from './doctor.jpg'
import { useNavigate } from "react-router-dom";
const Homepage = ()=>{
    let navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [flag , setFlag] = useState(false)
    const passwordHanler= (e)=>{
        setFlag(false)
        setPassword(e.target.value)
    }
    const emailHandler = (e)=>{
        setFlag(false)
        setEmail(e.target.value)
    }
    const loginHandler = ()=>{
        console.log(email,password)
        if(email === "testuser@gmail.com" &&
            password === 'Test@123'    
        ){
            navigate("/book-appointment")
        }else{
            setFlag(true)
        }
        setEmail("")
        setPassword('')
    }
    return(
        <div className={classes.homepage}>
            <Navbar/>
            <div className={classes.bottom}>
                <div className={classes.left}>
                    <img src={doctor} className={classes.doctor} alt=""></img>
                </div>
                <div className={classes.right}>
                    <input type="text" className={classes.ip}
                            placeholder="Enter email"
                            onChange={emailHandler} value={email}/>
                    <input className={classes.ip}
                            type="password"
                            placeholder="Enter password"
                            onChange={passwordHanler}
                            value={password}/>
                    <button className={classes.login_btn}
                            onClick={loginHandler}
                    >Log In</button>
                    {flag && <h2 className={classes.warning}>
                        either email or password is incorrect
                    </h2>}
                </div>
            </div>
        </div>
    )
}


export default Homepage