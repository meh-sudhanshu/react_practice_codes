import Button from "../components/Button/Button"
import React, { useEffect, useState } from "react"
import './homepage.css'
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary"

const HomePage =()=>{
    const [number,setNumber] = useState(0)
    const [isNumberOutOfItsBoundary,setIsNumberOutOfItsBoundary] 
        = useState(false)


    useEffect(()=>{
        console.log("use effect executed !!")
        
    },[isNumberOutOfItsBoundary])

    const operationTrigger = (updatedValue)=>{
        if(updatedValue < -10 || updatedValue > 10){
            setIsNumberOutOfItsBoundary(true)
            return
        }else{
            setIsNumberOutOfItsBoundary(false)
        }
        setNumber(updatedValue)
        console.log(number)
    }


    const closeErrorBoundary = ()=>{
        setIsNumberOutOfItsBoundary(false)
    }

    return(
        <div className="main">
            {isNumberOutOfItsBoundary === true && <ErrorBoundary
                closeErrorBoundary = {closeErrorBoundary}
            />}
            <h2>{number}</h2>
            <Button text="Increase" 
                    operationTrigger = {operationTrigger}
                    number = {number}
            
            />
            <Button text = "Decrease"
             operationTrigger = {operationTrigger}
             number = {number}
            />
        </div>
    )
}

export default HomePage