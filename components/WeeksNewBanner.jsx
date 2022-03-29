import { useEffect, useState } from "react"
import { fetchAllGoods } from "../FAKE_API/goods"
import { useTypedSelector } from "../hooks/useTypeSelector"
import styles from "../styles/WeeksNewBanner.module.css"
import LittleGoodCard from "./LittleGoodCard"

const WeeksNewBanner = () => {

    // const {goods} = useTypedSelector(state => state.goods)  
    const [goods, setGoods] = useState([])

    useEffect(()=> {
      setGoods(fetchAllGoods())
    },[])
    
    return (
        <div className={styles.container}>
            <ul className={styles.cardWrapper}>
                {goods.map ((item) => 
                    item.new && (
                        <li key={item.id} className={styles.cardItem}>
                        <LittleGoodCard good={item}/>
                    </li>                            
                ))}  
            </ul>             
        </div>
    )
}

export default WeeksNewBanner