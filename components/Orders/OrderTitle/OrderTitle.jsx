import { useState, useRef } from "react";
import ThisOrderDescription from "../ThisOrderDescription/ThisOrderDescription";
import styles from "./OrderTitle.module.css"
import { useMediaQuery } from "react-responsive"

const OrderTitle = ({ orders, isHistory }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 480px)'})

    const elemRef = useRef()
    const [activeIndex, setActiveIndex] = useState(null)

    const onHandleVisible = (idx) => {
        idx === activeIndex ? setActiveIndex(null) : setActiveIndex(idx)
    }

    return (
        <ul className={styles.orderList}>
            {orders.map((order, index) => (
                <li className={styles.ordersItemHeader} onClick={() => onHandleVisible(index)} key={order.id}>
                    <div className={styles.containerHeader}>
                        <div>
                            <p className={styles.orderDescrSubtitle}>Номер заказа</p>
                            <div className={styles.statusWrapper}>
                                <p className={styles.numberOfOrder}>№ {order.id}</p>
                                {!isHistory &&
                                    <p>{order.status}
                                    <style jsx>{`
                                        p {
                                            background-color: ${order.status === 'В работе' ? '#61A430;' : order.status === 'Отменён' ? '#E50029;' : '#fff2cc;'}
                                            font-family: 'Golos';
                                            font-size: 16px;
                                            line-height: 120%;
                                            color: ${order.status === 'Ожидает оплаты' ? '#F8BD00;' : '#FFFFFF;'};
                                            border-radius: 4px;
                                            padding: 3px;
                                            height: 20px;
                                            display: flex;
                                            align-items: center;
                                            white-space: nowrap;
                                        }

                                        @media (max-width: 768px) {
                                            p {
                                                font-size: 14px;
                                            }
                                        }
                                    `}</style>
                                    </p>
                                }
                            </div>
                        </div>
                        <div className={styles.amountDataWrapper}>
                            {isHistory &&
                                <div>
                                    <p className={styles.orderDescrSubtitle}>Начислено</p>
                                    <div>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.94218 8.7771C3.74457 7.57053 2.29042 6.79101 0.570312 6.44474C1.57087 2.94835 4.5691 0.355677 8.17308 0.00955293C5.62402 2.8125 4.41898 6.10746 4.94218 8.7771ZM9.71531 0C13.4015 0.305128 16.4168 2.9317 17.4275 6.42108C15.678 6.74813 14.1645 7.54809 12.9365 8.7771C13.5601 6.12638 12.374 2.8125 9.71531 0Z" fill="#61A430"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.23005 7.02612C-1.04568 12.4941 3.14683 17.8783 8.78696 18C9.03806 12.6662 4.95767 8.73018 0.23005 7.02612ZM5.51657 7.61648C5.51602 4.77744 7.18212 2.15092 8.89453 0C8.91156 0 8.91156 0 8.92614 0C10.6758 2.10652 12.4706 4.7842 12.4706 7.61648C12.4706 9.59393 11.1427 11.9805 8.91156 11.9805C6.70679 11.9805 5.51657 9.52317 5.51657 7.61648ZM9.2002 18C14.8092 17.8755 19.0715 12.4863 17.7617 7.02612C13.0261 8.7104 8.94853 12.6726 9.2002 18Z" fill="#61A430"/>
                                        </svg>
                                        <span className={styles.bonusNumber}> +{order.bonus}</span>
                                    </div>
                                </div>
                            }
                            <div className={styles.amountWrapper}>
                                <p className={styles.orderDescr}>Итоговая сумма</p>
                                <p className={styles.totalOrderAmount}>{order.amount} ₽</p>
                            </div>
                            <div>
                                {!isHistory ? 
                                    <p className={styles.orderDescr}>Запланирована доставка</p>
                                :
                                    <p className={styles.orderDescr}>Дата доставки</p>
                                }  
                                <p className={styles.orderDate}>{order.data}</p>
                            </div>
                            <div className={activeIndex === index ? styles.orderArrowClose : styles.orderArrowOpen}>
                                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.75L6.5 7.25L12 1.75" stroke="#B0BCC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style={{maxHeight:`${elemRef.current?.offsetHeight}px`}} className={`${styles.contentDefault} ${activeIndex === index ? styles.contentActive : null}`}>
                        <div ref={elemRef}>
                            <ThisOrderDescription order={order} isHistory={isHistory}/>
                        </div>
                    </div>                        
                </li>
            ))}
        </ul>
    )
}

export default OrderTitle