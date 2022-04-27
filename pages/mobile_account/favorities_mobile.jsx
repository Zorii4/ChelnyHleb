import { useState, useEffect } from "react"
import { fetchFavorities } from "../../FAKE_API/goods"
import GoodCard from "../../components/GoodCard"
import styles from "../../styles/Favorities.module.css"

const FavoritiesMobile = () => {

    const [favorities, setFavorities] = useState()

    useEffect (()=> {
        setFavorities(fetchFavorities())
    }, [])

    if (!favorities) return (<p>loading</p>)

    return (
        <ul className={styles.cardWrapper}>
            {favorities.map((item) => (
                <li className={styles.cardItem} key={item.id}>
                    <GoodCard good={item} />
                </li>
            ))}
        </ul>    
    )
}

export default FavoritiesMobile