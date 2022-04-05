import styles from "./Account.module.css"
import { useState, useEffect } from "react"
import { fetchOneUser } from "../../FAKE_API/goods"
import Link from "next/link"
import { ActiveLink } from "../ActiveLink"

const AccountLayout = ({ children }) => {
    const [user, setUser] = useState()

    useEffect (()=> {
        setUser(fetchOneUser())
    })
    
    if (!user) return <p>loading</p>

    return (
        <> 
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
                            <li className={styles.accountListItem}>
                                <ActiveLink href="/account/thisorder" defaultClassName={styles.accountLink} activeClassName={styles.activeLink}>
                                    <a className={styles.accountLink}>Текущий заказ</a>
                                </ActiveLink>
                            </li>
                            <li className={styles.accountListItem}>
                                <ActiveLink href="/account/historyorder" defaultClassName={styles.accountLink} activeClassName={styles.activeLink}>
                                    <a className={styles.accountLink}>История заказов</a>
                                </ActiveLink>
                            </li>
                            <li className={styles.accountListItem}>
                                <ActiveLink href="/account/favorities" defaultClassName={styles.accountLink} activeClassName={styles.activeLink}>
                                    <a className={styles.accountLink}>Избранное</a>
                                </ActiveLink>
                            </li>
                            <li className={styles.accountListItem}>
                                <ActiveLink href="/account/settings" defaultClassName={styles.accountLink} activeClassName={styles.activeLink}>
                                    <a className={styles.accountLink}>Мои настройки</a>
                                </ActiveLink>
                            </li>
                        </ul> 
                    </div>
                </div>
                <div>{children}</div>
            </div>
        </>
    )
}

export default AccountLayout