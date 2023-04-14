

import classes from './button2.module.css'

import { useState } from 'react'

const Button2 =(props)=>{

    const [isSelected,setIsSelected] = useState(false)
    const [score,setScore] = useState(0)
    const [count,setCount] = useState(0)
    function optionClickHandler (){
        // setIsSelected(true)
        props.toggleFlag()
        if(count === 0){
            if(props.item === "Mahatma Gandhi"){
                setScore(score+1)
            }
            setCount(count+1)
        }
        if(count === 1){
            if(props.item === "Green"){
                setScore(score+1)
            }
            setCount(count+1)
        }
        if(count === 2){
            if(props.item === "Blue"){
                setScore(score+1)
            }
            setCount(count+1)
        }
        if(count === 3){
            if(props.item === "Blue"){
                setScore(score+1)
            }
            setCount(count+1)
        }
        if(count === 4){
            if(props.item === "Yellow"){
                setScore(score+1)
            }
            setCount(count+1)
        }
        console.log(score)
    }
    
    return(
        <>
            <button className={`${classes.option} ${ isSelected &&
            classes.selected}`}
            onClick={optionClickHandler}
            >{props.item}</button>
        
        </>
    )
}



export default Button2