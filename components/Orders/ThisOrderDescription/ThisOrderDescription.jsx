import Image from 'next/image'
import styles from "./ThisOrderDescription.module.css"

const ThisOrderDescription = ({ order, isHistory }) => {
    return (
        <div className={styles.puchaseDescriptionContainer}>                     
            <ul className={styles.leftWrpapper}>
                {order.consist.map ((item)=>(
                    <li className={styles.puchaseItem} key={item.id}>
                        <Image src={item.basketImg} width={94} height={66} alt=""></Image>
                        <p className={styles.puchaseItemTitle}>{item.title}</p>
                        <div className={styles.puchaseQuantity}>{item.consist.length} шт</div>
                        <div className={styles.puchaseAmount}>{order.amount} ₽</div>
                    </li>
                ))}
            </ul>
            <div className={styles.descriptionList}>
                <div className={styles.deliveryAdressWrapper}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.84519 13.3127L13.9072 2.35371C14.2052 1.54971 13.4222 0.766715 12.6182 1.06471L1.65419 5.12971C0.730187 5.47271 0.803187 6.80272 1.75819 7.04272L6.69819 8.28371L7.93119 13.2077C8.17119 14.1637 9.50219 14.2367 9.84519 13.3127V13.3127Z" stroke="#304250" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className={styles.addrWrapper}>
                        <p className={styles.deliveryDate}>Доставка {order.data}</p>
                        <p className={styles.deliveryDestination}>{order.address}</p>
                    </div>                             
                </div>
                <div className={styles.deliveryAmountWrapper}>
                    <ul>
                        <li className={styles.puchaseItemAmount}>
                            <span className={styles.puchaseItemSubTitle}>Товары</span>
                            <span className={styles.puchaseItemNumber}>{order.amount} ₽</span>
                        </li>
                        <li className={styles.puchaseItemAmount}>
                            <span className={styles.puchaseItemSubTitle}>Доставка</span>
                            <span className={styles.puchaseItemNumber}>{order.amount} ₽</span>
                        </li>
                        <li className={styles.puchaseItemAmount}>
                            <span className={styles.puchaseItemSubTitle}>Баллы за покупку</span>
                            <span className={styles.puchaseItemNumber}>
                                11&nbsp;  
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.84565 6.82663C2.91418 5.88819 1.78317 5.2819 0.445312 5.01258C1.22352 2.29316 3.55548 0.276637 6.35857 0.00743006C4.37598 2.1875 3.43872 4.75025 3.84565 6.82663ZM7.55809 0C10.4251 0.237322 12.7704 2.28021 13.5564 4.99417C12.1958 5.24855 11.0186 5.87074 10.0635 6.82663C10.5485 4.76496 9.62598 2.1875 7.55809 0Z" fill="#B0BCC9"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.178928 5.46476C-0.813305 9.71759 2.44754 13.9054 6.83431 14C7.0296 9.85152 3.85596 6.79014 0.178928 5.46476ZM4.29067 5.92393C4.29024 3.71579 5.5861 1.67294 6.91797 0C6.93121 0 6.93121 0 6.94255 0C8.30337 1.6384 9.69935 3.72104 9.69935 5.92393C9.69935 7.46195 8.66657 9.31813 6.93121 9.31813C5.2164 9.31813 4.29067 7.40691 4.29067 5.92393ZM7.15571 14C11.5183 13.9031 14.8334 9.71158 13.8147 5.46476C10.1314 6.77475 6.95997 9.85645 7.15571 14Z" fill="#B0BCC9"/>
                                </svg>
                            </span>
                        </li>
                        <li className={styles.puchaseItemTotal}>
                            <span className={styles.totalAmountTitle}>Итого</span>
                            <span className={styles.totalAmountNumber}>{order.amount} ₽</span>
                        </li>
                        {!isHistory ? 
                            <li className={styles.puchaseItemBtns}>
                                <button className={styles.confirmBtn}>Оплатить</button>
                                <button className={styles.cancelBtn}>Отменить</button>
                            </li>
                        :
                            <li className={styles.puchaseItemBtns}>
                                <button className={styles.confirmBtn}>Повторить заказ</button>
                            </li>
                        }    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ThisOrderDescription