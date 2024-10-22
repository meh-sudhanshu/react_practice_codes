import styles from './data_Card.module.css'


const DataCard = (props)=>{
    return(
        <div className={styles.card}>
            <div className="title_ctn">
                <h2>{props.title}</h2>
            </div>
            <div className="due_date_ctn">
                <h2>Due date:{props.dueDate}</h2>
            </div>
            <div className="desc_ctn">
               {props.desc}
            </div>
            <div className="util_btn_ctn">
                <button
                    style={{margin:"10px"}}
                >Mark As Complete</button>
                <button
                    style={{margin:"10px"}}
                >Discard</button>
            </div>
        </div>
    )
}

export default DataCard