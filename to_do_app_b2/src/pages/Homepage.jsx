
import DataCard from '../components/DataCard/DataCard'
import styles from './homepage.module.css'
const Homepage = ()=>{

    const toDoData = [
        {
            title:"The Fault In Our Stars",
            dueData:"25-10-2025",
            desc:"Very good bok, please read fater getting a job !!"
        },
        {
            title:"Art Of lying",
            dueData:"25-10-2025",
            desc:"Very good bok, please read fater getting a job !!"
        },
        {
            title:"The alone ranger",
            dueData:"25-10-2025",
            desc:"Very good bok, please read fater getting a job !!"
        },
        {
            title:"vucdHCVHD",
            dueData:"25-10-2025",
            desc:"Very good bok, please read fater getting a job !!"
        },
        {
            title:"The Fault In Our Stars",
            dueData:"25-10-2025",
            desc:"Very good bok, please read fater getting a job !!"
        },
        {
            title:"The Fault In Our Stars",
            dueData:"25-10-2025",
            desc:"Very good bok, please read fater getting a job !!"
        }

    ]


    return(
        <div className={styles.main}>
            <button
                style={{margin:"20px"}}
            >Add An Item</button>
            <div className={styles.data_card_ctn}>
                {
                    toDoData.map(item=><DataCard 
                        dueDate={item.dueData}
                        desc={item.desc}
                        title={item.title}/>)
                }
            </div>
        </div>
    )
}
export default Homepage