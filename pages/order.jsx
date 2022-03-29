import styles from "../styles/Order.module.css"
import Link from "next/link"
import OrderAmount from '../components/OrderAmount/OrderAmount'
import { fetchBasket } from "../FAKE_API/goods"
import { useEffect, useState } from "react"

const Order = () => {

    const [goodsInBasket, setGoodsInBasket] = useState()

    useEffect(()=> {
        setGoodsInBasket(fetchBasket())
    },[])
  
    if(!goodsInBasket) return (<p>loading</p>)
  

    return (
        <>
            <h1 className={styles.mainTitle}>Оформление заказа</h1>
            <div className={styles.mainContainer}>  
                <div className={styles.leftPartOrderContainer}>
                    <h3 className={styles.subtitle}>Ваши данные</h3>
                    <div className={styles.inputLKWrapper}>
                        <input className={styles.inputLK} type="text" placeholder="Имя"/>
                        <input className={styles.inputLK} type="text" placeholder="Номер телефона"/>
                        <input className={styles.inputLK} type="text" placeholder="E-mail"/>
                    </div>
                    <span className={styles.LKText}>Создадим личный кабинет автоматически</span>
                    <div className={styles.deliveryLinkWrapper}>
                        <h3 className={styles.subtitle}>Доставка</h3>
                        <Link href="#">
                            <a className={styles.deliveryLink}>Изменить</a>
                        </Link>
                    </div>
                    <div className={styles.addressContainer}>
                        <div className={styles.dataAdressWrapper}>
                            <div className={styles.timeDelivery}>Time to delivery</div>
                            <div className={styles.addressDelivery}>Address to delivery</div>
                        </div>
                        <div className={styles.inputAddressContainer}>
                            <ul className={styles.inputAddressWrapper}>
                                <li><input className={styles.inputAddress} type="text" /></li>
                                <li><input className={styles.inputAddress} type="text" /></li>
                                <li><input className={styles.inputAddress} type="text" /></li>
                                <li><input className={styles.inputAddress} type="text" /></li>
                            </ul>
                            <div>
                                <input className={styles.inputComments} type="textarea"></input>
                            </div>
                        </div>
                    </div>
                    <h3 className={styles.subtitle}>Оплата</h3>
                    <div className={styles.bonusWrapper}>
                        <div className={styles.puchaseRadioWrapper}>
                            <input type="radio" id="puchase" />
                            <label className={styles.puchaseLabel} htmlFor="puchase">Оплата картой Visa, Mastercard, Мир</label> 
                        </div>
                        <div className={styles.puchaseCheckboxWrapper}>
                            <div>
                                <input type="checkbox" id="bonus" />
                                <label className={styles.puchaseBonusLabel}>Списать бонусы</label>
                            </div>
                            <div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.39392 7.80187C3.32937 6.72936 2.0368 6.03646 0.507812 5.72866C1.3972 2.62076 4.06229 0.316157 7.26582 0.00849149C5 2.5 3.92885 5.42885 4.39392 7.80187ZM8.6367 0C11.9133 0.271225 14.5936 2.60596 15.4919 5.70762C13.9369 5.99834 12.5915 6.70941 11.5 7.80187C12.0543 5.44567 11 2.5 8.6367 0Z" fill="#61A430"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.204489 6.24544C-0.929492 11.1058 2.79718 15.8919 7.81063 16C8.03383 11.2589 4.40682 7.76016 0.204489 6.24544ZM4.90362 6.77021C4.90313 4.24661 6.38411 1.91193 7.90625 0C7.92139 0 7.92139 0 7.93434 0C9.48957 1.87246 11.085 4.25262 11.085 6.77021C11.085 8.52794 9.90465 10.6493 7.92139 10.6493C5.9616 10.6493 4.90362 8.46504 4.90362 6.77021ZM8.17795 16C13.1637 15.8893 16.9524 11.099 15.7882 6.24544C11.5787 7.74257 7.95425 11.2645 8.17795 16Z" fill="#61A430"/>
                                </svg>
                                288
                            </div>                        
                        </div>
                    </div>
                    <span className={styles.backMoneyText}>Мы вернем деньги, если заказ будет на меньшую сумму</span>
                    <h3 className={styles.subtitle}>Если товара нет в наличии</h3>
                    <div className={styles.absenceContainer}>
                        <div className={styles.absenceInputWrapper}>
                            <input type="radio" id="absence1" />
                            <label className={styles.absenceRadioLabel} htmlFor="absence1">Заменить товар на аналогичный</label>
                        </div>
                        <div className={styles.absenceInputWrapper}>
                            <input type="radio" id="absence2" />
                            <label className={styles.absenceRadioLabel} htmlFor="absence2">Связаться по телефону для замены</label>
                        </div>
                        <div className={styles.absenceInputWrapper}>
                            <input type="radio" id="absence3" />
                            <label className={styles.absenceRadioLabel} htmlFor="absence3">Убрать из заказа</label>
                        </div>
                    </div>
                </div>
                <div>
                    <OrderAmount goodsInBasket={goodsInBasket}/>
                </div>
            </div>
        </>
    )
}

export default Order