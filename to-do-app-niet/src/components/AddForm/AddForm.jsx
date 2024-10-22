


import styles from './add_form.module.css'
import { useState } from 'react'

const AddForm = (props)=>{
    const [title,setTile] = useState("")
    const [dueDate,setDueDate] = useState("")
    const [desc,setDesc] = useState("")
    const titleChangeHandler = (event)=>{
        console.log(event)
        setTile(event.target.value)
    }
    const descChangeHandler = (event)=>{
        setDesc(event.target.value)
    }

    const dateChangeHandler = (event)=>{
        setDueDate(event.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        const newItem = {
            title:title,
            dueDate:dueDate,
            desc:desc
        }
        console.log(newItem)
        setTile("")
        setDueDate("")
        setDesc("")
        props.updateItemList(newItem)
    }



    return(
        <div className={styles.main}>
            <form className={styles.add_form}>
            <input type="text" className={styles.title} 
                placeholder='Enter Title'
                onChange={titleChangeHandler}
                value={title}
            />
            <input type="date" className={styles.dueDate} 
                placeholder='Enter Due Date'
                onChange={dateChangeHandler}
                value={dueDate}
            />
            <input type="textarea" className={styles.desc}
                placeholder='Enter Description'
                onChange={descChangeHandler}
                value={desc}
            />
            <button onClick={submitHandler}>Save</button>
            <button onClick={()=>{
                window.location.reload()
            }}>Discard</button>
        </form>
        </div>
    )
}

export default AddForm