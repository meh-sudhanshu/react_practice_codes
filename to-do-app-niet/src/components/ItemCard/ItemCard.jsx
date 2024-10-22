
import style from './item_Card.module.css'
const ItemCard = (props)=>{
    console.log(props)
    return(
        <div className={style.card}>
            <div className={style.top}>
                <h2 className={style.title}>{props.item.title}</h2>
            </div>
            <div className={style.middle1}>
                <h2 className={style.dueDate}>{props.item.dueDate}</h2>
            </div>
            <div className={style.middle2}>
                <p className={style.desc}>
                   {props.item.desc}
                </p>
            </div>
            <div className={style.bottom}>
                <button className={style.discard_btn}>Discard</button>
                <button className={style.complete_btn}>Mark As Complete</button>
            </div>
        </div>
    )
}


export default ItemCard