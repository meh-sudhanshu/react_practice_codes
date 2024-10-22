
import style from './button.module.css'

const Button = (props)=>{

    const clickHandler = ()=>{
        props.toggleFormState()
    }

    return(
        <button className={style.button}
            onClick={clickHandler}
        >{props.text}</button>
    )
}


export default Button