import { Goods } from "../types/goods"
import styles from "../styles/LittleGoodCard.module.css"
import Image from 'next/image'
import { useDispatch } from "react-redux"
import { addFavorities } from "../store/reducers/goodsReducer"
import { useMediaQuery } from "react-responsive"

interface GoodProps {
    good: Goods
    addFavorities: (good:Goods) => void
  }

const LittleGoodCard: React.FC <GoodProps> = ({ good }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 480px)'})

    const [intiger, float] = good.newprice.toString().split('.')
    const dispatch = useDispatch()
    
    const handleAddFav = (good:Goods) => {
        return dispatch(addFavorities(good))
    }
 
    return (
        <div>
            <div className={styles.discountLikeContainer}>
            {good.discount ?
                (<div className={styles.discountProcent}>
                    <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M-0.0012579 0.984474L9.96484 0.984474V2.4082L-0.0012579 2.4082V0.984474Z" fill="white"/>
                    </svg>
                    {good.discount}%
                </div>) : <div></div>}
                <button className={styles.likeButton} onClick={()=>handleAddFav(good)}>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {good.like ? 
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.08 1.33203C14.7258 1.33203 16.5 3.81536 16.5 6.12786C16.5 10.822 9.13417 14.6654 9 14.6654C8.86583 14.6654 1.5 10.822 1.5 6.12786C1.5 3.81536 3.27417 1.33203 5.92 1.33203C7.4325 1.33203 8.42583 2.0862 9 2.75786C9.57417 2.0862 10.5675 1.33203 12.08 1.33203Z" fill="#E50029" stroke="#E50029" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        : 
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.08 1.33203C14.7258 1.33203 16.5 3.81536 16.5 6.12786C16.5 10.822 9.13417 14.6654 9 14.6654C8.86583 14.6654 1.5 10.822 1.5 6.12786C1.5 3.81536 3.27417 1.33203 5.92 1.33203C7.4325 1.33203 8.42583 2.0862 9 2.75786C9.57417 2.0862 10.5675 1.33203 12.08 1.33203Z" stroke="#B3BFCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
                    </svg>
                </button>
            </div>
            {isMobile ? <Image src={good.image} width={98} height={68} alt=""></Image> :
                        <Image src={good.image} width={170} height={113} alt=""></Image>}
            <div className={styles.bottomWrapper}>
                <h4 className={styles.goodCardTitle}>{good.title}</h4>
                <div className={styles.goodOldPrice}>{good.oldprice}₽</div>
                <div className={styles.goodBasketContainer}>
                    <div className={styles.goodNewPiceWrapper}>
                        <div className={styles.goodNewPriceRub}>{intiger}</div>
                        <div className={styles.goodNewPriceKop}>{float}₽</div>
                    </div>
                    <button className={styles.orderButton}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.97388 5.51953L4.41805 3.01953H2.81055" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.44294 12.3612L4.97461 5.51953H15.5229C16.0538 5.51953 16.4488 6.0087 16.3379 6.52786L15.0863 12.3612C15.0038 12.7454 14.6646 13.0195 14.2713 13.0195H7.25711C6.86461 13.0195 6.52544 12.7454 6.44294 12.3612Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.3984 15.7496C14.15 15.7496 13.9484 15.9512 13.9508 16.1996C13.9508 16.448 14.1524 16.6496 14.4008 16.6496C14.6492 16.6496 14.8508 16.448 14.8508 16.1996C14.8496 15.9512 14.648 15.7496 14.3984 15.7496" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.56305 15.7496C7.31465 15.7496 7.11305 15.9512 7.11545 16.1996C7.11425 16.448 7.31585 16.6496 7.56425 16.6496C7.81265 16.6496 8.01425 16.448 8.01425 16.1996C8.01425 15.9512 7.81265 15.7496 7.56305 15.7496" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div> 
            </div>  
        </div>
    )
    
}

export default LittleGoodCard