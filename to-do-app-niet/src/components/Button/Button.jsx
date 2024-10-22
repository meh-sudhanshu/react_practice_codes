
import style from './button.module.css'

const Button = (props)=>{
    return(
        <button className={style.button}>{props.text}</button>
    )
}


export default Button