import { fetchOneUser } from "../../FAKE_API/goods"
import { useState, useEffect } from "react"
import styles from "../../styles/Settings.module.css"
import AccountLayout from "../../components/AccountLayout/AccountLayout"
import Layout from '../../components/Layout'


const Settings = () => {

    const [user, setUser] = useState()

    useEffect (()=> {
        setUser(fetchOneUser())
    },[])
    
    if (!user) return <p>loading</p>

    return (
        <div style={{width: "100%"}}>
            <h1>Мои настройки</h1>
            <style jsx>{`
                h1 { font-family: 'Golos';
                    font-weight: normal;
                    font-size: 50px;
                    line-height: 110%;
                    color: #304250;
                    margin-bottom: 40px;}
            `}</style>
            <div className={styles.mainContainer}>
                <div className={styles.settingsContainer}>
                    <h3 className={styles.settingsTitle}>Мои данные</h3>
                    <div className={styles.settingsInputWrapper}>
                        <input className={styles.settingsInput} type="text" placeholder={user.name} />
                        <input className={styles.settingsInput} type="text" placeholder={user.name}/>                    
                    </div>
                    <h3 className={styles.settingsTitle}>Контакты</h3>
                    <div className={styles.settingsInputWrapper}>
                        <input className={styles.settingsInput} type="email" placeholder={user.email}/>
                        <input className={styles.settingsInput} type="tel" placeholder={user.phone}/>                    
                    </div>
                    <h3 className={styles.settingsTitle}>Смена пароля</h3>
                    <div className={styles.settingsInputWrapper}>
                        <input className={styles.settingsInput} type="password" placeholder="Новый пароль"/>
                        <input className={styles.settingsInput} type="password" placeholder="Повторите новый пароль"/>
                    </div>
                    <h3 className={styles.settingsTitle}>Уведомления</h3>
                    <div className={styles.settingsInputWrapperCheckbox}>
                        <div>
                            <input className={styles.inputCheckbox} type="checkbox" id="new"/>
                            <label htmlFor="new">Уведомления о новых товарах</label>                   
                        </div>
                        <div>
                            <input className={styles.inputCheckbox} type="checkbox" id="discount"/>
                            <label htmlFor="discount">Уведомления о скидках</label>
                        </div>
                        <div>
                            <input className={styles.inputCheckbox} type="checkbox" id="delivery"/>
                            <label htmlFor="delivery">Уведомление о доставке</label>
                        </div>
                    </div>
                    <div className={styles.settingsInputWrapper}>
                        <button className={styles.settingsSubmitBtn}>Отправить</button>
                        <button className={styles.settingsCancelBtn}>Отменить</button>
                    </div>
                </div>
                <div className={styles.addressWrapper}>
                    <h2 className={styles.addressSubtitle}>Избранные адреса</h2>
                    <div className={styles.addressContainer}>
                        <p className={styles.userAddress}>{user.address}</p>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="#8797A4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings

Settings.getLayout = function getLayout(page) {
    return (
      <Layout>
        <AccountLayout>{page}</AccountLayout>
      </Layout>
    )
}