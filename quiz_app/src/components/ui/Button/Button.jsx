import classes from './button.module.css'



const Button =(props)=>{

    function executeHandler (){
        const value = props.value === "Start Quiz" ? 1 : 2
        props.toggleItemValue(value)
    }

    return(
        <button className={classes.btn}
         onClick={executeHandler}>{props.value}</button>
    )
}


export default Button