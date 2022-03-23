import { Goods } from "../types/goods"
import styles from "../styles/LittleGoodCard.module.css"
import Image from 'next/image'


interface GoodProps {
    good: Goods
  }

const LittleGoodCard: React.FC <GoodProps> = ({ good }) => {

    const [intiger, float] = good.newprice.toString().split('.')
 
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.discountLikeContainer}>
                <div className={styles.discountProcent}>
                    <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M-0.0012579 0.984474L9.96484 0.984474V2.4082L-0.0012579 2.4082V0.984474Z" fill="white"/>
                    </svg>
                    {good.discount}%
                </div>
                <button>Like</button>
            </div>
            <Image src={good.image} width={178} height={121}></Image>
            <h4 className={styles.goodCardTitle}>{good.title}</h4>
            <div className={styles.goodOldPrice}>{good.oldprice}₽</div>
            <div className={styles.goodBasketContainer}>
                <div className={styles.goodNewPiceWrapper}>
                    <div className={styles.goodNewPriceRub}>{intiger}</div>
                    <div className={styles.goodNewPriceKop}>{float}₽</div>
                </div>
                <button className={styles.orderButton}>

                </button>
            </div>   
        </div>
    )
    
}

export default LittleGoodCard