
import { useState } from 'react'
import styles from './add_item_form.module.css'

const AddItemForm = (props)=>{

    const [title,setTitle] = useState("")
    const [date,setDate] = useState("")
    const [desc,setDesc] = useState("")

    const titleChangeHandler= (event)=>{
        setTitle(event.target.value)
    }
    const dateChangeHandler = (event)=>{
        setDate(event.target.value)

    }
    const descChangeHandler = (event)=>{
        setDesc(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        const newItem = {
            title:title,
            dueDate:date,
            desc:desc
        }
        props.addAnItem(newItem)
    }
    return(
        <form className={styles.add_form}>
            <input type="text" placeholder='Enter Title' 
                onChange={titleChangeHandler}
            />
            <input type="date" 
                onChange={dateChangeHandler}
            />
            <input type="textarea"  placeholder='enter description'
                onChange={descChangeHandler}
            />
            <button onClick={submitHandler}>Add</button>
            <button>Discard</button>
        </form>
    )
}

export default AddItemForm