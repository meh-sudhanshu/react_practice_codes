
import { useState } from 'react'
import DataCard from '../components/DataCard/DataCard'
import styles from './homepage.module.css'
import AddItemForm from '../components/AddItemForm/AddItemForm'
const Homepage = ()=>{
    const [toDoData,setToDoData] = useState([])
    const addAnItem = (newItem)=>{
        setToDoData([...toDoData,newItem])
        setIsFormVisible(false)
    }
    const [isFormVisible,setIsFormVisible] = useState(false)
    return(
        <div className={styles.main}>
            {isFormVisible && <AddItemForm
                addAnItem={addAnItem}
            />}
            <button
                style={{margin:"20px"}}
                onClick={()=>{
                    setIsFormVisible(true)
                }}
            >Add An Item</button>
            <div className={styles.data_card_ctn}>
                {
                    toDoData.map(item=><DataCard 
                        key={item.id}
                        dueDate={item.dueData}
                        desc={item.desc}
                        title={item.title}/>)
                }
            </div>
        </div>
    )
}
export default Homepage