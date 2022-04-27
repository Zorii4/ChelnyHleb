import { fetchOneUser } from "../../FAKE_API/goods"
import { useState, useEffect } from "react"
import styles from "../../styles/SettingsMobile.module.css"


const SettingsMobile = () => {

    const [user, setUser] = useState()

    useEffect (()=> {
        setUser(fetchOneUser())
    },[])
    
    if (!user) return <p>loading</p>


    return (
        <div>
            <div className={styles.wrapper}>
                <h2 className={styles.subtitle}>Адреса доставки</h2>
                <input className={styles.settingsInput} type="text" />
                <input className={styles.settingsInput} type="text" />
                <button className={styles.addNewAddressBtn}>Добавить новый</button>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.dataWrapper}>
                    <h2 className={styles.subtitle}>Мои данные</h2>
                    <input className={styles.settingsInput} type="text" placeholder="Имя"/>
                    <input className={styles.settingsInput} type="text" placeholder="Фамилия"/>
                </div>
                <div className={styles.dataWrapper}>
                    <h2 className={styles.subtitle}>Контакты</h2>
                    <input className={styles.settingsInput} type="email" placeholder="Почта"/>
                    <input className={styles.settingsInput} type="tel" placeholder="Телефон"/>
                </div>
                <div className={styles.dataWrapper}>
                    <h2 className={styles.subtitle}>Смена пароля</h2>
                    <input className={styles.settingsInput} type="password" placeholder="Новый пароль"/>
                    <input className={styles.settingsInput} type="password" placeholder="Повторите новый пароль"/>
                </div>
                <div className={styles.dataWrapper}>
                    <h2 className={styles.subtitle}>Уведомления</h2>
                    <div className={styles.checkboxWrapper}>
                        <input type="checkbox" id="new"/>
                        <label htmlFor="new">Уведомления о новых товарах</label>                   
                    </div>
                    <div className={styles.checkboxWrapper}>
                        <input type="checkbox" id="discount"/>
                        <label htmlFor="discount">Уведомления о скидках</label>
                    </div>
                    <div className={styles.checkboxWrapper}>
                        <input type="checkbox" id="delivery"/>
                        <label htmlFor="delivery">Уведомление о доставке</label>
                    </div>
                </div>
                <div className={styles.dataWrapper}>
                    <button className={styles.confirmBtn}>Подтвердить изменения</button>
                    <button className={styles.cancelBtn}>Отменить</button>
                </div>
            </div>
        </div>
    )
}

export default SettingsMobile