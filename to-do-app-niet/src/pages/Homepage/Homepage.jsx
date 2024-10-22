

import { useState } from 'react'
import Button from '../../components/Button/Button'
import ItemCard from '../../components/ItemCard/ItemCard'
import styles from './homepage.module.css'
import AddForm from '../../components/AddForm/AddForm'


const Homepage = ()=>{
    const [isFormSet,setIsFormSet] = useState(false)
    const [toDoItems,setToDoItems] = useState([])

    const toggleFormState = ()=>{
        setIsFormSet(!isFormSet)
    }
    const updateItemList = (newItem)=>{
        setToDoItems([...toDoItems,newItem])
        setIsFormSet(false)
    }

    return(
        <div className={styles.main}>
            {isFormSet && <AddForm updateItemList={updateItemList}/>}
            <Button text="Add An Item" 
                toggleFormState={toggleFormState}
            />
            <br />
            <div className={styles.card_ctn}>
                {
                    toDoItems.map(
                        item => <ItemCard item={item}/>
                    )
                }
            </div>
        </div>
    )
}

export default Homepage