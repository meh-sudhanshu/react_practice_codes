

import Button from '../../components/Button/Button'
import ItemCard from '../../components/ItemCard/ItemCard'
import styles from './homepage.module.css'


const Homepage = ()=>{

    const toDoItems = [
        {
            title:"Title 1",
            dueDate:"25-10-1998",
            desc: "Lorem ipsum, dolor sit amet consecteturn adipisicing elit. Quis voluptate maxime hic itaque voluptatem"
        },
        {
            title:"Title 2",
            dueDate:"25-10-1999",
            desc: "Lorem ipsum, dolor sit amet consecteturn adipisicing elit. Quis voluptate maxime hic itaque voluptatem"
        },
        {
            title:"Title 3",
            dueDate:"25-10-2000",
            desc: "Lorem ipsum, dolor sit amet consecteturn adipisicing elit. Quis voluptate maxime hic itaque voluptatem"
        },
        {
            title:"Title 4",
            dueDate:"25-10-2001",
            desc: "Lorem ipsum, dolor sit amet consecteturn adipisicing elit. Quis voluptate maxime hic itaque voluptatem"
        },
        {
            title:"Title 5",
            dueDate:"25-10-2002",
            desc: "Lorem ipsum, dolor sit amet consecteturn adipisicing elit. Quis voluptate maxime hic itaque voluptatem"
        }
    ]


    return(
        <div className={styles.main}>
            <Button text="Add An Item"/>
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