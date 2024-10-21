
import styles from './errorBoundary.module.css'

const ErrorBoundary = (props)=>{

    const clickHandler = ()=>{
        console.log(props)
        props.closeErrorBoundary()
    }


    return(
        <div className={styles.error_boundary}>
            <button onClick = {clickHandler}>Close The OverLay</button>
        </div>
    )
}


export default ErrorBoundary