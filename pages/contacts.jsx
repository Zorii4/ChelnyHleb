import { useEffect, useState  } from "react"
import styles from "../styles/Contacts.module.css"
import { fetchShops } from "../FAKE_API/goods"
import Link from "next/link"


const Contacts = () => {

const [shops, setShops] = useState()

useEffect (()=> {
    setShops(fetchShops())
},[])

if(!shops) return (<p>loading</p>)


    return (
        <>
        <h1 className={styles.title}>Контакты</h1>
        <div className={styles.mainContainer}>
            <div className={styles.addressWrapper}>
                <h2 className={styles.subTitle}>Магазины</h2>
                <table className={styles.addressTable}>
                    <thead>
                        <tr>
                            <th scope="col" className={styles.tableHeaderOne}>Район</th>
                            <th scope="col" className={styles.tableHeaderTwo}>Комплекс</th>
                            <th scope="col" className={styles.tableHeaderThree}>Адрес магазина</th>
                            <th scope="col" className={styles.tableHeaderFour}>Мудрый пекарь</th>
                            <th scope="col" className={styles.tableHeaderFive}>Часы работы</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shops.map((item) => (
                            <tr scope="row">
                                <td className={styles.tableRow}>{item.district}</td>
                                <td className={styles.tableRow}>{item.complex}</td>
                                <td className={styles.tableRow}>{item.address}</td>
                                <td className={styles.tableRow}>{item.smartBaker ? 
                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3346 1.3335L5.0013 8.66683L1.66797 5.3335" stroke="#8797A4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                : ""}
                                </td>
                                <td className={styles.tableLastRow}>{item.workTime}</td>
                            </tr>   
                        ))}  
                    </tbody>      
                </table>
            </div>
            <div className={styles.feedBackWrapper}>
                <h2 className={styles.subTitle}>Связаться с нами</h2>
                <ul className={styles.mailsWrapper}>
                    <li className={styles.mailsItem}>
                        <p className={styles.mailsTitle}>Электронная почта</p>
                        <Link href="mailto:manager@chelny-hleb.ru">
                            <a className={styles.mailsLink}>manager@chelny-hleb.ru</a>
                        </Link>
                    </li>
                    <li className={styles.mailsItem}>
                        <p className={styles.mailsTitle}>Администратор сайта</p>
                        <Link href="mailto:admin@chelny-hleb.ru">
                            <a className={styles.mailsLink}>admin@chelny-hleb.ru</a>
                        </Link>
                    </li>
                    <li className={styles.mailsItem}>
                        <p className={styles.mailsTitle}>Контроль качества</p>
                        <Link href="mailto:control@chelny-hleb.ru">
                            <a className={styles.mailsLink}>control@chelny-hleb.ru</a>
                        </Link>
                    </li>
                    <li className={styles.mailsItem}>
                        <p className={styles.mailsTitle}>Отдел закупок</p>
                        <Link href="mailto:zakup@chelny-hleb.ru">
                            <a className={styles.mailsLink}>zakup@chelny-hleb.ru</a>
                        </Link>
                    </li>
                </ul>
                <h3 className={styles.feedbackSubTitle} >Оставить сообщение</h3>
                <ul>
                    <li>
                        <input className={styles.nameField} type="text" placeholder="Ваше имя"/>
                    </li>
                    <li className={styles.mailPhoneWrapper}>
                        <input className={styles.mailPhoneField} type="email" placeholder="Электронная почта" />
                        <input className={styles.mailPhoneField} type="tel" placeholder="Телефон" />
                    </li>
                    <li>
                        <select className={styles.feedbackSelect}>
                            <option>Тема</option>
                        </select>
                    </li>
                    <li><input className={styles.feedbackMessage} type="textarea" placeholder="Сообщение"/></li>
                </ul>
                <button className={styles.feedbackSendBtn}>Отправить</button>
            </div>
        </div>
        </>
    )
}

export default Contacts