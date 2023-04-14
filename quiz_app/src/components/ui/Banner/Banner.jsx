import { useState } from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import classes from './banner.module.css'

import data from '../../../data/data.json'

const Banner = ()=>{

    const [itemValue,setItemValue] = useState(0)

    function toggleItemValue(value){
        setItemValue(value)
    }

    const [showEvaluateButton,setShowEvaluateButton] = useState(true)
    const [showResult,setShowResult] = useState(false)
    const [score,setScore] = useState(0)

    const [flag,setFalg] = useState(0)
    function toggleFlag(){
        setFalg(flag+1)
        console.log(flag)
    }

    function resultHandler (value){
        setShowResult(true)
    }

    function scoreHandler (value){
        setScore(value)
    }
    const Container =()=>{
        return(
            <div className={classes.ctn}>
                <div className={classes.wrapper}>
                    <Card que="Who is father of our nation ?" options={data['Who is father of our nation ?']}
                    scoreHandler={scoreHandler}
                    toggleFlag={toggleFlag}/>
                    <Card   toggleFlag={toggleFlag}
                    scoreHandler={scoreHandler}
                        que="what color is the leaves ?" options={data['what color is the leaves ?']}
                    />
                    <Card toggleFlag={toggleFlag}
                    scoreHandler={scoreHandler}
                        que="what color is the sky ?" options={data['what color is the sky ?']}
                    />
                </div>
                <div className={classes.wrapper}>
                <Card   toggleFlag={toggleFlag}
                scoreHandler={scoreHandler} 
                        que="what color is the sky?" options={data['what color is the sky?']}
                    />
                    <Card   toggleFlag={toggleFlag}
                    scoreHandler={scoreHandler}
                        que="what color is the fire ?" options={data['what color is the fire ?']}
                    />
                </div>
                {flag===5 && <button className={classes.e_btn} onClick={resultHandler}
                >Show Results</button>
                    
                }
                {showResult && <div className={classes.result_ctn}>
                    <h2>You Have answered {score}/5 correctly</h2>
                </div>}
            </div>
        )
    }



    return(
        <div className={classes.banner}>
            {itemValue === 0 && <Button value="Start Quiz" toggleItemValue={toggleItemValue}/>}
            {itemValue === 1 && <Container/> }
        </div>
    )
}


export default Banner