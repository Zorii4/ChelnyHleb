import { useState, useEffect } from "react"
import { fetchOneUser } from "../../FAKE_API/goods"
import styles from "./MobileAccount.module.css"
import Link from "next/link"

const MobileAccount = () => {
    const [user, setUser] = useState()

    useEffect (()=> {
        setUser(fetchOneUser())
    },[])
    
    if (!user) return <p>loading</p>

    return (
        <>
            <div className={styles.userBonusCardContainer}>
                <div className={styles.bonusNumberWrapper}>
                    <p className={styles.bonusNumber}>{user.bonus}</p>
                    <span className={styles.bonusNumberText}>Бонусных баллов</span>
                </div>
                <p className={styles.userBonusCardName}>{user.name}</p>
                <span className={styles.userBonusCardNumber}>{user.cardNumber}</span>
            </div>
            <ul className={styles.linksWrapper}>
                <li className={styles.linksItem}>
                    <Link href="/mobile_account/thisorder">
                        <a className={styles.accountLink}>
                            Текущие заказы
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="#8797A4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </Link>
                </li>
                <li className={styles.linksItem}>
                    <Link href="/mobile_account/historyorder">
                        <a className={styles.accountLink}>
                            История заказов
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="#8797A4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </Link>
                </li>
                <li className={styles.linksItem}>
                    <Link href="/mobile_account/favorities">
                        <a className={styles.accountLink}>
                            Избранное
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="#8797A4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </Link>
                </li>
                <li className={styles.linksItem}>
                    <Link href="/mobile_account/settings">
                        <a className={styles.accountLink}>
                            Мои настройки
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="#8797A4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </Link>
                </li>
            </ul>
        </> 
    )
}

export default MobileAccount