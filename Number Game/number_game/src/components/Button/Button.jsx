



const Button = (props)=>{

    const operationHandler = ()=>{
        if(props.text === "Increase"){
            var currentNumber = props.number
            currentNumber = currentNumber+1
            props.operationTrigger(currentNumber)
        }
        else if(props.text === "Decrease"){
            var currentNumber = props.number
            currentNumber = currentNumber-1
            props.operationTrigger(currentNumber)
        }
    }



    return(
        <button onClick={operationHandler}>{props.text}</button>
    )
}


export default Button