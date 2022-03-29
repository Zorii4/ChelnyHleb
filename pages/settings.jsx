import { useState, useEffect } from "react"
import { fetchOneUser } from "../FAKE_API/goods"
import styles from "../styles/Settings.module.css"
import Link from "next/link"

const UserSettings = () => {
    const [user, setUser] = useState()

    useEffect (()=> {
        setUser(fetchOneUser())
    })
    
    if (!user) return <p>loading</p>

    return (
        <> 
            <h1 className={styles.mainTitle}>Мои настройки</h1>
            <div className={styles.mainContainer}>
                <div>
                    <div className={styles.userBonusCardContainer}>
                        <div className={styles.bonusNumberWrapper}>
                            <p className={styles.bonusNumber}>{user.bonus}</p>
                            <span className={styles.bonusNumberText}>Бонусных баллов</span>
                        </div>
                    <p className={styles.userBonusCardName}>{user.name}</p>
                    <span className={styles.userBonusCardNumber}>{user.cardNumber}</span>
                    </div>
                    <div className={styles.userLinksContainer}>
                        <ul>
                            <li><Link href="/thisOrder"><a>Текущий заказ</a></Link></li>
                            <li><Link href="/historyOrder"><a>История заказов</a></Link></li>
                            <li><Link href="/favorities"><a>Избранное</a></Link></li>
                            <li><Link href="/mySettings"><a>Мои настройки</a></Link></li>
                        </ul> 
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        
        </>
    )
}

export default UserSettings