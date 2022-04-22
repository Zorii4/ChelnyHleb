import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from "./BasketListItem.module.css"

const BasketListItem = ({ props, onDelete }) => {

    const [quantity, setQuantity] = useState(0)
    let [integer, float] = ((props.newprice*quantity).toFixed(2)).split('.')

    return (
        <li className={styles.container}>
            <div className={styles.imageWrapper}>
                {props.discount &&
                    <div className={styles.discountProcent}>
                    <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M-0.0012579 0.984474L9.96484 0.984474V2.4082L-0.0012579 2.4082V0.984474Z" fill="white"/>
                    </svg>
                    {props.discount}%
                </div>}
                <Image src={props.basketImg} width={94} height={66} alt=""></Image>
            </div>
            <h4 className={styles.basketTitle}>{props.title}</h4>
            <button>like</button>
            <p className={styles.basketPrice}>{props.newprice} ₽ / 1 шт</p>
            <div className={styles.basketQuantityWrapper}>
                <button onClick={() => setQuantity(prev => prev - 1)} disabled={quantity <= 0} className={styles.basketQuantityBtn}>-</button>
                <span className={styles.basketQuantityNumber}>{quantity}</span>
                <button onClick={() => setQuantity(prev => prev + 1)} className={styles.basketQuantityBtn}>+</button>
            </div>
            <div className={styles.totalPriceContainer}>
                {props.discount && 
                    <div className={styles.totalOldPrice}>{props.oldprice} ₽</div>
                }
                <div className={styles.totalPriceWrapper}>
                    <div className={styles.totalPriceRub}>{integer}</div>
                    <div className={styles.totalPriceKop}>{float}₽</div>
                </div>                
            </div>                           
            <button onClick={() => onDelete(props.id)} className={styles.deleteBasketBtn}>X</button>
        </li>        
    )
}

export default BasketListItem