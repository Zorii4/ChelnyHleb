import styles from "./OrderAmount.module.css"
import Link from "next/link"


const OrderAmount = ({goodsInBasket, address}) => {
    return (
        <div className={styles.puchaseWrapper}>
            <ul>
              <li className={styles.puchaseListItem}>
                <p className={styles.puchaseTitle}>Ваш заказ</p>
                <span className={styles.puchaseNumber}>{goodsInBasket.reduce((acc,good) => Math.round((acc+=good.weight)*100)/100,0)} кг</span>
              </li>
              <li className={styles.puchaseListItem}>
                <span className={styles.puchaseGoods}>Товары({goodsInBasket.length})</span>
                <span className={styles.puchaseNumber}>{goodsInBasket.reduce((acc,good) => Math.round((acc+=good.newprice)*100)/100,0)} ₽</span>
              </li>
              <li className={styles.puchaseListItem}>
                <span className={styles.puchaseDiscount}>Скидка</span>
                <span className={styles.puchaseNumber}>{goodsInBasket.reduce((acc,good) => Math.round((acc+=good.oldprice)*100)/100,0)} ₽</span>
              </li>
              <li className={styles.puchaseListItem}>
                <span className={styles.puchaseBonuses}>Вернется бонусов</span>
                <span className={styles.puchaseNumberBonus}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.39392 7.80187C3.32937 6.72936 2.0368 6.03646 0.507812 5.72866C1.3972 2.62076 4.06229 0.316157 7.26582 0.00849149C5 2.5 3.92885 5.42885 4.39392 7.80187ZM8.6367 0C11.9133 0.271225 14.5936 2.60596 15.4919 5.70762C13.9369 5.99834 12.5915 6.70941 11.5 7.80187C12.0543 5.44567 11 2.5 8.6367 0Z" fill="#61A430"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.204489 6.24544C-0.929492 11.1058 2.79718 15.8919 7.81063 16C8.03383 11.2589 4.40682 7.76016 0.204489 6.24544ZM4.90362 6.77021C4.90313 4.24661 6.38411 1.91193 7.90625 0C7.92139 0 7.92139 0 7.93434 0C9.48957 1.87246 11.085 4.25262 11.085 6.77021C11.085 8.52794 9.90465 10.6493 7.92139 10.6493C5.9616 10.6493 4.90362 8.46504 4.90362 6.77021ZM8.17795 16C13.1637 15.8893 16.9524 11.099 15.7882 6.24544C11.5787 7.74257 7.95425 11.2645 8.17795 16Z" fill="#61A430"/>
                  </svg>
                  37
                </span>
              </li>
              {address ? (
                <div>
                  <li className={styles.puchaseAdressWrapper}>
                  <div className={styles.deliveryWrapper}>
                    <p className={styles.deliveryTitle}>Доставка</p>
                    <span className={styles.puchaseNumber}>0 ₽</span>
                  </div>
                  <p className={styles.address}>Address to Delivery</p> 
                  <span className={styles.time}>Time to Delivery</span>
                  <Link href="#"><a className={styles.changeAddressLink}>Изменить</a></Link>                     
                  </li>
                  <li className={styles.kindOfDeliveryWrapper}>     
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 1.25L3.5 6.75L1 4.25" stroke="#304250" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={styles.freeDeliveryText}>Бесплатная доставка от Мудрого Пекаря</span>
                  </li>
              </div>
              ) : (
                <div className={styles.deliveryWrapper}>
                  <p className={styles.deliveryTitle}>Доставка</p>
                  <span className={styles.puchaseNumber}>0 ₽</span>
                </div>
              )}

              <li className={styles.puchaseListItem}>
                <p>Итого к оплате</p>
                <p className={styles.puchaseTotalAmount}>1270</p>
              </li>
              <li>
                <input className={styles.puchasePromo} placeholder="Промокод"></input>
              </li>
              <li>
                <button className={styles.puchaseButton}>Перейти к оформлению</button>
              </li>
            </ul>
        </div> 
    )
}

export default OrderAmount