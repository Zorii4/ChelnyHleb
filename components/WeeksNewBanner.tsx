import { useTypedSelector } from "../hooks/useTypeSelector"
import styles from "../styles/WeeksNewBanner.module.css"
import LittleGoodCard from "./LittleGoodCard"

const WeeksNewBanner: React.FC = () => {

    const {goods} = useTypedSelector(state => state.goods)  
    return (
        <div className={styles.container}>
            <ul className={styles.cardWrapper}>
                {goods.map ((item) => (
                    <li className={styles.cardItem}>
                        <LittleGoodCard key = {item.id} good = {item}/>
                    </li>           
                ))}  
            </ul>
             
        </div>
    )
}

export default WeeksNewBanner